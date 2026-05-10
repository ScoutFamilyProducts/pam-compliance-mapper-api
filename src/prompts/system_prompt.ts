import { pamControlMatrix, PAMControl } from '../data/compliance_frameworks';
import { vendorCapabilities, VendorCapability } from '../data/vendor_capabilities';

export const SYSTEM_PROMPT = `You are a PAM compliance mapping assistant for The PAM Insider. Your role is strictly limited to analyzing PAM and IAM vendor capabilities against compliance framework requirements.

You must only answer questions about:
- How the selected vendors map to PAM and IAM compliance controls
- Gaps in compliance coverage based on the provided vendor list
- Recommendations for addressing compliance gaps using PAM and IAM tooling

You must refuse any question outside PAM compliance mapping with this exact response:
"This tool is scoped to PAM compliance mapping only. For other questions, visit thepaminsider.com or email thepaminsider@gmail.com"

You must only use the vendor capabilities data and compliance framework data provided in this prompt. Do not use outside knowledge about vendors or frameworks beyond what is provided here.

The data provided is curated from publicly available documentation and professional experience. It is assumed incomplete. Present findings with appropriate epistemic humility.

Always be vendor-neutral. Do not recommend one vendor over another beyond what the data shows.

Respond only in valid JSON matching the schema provided. No markdown, no preamble, no explanation outside the JSON structure.`;

export interface AnalysisRequest {
  vendors: string[];
  frameworks: string[];
}

export function buildUserPrompt(request: AnalysisRequest): string {
  const selectedVendors = vendorCapabilities.filter(v =>
    request.vendors.includes(v.vendorName)
  );

  const frameworkKeys = request.frameworks;
  const filteredControls = pamControlMatrix.map(control => {
    const filteredFrameworks: Record<string, any> = {};
    for (const fw of frameworkKeys) {
      if (control.frameworks[fw as keyof typeof control.frameworks]) {
        filteredFrameworks[fw] = control.frameworks[fw as keyof typeof control.frameworks];
      }
    }
    return {
      controlId: control.controlId,
      controlName: control.controlName,
      controlDescription: control.controlDescription,
      frameworks: filteredFrameworks,
      notes: control.notes
    };
  });

  const vendorList = request.vendors.join(', ');
  const frameworkList = request.frameworks.join(', ');

  return `Analyze the PAM compliance coverage for an organization using the following vendors: ${vendorList}

They want to understand their coverage against these frameworks: ${frameworkList}

VENDOR CAPABILITIES DATA:
${JSON.stringify(selectedVendors, null, 2)}

COMPLIANCE FRAMEWORK DATA:
${JSON.stringify(filteredControls, null, 2)}

Based strictly on the data above, provide a compliance gap analysis in this exact JSON structure:
{
  "summary": "2-3 sentence plain English summary of overall posture",
  "vendorCoverage": [{ "vendorName": "string", "controls": ["string"], "notes": "string" }],
  "gaps": [{ "controlId": "string", "controlName": "string", "frameworks": ["string"], "severity": "high|medium|low", "recommendation": "string" }],
  "strengths": [{ "controlId": "string", "controlName": "string", "coveredBy": ["string"] }],
  "recommendations": ["string"],
  "disclaimer": "This analysis is based on curated data that is assumed incomplete. Verify all findings against current vendor documentation."
}`;
}
