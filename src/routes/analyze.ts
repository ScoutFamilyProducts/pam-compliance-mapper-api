import { Router, Request, Response } from 'express';
import Anthropic from '@anthropic-ai/sdk';
import { SYSTEM_PROMPT, buildUserPrompt, AnalysisRequest } from '../prompts/system_prompt';
import { vendorCapabilities } from '../data/vendor_capabilities';

const router = Router();

// In-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 10;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

// Clean up old rate limit entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, RATE_LIMIT_WINDOW_MS);

interface VendorCoverageItem {
  vendorName: string;
  controls: string[];
  notes: string;
}

interface GapItem {
  controlId: string;
  controlName: string;
  frameworks: string[];
  severity: 'high' | 'medium' | 'low';
  recommendation: string;
}

interface StrengthItem {
  controlId: string;
  controlName: string;
  coveredBy: string[];
}

interface AnalysisResponse {
  summary: string;
  vendorCoverage: VendorCoverageItem[];
  gaps: GapItem[];
  strengths: StrengthItem[];
  recommendations: string[];
  disclaimer: string;
}

const validFrameworks = [
  'nist_800_53',
  'nist_800_171',
  'cmmc',
  'cis_v8',
  'pci_dss_401',
  'hipaa',
  'nist_csf_20'
];

router.post('/analyze-vendors', async (req: Request, res: Response) => {
  const clientIp = req.ip || req.socket.remoteAddress || 'unknown';

  // Rate limiting
  if (!checkRateLimit(clientIp)) {
    console.log(`[${new Date().toISOString()}] Rate limit exceeded for IP: ${clientIp}`);
    return res.status(429).json({
      success: false,
      error: 'Rate limit exceeded. Maximum 10 requests per minute.'
    });
  }

  const { vendors, frameworks } = req.body as AnalysisRequest;

  // Validation
  if (!vendors || !Array.isArray(vendors) || vendors.length === 0) {
    return res.status(400).json({
      success: false,
      error: 'vendors array is required and must not be empty'
    });
  }

  if (!frameworks || !Array.isArray(frameworks) || frameworks.length === 0) {
    return res.status(400).json({
      success: false,
      error: 'frameworks array is required and must not be empty'
    });
  }

  if (vendors.length > 50) {
    return res.status(400).json({
      success: false,
      error: 'vendors array cannot exceed 50 items'
    });
  }

  // Fuzzy match vendor names to actual vendors
  function matchVendor(submittedName: string): string | null {
    const normalizedInput = submittedName.toLowerCase().trim();

    for (const vendor of vendorCapabilities) {
      const vendorNameLower = vendor.vendorName.toLowerCase();

      // Exact match (case-insensitive)
      if (vendorNameLower === normalizedInput) {
        return vendor.vendorName;
      }

      // Check aliases (case-insensitive)
      if (vendor.aliases) {
        for (const alias of vendor.aliases) {
          if (alias.toLowerCase() === normalizedInput) {
            return vendor.vendorName;
          }
        }
      }

      // Check products (case-insensitive)
      for (const product of vendor.products) {
        if (product.toLowerCase() === normalizedInput) {
          return vendor.vendorName;
        }
      }
    }

    // Fuzzy matching: contains or contained-in
    for (const vendor of vendorCapabilities) {
      const vendorNameLower = vendor.vendorName.toLowerCase();

      // Input contains vendor name or vendor name contains input
      if (normalizedInput.includes(vendorNameLower) || vendorNameLower.includes(normalizedInput)) {
        return vendor.vendorName;
      }

      // Check aliases with contains matching
      if (vendor.aliases) {
        for (const alias of vendor.aliases) {
          const aliasLower = alias.toLowerCase();
          if (normalizedInput.includes(aliasLower) || aliasLower.includes(normalizedInput)) {
            return vendor.vendorName;
          }
        }
      }

      // Check products with contains matching
      for (const product of vendor.products) {
        const productLower = product.toLowerCase();
        if (normalizedInput.includes(productLower) || productLower.includes(normalizedInput)) {
          return vendor.vendorName;
        }
      }
    }

    return null;
  }

  // Match submitted vendors and skip unmatched ones silently
  const matchedVendors = new Set<string>();
  for (const submittedVendor of vendors) {
    const matched = matchVendor(submittedVendor);
    if (matched) {
      matchedVendors.add(matched);
    }
  }

  if (matchedVendors.size === 0) {
    return res.status(400).json({
      success: false,
      error: 'No valid vendors could be matched from the submitted list'
    });
  }

  // Use matched vendor names for the rest of the request
  const resolvedVendors = Array.from(matchedVendors);

  // Validate framework keys
  const invalidFrameworks = frameworks.filter(f => !validFrameworks.includes(f));
  if (invalidFrameworks.length > 0) {
    return res.status(400).json({
      success: false,
      error: `Invalid framework keys: ${invalidFrameworks.join(', ')}. Valid keys: ${validFrameworks.join(', ')}`
    });
  }

  try {
    const client = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY
    });

    const userPrompt = buildUserPrompt({ vendors: resolvedVendors, frameworks });

    console.log(`[${new Date().toISOString()}] Analyzing vendors: ${resolvedVendors.join(', ')} against frameworks: ${frameworks.join(', ')}`);

    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 8000,
      temperature: 0,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: userPrompt }]
    });

    // Extract and parse JSON from response
    const rawText = response.content[0]?.type === 'text' ? response.content[0].text : '';

    if (!rawText) {
      console.error(`[${new Date().toISOString()}] No text content in API response`);
      return res.status(503).json({
        success: false,
        error: 'Invalid response format from AI service'
      });
    }

    // Log raw response for debugging
    console.log(`[${new Date().toISOString()}] Raw Anthropic response:`, rawText.substring(0, 500));

    // Strip markdown code blocks if present
    const cleaned = rawText
      .replace(/```json\n?/g, '')
      .replace(/```\n?/g, '')
      .trim();

    // Find JSON object boundaries in case there is preamble text
    const jsonStart = cleaned.indexOf('{');
    const jsonEnd = cleaned.lastIndexOf('}');

    if (jsonStart === -1 || jsonEnd === -1) {
      console.error(`[${new Date().toISOString()}] No JSON found in response. Raw text:`, rawText);
      return res.status(503).json({
        success: false,
        error: 'No JSON object found in AI response'
      });
    }

    const jsonStr = cleaned.slice(jsonStart, jsonEnd + 1);

    let analysis: AnalysisResponse;
    try {
      analysis = JSON.parse(jsonStr);
    } catch (parseError) {
      console.error(`[${new Date().toISOString()}] JSON parse failed. Cleaned text:`, jsonStr.substring(0, 500));
      return res.status(503).json({
        success: false,
        error: 'Failed to parse analysis response'
      });
    }

    console.log(`[${new Date().toISOString()}] Analysis completed successfully`);

    return res.json({
      success: true,
      analysis
    });

  } catch (error: any) {
    console.error(`[${new Date().toISOString()}] Anthropic API error:`, error.message);

    // Never expose API key in error messages
    const safeErrorMessage = error.message?.includes('api_key')
      ? 'API configuration error'
      : error.message || 'Unknown error';

    return res.status(503).json({
      success: false,
      error: `AI service unavailable: ${safeErrorMessage}`
    });
  }
});

export { router as analyzeRouter };
