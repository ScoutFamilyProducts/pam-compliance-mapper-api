export interface VendorProduct {
  productId: string;
  productName: string;
  capabilities: string[];
  partialCapabilities: string[];
  notes: string | null;
  docsUrl: string | null;
  dependsOn?: string | null;
  addOnOf?: string | null;
}

export interface VendorCapability {
  vendorId: string;
  vendorName: string;
  products: VendorProduct[];
  isFreeware?: boolean;
}

export const vendorDataLastUpdated = "2026-05";

export const vendorCapabilities: VendorCapability[] = [
  {
    vendorId: "V-001",
    vendorName: "Delinea",
    products: [
      {
        productId: "V-001-P-001",
        productName: "Secret Server On-Premises",
        capabilities: ["PAM-005", "PAM-007", "PAM-008", "PAM-009", "PAM-010", "PAM-013", "PAM-015", "PAM-019", "PAM-020", "PAM-021", "PAM-022", "PAM-023", "PAM-024", "PAM-025", "PAM-026", "PAM-027", "PAM-029"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-030", "PAM-031"],
        notes: "Core enterprise PAM vault. On-premises deployment. Credential vaulting, Remote Password Changing (RPC — must be configured, not just available), discovery (AD, Unix, VMware, AWS accounts, GCP accounts, Entra ID), session recording (launcher-based only — direct connections not captured), access request workflows, checkout with time limits, RBAC and folder-based access control, immutable audit logging, break glass with auto-rotation on check-in, dual control approvals, heartbeat, SSH key management, ServiceNow integration. MFA for vault login via integrated IdP only — not step-up at secret level. Partial JIT via checkout with time limits and rotation on check-in — not true zero standing privilege. Azure Key Vault and AWS Secrets Manager integrations are Platform-only, not available in this product.",
        docsUrl: "https://docs.delinea.com/online-help/secret-server/start.htm"
      },
      {
        productId: "V-001-P-002",
        productName: "Secret Server Cloud",
        capabilities: ["PAM-005", "PAM-007", "PAM-008", "PAM-009", "PAM-010", "PAM-013", "PAM-015", "PAM-019", "PAM-020", "PAM-021", "PAM-022", "PAM-023", "PAM-024", "PAM-025", "PAM-026", "PAM-027", "PAM-029"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-030", "PAM-031"],
        notes: "SaaS deployment of Secret Server. Identical capability set to Secret Server On-Premises. 99.9% SLA. Does not have the microservice architecture of the Delinea Platform. MFA for vault login via integrated IdP only — step-up MFA at secret level is Platform-only. Launcher-based session recording only — direct connections not captured. Azure Key Vault and AWS Secrets Manager integrations are Platform-only.",
        docsUrl: "https://docs.delinea.com/online-help/secret-server/start.htm"
      },
      {
        productId: "V-001-P-003",
        productName: "Delinea Platform",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-005", "PAM-006", "PAM-007", "PAM-008", "PAM-010", "PAM-011", "PAM-012", "PAM-013", "PAM-014", "PAM-015", "PAM-018", "PAM-019", "PAM-020", "PAM-021", "PAM-022", "PAM-023", "PAM-024", "PAM-025", "PAM-026", "PAM-027", "PAM-029", "PAM-030", "PAM-032", "PAM-033"],
        partialCapabilities: ["PAM-004", "PAM-009", "PAM-016", "PAM-017", "PAM-028", "PAM-031", "PAM-034", "PAM-035"],
        notes: "Distinct cloud-native product — not Secret Server Cloud with add-ons. Microservice architecture with 99.995% SLA. Includes Secret Server vault capabilities plus: MFA for secrets (step-up authentication at secret level via Platform), Continuous Identity Discovery (CID — continuously discovers admins, shadow admins, NHI, AI identities across AD, Azure AD, AWS, GCP), Identity Threat Protection (ITP/PCCE — identity misconfiguration detection, threat detection, ML-based behavioral analytics), Behavior Analytics included, Azure Key Vault integration, AWS Secrets Manager integration, Privileged Remote Access (PRA — browser-based RDP/SSH sessions), IGA via Identity Lifecycle Management (joiner-mover-leaver automation, in Private Preview as of Spring 2025), Identity Access Certification. Delinea Engine handles all connections via port 443 acting as software-defined jump box — no inbound firewall rules required on target systems. PAM-016 partial — full coverage requires Privilege Control for Servers add-on. PCS is separately purchased.",
        docsUrl: "https://docs.delinea.com/online-help/delinea-platform/getting-started/index.htm"
      },
      {
        productId: "V-001-P-004",
        productName: "Privilege Control for Servers",
        capabilities: ["PAM-016", "PAM-030", "PAM-033"],
        partialCapabilities: ["PAM-005", "PAM-031"],
        notes: "Optional add-on within Delinea Platform — separately purchased, not included by default. Agent-based installation on target servers. Records ALL privileged connections regardless of how initiated — including direct RDP/SSH connections that bypass the PAM broker. Sends recordings back to Secret Server in Platform. Unix/Linux sudo controls. AD bridging for Unix/Linux systems. Privilege elevation controls. Closes the direct connection bypass gap — the only product that captures sessions initiated outside the vault. Requires Delinea Platform.",
        docsUrl: "https://docs.delinea.com/online-help/delinea-platform/getting-started/index.htm",
        addOnOf: "V-001-P-003"
      },
      {
        productId: "V-001-P-005",
        productName: "Server Suite",
        capabilities: ["PAM-005", "PAM-007", "PAM-015", "PAM-016", "PAM-020", "PAM-030"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-008"],
        notes: "On-premises equivalent of Privilege Control for Servers for organizations not on the Delinea Platform. Standalone product. AD bridging for Unix, Linux, Mac OS X — joins non-Windows systems to Active Directory domain. Centralized authentication via AD. RBAC via zones and computer roles. Sudo controls and command-level privilege management on Unix/Linux. Privilege escalation controls. Full session recording and audit on managed Unix/Linux systems — captures all session input/output, replayable. SIEM integration. Single sign-on across platforms. MFA partial — consumed from external IdP (Okta, Duo, Microsoft, etc.), not provided natively. Does not include credential vaulting, rotation, or break glass.",
        docsUrl: "https://docs.delinea.com/online-help/server-suite/using/linux-unix/intro/server-suite.htm"
      },
      {
        productId: "V-001-P-006",
        productName: "Delinea Cloud Suite",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-005", "PAM-007", "PAM-014", "PAM-015", "PAM-016", "PAM-020", "PAM-030"],
        partialCapabilities: ["PAM-018", "PAM-023"],
        notes: "SaaS delivery of Server Suite capabilities via the Privileged Access Service (PAS) platform — formerly Centrify. Distinct from Server Suite which is on-premises. Cloud Clients are lightweight agents installed on Linux, Windows, Mac systems. Native MFA enforcement at login and privilege elevation — supports FIDO2, OATH OTP, email, SMS, push (stronger MFA story than Server Suite which consumes external IdP). AD bridging and identity federation. RBAC via zones and roles. Privilege elevation on demand with MFA challenge. Shared account password management via PAS vault. Session recording via PAS. Conditional access policies. Supports Windows workstations as of recent releases.",
        docsUrl: "https://docs.delinea.com/online-help/cloud-suite/start.htm"
      },
      {
        productId: "V-001-P-007",
        productName: "Privilege Manager",
        capabilities: ["PAM-005", "PAM-009", "PAM-016", "PAM-019", "PAM-020", "PAM-025", "PAM-028", "PAM-031"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-007", "PAM-008", "PAM-010", "PAM-021", "PAM-023", "PAM-026", "PAM-027"],
        notes: "Endpoint least privilege and application control solution for Windows, macOS, Unix/Linux. Standalone product — does not require Secret Server. Two core components: Local Security (manages local group membership, prevents unauthorized admin account creation, enforces password rotation on local accounts) and Application Control (allow listing, blocking, elevation policies per application). True JIT for endpoints — time-limited, approval-based, auto-terminates at expiry, any elevated application self-terminates when window expires. Application elevation — specific applications elevated without full admin rights. User justification workflows. VirusTotal reputation checking for unknown applications. ServiceNow integration. SIEM integration via syslog. Consumes MFA via SSO/SAML integration — no native MFA. No session recording by design — endpoint scale makes recording impractical, event logging and SIEM integration used instead. Discovery limited to local endpoint accounts only.",
        docsUrl: "https://docs.delinea.com/online-help/privilege-manager/start.htm"
      },
      {
        productId: "V-001-P-008",
        productName: "Delinea StrongDM",
        capabilities: ["PAM-005", "PAM-007", "PAM-014", "PAM-015", "PAM-019", "PAM-020", "PAM-030", "PAM-031", "PAM-033"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-004", "PAM-006", "PAM-009", "PAM-011", "PAM-012", "PAM-013", "PAM-016", "PAM-021", "PAM-022", "PAM-023", "PAM-024", "PAM-028", "PAM-029"],
        notes: "Zero Trust infrastructure access platform. Acquired by Delinea. All connections proxied through gateway/relay architecture — no direct access to target systems possible. Ephemeral leased credentials — users never see credentials, injected at gateway. Supports SSH, RDP, Kubernetes, MySQL, PostgreSQL, Oracle, and many other protocols. RBAC via roles. Cedar policy language for fine-grained access control. Automated JIT via Access Workflows — time-limited, approval-based. PagerDuty on-call integration drives JIT group membership automatically. Session recording — SSH and RDP replays, Kubernetes exec command logging. Tamper-hardened audit log in separate AWS account. SSO/MFA via integrations — Duo, Okta, Entra ID, JumpCloud, Keycloak, Ping Identity. SCIM provisioning for user lifecycle. ServiceNow, Jira, Slack, Microsoft Teams, PagerDuty integrations. Secret store integrations — HashiCorp Vault, Delinea Secret Server, AWS Secrets Manager, GCP, CyberArk, Azure Key Vault. Strong Vault (Enterprise plan) adds native credential management and rotation via secret engines — AD rotation, database rotation, lockable secrets with auto-rotation on release. Without Enterprise plan relies on third-party vault integrations. MFA enforced via integrated IdP, not native. All infrastructure access via gateway prevents bypass at network level.",
        docsUrl: "https://docs.strongdm.com/concepts/what-is-strongdm"
      },
      {
        productId: "V-001-P-009",
        productName: "Delinea Fastpath",
        capabilities: ["PAM-007", "PAM-021"],
        partialCapabilities: ["PAM-005", "PAM-011", "PAM-022", "PAM-035"],
        notes: "Acquired by Delinea. Still sold as a standalone product — only some capabilities brought into Delinea Platform IGA so far. Separation of Duties (SOD) analysis across business applications — cross-application SOD management identifying conflicts at the lowest securable object level. Access risk analysis across all business applications. Change tracking — monitors configuration and master data changes with before/after values, initiating user, and timestamp. Access certification workflows. Not an infrastructure PAM product — focused on business application governance. Does not address MFA, vaulting, session recording, discovery, rotation, break glass, or JIT.",
        docsUrl: "https://docs.delinea.com/online-help/integrations/fast-path.htm"
      },
      {
        productId: "V-001-P-010",
        productName: "Delinea Credential Manager",
        capabilities: [],
        partialCapabilities: ["PAM-015", "PAM-020"],
        notes: "Browser extension (Chrome, Firefox) and mobile app (iOS, Android) that brings business users into the Secret Server or Delinea Platform vault and audit program. Does not provide independent PAM control coverage — all capabilities are inherited from the connected vault. Business User license type provides simplified vault interface for non-IT users. Autofill from vault, TOTP support, step-up MFA via Platform workflows, secret checkout workflows, personal folders. Key compliance value: extends individual user attribution (PAM-015) and audit trail (PAM-020) to business users who previously used unsafe password storage or shared credentials. Requires Secret Server or Delinea Platform as a prerequisite.",
        docsUrl: "https://docs.delinea.com/online-help/mobile/start.htm",
        dependsOn: "V-001-P-001 or V-001-P-003"
      }
    ]
  },
  {
    vendorId: "V-002",
    vendorName: "CyberArk",
    products: [
      {
        productId: "V-002-P-001",
        productName: "CyberArk Privilege Cloud",
        capabilities: ["PAM-005", "PAM-007", "PAM-008", "PAM-009", "PAM-010", "PAM-013", "PAM-015", "PAM-019", "PAM-020", "PAM-021", "PAM-022", "PAM-023", "PAM-024", "PAM-025", "PAM-026", "PAM-027", "PAM-029"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-030", "PAM-031", "PAM-032"],
        notes: "SaaS PAM vault hosted by CyberArk. Not cloud-native microservices architecture — runs same underlying architecture as PAM Self-Hosted. Core components: Digital Vault (hardened tamper-proof credential storage), CPM (Central Policy Manager — automated password rotation, must be configured not just available), PSM (Privileged Session Manager — session proxy and recording, launcher-based only, direct connections not captured), PSMP (SSH session proxy), Discovery (AD, Unix, Windows, cloud accounts), Safe-based RBAC, dual control approvals, checkout with time limits, break glass via DR vault, heartbeat, audit logging. MFA via CyberArk Identity integration — not native to Privilege Cloud. Partial JIT via checkout with time limits — not zero standing privilege. PTA (behavioral analytics) separately licensed in SaaS — upgrades PAM-032 to full if PTA included. Session recording launcher-based only — no agent-based recording of direct connections.",
        docsUrl: "https://docs.cyberark.com/privilege-cloud-secrets-rotation/latest/en/content/resources/_topnav/cc_home.htm"
      },
      {
        productId: "V-002-P-002",
        productName: "CyberArk PAM Self-Hosted",
        capabilities: ["PAM-005", "PAM-007", "PAM-008", "PAM-009", "PAM-010", "PAM-013", "PAM-015", "PAM-019", "PAM-020", "PAM-021", "PAM-022", "PAM-023", "PAM-024", "PAM-025", "PAM-026", "PAM-027", "PAM-029", "PAM-032"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-030", "PAM-031"],
        notes: "On-premises or customer-managed cloud IaaS deployment of CyberArk PAM. Identical capability set to Privilege Cloud with one key difference: PTA (Privileged Threat Analytics) is natively included, not separately licensed. PTA continuously monitors privileged session activity using behavioral analytics, detects anomalous and high-risk behavior, auto-terminates or suspends sessions on risky activity, detects bypass of PAM controls and AD misconfigurations. This upgrades PAM-032 to full coverage versus Privilege Cloud where PTA is an add-on. OPM (On-Demand Privileges Manager) provides Unix sudo controls. All same notes as Privilege Cloud apply: CPM rotation must be configured, session recording launcher-based only, MFA via CyberArk Identity.",
        docsUrl: "https://docs.cyberark.com/pam-self-hosted/latest/en/content/resources/_topnav/cc_home.htm"
      },
      {
        productId: "V-002-P-003",
        productName: "CyberArk Secure Infrastructure Access",
        capabilities: ["PAM-014", "PAM-015", "PAM-019", "PAM-020", "PAM-031", "PAM-033"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-005", "PAM-013", "PAM-030"],
        notes: "Formerly Dynamic Privileged Access (DPA). SaaS solution for zero standing privilege (ZSP) access to Windows, Linux, database, and Kubernetes targets. Two access modes: vaulted credentials (uses existing Privilege Cloud safe permissions, no additional policy setup required) and ZSP (ephemeral accounts provisioned on demand, no standing credentials). VPN-less — lightweight connector proxies all traffic, no inbound connectivity to customer environment. Native client access — users connect with their tool of choice. MFA enforced via CyberArk Identity. Session idle timeout configurable. Session recording via PSM integration — requires Privilege Cloud or PAM Self-Hosted. Attribute-based access control for ZSP policies. Built-in HA and load balancing.",
        docsUrl: "https://docs.cyberark.com/find-sia-docs/latest/en/content/introduction/sia-new-doc-location.htm"
      },
      {
        productId: "V-002-P-004",
        productName: "CyberArk Remote Access",
        capabilities: ["PAM-001", "PAM-003", "PAM-013", "PAM-015", "PAM-019", "PAM-020", "PAM-031", "PAM-033"],
        partialCapabilities: ["PAM-004", "PAM-030"],
        notes: "SaaS product dedicated to zero trust vendor and third-party privileged access. No VPN, no agents, no passwords required. Native biometric MFA via CyberArk Mobile app — smartphone facial recognition or fingerprint, QR code one-time short-lived session tokens. JIT provisioning — vendor accounts created on demand, no standing access. Integrates with Privilege Cloud or PAM Self-Hosted for session recording via PSM. Integrates with CyberArk Identity for web application vendor access. Vendor Manager delegation allows customers to delegate vendor access management to external vendor managers. Full audit trail of all vendor activity. Session recording partial — requires PSM integration.",
        docsUrl: "https://docs.cyberark.com/remote-access-standard/latest/en/content/intro/getstarted.htm"
      },
      {
        productId: "V-002-P-005",
        productName: "CyberArk Endpoint Privilege Manager",
        capabilities: ["PAM-005", "PAM-009", "PAM-016", "PAM-019", "PAM-020", "PAM-025", "PAM-028"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-007", "PAM-008", "PAM-010", "PAM-021", "PAM-031", "PAM-032"],
        notes: "Endpoint least privilege and application control for Windows, macOS, Linux. Standalone — does not require Privilege Cloud. Three core capabilities: privilege management (removes local admin rights, elevates specific applications only), application control (allow listing, blocking, elevation policies), and credential theft protection (blocks credential harvesting, Kerberos ticket theft, pass-the-hash — distinguishing capability versus other endpoint PAM products). Local account discovery. Step-up MFA via SAML/SSO integration for elevation challenges. Threat detection integration with PTA — sends EPM events to PTA for centralized analysis. Policy automation detects elevation needs automatically. No session recording by design — endpoint scale makes recording impractical. Partial JIT — elevation policies are task-scoped but without time-limited session termination.",
        docsUrl: "https://docs.cyberark.com/epm/latest/en/content/resources/_topnav/cc_home.htm"
      },
      {
        productId: "V-002-P-006",
        productName: "CyberArk Identity",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-004", "PAM-015", "PAM-017", "PAM-018", "PAM-025", "PAM-026", "PAM-027"],
        partialCapabilities: ["PAM-005", "PAM-011", "PAM-012", "PAM-032"],
        notes: "SSO, adaptive MFA, and lifecycle management platform. SAML, OIDC, RADIUS support. Adaptive risk-based MFA — FIDO2, biometric, OTP, SMS, email, push, passwordless. Federation with external IdPs (Entra ID, Okta, etc.). Cloud directory and AD/LDAP integration. Policy-based conditional access — authentication rules enforced based on user, device, location, risk. App Gateway for legacy applications without SSO support. Lifecycle management for joiner-mover-leaver. User behavior analytics built in but focused on identity authentication patterns, not privileged session analytics. PAM-004 full — conditional access rules enforce MFA with no fallback unless explicitly configured.",
        docsUrl: "https://docs.cyberark.com/identity/latest/en/content/resources/_topnav/cc_home.htm"
      },
      {
        productId: "V-002-P-007",
        productName: "CyberArk IGA",
        capabilities: ["PAM-011", "PAM-012", "PAM-022"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-007", "PAM-035"],
        notes: "Identity Governance and Administration. Automates user access review compliance, reduces audit effort with entitlement pre-approvals, lifecycle management for human and machine identities. Access certification campaigns, entitlement reviews, joiner-mover-leaver automation. Integrates with Privilege Cloud for privileged account governance. Acquired Zilla Security IGA capabilities — modern cloud-first IGA approach.",
        docsUrl: "https://docs.cyberark.com/iga/latest/en/content/resources/_topnav/cc_home.htm"
      },
      {
        productId: "V-002-P-008",
        productName: "CyberArk Secrets Manager SaaS",
        capabilities: ["PAM-006", "PAM-023", "PAM-024", "PAM-028", "PAM-031"],
        partialCapabilities: ["PAM-019", "PAM-020"],
        notes: "SaaS DevOps secrets management — Conjur Cloud. Centralizes secrets management across cloud and DevOps environments. Dynamic secrets generation. RBAC policies for secrets access. Full audit logging. CI/CD integrations. Eliminates hardcoded credentials in application code. JIT via dynamic secrets that expire — no standing credentials.",
        docsUrl: "https://docs.cyberark.com/secrets-manager-saas/latest/en/content/resources/_topnav/cc_home.htm"
      },
      {
        productId: "V-002-P-009",
        productName: "CyberArk Secrets Manager Self-Hosted",
        capabilities: ["PAM-006", "PAM-023", "PAM-024", "PAM-028", "PAM-031"],
        partialCapabilities: ["PAM-019", "PAM-020"],
        notes: "On-premises DevOps secrets management — Conjur self-hosted. Identical capability profile to Secrets Manager SaaS. Customer-managed deployment on-premises or private cloud. Same dynamic secrets, RBAC, audit logging, CI/CD integration capabilities.",
        docsUrl: "https://docs.cyberark.com/secrets-manager-sh/latest/en/content/resources/_topnav/cc_home.htm"
      },
      {
        productId: "V-002-P-010",
        productName: "CyberArk Secrets Hub",
        capabilities: [],
        partialCapabilities: ["PAM-023", "PAM-024"],
        notes: "Syncs secrets from CyberArk Privilege Cloud vault to AWS Secrets Manager and Azure Key Vault natively. Allows cloud workloads to consume CyberArk-managed credentials through native cloud secret store APIs without direct Privilege Cloud integration. Rotation managed in Privilege Cloud, synced to cloud platforms automatically. No independent capability — dependent on Privilege Cloud.",
        docsUrl: "https://docs.cyberark.com/secrets-hub-privilege-cloud/latest/en/content/resources/_topnav/cc_home.htm",
        dependsOn: "V-002-P-001"
      },
      {
        productId: "V-002-P-011",
        productName: "CyberArk Secure Cloud Access",
        capabilities: ["PAM-014", "PAM-015", "PAM-019", "PAM-020", "PAM-031", "PAM-033"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-005", "PAM-030"],
        notes: "Zero standing privilege for cloud management consoles — AWS, Azure, GCP. No standing access to cloud consoles — JIT access only via access policies. All traffic proxied through connector. MFA enforced via CyberArk Identity. Session recording via PSM integration. Attribute-based access control policies define available cloud resources and privilege level. Complements SIA which handles infrastructure — Secure Cloud Access handles cloud management plane.",
        docsUrl: "https://docs.cyberark.com/find-sca-docs/latest/en/content/introduction/sca-new-doc-location.htm"
      },
      {
        productId: "V-002-P-012",
        productName: "CyberArk Cloud Visibility",
        capabilities: ["PAM-008"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-016", "PAM-017"],
        notes: "CIEM — Cloud Infrastructure Entitlement Management. Visualizes identities and permission risk across multi-cloud environments (AWS, Azure, GCP). Discovers over-privileged identities, shadow admins, unused permissions, and misconfigurations. Risk assessment and remediation guidance. Authentication system inventory across cloud environments.",
        docsUrl: "https://docs.cyberark.com/cloud-visibility/latest/en/content/resources/_topnav/cc_home.htm"
      },
      {
        productId: "V-002-P-013",
        productName: "CyberArk Identity Security Intelligence",
        capabilities: ["PAM-032"],
        partialCapabilities: ["PAM-019", "PAM-020", "PAM-021"],
        notes: "UEBA and behavioral analytics — analyzes data to detect and mitigate security breaches and malicious activity. Integrates with Privilege Cloud PTA for privileged session analytics. Risk scoring, threat detection, behavioral baselining. Surfaces anomalous activity across identity and access events.",
        docsUrl: "https://docs.cyberark.com/isi/latest/en/content/resources/_topnav/cc_home.htm"
      },
      {
        productId: "V-002-P-014",
        productName: "CyberArk Identity Compliance",
        capabilities: ["PAM-022"],
        partialCapabilities: ["PAM-035"],
        notes: "Access certification and compliance reporting. Ensures user access complies with current policies. Automates access review campaigns, reduces audit effort. Entitlement pre-approvals streamline certification. Complements CyberArk IGA with focused compliance reporting capability.",
        docsUrl: "https://docs.cyberark.com/identity-compliance/latest/en/content/resources/_topnav/cc_home.htm"
      },
      {
        productId: "V-002-P-015",
        productName: "CyberArk Secure Web Sessions",
        capabilities: ["PAM-030"],
        partialCapabilities: ["PAM-019", "PAM-020"],
        notes: "Records, audits, and protects all user activity within web applications. Session recording for browser-based access — captures all actions taken within web applications. Integrates with CyberArk Identity for authentication context. Complements PSM which handles RDP/SSH sessions — SWS handles web application sessions.",
        docsUrl: "https://docs.cyberark.com/find-sws-docs/latest/en/content/admin/sws-new-doc-location.htm"
      },
      {
        productId: "V-002-P-016",
        productName: "CyberArk Workforce Password Management",
        capabilities: [],
        partialCapabilities: ["PAM-015", "PAM-020"],
        notes: "Browser extension credential management for business users. Securely stores, manages, and shares business application credentials. Connects to Privilege Cloud vault — credentials governed by enterprise policies. Autofill from vault, privileged credential retrieval, MFA integration via CyberArk Identity. Same pattern as Delinea Credential Manager — extends vault coverage to business users, no independent PAM control coverage. Dependent on Privilege Cloud or PAM Self-Hosted.",
        docsUrl: "https://docs.cyberark.com/find-wpm-docs/latest/en/content/getstarted/find-wpm-documentation.htm",
        dependsOn: "V-002-P-001"
      },
      {
        productId: "V-002-P-017",
        productName: "CyberArk Discovery and Context",
        capabilities: ["PAM-008"],
        partialCapabilities: ["PAM-006", "PAM-010"],
        notes: "Machine identity discovery and certificate lifecycle management — Venafi-based, acquired by CyberArk October 2024. Discovers machine identities across sources including certificates, SSH keys, service accounts. Assesses risk and provides remediation steps. Certificate lifecycle management — issuance, renewal, revocation. Identifies expired, unknown, and mismanaged machine identities. Partial PAM-006 and PAM-010 — surfaces service account and machine identity hygiene issues but does not manage them directly.",
        docsUrl: "https://docs.cyberark.com/find-discovery-context-docs/latest/en/content/disco/disco-new-doc-location.htm"
      },
      {
        productId: "V-002-P-018",
        productName: "CyberArk Secure Browser",
        capabilities: [],
        partialCapabilities: ["PAM-013", "PAM-015", "PAM-020"],
        notes: "Secure browser with credential injection, cookie protection, and password replacement. Enhances security and privacy for browser-based access to applications. Integrates with CyberArk Identity for authentication and Workforce Password Management for credential injection. Dependent on CyberArk Identity.",
        docsUrl: "https://docs.cyberark.com/secure-browser/latest/en/content/resources/_topnav/cc_home.htm",
        dependsOn: "V-002-P-006"
      }
    ]
  },
  {
    vendorId: "V-003",
    vendorName: "BeyondTrust",
    products: [
      {
        productId: "V-003-P-001",
        productName: "BeyondTrust Password Safe",
        capabilities: ["PAM-005", "PAM-007", "PAM-008", "PAM-009", "PAM-010", "PAM-013", "PAM-015", "PAM-019", "PAM-020", "PAM-021", "PAM-022", "PAM-023", "PAM-024", "PAM-025", "PAM-026", "PAM-027", "PAM-029"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-006", "PAM-030", "PAM-031"],
        notes: "Core PAM vault deployed via BeyondInsight platform. BeyondInsight integrates vulnerability management, patch management, PAM, and incident response into a unified solution. Password Safe capabilities: credential vaulting (privileged accounts, SSH keys, cloud admin accounts, DevOps secrets, service accounts), automated password rotation on managed accounts, discovery and asset scanning (automated onboarding profiles all assets), session monitoring and recording (real-time monitoring with ability to pause or terminate suspicious sessions), Secrets Safe (DevOps secrets management built in), Workforce Passwords (business user credential management built in), RBAC via group-based permissions and Smart Groups, access request workflows with JIT model, searchable audit trail for forensics. Available as cloud and on-premises deployment. MFA via integration with identity providers. Session recording partial — records sessions launched through Password Safe, direct connections not captured. Partial JIT via access request workflows and checkout model.",
        docsUrl: "https://docs.beyondtrust.com/bips/docs/welcome-to-password-safe"
      },
      {
        productId: "V-003-P-002",
        productName: "BeyondTrust Privileged Remote Access",
        capabilities: ["PAM-013", "PAM-015", "PAM-019", "PAM-020", "PAM-030", "PAM-033"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-005", "PAM-014", "PAM-031"],
        notes: "Dedicated vendor and remote worker privileged access management. Jump Technology enables access to any system on any network without pre-installed software on every target. Jumpoint provides gateway-based access to network segments. Jump Policies restrict access to defined schedules with forced session termination at schedule end. Real-time session monitoring — administrators can pause or terminate sessions. Full session recording of all access sessions. RBAC via role-based permissions. MFA support. ServiceNow and Jira Service Management integration for ticketed access workflows. Available as cloud and on-premises. Session recording is full — all sessions recorded regardless of initiation method. PAM-014 partial — session timeout configurable via Jump Policies. PAM-031 partial — Jump Policies enforce time windows but not true zero standing privilege.",
        docsUrl: "https://docs.beyondtrust.com/pra/docs/welcome-to-privileged-remote-access"
      },
      {
        productId: "V-003-P-003",
        productName: "BeyondTrust EPM for Windows and Mac",
        capabilities: ["PAM-005", "PAM-009", "PAM-016", "PAM-019", "PAM-020", "PAM-025", "PAM-028"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-007", "PAM-008", "PAM-010", "PAM-021", "PAM-031"],
        notes: "Endpoint Privilege Management for Windows and Mac. Least privilege enforcement — removes local admin rights, elevates specific applications only. Application control — allow listing, blocking, elevation policies. Local account discovery and management. RBAC via policy-based controls. Audit logging with SIEM integration. Step-up MFA via SAML/SSO integration for elevation. No session recording by design — endpoint scale makes recording impractical. Partial JIT — elevation policies are task-scoped but without full time-limited session termination.",
        docsUrl: "https://docs.beyondtrust.com/epm-wm/docs/epm-windows-mac-landing"
      },
      {
        productId: "V-003-P-004",
        productName: "BeyondTrust EPM for Unix and Linux",
        capabilities: ["PAM-005", "PAM-016", "PAM-019", "PAM-020"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-007", "PAM-008"],
        notes: "Endpoint Privilege Management for Unix and Linux. Least privilege enforcement on Unix and Linux systems. Privilege escalation controls — sudo controls, command-level privilege management. Application control on Unix/Linux. Audit logging of privileged activity. MFA via SAML/SSO integration. Does not include credential vaulting, rotation, or session recording.",
        docsUrl: "https://docs.beyondtrust.com/epm-l/page/epm-landing"
      },
      {
        productId: "V-003-P-005",
        productName: "BeyondTrust Identity Security Insights",
        capabilities: ["PAM-008", "PAM-017", "PAM-032"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-010", "PAM-016"],
        notes: "ITDR and CIEM — identity security posture management. Provides complete view of identities, accounts, effective privileges, escalation paths, and threats from a single lens. Scans AD, Entra ID, AWS, Okta and other platforms. Identifies dormant and inactive accounts, misconfigurations, over-permissive roles, privilege escalation paths, and lateral movement paths. Risk-ranked remediation report with prioritized fixes. Continuous monitoring. Authentication system inventory across connected platforms. Part of the Pathfinder platform umbrella.",
        docsUrl: "https://docs.beyondtrust.com/insights/docs/identity-security-insights-landing"
      },
      {
        productId: "V-003-P-006",
        productName: "BeyondTrust Entitle",
        capabilities: ["PAM-011", "PAM-012", "PAM-022", "PAM-031"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-007"],
        notes: "Comprehensive identity and access management — IGA for cloud and SaaS environments. Manages entire access authorization process by automating JIT access and permission management. Reduces standing privileges, simplifies access reviews, handles evaluation and approval or denial of permission requests. Joiner-mover-leaver automation. Access certification campaigns. Integrates with Password Safe for PAM-governed JIT access. Focused on cloud and SaaS environments — complements Password Safe for infrastructure.",
        docsUrl: "https://docs.beyondtrust.com/entitle/docs/entitle-landing"
      },
      {
        productId: "V-003-P-007",
        productName: "BeyondTrust AD Bridge",
        capabilities: ["PAM-005", "PAM-015", "PAM-016", "PAM-020"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-008"],
        notes: "Centralizes and streamlines authentication across Windows, Unix, and Linux using Active Directory. Joins non-Windows systems to AD domain. Centralized authentication via AD. RBAC via AD groups and policies. Privilege escalation controls on Unix/Linux. Audit logging of privileged activity on managed systems. MFA via AD-integrated identity providers. Same pattern as Delinea Server Suite — focused on cross-platform AD integration and Unix/Linux privilege controls. Does not include credential vaulting or session recording.",
        docsUrl: "https://docs.beyondtrust.com/adb/docs/ad-bridge-landing"
      }
    ]
  },
  {
    vendorId: "V-004",
    vendorName: "KeeperPAM",
    products: [
      {
        productId: "V-004-P-001",
        productName: "KeeperPAM",
        capabilities: ["PAM-005", "PAM-007", "PAM-008", "PAM-015", "PAM-019", "PAM-020", "PAM-021", "PAM-023", "PAM-024", "PAM-025", "PAM-026", "PAM-027", "PAM-029", "PAM-030", "PAM-031", "PAM-033"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-004", "PAM-006", "PAM-009", "PAM-010", "PAM-013", "PAM-014", "PAM-022", "PAM-028"],
        notes: "Cloud-native unified PAM platform. Consolidates enterprise password management, secrets management, connection management, zero-trust network access, remote browser isolation and cloud-based access control in one product. Architecture: lightweight Gateway deployed in customer environment communicates outbound only via WebSocket to Keeper cloud. Zero-knowledge encryption — Keeper servers cannot decrypt vault data. No VPN, no agents on endpoints, no inbound firewall rules required. Key capabilities: credential vaulting (zero-knowledge encrypted), automated password rotation (AD accounts, Windows/Linux users, databases, AWS/Azure/GCP IAM, SSH keys, Windows services and scheduled tasks updated automatically on rotation), discovery (via Commander CLI — network discovery across Windows, Linux, AD, databases, cloud; UI coming soon), session recording and playback (full recording of all connections), true JIT with zero standing privilege (ephemeral account creation for duration of session, time-bounded access with automatic rotation on check-in, single-user checkout mode, approval workflows with force check-in), RBAC via roles and enforcement policies, Secrets Manager for DevOps (built in), tunneling, remote browser isolation. ARAM (Advanced Reporting and Alerts Module) for audit and compliance reporting with SIEM integration (Splunk, Sumo Logic, syslog, Azure LA). Break glass via workflow override. PAM-008 partial for UI — discovery currently Commander CLI only. Available as KeeperPAM license or Keeper Enterprise with PAM add-on.",
        docsUrl: "https://docs.keeper.io/en/keeperpam"
      },
      {
        productId: "V-004-P-002",
        productName: "Keeper Endpoint Privilege Manager",
        capabilities: ["PAM-005", "PAM-009", "PAM-016", "PAM-019", "PAM-020", "PAM-031"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-007", "PAM-008", "PAM-021", "PAM-025", "PAM-028"],
        notes: "Separately licensed Privileged Elevation and Delegation Management (PEDM) solution. Agent-based across Windows, macOS, Linux. Distinguishing capability vs other EPM products: process-level ephemeral accounts — privileged commands execute under a Keeper-managed ephemeral account that is created and destroyed per-execution (true zero standing privilege at the endpoint level, not just task-scoped elevation). Removes users from local admin groups on Windows and removes sudo on macOS/Linux. JIT at both process and machine levels. Elevation requests with approval and escalation workflows. Flexible policy management — application control, file access policies, granular enforcement by user, machine, collection, execution context. Monitoring mode allows observation before enforcement. Cannot be installed on Windows Domain Controllers. Requires Keeper Enterprise subscription with EPM seats.",
        docsUrl: "https://docs.keeper.io/en/keeperpam/endpoint-privilege-manager/overview"
      }
    ]
  },
  {
    vendorId: "V-005",
    vendorName: "One Identity",
    products: [
      {
        productId: "V-005-P-001",
        productName: "One Identity Safeguard for Privileged Passwords",
        capabilities: ["PAM-005", "PAM-007", "PAM-008", "PAM-009", "PAM-010", "PAM-015", "PAM-019", "PAM-020", "PAM-021", "PAM-022", "PAM-023", "PAM-024", "PAM-025", "PAM-026", "PAM-027", "PAM-029"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-013", "PAM-031"],
        notes: "Hardened appliance or virtual appliance credential vault. Hardware appliance approach protects PAM software from attack. Core capabilities: asset and account discovery, password rotation and management across broad platform support (Windows, Unix, Linux, databases, network devices, mainframe, cloud platforms, VMware, SAN), access request workflow with approvals and review cycles, SSH key and API key management, RBAC, dual control, break glass, checkout with time limits, tamper-proof audit log. Session recording NOT included in SPP alone — requires joining with Safeguard for Privileged Sessions (SPS). MFA via external IdP integration. Partial JIT via checkout model. Partial vendor access via access request workflows. Available on-premises (hardware appliance or virtual) and cloud (AWS, Azure).",
        docsUrl: "https://support.oneidentity.com/one-identity-safeguard-for-privileged-passwords/"
      },
      {
        productId: "V-005-P-002",
        productName: "One Identity Safeguard for Privileged Sessions",
        capabilities: ["PAM-014", "PAM-015", "PAM-019", "PAM-020", "PAM-030", "PAM-033"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-005", "PAM-013"],
        notes: "Dedicated session proxy and recording appliance. Distinguishing capabilities vs other session recording products: (1) transparent or non-transparent interception — SPS operates independently of PAM vault, can intercept existing sessions without requiring vault integration; (2) protocol-level inspection — SPS inspects traffic at the application layer and can reject traffic that violates protocol rules, acting as active defense not just passive recording; (3) OCR full-text search of session content including screen text; (4) keystroke logging and search. All sessions proxied through SPS — no direct connections to target systems. Real-time alerts and automatic blocking of unsafe protocol actions. Can be used standalone or joined with SPP to combine credential management with session recording. When joined with SPP, all sessions from SPP are automatically proxied through SPS.",
        docsUrl: "https://support.oneidentity.com/one-identity-safeguard-for-privileged-sessions/"
      },
      {
        productId: "V-005-P-003",
        productName: "One Identity Safeguard for Privileged Analytics",
        capabilities: ["PAM-032"],
        partialCapabilities: ["PAM-019", "PAM-020", "PAM-021"],
        notes: "ML-based user behavior analytics for privileged sessions. Requires Safeguard for Privileged Sessions as data source — cannot operate standalone. Algorithms: keystroke dynamics (user authentication via typing patterns), FIS (frequent itemset mining for behavioral patterns like typical access times and source IPs), window title analysis (unusual application usage), mouse movement analysis, scripted session detection. Generates individual user behavior profiles continuously updated via ML. Detects anomalies and ranks by risk. Real-time alerts on suspicious activity.",
        docsUrl: "https://support.oneidentity.com/one-identity-safeguard-for-privileged-sessions/",
        dependsOn: "V-005-P-002"
      },
      {
        productId: "V-005-P-004",
        productName: "One Identity Safeguard On Demand",
        capabilities: ["PAM-005", "PAM-007", "PAM-008", "PAM-009", "PAM-010", "PAM-014", "PAM-015", "PAM-019", "PAM-020", "PAM-021", "PAM-022", "PAM-023", "PAM-024", "PAM-025", "PAM-026", "PAM-027", "PAM-029", "PAM-030", "PAM-032", "PAM-033"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-013", "PAM-031"],
        notes: "SaaS-delivered combination of SPP, SPS, and SPA — all three Safeguard products delivered as a managed cloud service. Full capability set of all three products: credential vaulting, rotation, discovery, access workflows, session proxy and recording with protocol-level inspection, OCR full-text search, ML-based behavior analytics. Does not require on-premises appliances. MFA via external IdP. Partial JIT via checkout model — not true zero standing privilege.",
        docsUrl: "https://www.oneidentity.com/products/safeguard-on-demand/"
      },
      {
        productId: "V-005-P-005",
        productName: "One Identity Manager",
        capabilities: ["PAM-011", "PAM-012", "PAM-022"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-007", "PAM-035"],
        notes: "Enterprise IGA platform. Identity governance and administration covering joiner-mover-leaver lifecycle automation, access request and provisioning workflows, access certifications and attestation, role management, SOD policy enforcement across applications. Integrates with Safeguard products for privileged account governance. One Identity's core IGA product separate from the PAM Safeguard family.",
        docsUrl: "https://docs.oneidentity.com/"
      },
      {
        productId: "V-005-P-006",
        productName: "One Identity Safeguard Authentication Services",
        capabilities: ["PAM-005", "PAM-015", "PAM-016", "PAM-020"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-008"],
        notes: "AD bridging for Unix, Linux, and macOS — same pattern as Delinea Server Suite and BeyondTrust AD Bridge. Extends Active Directory authentication and policy to non-Windows systems. Centralized authentication via AD. RBAC via AD groups. Privilege controls on Unix/Linux. Audit logging. MFA via AD-integrated identity providers. Formerly Centrify product. Does not include credential vaulting or session recording.",
        docsUrl: "https://docs.oneidentity.com/"
      },
      {
        productId: "V-005-P-007",
        productName: "One Identity Privilege Manager for Unix Linux macOS",
        capabilities: ["PAM-005", "PAM-016", "PAM-019", "PAM-020"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-007", "PAM-008"],
        notes: "PEDM solution for Unix, Linux, and macOS. Granular delegation of Unix root account and AD administrator accounts. Enterprise-ready sudo management — enhances open source sudo with central policy management, logging, and reporting. Keystroke logging for Unix root activities. Tightly integrated with Safeguard Authentication Services. Privilege escalation controls at command level. MFA via SAML/SSO integration.",
        docsUrl: "https://support.oneidentity.com/"
      },
      {
        productId: "V-005-P-008",
        productName: "OneLogin Workforce Identity",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-004", "PAM-015", "PAM-017", "PAM-018", "PAM-025", "PAM-026", "PAM-027"],
        partialCapabilities: ["PAM-005", "PAM-011", "PAM-012", "PAM-032"],
        notes: "SSO, adaptive MFA, and lifecycle management — acquired by One Identity from OneLogin. SmartFactor Authentication uses AI to adjust security based on current risk context. SAML, OIDC support. Multiple MFA methods including biometrics, FIDO2, OTP. Federation with external IdPs. User provisioning and deprovisioning lifecycle. Directory services. Partial user behavior analytics via SmartFactor risk engine.",
        docsUrl: "https://www.oneidentity.com/products/onelogin/"
      },
      {
        productId: "V-005-P-009",
        productName: "One Identity Active Roles",
        capabilities: ["PAM-005", "PAM-015"],
        partialCapabilities: ["PAM-008", "PAM-010", "PAM-011", "PAM-012"],
        notes: "Active Directory management and delegation. Automates and secures AD and Entra ID administration. RBAC-based delegation of AD management tasks. Account discovery and inventory. User and group lifecycle management. Temporal group membership — access granted for specific time windows. Complements Safeguard PAM products by securing the AD management plane.",
        docsUrl: "https://docs.oneidentity.com/"
      }
    ]
  },
  {
    vendorId: "V-006",
    vendorName: "Silverfort",
    products: [
      {
        productId: "V-006-P-001",
        productName: "Silverfort Identity Security Platform",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-004", "PAM-017", "PAM-019", "PAM-020", "PAM-027", "PAM-032"],
        partialCapabilities: ["PAM-006", "PAM-008", "PAM-010", "PAM-015"],
        notes: "IMPORTANT: Silverfort's technical documentation is customer-gated. This capability mapping is based on public-facing materials including whitepapers, solution briefs, and website content — less authoritative than product documentation. Silverfort is a fundamentally different product category from PAM vaults — it operates at the authentication protocol layer, not credential management or session management. Runtime Access Protection (RAP) technology integrates inline with existing IAM infrastructure (AD, RADIUS, LDAP) without requiring agents, proxies, or code changes on any system. Core capabilities: universal MFA enforcement across ALL authentication protocols including those typically excluded by other MFA solutions (PsExec, WMI, Remote PowerShell, NTLM, Kerberos, LDAP) — PAM-004 is the key differentiator, closing MFA bypass gaps that exist in every other solution; risk-based conditional access policies; service account discovery and monitoring including classification of pure machine-to-machine accounts versus interactively-used accounts; identity threat detection including compromised account detection and lateral movement detection; AI-based risk assessment and anomaly detection; complete authentication event logging across the environment. Does NOT provide: credential vaulting, password rotation, session recording, JIT access, break glass, or jump box capabilities — Silverfort augments existing PAM infrastructure but does not replace vault-based PAM.",
        docsUrl: "https://www.silverfort.com/"
      }
    ]
  },
  {
    vendorId: "V-007",
    vendorName: "Okta",
    products: [
      {
        productId: "V-007-P-001",
        productName: "Okta Workforce Identity Cloud",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-004", "PAM-015", "PAM-017", "PAM-018", "PAM-025", "PAM-026", "PAM-027"],
        partialCapabilities: ["PAM-005", "PAM-011", "PAM-012", "PAM-032"],
        notes: "Core identity platform. SSO for applications via SAML and OIDC. Adaptive MFA — risk-based with multiple factors including FIDO2, biometric, OTP, push, SMS. Universal Directory — centralized identity store with AD and LDAP integration. Lifecycle Management — joiner-mover-leaver automation, SCIM provisioning. Okta Workflows — no-code automation for identity processes. Policy-based conditional access. Federation with external IdPs. Okta FastPass — phishing-resistant authentication on managed devices. PAM-004 full — phishing-resistant enforcement available via FastPass. Partial lifecycle management covers basic joiner-mover-leaver but full IGA requires Okta Identity Governance add-on. Identity Threat Protection with Okta AI (add-on) provides risk-based threat detection but not included in base WIC.",
        docsUrl: "https://help.okta.com/oie/en-us/content/topics/identity-engine/oie-index.htm"
      },
      {
        productId: "V-007-P-002",
        productName: "Okta Identity Governance",
        capabilities: ["PAM-011", "PAM-012", "PAM-022"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-007", "PAM-035"],
        notes: "IGA add-on to Workforce Identity Cloud. Three components: Lifecycle Management (extended provisioning and deprovisioning automation), Workflows (no-code automation for access processes), and Access Governance (access certifications, access requests, entitlement management). Access Certifications include contextual information such as sign-in frequency and resource last-accessed date to make reviews more meaningful. Joiner-mover-leaver automation for human and non-human identities. Box uses Okta Identity Governance to enforce zero standing privileges. Subscription add-on — not included in base WIC.",
        docsUrl: "https://help.okta.com/oie/en-us/content/topics/identity-governance/iga.htm",
        addOnOf: "V-007-P-001"
      },
      {
        productId: "V-007-P-003",
        productName: "Okta Privileged Access",
        capabilities: ["PAM-005", "PAM-007", "PAM-015", "PAM-019", "PAM-020", "PAM-023", "PAM-025", "PAM-026", "PAM-027", "PAM-029", "PAM-031", "PAM-033"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-006", "PAM-008", "PAM-013", "PAM-014", "PAM-030"],
        notes: "PAM add-on to Workforce Identity Cloud. Architecture is fundamentally different from traditional vault-first PAM — built on Okta identity platform rather than a separate credential management system. Core capabilities: JIT infrastructure access via on-demand server accounts created per session and deleted after (true JIT, zero standing server access), gateway-based access proxying (no direct server connections, client device never receives usable credentials), SSH session recording via gateway, credential vaulting for privileged accounts and secrets, service account governance (eliminates standing access for non-federated service accounts in SaaS apps), access request workflows with approvals, compliance reporting. RDP session recording in development as of September 2025 announcements. MFA enforced via Okta WIC — not separate. Session recording partial — SSH via gateway, RDP in progress. Service account coverage partial — focused on SaaS service accounts. Narrower infrastructure coverage than traditional PAM vaults — optimized for cloud-native server access rather than full enterprise credential lifecycle.",
        docsUrl: "https://help.okta.com/oie/en-us/content/topics/privileged-access/pam-overview.htm",
        addOnOf: "V-007-P-001"
      },
      {
        productId: "V-007-P-004",
        productName: "Okta Device Access",
        capabilities: ["PAM-001", "PAM-002", "PAM-003"],
        partialCapabilities: ["PAM-005", "PAM-009", "PAM-031"],
        notes: "Extends Okta identity and MFA to device sign-in experience. Desktop MFA for Windows and macOS — enforces MFA at device login using same authenticators as Okta-protected apps. Password sync for macOS — keeps local account password synchronized with Okta. JIT local account creation for macOS — creates accounts from Okta identity at login, useful for shared devices and multi-user workstations. Device Logout — admins can remotely sign users out of devices. Desktop MFA recovery — time-limited recovery PIN for users locked out without MFA access. Not a full endpoint privilege management solution — does not provide application control, local account discovery, or privilege escalation controls.",
        docsUrl: "https://help.okta.com/oie/en-us/content/topics/oda/oda-overview.htm",
        addOnOf: "V-007-P-001"
      }
    ]
  },
  {
    vendorId: "V-008",
    vendorName: "HashiCorp",
    products: [
      {
        productId: "V-008-P-001",
        productName: "HashiCorp Vault",
        capabilities: ["PAM-006", "PAM-019", "PAM-020", "PAM-023", "PAM-024", "PAM-025", "PAM-026", "PAM-028", "PAM-031"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-005", "PAM-008", "PAM-015", "PAM-021"],
        notes: "Secrets management platform covering both static secrets (KV store) and dynamic secrets (on-demand generation with automatic revocation). Covers self-hosted (Community, Enterprise) and HCP Vault Dedicated (managed SaaS) — identical capability set, deployment model difference only. Core capabilities: dynamic secrets engines for databases (MySQL, PostgreSQL, Oracle, MongoDB, etc.) generating time-limited credentials per request, cloud IAM credential generation (AWS, Azure, GCP) eliminating long-lived cloud credentials, SSH secrets engine for JIT SSH certificates (zero standing SSH access), PKI and certificate lifecycle management, static secrets rotation, encryption as a service (encrypt/decrypt data without exposing keys), RBAC via policies (fine-grained path-based access control), multiple auth methods (LDAP, AD, OIDC, AWS IAM, Kubernetes, Azure, GitHub, etc.), tamper-evident audit logging of all operations, lease management (automatic expiration and renewal), namespaces for multi-tenancy (Enterprise). PAM-031 full via dynamic secrets — credentials exist only for the duration of the lease, automatically revoked on expiry. Does not provide session recording, access management, or endpoint controls — Boundary handles access management. MFA enforced via integrated auth methods partial.",
        docsUrl: "https://developer.hashicorp.com/vault/docs"
      },
      {
        productId: "V-008-P-002",
        productName: "HashiCorp Boundary",
        capabilities: ["PAM-005", "PAM-007", "PAM-015", "PAM-019", "PAM-020", "PAM-031", "PAM-033"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-013", "PAM-014", "PAM-021", "PAM-030"],
        notes: "Zero trust infrastructure access management. Available as Community Edition (free, self-managed), Enterprise (self-managed with commercial features), and HCP Boundary (managed SaaS). Core capabilities: identity-based access without VPN or firewall changes — users authenticate via trusted IdP (Okta, Azure AD, Auth0, Ping) and get access to specific resources only; RBAC via roles, scopes, and composable grants; credential brokering with Vault — Vault generates dynamic credentials per session, users never see credentials and cannot reuse them; JIT access — sessions created on demand, time-limited, automatically expire; automated service discovery for dynamic infrastructure; session monitoring and audit logging; SIEM integration. Session recording: partial for Community Edition, full session recording with session player for Enterprise and HCP Boundary. Integrates with Vault for full zero trust PAM architecture. PAM-013 partial — supports vendor access patterns but not a dedicated RPAM product. PAM-014 partial — session idle timeout configurable. SSO via OIDC enforces MFA from integrated IdP.",
        docsUrl: "https://developer.hashicorp.com/boundary/docs"
      },
      {
        productId: "V-008-P-003",
        productName: "HashiCorp Vault Radar",
        capabilities: [],
        partialCapabilities: ["PAM-008", "PAM-028"],
        notes: "Secret scanning product — scans code repositories, configuration files, and infrastructure for leaked, embedded, or hardcoded secrets. Identifies secret sprawl and exposed credentials. Available as HCP managed service. Partial PAM-008 — discovers unmanaged secrets and credentials across the environment. Partial PAM-028 — detects default and hardcoded credentials before they become a breach vector. Does not provide access management or session controls.",
        docsUrl: "https://developer.hashicorp.com/hcp/docs/vault-radar"
      }
    ]
  },
  {
    vendorId: "V-009",
    vendorName: "Microsoft",
    products: [
      {
        productId: "V-009-P-001",
        productName: "Microsoft Entra ID P1",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-004", "PAM-015", "PAM-017", "PAM-018", "PAM-025", "PAM-026", "PAM-027"],
        partialCapabilities: ["PAM-005", "PAM-011", "PAM-019"],
        notes: "Core cloud identity platform (formerly Azure Active Directory). Included in Microsoft 365 E3 and Business Premium. Capabilities: SSO for thousands of applications (SAML, OIDC), Multi-Factor Authentication (Microsoft Authenticator, FIDO2, passwordless, SMS), Conditional Access policies (device compliance, location, application sensitivity, sign-in risk), Self-Service Password Reset, AD Connect sync for hybrid environments, Universal Directory, RBAC for application access. PAM-004 full — Conditional Access enforces MFA with no bypass available when properly configured. PAM-019 partial — audit logs via Azure Monitor/Log Analytics, 30-day default retention. P1 does not include PIM (JIT), Identity Protection (risk-based policies), or IGA. These require P2 or ID Governance licenses.",
        docsUrl: "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new"
      },
      {
        productId: "V-009-P-002",
        productName: "Microsoft Entra ID P2",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-004", "PAM-015", "PAM-017", "PAM-018", "PAM-025", "PAM-026", "PAM-027", "PAM-031", "PAM-032"],
        partialCapabilities: ["PAM-005", "PAM-007", "PAM-008", "PAM-010", "PAM-011", "PAM-019"],
        notes: "Includes all P1 capabilities plus Privileged Identity Management (PIM) and Microsoft Entra ID Protection. Included in Microsoft 365 E5. PIM capabilities: JIT time-bound role activation for Microsoft Entra roles, Azure resource roles, and Groups; approval workflows for role activation; MFA required on activation via Conditional Access authentication context; access reviews for privileged roles; assignment expiration with notifications. PIM scope is limited to Microsoft/Azure roles — not general infrastructure or third-party application PAM. ID Protection capabilities: risk-based Conditional Access using ML-driven user and sign-in risk signals; behavioral analytics and anomaly detection; automated risk remediation. PAM-031 scoped to Microsoft Entra and Azure roles only — not infrastructure servers, databases, or third-party applications.",
        docsUrl: "https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure",
        addOnOf: "V-009-P-001"
      },
      {
        productId: "V-009-P-003",
        productName: "Microsoft Entra ID Governance",
        capabilities: ["PAM-011", "PAM-012", "PAM-022"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-007", "PAM-031", "PAM-035"],
        notes: "Full IGA add-on — requires P1 or P2 as prerequisite. Includes all P2 PIM capabilities plus: Lifecycle Workflows (joiner-mover-leaver automation via no-code workflows triggered by HR system events), Entitlement Management (access packages bundling resources for request and assignment), Access Reviews (automated campaigns for users, groups, applications, privileged roles), machine learning-driven access recommendations in reviews. PAM-031 partial — PIM included covers JIT for Microsoft roles. PAM-006 partial — service account lifecycle limited to Entra-managed identities. Also available as part of Microsoft Entra Suite which bundles ID Governance with Private Access, Internet Access, ID Protection, and Verified ID.",
        docsUrl: "https://learn.microsoft.com/en-us/entra/id-governance/licensing-fundamentals",
        addOnOf: "V-009-P-001"
      },
      {
        productId: "V-009-P-004",
        productName: "Microsoft Entra Permissions Management",
        capabilities: ["PAM-008"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-016", "PAM-017"],
        notes: "Cloud Infrastructure Entitlement Management (CIEM) — formerly CloudKnox, acquired by Microsoft. Discovers, remediates, and continuously monitors permissions across AWS, Azure, and GCP. Identifies over-privileged identities, unused permissions, and misconfigured roles across all three major cloud providers. Provides Permissions Creep Index (PCI) scoring for risk ranking. Automated least privilege remediation recommendations. Authentication system inventory across connected cloud platforms. Standalone product — not bundled with Entra ID licenses.",
        docsUrl: "https://learn.microsoft.com/en-us/entra/permissions-management/"
      },
      {
        productId: "V-009-P-005",
        productName: "Microsoft Purview Privileged Access Management",
        capabilities: ["PAM-007", "PAM-031"],
        partialCapabilities: ["PAM-005", "PAM-019", "PAM-020"],
        notes: "JIT PAM specifically for Microsoft 365 administrative tasks — Exchange Online, SharePoint Online, Teams admin operations. Scoped exclusively to M365 admin tasks, not general infrastructure PAM. Zero standing access model for M365 admin roles — administrators must request and receive approval before executing elevated M365 tasks. Time-bound approvals. All approved tasks logged. Separate from Entra PIM — Purview PAM governs task execution within M365, PIM governs role assignment eligibility. Often overlooked but important for organizations with strict M365 compliance requirements (SOX, HIPAA for covered entities using M365).",
        docsUrl: "https://learn.microsoft.com/en-us/purview/privileged-access-management"
      },
      {
        productId: "V-009-P-006",
        productName: "Azure Key Vault",
        capabilities: ["PAM-023", "PAM-024", "PAM-028"],
        partialCapabilities: ["PAM-006", "PAM-019", "PAM-021"],
        notes: "Secrets, key, and certificate management for Azure workloads. Hardware Security Module (HSM) backed option available. Stores API keys, passwords, certificates, cryptographic keys. Automatic key rotation for supported services. RBAC via Azure RBAC or legacy access policies. Audit logging via Azure Monitor and Diagnostic Logs. Integrates natively with Azure services — Azure VMs, Azure Functions, Azure App Service retrieve secrets at runtime without credential exposure. Not a general PAM vault — designed for cloud workload secrets, not human privileged access management. No checkout workflows, session recording, or access request workflows. PAM-006 partial — manages service account secrets but no governance layer.",
        docsUrl: "https://learn.microsoft.com/en-us/azure/key-vault/general/overview"
      },
      {
        productId: "V-009-P-007",
        productName: "Microsoft Defender for Identity",
        capabilities: ["PAM-032"],
        partialCapabilities: ["PAM-008", "PAM-010", "PAM-019", "PAM-020"],
        notes: "ITDR for Active Directory and Microsoft Entra ID. Monitors AD traffic and signals to detect credential-based attacks in real time. Detects: pass-the-hash, pass-the-ticket, Kerberoasting, DCSync, Golden Ticket, lateral movement, privilege escalation paths, account enumeration, brute force, credential stuffing. Identifies dormant and vulnerable accounts. Generates risk alerts integrated with Microsoft Sentinel and Microsoft 365 Defender. Requires sensor deployment on domain controllers (on-premises) and/or integration with Entra ID. Does not perform credential management, session recording, or access control — detection and response only.",
        docsUrl: "https://learn.microsoft.com/en-us/defender-for-identity/what-is"
      },
      {
        productId: "V-009-P-008",
        productName: "Microsoft Sentinel",
        capabilities: ["PAM-019", "PAM-020", "PAM-021"],
        partialCapabilities: ["PAM-032"],
        notes: "Cloud-native SIEM and SOAR. Collects logs from any source including Entra ID, Azure Key Vault, Microsoft Defender products, and third-party PAM solutions. Provides analytics rules, threat intelligence, workbooks, and automated playbooks. PAM-019 full — centralized immutable audit log when connected to log sources. PAM-020 full — privileged user activity logging when Entra ID and PAM sources are connected. PAM-021 full — audit log review via workbooks, analytics rules, and investigation tools. PAM-032 partial — UEBA capabilities and behavioral analytics, but requires data ingestion from identity sources. Not a PAM product — a SIEM that receives PAM telemetry.",
        docsUrl: "https://learn.microsoft.com/en-us/azure/sentinel/overview"
      }
    ]
  },
  {
    vendorId: "V-010",
    vendorName: "AWS",
    products: [
      {
        productId: "V-010-P-001",
        productName: "AWS IAM",
        capabilities: ["PAM-005", "PAM-015", "PAM-025", "PAM-026", "PAM-027"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-004", "PAM-006", "PAM-007", "PAM-008", "PAM-009", "PAM-016", "PAM-017", "PAM-019", "PAM-020", "PAM-031"],
        notes: "Core AWS access control service — included free in every AWS account. Manages authentication and authorization for all AWS API operations. Core capabilities: IAM policies (identity-based and resource-based), IAM roles (temporary credentials via STS — recommended pattern, no long-lived credentials), IAM users (long-lived credentials — should be minimized), IAM groups, Permission Boundaries (limit maximum permissions any identity can have), Service Control Policies via AWS Organizations (guardrails across all accounts), IAM Access Analyzer (built-in policy analysis). MFA partial — configurable for IAM users and root account; federated users get MFA from IdP. PAM-031 partial — IAM roles with STS provide temporary credentials that automatically expire (session duration configurable), reducing standing access in AWS. PAM-016 partial — permission boundaries and SCPs prevent privilege escalation but require explicit configuration. PAM-019 partial — IAM itself does not provide audit logging; CloudTrail is the separate service that captures all IAM API calls. Root account must be protected with MFA and credentials secured in a PAM vault — AWS explicitly recommends a third-party PAM solution for root account credential management.",
        docsUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html"
      },
      {
        productId: "V-010-P-002",
        productName: "AWS IAM Identity Center",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-015", "PAM-017", "PAM-018"],
        partialCapabilities: ["PAM-004", "PAM-005", "PAM-011", "PAM-012", "PAM-019"],
        notes: "Formerly AWS Single Sign-On. Free workforce identity service for multi-account AWS access. Centrally manages user access across multiple AWS accounts via permission sets. Integrates with external identity providers (Okta, Azure AD, Microsoft AD, Ping) via SAML or SCIM. Users authenticate through their IdP and receive temporary AWS credentials per account. Built-in user store available if no external IdP. MFA enforced via integrated IdP or AWS native MFA. Trusted identity propagation passes user identity to AWS managed applications for user-level audit trails. PAM-004 partial — MFA enforcement depends on IdP or Identity Center policy configuration. PAM-011/PAM-012 partial — SCIM provisioning enables user lifecycle automation from IdP. PAM-019 partial — Identity Center activity logged via CloudTrail.",
        docsUrl: "https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html"
      },
      {
        productId: "V-010-P-003",
        productName: "AWS Secrets Manager",
        capabilities: ["PAM-023", "PAM-024", "PAM-028"],
        partialCapabilities: ["PAM-006", "PAM-019", "PAM-021"],
        notes: "Paid secrets management service. Stores and automatically rotates credentials for RDS databases, Redshift, DocumentDB, and custom rotation targets via Lambda functions. Automatic rotation eliminates long-lived static credentials. Encryption via AWS KMS. RBAC via IAM policies controlling who can retrieve which secrets. Audit logging via CloudTrail — all GetSecretValue calls logged. Cross-region replication. Integration with other AWS services (EC2, Lambda, ECS) for runtime secret retrieval. PAM-006 partial — manages service account credentials but no governance workflow layer. PAM-019 partial — audit via CloudTrail, not built into Secrets Manager itself.",
        docsUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html"
      },
      {
        productId: "V-010-P-004",
        productName: "AWS CloudTrail",
        capabilities: ["PAM-019", "PAM-020", "PAM-021"],
        partialCapabilities: ["PAM-032"],
        notes: "Audit logging service for all AWS API calls and console actions across all AWS services and accounts. First trail per region included free; additional trails and CloudTrail Lake (SQL-based analysis) are paid. Logs are tamper-evident — stored in S3 with optional integrity validation. Covers all IAM, Secrets Manager, KMS, EC2, and other service API calls. CloudTrail Lake provides 7-year immutable audit store with SQL query capability. Organization trail captures activity across all AWS accounts in an organization from a single location. Essential prerequisite for meaningful PAM audit logging in AWS environments — without CloudTrail, no credible audit trail exists.",
        docsUrl: "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html"
      },
      {
        productId: "V-010-P-005",
        productName: "AWS GuardDuty",
        capabilities: ["PAM-032"],
        partialCapabilities: ["PAM-008", "PAM-010", "PAM-019"],
        notes: "ML-based threat detection service — paid, 30-day free trial. Continuously analyzes CloudTrail logs, VPC Flow Logs, DNS logs, and other data sources to detect threats. Relevant PAM detections: IAM credential compromise (stolen credentials being used from unusual locations), privilege escalation attempts, brute force attacks, cryptocurrency mining (indicates compromised compute), unusual API call patterns, lateral movement. Detects dormant/unused IAM credentials. Findings integrate with AWS Security Hub and EventBridge for automated response. Does not manage credentials or control access — detection only.",
        docsUrl: "https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html"
      },
      {
        productId: "V-010-P-006",
        productName: "AWS IAM Access Analyzer",
        capabilities: ["PAM-008"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-016", "PAM-017", "PAM-022"],
        notes: "Policy analysis service — external access analysis is free, unused access analysis is paid. External access analysis: identifies S3 buckets, IAM roles, KMS keys, and other resources that are accessible from outside the account or organization (public or cross-account exposure). Unused access analysis: identifies IAM users and roles with unused permissions and credentials, helping right-size permissions toward least privilege. Policy validation: checks IAM policies against security best practices before deployment. Access reviews: generates findings that can feed into periodic access review processes. Does not control or manage access — analysis and recommendations only.",
        docsUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html"
      }
    ]
  },
  {
    vendorId: "V-011",
    vendorName: "SailPoint",
    products: [
      {
        productId: "V-011-P-001",
        productName: "SailPoint Identity Security Cloud",
        capabilities: ["PAM-011", "PAM-012", "PAM-022"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-007", "PAM-008", "PAM-021", "PAM-031", "PAM-035"],
        notes: "SaaS IGA platform built on SailPoint Atlas. Trusted by 53% of the Fortune 500. Core capabilities: Lifecycle Management (joiner-mover-leaver automation triggered by HR system events), access certification campaigns (AI-driven recommendations using sign-in frequency and entitlement usage data), access request workflows with approval automation, provisioning and deprovisioning to connected applications, SOD policy enforcement with preventative controls, compliance management with continuous audit readiness. Accelerated Application Management reduces application onboarding time. SAP IAG integration for preventative SOD checks in SAP environments. AI-driven access recommendations improve certification quality. Privilege Security Posture Management (PSPM) emerging within ISC as of March 2026: privilege discovery and classification, privilege insights, JIT access (in development), privilege governance, alert and respond capabilities — not yet fully GA. PAM-031 partial — JIT component of PSPM in development. PAM-006 partial — machine identity and service account governance improving with PSPM. Does not provide credential vaulting, session recording, MFA, or infrastructure access management.",
        docsUrl: "https://documentation.sailpoint.com/"
      },
      {
        productId: "V-011-P-002",
        productName: "SailPoint IdentityIQ",
        capabilities: ["PAM-011", "PAM-012", "PAM-022"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-007", "PAM-008", "PAM-021", "PAM-035"],
        notes: "On-premises IGA platform — legacy product, still actively maintained and deployed in large enterprises. Identical core capability set to Identity Security Cloud: lifecycle management, access certifications, access requests, provisioning, SOD enforcement, compliance. Customer-managed deployment — greater customization but higher operational overhead. PSPM capabilities are being delivered through ISC (SaaS) first.",
        docsUrl: "https://documentation.sailpoint.com/"
      },
      {
        productId: "V-011-P-003",
        productName: "SailPoint Non-Employee Risk Management",
        capabilities: ["PAM-012"],
        partialCapabilities: ["PAM-011", "PAM-013", "PAM-022"],
        notes: "Add-on to Identity Security Cloud. Governs third-party and contractor identity lifecycle — onboarding, access assignment, access reviews, and offboarding for non-employees. Manages the full lifecycle of vendor, contractor, and partner identities separately from employee identities. PAM-013 partial — manages vendor identity governance but not session-level privileged access controls.",
        docsUrl: "https://documentation.sailpoint.com/",
        addOnOf: "V-011-P-001"
      },
      {
        productId: "V-011-P-004",
        productName: "SailPoint Machine Identity Security",
        capabilities: ["PAM-008"],
        partialCapabilities: ["PAM-006", "PAM-010", "PAM-022"],
        notes: "Add-on to Identity Security Cloud for non-human identity (NHI) governance. Discovers and governs service accounts, machine accounts, AI agents, and other non-human identities. Machine Account Migration capability transfers machine accounts into proper governance. Connectors for AI agents from Microsoft 365 Copilot, Databricks, Amazon Bedrock, Google Vertex AI, Salesforce Agentforce, ServiceNow AI Platform. Identifies dormant machine accounts and over-privileged service identities. Does not rotate credentials or provide vault — governance and visibility only.",
        docsUrl: "https://documentation.sailpoint.com/",
        addOnOf: "V-011-P-001"
      },
      {
        productId: "V-011-P-005",
        productName: "SailPoint Cloud Access",
        capabilities: ["PAM-008"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-016", "PAM-017", "PAM-022"],
        notes: "CIEM add-on to Identity Security Cloud. Discovers and governs access to cloud entitlements and certifications with an identity-focused approach. Identifies over-privileged cloud identities, unused entitlements, and misconfigured access in cloud environments. Integrates cloud entitlement data into access certification campaigns.",
        docsUrl: "https://documentation.sailpoint.com/",
        addOnOf: "V-011-P-001"
      }
    ]
  },
  {
    vendorId: "V-012",
    vendorName: "Saviynt",
    products: [
      {
        productId: "V-012-P-001",
        productName: "Saviynt Identity Cloud",
        capabilities: ["PAM-005", "PAM-007", "PAM-008", "PAM-011", "PAM-012", "PAM-019", "PAM-020", "PAM-021", "PAM-022", "PAM-023", "PAM-029", "PAM-030", "PAM-031"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-006", "PAM-009", "PAM-010", "PAM-013", "PAM-014", "PAM-015", "PAM-032", "PAM-035"],
        notes: "Converged identity security platform — IGA, PAM, Application Access Governance (AAG), and Identity Security Posture Management (ISPM) organically built on a single code base. Key differentiator from SailPoint: includes a built-in PAM module with actual credential vaulting and session recording, not governance-adjacent capabilities only. Raised $700M from KKR in December 2025 at ~$3B valuation. Named Gartner Customers Choice for IGA 5 consecutive years. Core capabilities by module: IGA — lifecycle management (joiner-mover-leaver), access certifications with AI-driven Intelligent Recommendations, access request workflows, provisioning and deprovisioning, SOD enforcement; PAM — agentless Cloud PAM (zero-touch, no heavyweight agents), credential vaulting, session recording, discovery of high-risk accounts and shared accounts; AAG — fine-grained application-level SOD and entitlement governance within applications (SAP, Oracle, Workday, Salesforce, etc.); JIT Access — Just-in-Time Access GA 2025, zero standing privileges for cloud/SaaS high-risk accounts, discovers high-risk shared accounts, removes standing privileges, provisions JIT just-enough access; External Identity Management — contractor, vendor, and partner identity lifecycle governance; ISPM — AI-native Identity Security Posture Management launched 2025, continuous risk assessment across identity posture. PAM-001-003 partial — MFA via integrated IdP, not native. PAM-013 partial — external identity management covers vendor access governance but not dedicated RPAM session controls. PAM-030 full — session recording via PAM module. PAM-032 partial — ISPM provides AI-driven risk intelligence and behavioral context.",
        docsUrl: "https://docs.saviyntcloud.com/"
      }
    ]
  },
  {
    vendorId: "V-013",
    vendorName: "JumpCloud",
    products: [
      {
        productId: "V-013-P-001",
        productName: "JumpCloud Directory Platform",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-015", "PAM-017", "PAM-018", "PAM-025", "PAM-026", "PAM-027"],
        partialCapabilities: ["PAM-004", "PAM-005", "PAM-009", "PAM-011", "PAM-012", "PAM-019"],
        notes: "Cloud directory platform providing identity, access, and device management from a single console. Core capabilities: SSO to SAML and OIDC applications, MFA (TOTP, WebAuthn, push), conditional access policies, device management (Windows, macOS, Linux, iOS, Android), RADIUS for network authentication, LDAP-as-a-Service, cross-OS device policies and patch management. User lifecycle management via HR integrations (Workday, BambooHR, etc.) and SCIM. Password management capabilities — centralized password policies, self-service reset. RBAC via user groups and device groups. Event logging and SIEM integrations. PAM-005 partial — manages device-level credentials and directory passwords, not privileged account vaulting. PAM-009 partial — discovery limited to directory-joined devices and identities, not infrastructure-wide privileged account discovery. PAM-011/012 partial — identity governance via groups and HR-driven lifecycle, not full IGA certification campaigns. PAM-019 partial — conditional access and device trust, not session-level privileged access workflows.",
        docsUrl: "https://jumpcloud.com/support"
      },
      {
        productId: "V-013-P-002",
        productName: "JumpCloud PAM",
        capabilities: ["PAM-019", "PAM-020", "PAM-023", "PAM-029", "PAM-030", "PAM-033"],
        partialCapabilities: ["PAM-005", "PAM-007", "PAM-013", "PAM-014", "PAM-015", "PAM-031"],
        notes: "PAM module added via VaultOne acquisition (May 2025). Extends the JumpCloud Directory Platform with privileged access management capabilities. Session recording for SSH and RDP sessions. Access request workflows with approval chains. Time-limited access grants. Audit logging with tamper-evident trails. Remote browser isolation for web-based privileged access. PAM-005 partial — credential management focused on session injection rather than full enterprise vault with rotation. PAM-007 partial — RBAC for PAM sessions, extends Directory Platform groups. PAM-013 partial — supports vendor access scenarios but not dedicated RPAM infrastructure. PAM-014 partial — session isolation via remote browser, not full gateway architecture. PAM-015 partial — session recording available, keystroke logging scope TBD. PAM-031 partial — time-limited access, full JIT with zero standing privilege model in roadmap.",
        docsUrl: "https://jumpcloud.com/support",
        addOnOf: "V-013-P-001"
      }
    ]
  },
  {
    vendorId: "V-014",
    vendorName: "Splunk",
    products: [
      {
        productId: "V-014-P-001",
        productName: "Splunk Enterprise Security",
        capabilities: ["PAM-019", "PAM-020", "PAM-021"],
        partialCapabilities: ["PAM-032"],
        notes: "SIEM built on Splunk platform — available on-premises (Splunk Enterprise + ES) or SaaS (Splunk Cloud Platform + ES). As of ES 8.0, integrates SIEM, SOAR (playbook automation), and UEBA into a unified threat detection, investigation, and response solution. Cisco acquired Splunk March 2024. Core PAM-relevant capabilities: centralized log collection and indexing from any source including PAM platforms (Delinea, CyberArk, BeyondTrust, etc.), AD, cloud infrastructure, endpoints, and network devices; correlation rules and analytics for privileged access activity; investigation workbench for incident analysis; dashboards and reports for audit log review and compliance reporting; Mission Control for unified SOC workflow. PAM-032 partial — UEBA in Premier edition (formerly standalone Splunk UBA, which hit end-of-sale December 2025 and EOL January 2027) provides behavioral analytics detecting anomalous user and entity behavior, but requires privileged access data ingestion from connected PAM sources to provide meaningful privileged user analytics. Does not provide credential management, session recording, access control, JIT access, discovery, or any PAM-specific controls — value is entirely dependent on what log sources are connected.",
        docsUrl: "https://help.splunk.com/en/splunk-enterprise-security-8"
      }
    ]
  },
  {
    vendorId: "V-015",
    vendorName: "Semperis",
    products: [
      {
        productId: "V-015-P-001",
        productName: "Semperis Directory Services Protector",
        capabilities: ["PAM-008", "PAM-032"],
        partialCapabilities: ["PAM-010", "PAM-016", "PAM-017", "PAM-019", "PAM-020", "PAM-021"],
        notes: "ITDR solution for hybrid AD and Entra ID — Gartner-recognized ITDR product. Continuous monitoring using multiple data sources including the AD replication stream, which catches changes that evade agent-based and log-based detection (distinguishing capability — catches DCSync, DCShadow, and other attacks that bypass traditional SIEM). Hundreds of built-in, continuously updated security indicators covering indicators of exposure (IOEs) and indicators of compromise (IOCs). Automatic rollback of malicious changes with single-click remediation. Tamperproof audit trail of all AD changes. DSP Intelligence module provides automated security posture assessments. Integration with Microsoft Sentinel to extend visibility into previously hidden AD security data. Detects: privilege escalation paths, shadow admins, attack paths to Tier 0 assets, backdoors, persistence mechanisms, Kerberoasting indicators, Pass-the-Hash, Pass-the-Ticket, Golden Ticket, DCSync. PAM-016 partial — identifies privilege escalation paths but does not enforce access controls. PAM-019 partial — tamperproof audit trail for AD changes specifically, not general PAM audit logging. Not a PAM product — detection and remediation only, no credential management or access control.",
        docsUrl: "https://www.semperis.com/active-directory-security/"
      },
      {
        productId: "V-015-P-002",
        productName: "Semperis Active Directory Forest Recovery",
        capabilities: [],
        partialCapabilities: ["PAM-019", "PAM-029", "PAM-034"],
        notes: "Cyber-first AD forest recovery — purpose-built for ransomware and cyberattack recovery scenarios. Automates complete AD forest recovery in minutes or hours (Forrester-validated 90% reduction in recovery time). Recovers to known-secure state to prevent malware reinfection — critical distinguishing capability. Post-breach identity forensics to close backdoors and remove persistence before returning to production. Staged minimum viable company restore — recovers critical authentication first, remaining DCs in subsequent waves. Fault-tolerant recovery handling complex multi-forest, alternate IP, and mixed hardware environments. PAM-029 partial — ADFR ensures break glass and emergency access workflows can be restored after AD-targeting ransomware; does not manage break glass access itself. PAM-034 partial — validated DR capability contributes to risk posture and annual risk analysis. PAM-019 partial — forensics capability provides audit evidence of changes made during an attack. Not a PAM product — operational resilience product that protects the identity infrastructure PAM depends on.",
        docsUrl: "https://www.semperis.com/active-directory-forest-recovery/"
      }
    ]
  },
  {
    vendorId: "V-016",
    vendorName: "Netwrix",
    products: [
      {
        productId: "V-016-P-001",
        productName: "Netwrix Privilege Secure",
        capabilities: ["PAM-005", "PAM-007", "PAM-008", "PAM-013", "PAM-019", "PAM-020", "PAM-023", "PAM-029", "PAM-030", "PAM-031", "PAM-033"],
        partialCapabilities: ["PAM-001", "PAM-003", "PAM-006", "PAM-009", "PAM-010", "PAM-014", "PAM-015", "PAM-021"],
        notes: "Core PAM product — Zero Standing Privilege by design since 2019. Key distinguishing capabilities: Activity Token login accounts generate ephemeral credentials on demand, scoped to the specific task, automatically revoked at session end — no persistent privileged accounts exist in the environment between uses; Bring Your Own Vault (BYOV) — integrates with existing PAM vaults (Delinea, CyberArk, etc.) via out-of-the-box connectors to extend JIT protections without rip-and-replace; post-session cleanup removes Kerberos tickets, disables RDP, and clears session artifacts after every session; Secure Remote Access for VPN-less RPAM covering third-party and workforce access; session recording with searchable video playback; granular SSH command restrictions; real-time session termination and lock; continuous discovery of privileged accounts. JIT access scope covers desktops, servers, directories, cloud resources, network devices, and databases. PAM-001 partial — MFA via integrated IdP or built-in MFA at session initiation. PAM-006 partial — discovers and manages service and task accounts. PAM-015 partial — individual attribution enforced via ephemeral accounts.",
        docsUrl: "https://netwrix.com/en/products/privilege-secure/"
      },
      {
        productId: "V-016-P-002",
        productName: "Netwrix Auditor",
        capabilities: ["PAM-019", "PAM-020", "PAM-021"],
        partialCapabilities: ["PAM-008", "PAM-010", "PAM-022"],
        notes: "IT auditing and compliance reporting platform. Collects and correlates audit data across AD, file systems, Exchange, SharePoint, SQL Server, VMware, cloud platforms, and network devices. Pre-built compliance reports mapped to NIST, PCI-DSS, HIPAA, SOX, and other frameworks — reduces manual effort at audit time. Tamper-evident audit trail. Behavior anomaly detection for identifying unusual access patterns. PAM-008 partial — identifies accounts with excessive access rights. PAM-010 partial — identifies dormant accounts and stale access. PAM-022 partial — access review reporting capabilities. Not a PAM product — audit and compliance reporting only.",
        docsUrl: "https://netwrix.com/en/products/auditor/"
      },
      {
        productId: "V-016-P-003",
        productName: "Netwrix Access Analyzer",
        capabilities: ["PAM-008"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-010", "PAM-016", "PAM-017", "PAM-022"],
        notes: "Access rights analysis and entitlement visibility. Discovers and analyzes access rights across AD, file systems, SharePoint, Exchange, cloud platforms, and other systems. Identifies over-privileged accounts, orphaned accounts, and misconfigured access. Provides entitlement intelligence to support least privilege enforcement and access review processes. Not a PAM product — analysis and visibility only.",
        docsUrl: "https://netwrix.com/en/products/access-analyzer/"
      },
      {
        productId: "V-016-P-004",
        productName: "Netwrix Identity Manager",
        capabilities: ["PAM-011", "PAM-012"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-007", "PAM-022", "PAM-035"],
        notes: "IGA product for identity lifecycle management. Automates joiner-mover-leaver workflows, access requests, and provisioning. SOD policy enforcement. Access certifications. Lighter-weight IGA compared to SailPoint or Saviynt — positioned for organizations that need governance without enterprise IGA complexity.",
        docsUrl: "https://netwrix.com/en/products/identity-manager/"
      },
      {
        productId: "V-016-P-005",
        productName: "Netwrix Password Secure",
        capabilities: ["PAM-023", "PAM-024", "PAM-028"],
        partialCapabilities: ["PAM-001", "PAM-005", "PAM-006", "PAM-019", "PAM-021"],
        notes: "Credential management and password vaulting. Centralized, role-based access to privileged credentials. Password rotation, complexity policy enforcement, MFA at credential checkout. Secure sharing with audit trails. Compliance reporting. Complements Privilege Secure — Password Secure handles credential storage and rotation while Privilege Secure handles JIT access and session management.",
        docsUrl: "https://netwrix.com/en/products/password-secure/"
      }
    ]
  },
  {
    vendorId: "V-017",
    vendorName: "Varonis",
    products: [
      {
        productId: "V-017-P-001",
        productName: "Varonis Data Security Platform",
        capabilities: ["PAM-032"],
        partialCapabilities: ["PAM-005", "PAM-008", "PAM-010", "PAM-016", "PAM-019", "PAM-020", "PAM-021"],
        notes: "Unified data security platform covering data access governance, DSPM, ITDR, identity protection, and UEBA. Not a PAM product — does not vault credentials, manage JIT access, record privileged sessions, or enforce access controls. Value for PAM compliance is entirely from detection, visibility, and behavioral analytics. Core PAM-relevant capability modules: Data Access Governance — discovers who has access to sensitive data files, shares, and cloud storage; identifies over-privileged users and toxic access combinations; Identity Protection (launched June 2025) — Identity Posture Management identifies risky and misconfigured identities and excessive entitlements across the environment; ITDR detects failed logins, password resets, MFA policy changes, lateral movement, brute force, password spray, and other identity-based threats aligned to MITRE ATT&CK; Identity Resolution maps related identities across all connected systems to a single individual for unified investigation; UEBA — ML-driven user and entity behavior analytics with automated alerting and touchless response. PAM-032 full — ITDR with UEBA is the distinguishing capability, integrating identity threat detection directly with data access context. PAM-005 partial — data access governance enforces least privilege for data access but not general infrastructure access. PAM-008 partial — Identity Posture Management discovers over-privileged identities and excessive entitlements. PAM-010 partial — identifies dormant accounts and stale data access rights. PAM-016 partial — identifies privilege escalation risk paths but detection only, no enforcement. PAM-019/020/021 partial — audit trail and investigation for data access activity, not general PAM audit logging.",
        docsUrl: "https://www.varonis.com/data-security-platform"
      }
    ]
  },
  {
    vendorId: "V-018",
    vendorName: "Google",
    products: [
      {
        productId: "V-018-P-001",
        productName: "Google Cloud IAM",
        capabilities: ["PAM-005", "PAM-015"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-004", "PAM-007", "PAM-008", "PAM-016", "PAM-017", "PAM-019", "PAM-020", "PAM-031"],
        notes: "Core GCP access control — included free in every GCP project and organization. Manages authentication and authorization for all GCP API operations. Core capabilities: IAM policies (allow and deny), predefined and custom roles, service accounts for workload identities, workload identity federation (federate external identities to GCP without service account keys), IAM Conditions (attribute-based access control), Organization Policies (guardrails across GCP resources), IAM Recommender (ML-generated least privilege recommendations identifying unused permissions), Principal Access Boundary (limits resources any principal can access regardless of IAM policies — preview). PAM-031 partial — IAM roles with short-lived credentials via workload identity federation reduce standing access but no JIT workflow without Cloud PAM. PAM-016 partial — IAM Recommender identifies privilege escalation risk but remediation is manual. PAM-019 partial — Cloud Audit Logs capture IAM API calls but are a separate service (Cloud Logging). Root/owner account must be protected — Google recommends securing organization admin accounts with hardware security keys.",
        docsUrl: "https://cloud.google.com/iam/docs/overview"
      },
      {
        productId: "V-018-P-002",
        productName: "Google Cloud Privileged Access Manager",
        capabilities: ["PAM-005", "PAM-007", "PAM-019", "PAM-020", "PAM-029", "PAM-031"],
        partialCapabilities: ["PAM-003", "PAM-013", "PAM-014", "PAM-015"],
        notes: "Native GCP JIT privileged access management — reached General Availability 2025. Manages just-in-time temporary privilege elevation for GCP roles at project, folder, and organization scope. Core capabilities: entitlements define who can request access to which resources; time-bound access elevations with configurable maximum duration; approval-based workflows with up to two approval levels and multiple approvers per level; grant customization to scope entitlements to specific resource subsets; full audit logs of all access requests, approvals, and active grants; VPC Service Controls integration; alerting on external IAM modifications outside of PAM; Pub/Sub integration for custom alerting. Scope is limited to GCP roles and resources — not general enterprise infrastructure, on-premises systems, or third-party applications. PAM-013 partial — can be used for vendor/contractor GCP access but not a dedicated RPAM product. PAM-029 full — emergency access entitlements support break glass scenarios with audit trail.",
        docsUrl: "https://cloud.google.com/iam/docs/pam-overview",
        addOnOf: "V-018-P-001"
      },
      {
        productId: "V-018-P-003",
        productName: "Google Cloud Identity",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-015", "PAM-017", "PAM-018"],
        partialCapabilities: ["PAM-004", "PAM-005", "PAM-011", "PAM-012", "PAM-019", "PAM-025", "PAM-026"],
        notes: "Google's workforce identity platform — available as free tier and Cloud Identity Premium. Separate from Google Workspace (can be deployed without Workspace). Core capabilities: SSO via SAML and OIDC for third-party applications, MFA including TOTP, push notifications, hardware security keys (FIDO2), and passkeys, Context-Aware Access (BeyondCorp) enforces access based on user identity, device health, location, and risk signals (Premium), device management for Windows/macOS/Linux/Android/iOS (Premium), user lifecycle management with SCIM provisioning, password policy enforcement. PAM-004 partial — phishing-resistant MFA enforcement via security keys/passkeys configurable but not on by default. Context-Aware Access in Premium tier adds continuous access evaluation.",
        docsUrl: "https://cloud.google.com/identity/docs/overview"
      },
      {
        productId: "V-018-P-004",
        productName: "Google Security Command Center",
        capabilities: ["PAM-008"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-010", "PAM-016", "PAM-017", "PAM-019", "PAM-020", "PAM-032"],
        notes: "CSPM, CIEM, and threat detection for GCP — with multicloud CIEM in Enterprise tier covering AWS IAM and Entra ID/Okta identities on GCP. Core PAM-relevant capabilities: CIEM identifies excessive permissions, unused access, and over-privileged service accounts across GCP (and multicloud in Enterprise); IAM Recommender integration surfaces least privilege recommendations; threat detection identifies compromised identities, credential misuse, data exfiltration, and misconfigurations; DSPM (Data Security Posture Management) with 150+ AI-driven classifiers; attack path simulation prioritizes high-risk findings. PAM-032 partial — threat detection for identity-based attacks in GCP environment, UEBA-like signals. Available as Standard (free), Premium, and Enterprise tiers — most PAM-relevant capabilities require Premium or Enterprise.",
        docsUrl: "https://cloud.google.com/security/products/security-command-center"
      },
      {
        productId: "V-018-P-005",
        productName: "Google Security Operations",
        capabilities: ["PAM-019", "PAM-020", "PAM-021"],
        partialCapabilities: ["PAM-032"],
        notes: "Cloud-native SIEM and SOAR — formerly Chronicle. Gartner Magic Quadrant Leader for SIEM 2025. Collects and correlates security telemetry from GCP, Google Workspace, and third-party sources including PAM platforms. Petabyte-scale log ingestion with long retention. AI-powered threat detection using Gemini with curated detections maintained by Google threat researchers. YARA-L custom detection language. Integrated SOAR with playbook automation. Pre-packaged playbooks for GCP-based alerts from Security Command Center. PAM-032 partial — UEBA capabilities with entity risk scoring, anomaly detection for user behavior. Like Splunk, value is dependent on what log sources are connected.",
        docsUrl: "https://cloud.google.com/security/products/security-operations"
      },
      {
        productId: "V-018-P-006",
        productName: "Google Workspace Admin",
        capabilities: [],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-019", "PAM-020", "PAM-025", "PAM-026", "PAM-027"],
        notes: "Google's productivity suite admin controls — not a PAM product. Scope limited to Google Workspace applications (Gmail, Drive, Docs, Meet, etc.) and does not extend to GCP infrastructure or general enterprise access management. Admin controls: MFA enforcement for all users (TOTP, push, hardware keys, passkeys), SSO configuration, password policy enforcement (complexity, length, history, reuse prevention), account lockout settings, Admin Audit Log (tracks all admin actions), Drive Audit Log, Login Audit Log. Context-Aware Access for Workspace apps (BeyondCorp) adds device trust and location controls. Relevant for organizations where Workspace is a significant part of their privileged data environment. All capabilities are partial — narrowly scoped to Workspace application layer.",
        docsUrl: "https://support.google.com/a/topic/7570177"
      }
    ]
  },
  {
    vendorId: "V-019",
    vendorName: "IBM",
    products: [
      {
        productId: "V-019-P-001",
        productName: "IBM Verify",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-015", "PAM-017", "PAM-018"],
        partialCapabilities: ["PAM-004", "PAM-005", "PAM-011", "PAM-012", "PAM-019", "PAM-025", "PAM-026"],
        notes: "Unified IAM SaaS platform — Gartner MQ Leader for Access Management 2025, TrustRadius Buyer's Choice 2026. Core capabilities: SSO via SAML and OIDC, MFA including TOTP, push, hardware keys, adaptive risk-based authentication, user lifecycle governance, delegation, consent management, continuous audit. IBM Verify Gateway for RADIUS extends authentication to Unix/Linux SSH and other services. IBM Verify Bridge for Directory Sync integrates with on-premises directories. Blocking suspicious users via threat-based access policy. PAM-004 partial — adaptive MFA can enforce phishing-resistant methods but depends on policy configuration. PAM-011/PAM-012 partial — lifecycle governance included but full IGA requires IBM Verify Governance.",
        docsUrl: "https://www.ibm.com/products/verify"
      },
      {
        productId: "V-019-P-002",
        productName: "IBM Verify Privilege Vault",
        capabilities: ["PAM-005", "PAM-019", "PAM-020", "PAM-023", "PAM-024", "PAM-025", "PAM-026", "PAM-028", "PAM-029", "PAM-030", "PAM-031", "PAM-033"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-006", "PAM-007", "PAM-008", "PAM-009", "PAM-013", "PAM-014", "PAM-015", "PAM-021"],
        notes: "Formerly IBM Secret Server — explicitly labeled as such on ibm.com. This is Delinea Secret Server distributed and supported by IBM. Capability profile is identical to Delinea Secret Server On-Premises (V-001-P-001) and Secret Server Cloud (V-001-P-002). Core capabilities: encrypted credential vaulting, automated password rotation, session recording and proxying, privileged account discovery, checkout workflows, RBAC, dual control approvals, SIEM integration, compliance reporting. IBM ecosystem integration: connects with IBM Verify (SaaS) for MFA enforcement and IBM Verify Governance for unified lifecycle management. Available as on-premises or IBM-hosted cloud deployment.",
        docsUrl: "https://www.ibm.com/products/verify-privileged-identity"
      },
      {
        productId: "V-019-P-003",
        productName: "IBM Verify Privilege Manager",
        capabilities: ["PAM-004", "PAM-005", "PAM-009", "PAM-016"],
        partialCapabilities: ["PAM-006", "PAM-007", "PAM-008", "PAM-010", "PAM-019", "PAM-020", "PAM-021", "PAM-027"],
        notes: "Endpoint privilege management (PEDM) — rebranded Delinea Privilege Manager distributed by IBM. Capability profile mirrors Delinea Privilege Manager (V-001-P-007). Core capabilities: application control and allowlisting, least privilege enforcement on endpoints (Windows, macOS), privilege elevation workflows for specific applications, blocking unauthorized software execution, local admin account management. Identifies endpoints with administrative privileges. Reduces attack surface by removing standing local admin rights.",
        docsUrl: "https://www.ibm.com/products/verify-privileged-identity",
        addOnOf: "V-019-P-002"
      },
      {
        productId: "V-019-P-004",
        productName: "IBM Verify Governance",
        capabilities: ["PAM-011", "PAM-012", "PAM-022"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-007", "PAM-021", "PAM-035"],
        notes: "IGA platform — formerly IBM Security Identity Governance and Intelligence (IGI). Full identity lifecycle management for employees, business partners, customers, system IDs, robots, and IoT devices. Access certifications with SOD violation detection. Integration with Verify Privilege Vault for unified lifecycle management of privileged accounts — prevents toxic combinations of access across both privileged and standard business user accounts. Data Access Governance (DAG) integration. Available as SaaS and on-premises (IBM Security Verify On-Premises FlexPoints bundle).",
        docsUrl: "https://www.ibm.com/products/verify-governance"
      },
      {
        productId: "V-019-P-005",
        productName: "IBM Verify Identity Protection",
        capabilities: ["PAM-032"],
        partialCapabilities: ["PAM-008", "PAM-010", "PAM-016", "PAM-019", "PAM-020"],
        notes: "ITDR product — advanced identity threat detection and response with detailed contextual analysis across identity infrastructure. Monitors cloud IdPs, on-premises and hybrid directories, MFA solutions, SSO, and PAM solutions for identity-based threats. Detects: identity system misconfigurations, shadow assets, unauthorized local accounts, missing MFA enforcement, usage of unauthorized SaaS apps, hazardous deviations from identity policy. Identifies and enables remediation of identity-related vulnerabilities. IDC MarketScape 2025 recognized. Not a PAM product — detection and posture management only.",
        docsUrl: "https://www.ibm.com/products/verify-identity-protection"
      }
    ]
  },
  {
    vendorId: "V-020",
    vendorName: "Ping Identity",
    products: [
      {
        productId: "V-020-P-001",
        productName: "PingOne Advanced Identity Cloud",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-015", "PAM-017", "PAM-018"],
        partialCapabilities: ["PAM-004", "PAM-005", "PAM-011", "PAM-012", "PAM-019", "PAM-025", "PAM-026", "PAM-032"],
        notes: "Core SaaS IAM platform. Gartner MQ Leader for Access Management 9 consecutive years, top scores in Workforce, Partner, and Machine Access Management use cases in 2025 Critical Capabilities. Core capabilities: SSO via SAML and OIDC for thousands of applications, MFA including TOTP, push, FIDO2 hardware keys, passkeys, and biometrics, adaptive risk-based authentication via PingOne Protect (AI-driven risk signals, bot detection, deepfake threat detection, identity fraud), identity orchestration via PingOne DaVinci (no-code identity journey builder), identity verification (PingOne Verify), user lifecycle management with SCIM provisioning, password policy enforcement. PingOne Governance add-on provides full IGA: access certifications, lifecycle automation, SOD enforcement. PAM-004 partial — phishing-resistant MFA enforceable but depends on policy configuration. PAM-032 partial — PingOne Protect provides risk-based authentication signals and AI-driven ITDR-adjacent threat detection including agentic automation detection.",
        docsUrl: "https://docs.pingidentity.com/pingone/latest/"
      },
      {
        productId: "V-020-P-002",
        productName: "PingOne Privilege",
        capabilities: ["PAM-005", "PAM-007", "PAM-019", "PAM-020", "PAM-029", "PAM-030", "PAM-031", "PAM-033"],
        partialCapabilities: ["PAM-001", "PAM-003", "PAM-006", "PAM-013", "PAM-014", "PAM-015", "PAM-023"],
        notes: "JIT privileged access product — launched August 2025. Distinguishing architecture: credential-less runtime PAM with Zero Standing Privilege. ~95% of human privileged access use cases do not require static credentials per Ping's design philosophy — PingOne Privilege eliminates static credentials for those use cases and reserves vault integration only for break glass and bootstrap scenarios. Core capabilities: JIT time-bound access for cloud environments (AWS, GCP, Azure), on-premises servers, databases, Kubernetes, and other critical resources via self-service portal; Zero Standing Privilege — permissions granted only when needed and revoked automatically when the session ends; TPM-backed device assurance — cryptographic keys stored in tamper-resistant hardware on the endpoint, privileged sessions bound to trusted devices so stolen credentials cannot be replayed from unauthorized endpoints (distinguishing capability vs traditional PAM); agent-based deployments for deep session control (SSH, RDP, databases) and agentless for cloud console and CLI access; passwordless access — no credential exposure to end users; full session recording and audit trail; approval workflows. PAM-023 partial — vault integration present for break glass and bootstrap scenarios only, not the primary access model. PAM-013 partial — supports vendor/contractor JIT access but not a dedicated RPAM product.",
        docsUrl: "https://www.pingidentity.com/en/product/pingone-privilege.html",
        addOnOf: "V-020-P-001"
      },
      {
        productId: "V-020-P-003",
        productName: "PingFederate",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-015", "PAM-017", "PAM-018"],
        partialCapabilities: ["PAM-004", "PAM-005", "PAM-019", "PAM-025"],
        notes: "Enterprise federation server — self-managed on-premises deployment. Provides SSO via OAuth 2.0, OIDC, and SAML for organizations with on-premises requirements or strict data residency controls. Strong presence in regulated industries (banking, insurance, financial services, healthcare). Integrates with existing identity directories (AD, LDAP). MFA via integrated adapters or external MFA providers. PAM-004 partial — phishing-resistant enforcement depends on adapter configuration. Deployed by organizations that cannot use SaaS identity platforms due to regulatory or security requirements.",
        docsUrl: "https://docs.pingidentity.com/pingfederate/latest/"
      }
    ]
  },
  {
    vendorId: "V-021",
    vendorName: "ManageEngine",
    products: [
      {
        productId: "V-021-P-001",
        productName: "ManageEngine PAM360",
        capabilities: ["PAM-005", "PAM-007", "PAM-008", "PAM-009", "PAM-013", "PAM-016", "PAM-019", "PAM-020", "PAM-021", "PAM-023", "PAM-024", "PAM-025", "PAM-026", "PAM-028", "PAM-029", "PAM-030", "PAM-031", "PAM-033"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-004", "PAM-006", "PAM-010", "PAM-014", "PAM-015", "PAM-017", "PAM-027", "PAM-032"],
        notes: "Full-stack unified PAM platform — single product covering credential vaulting, JIT access, endpoint privilege management, session recording, CIEM, and certificate lifecycle management. Every capability built organically from scratch; no acquired products in the codebase. Deployment: on-premises, cloud, or hybrid; most enterprises fully deployed in four weeks or less. Core capabilities: Enterprise Credential Vault — encrypted vaulting with automated rotation and zero credential exposure to users or applications; JIT Privilege Elevation and Zero Standing Privilege — time-bound, policy-based, purpose-specific access with ZSP model; Endpoint Privilege Management (EPM) — removes local admin rights, application allowlisting/blocklisting, child process controls; Privilege Elevation and Delegation Management (PEDM) — application and command-level controls for Windows and Linux; Session Recording — real-time recording archived as searchable video files; Session Shadowing — dual control, supervisors can shadow or terminate sessions in real time; Proxied Remote Access — RDP, VNC, SSH, SQL, and web sessions proxied through PAM360 (users never directly reach target systems); Continuous Discovery — automatic discovery, onboarding, and management of all privileged accounts and resources; CIEM — cloud permissions management and remediation across AWS, Azure, and GCP; Certificate Lifecycle Management (CLM) — SSL/TLS certificates, SSH keys, PGP keys end-to-end lifecycle; UEBA — AI/ML-driven anomaly detection for privileged user behavior; Zero Trust Controls — real-time trust scoring for users and devices, policy-based access control (PBAC); ITSM Integration — ticket ID validation gates credential retrieval to verified service requests; Compliance Reporting — built-in reports for NIST, PCI-DSS, FISMA, HIPAA, SOX, ISO/IEC 27001, NIS2, GDPR, NERC CIP. Integrates with ManageEngine SIEM, ITSM, IGA, and over 800 business applications via Zoho Flow. PAM-001-003 partial — MFA via integrated 2FA adapters (Duo, TOTP, etc.) not native MFA. PAM-032 partial — UEBA/anomaly detection built in but not a dedicated ITDR product.",
        docsUrl: "https://www.manageengine.com/privileged-access-management/help/"
      }
    ]
  },
  {
    vendorId: "V-022",
    vendorName: "Rapid7",
    products: [
      {
        productId: "V-022-P-001",
        productName: "Rapid7 InsightIDR",
        capabilities: ["PAM-019", "PAM-020", "PAM-021"],
        partialCapabilities: ["PAM-008", "PAM-010", "PAM-032"],
        notes: "Cloud-native SIEM and XDR — being rebranded as Incident Command. Collects and correlates security telemetry from endpoints, network, cloud, and identity sources including Microsoft Entra ID (integrated November 2025), PAM platforms, and AD. Core PAM-relevant capabilities: UEBA detects lateral movement, privilege abuse, anomalous access patterns, watched/admin-led password resets, and suspicious authentication activity; User Behavior Analytics (UBA) rules unified into Detection Rule Library; identity posture integration (April 2026) enables pivot from SIEM alert to identity profile showing MFA status, account risk, and group memberships; AI-driven alert triage and dynamic exposure scoring prioritizes high-risk identity events; automated containment of compromised users and assets. PAM-032 partial — strong UEBA for privileged user behavioral analytics but not dedicated ITDR. PAM-008 partial — identity posture visibility identifies accounts with risky configurations. Like Splunk and Google Security Operations, value is entirely dependent on which log sources are connected.",
        docsUrl: "https://docs.rapid7.com/insightidr/"
      },
      {
        productId: "V-022-P-002",
        productName: "Rapid7 InsightCloudSec",
        capabilities: ["PAM-008"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-016", "PAM-017", "PAM-019"],
        notes: "Cloud security platform — CSPM and CIEM across AWS, Azure, and GCP. Continuously identifies misconfigurations, excessive permissions, and risky cloud entitlements. Risk-aware compliance experience maps findings to compliance frameworks. Remediation Hub prioritizes cloud misconfigurations by asset group. GCP Security Command Center integration. PAM-016 partial — identifies privilege escalation paths in cloud environments but detection only. Integrates with InsightIDR for combined cloud security and SIEM workflows.",
        docsUrl: "https://docs.rapid7.com/insightcloudsec/"
      }
    ]
  },
  {
    vendorId: "V-023",
    vendorName: "Quest Software",
    products: [
      {
        productId: "V-023-P-001",
        productName: "Quest ChangeAuditor",
        capabilities: ["PAM-019", "PAM-020", "PAM-021", "PAM-032"],
        partialCapabilities: ["PAM-008", "PAM-010", "PAM-015", "PAM-016"],
        notes: "Real-time AD and hybrid Microsoft environment change auditing — covers AD, Entra ID, Exchange, Office 365, SharePoint, SQL Server, and file servers. Core distinguishing capabilities: captures audit data WITHOUT relying on native Windows event logs — a privileged user clearing the event log cannot defeat ChangeAuditor's audit trail (different technical approach from Semperis DSP replication stream; both close the same gap via different methods); Protection Templates actively block malicious changes to critical groups, GPO settings, and AD-database exfiltration even from hijacked privileged accounts — prevention, not just detection; Threat Detection module uses unsupervised ML and behavior correlation to model individual user patterns and detect anomalous activity including brute force, lateral movement, and compromised account indicators; tamper-evident normalized audit events in who-what-when-where format with originating workstation and before/after values; account lockout detection with originating IP and workstation, related logon attempt timeline; forensic threat timelines correlating change events with other security events chronologically; SIEM integration with Splunk, ArcSight, and QRadar. Integrates with Active Roles (One Identity) for initiator attribution on delegated AD changes. PAM-019 full — tamper-evident audit trail not dependent on native event logs. PAM-032 full — Threat Detection module with ML behavioral analytics and IOC detection. PAM-016 partial — identifies risky privilege configurations and blocks critical object modification but does not enforce general least privilege access controls.",
        docsUrl: "https://www.quest.com/change-auditor/"
      }
    ]
  },
  {
    vendorId: "V-024",
    vendorName: "ARCON",
    products: [
      {
        productId: "V-024-P-001",
        productName: "ARCON PAM",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-005", "PAM-007", "PAM-008", "PAM-009", "PAM-013", "PAM-015", "PAM-019", "PAM-020", "PAM-021", "PAM-023", "PAM-024", "PAM-025", "PAM-026", "PAM-027", "PAM-028", "PAM-029", "PAM-030", "PAM-031", "PAM-033"],
        partialCapabilities: ["PAM-004", "PAM-006", "PAM-010", "PAM-014", "PAM-017", "PAM-018", "PAM-032"],
        notes: "Full-stack PAM platform available on-premises and SaaS. Core capabilities: Digital Vault (encrypted credential vaulting), password rotation and management, session recording and monitoring for RDP, SSH, Telnet, and web applications, JIT access, built-in dual-factor MFA plus integrations with Google Authenticator, Microsoft Authenticator, biometrics, hardware tokens, facial recognition, SMS/email OTP, SSO with 200+ plug-and-play connectors supporting OAuth 2.0, OIDC, and SAML, RBAC, auto-discovery of privileged accounts from AD, AWS, Azure, and GCP, remote access via secure web gateways (VPN-less), ITSM integration with ticketing workflows, DevOps and CI/CD pipeline integration, database monitoring via TDS Proxy (captures all SQL queries and transactions), behavioral analytics and ITDR capabilities, compliance-ready reporting for PCI-DSS, HIPAA, SOX, dual control approvals, break glass. Trusted by banking organizations, government agencies, and healthcare chains. PAM-004 partial — phishing-resistant MFA enforcement depends on configured MFA methods. PAM-032 partial — behavioral analytics and anomaly detection included but not a dedicated ITDR product.",
        docsUrl: "https://arconnet.com/privileged-access-management/"
      },
      {
        productId: "V-024-P-002",
        productName: "ARCON EPM",
        capabilities: ["PAM-005", "PAM-009", "PAM-016"],
        partialCapabilities: ["PAM-006", "PAM-007", "PAM-008", "PAM-019", "PAM-020", "PAM-027"],
        notes: "Endpoint Privilege Management — continuously learning and adaptive endpoint protection. Removes unnecessary local admin rights, enforces least privilege at endpoints, application controls (allowlisting/blocklisting), privilege elevation workflows for specific applications. Integrates with ARCON PAM for unified privileged identity governance across infrastructure and endpoints.",
        docsUrl: "https://arconnet.com/"
      }
    ]
  },
  {
    vendorId: "V-025",
    vendorName: "Cisco Duo",
    products: [
      {
        productId: "V-025-P-001",
        productName: "Cisco Duo",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-004", "PAM-015", "PAM-017", "PAM-018", "PAM-025", "PAM-026", "PAM-027"],
        partialCapabilities: ["PAM-005", "PAM-008", "PAM-010", "PAM-019", "PAM-032"],
        notes: "MFA-first identity security platform. Core capabilities: phishing-resistant MFA (FIDO2, WebAuthn, hardware keys — distinguishing capability), Duo Push (mobile app-based approval), OTP, biometrics, passwordless authentication (single gesture replacing password + MFA), SSO via cloud-hosted identity provider (SAML, OIDC) with Duo Central, Duo Directory (standalone cloud directory for primary authentication), Device Trust (differentiates corporate vs personal devices, blocks access from unmanaged devices), adaptive access policies based on user identity, device health, network context, geographic location, and risk signals, Duo Passport (continuous authentication throughout session), ITDR and ISPM capabilities (Premier edition) detecting identity-based threats. Integrates with on-premises legacy systems, VPNs, AD, SaaS tools, custom applications, and offline devices. PAM-004 full — phishing-resistant FIDO2 enforcement available and anti-bypass policies configurable. Does not provide credential vaulting, session recording, account discovery, password rotation, or JIT access — those require a separate PAM product. Duo is the most commonly used MFA layer in front of PAM vaults (most PAM vendors list Duo as a first-tier integration).",
        docsUrl: "https://duo.com/docs"
      }
    ]
  },
  {
    vendorId: "V-026",
    vendorName: "Omada",
    products: [
      {
        productId: "V-026-P-001",
        productName: "Omada Identity Cloud",
        capabilities: ["PAM-011", "PAM-012", "PAM-022"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-007", "PAM-021", "PAM-035"],
        notes: "Cloud-native SaaS IGA platform. Full-featured identity governance covering: lifecycle management (joiner-mover-leaver automation), access certifications and attestation campaigns, access request workflows with approval routing, SOD policy enforcement, intelligent compliance, NHI governance, provisioning and deprovisioning across hybrid platforms (on-premises, cloud, SaaS). High configurability without code using best-practice framework. Manages identities and access across hybrid environments. Strong in European regulated industries. Governance for Identity Fabric. Does not provide MFA, credential vaulting, session recording, or infrastructure PAM controls.",
        docsUrl: "https://omadaidentity.com/resources/product_news/"
      },
      {
        productId: "V-026-P-002",
        productName: "Omada Identity On-Premises",
        capabilities: ["PAM-011", "PAM-012", "PAM-022"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-007", "PAM-021", "PAM-035"],
        notes: "On-premises deployment of Omada Identity — full feature parity with Omada Identity Cloud. Complete tenant ownership and enforceable data boundaries. Designed for regulated enterprises and government organizations with strict data residency requirements. Same governance capabilities as cloud version: lifecycle management, certifications, SOD, access requests, NHI governance.",
        docsUrl: "https://omadaidentity.com/"
      }
    ]
  },
  {
    vendorId: "V-027",
    vendorName: "Exabeam",
    products: [
      {
        productId: "V-027-P-001",
        productName: "Exabeam Security Operations Platform",
        capabilities: ["PAM-019", "PAM-020", "PAM-021", "PAM-032"],
        partialCapabilities: ["PAM-008", "PAM-010"],
        notes: "Cloud-native SIEM with integrated UEBA and SOAR (Fusion edition). Covers New-Scale SIEM and Exabeam Fusion. Core capabilities: scalable log collection from 680+ product integrations across 350+ vendors, 190+ pre-built correlation rules, AI-driven behavioral analytics with automated investigation timelines, MITRE ATT&CK coverage (199 techniques, 379 sub-techniques), risk-based alert prioritization, SOAR-driven playbooks, Agent Behavior Analytics (ABA) for AI agent monitoring, peer group analysis (compares user activity against role-based peer groups), Threat Center and Outcomes Navigator for benchmarking SOC performance. PAM-032 full — industry-leading UEBA detects insider threats, lateral movement, credential misuse, privilege abuse, and anomalous privileged access patterns. PAM-008 partial — identifies accounts with risky or anomalous access patterns. PAM-010 partial — detects dormant account activity anomalies. Value is dependent on what log sources are connected. Also available as LogRhythm SIEM for on-premises deployments (same core UEBA capabilities).",
        docsUrl: "https://www.exabeam.com/product/"
      },
      {
        productId: "V-027-P-002",
        productName: "Exabeam New-Scale Analytics",
        capabilities: ["PAM-032"],
        partialCapabilities: ["PAM-008", "PAM-010", "PAM-019", "PAM-020"],
        notes: "Standalone UEBA add-on — the only UEBA product that runs on top of a third-party SIEM or data lake (Splunk, QRadar, Microsoft Sentinel, etc.) without replacing it. Ingests, parses, and normalizes data using a Common Information Model (CIM). Builds behavioral baselines and uses ML to detect anomalies. Risk-based scoring highlights suspicious privileged access and credential misuse. Automated investigation timelines correlate related events. Customers can add Exabeam's behavioral analytics to their existing SIEM investment without migration.",
        docsUrl: "https://www.exabeam.com/product/"
      }
    ]
  },
  {
    vendorId: "V-028",
    vendorName: "Elastic Security",
    products: [
      {
        productId: "V-028-P-001",
        productName: "Elastic Security",
        capabilities: ["PAM-019", "PAM-020", "PAM-021", "PAM-032"],
        partialCapabilities: ["PAM-008", "PAM-010"],
        notes: "Unified SIEM, XDR, and SOAR platform. Single contract includes all three without add-on fees. Core capabilities: any-source data ingestion with automatic schema mapping, built-in detection rules from Elastic Security Labs mapped to MITRE ATT&CK, AI-powered agentic security operations (autonomous agents for correlation, enrichment, and investigation), UEBA as native SIEM component (advanced entity analytics — not a bolt-on), risk-based entity scoring with organizational context via Entity Analytics Watchlists (inject custom risk weightings for high-value entities like privileged admins, departing employees), Elastic Workflows for automated response, generative AI security assistant, SIEM migration support converting Splunk and QRadar detection rules automatically. Open platform — no data rehydration fees, any LLM including on-prem models for air-gapped environments. PAM-032 full — advanced entity analytics natively integrated with risk scoring, behavioral baselining, and Watchlists for privileged user monitoring. PAM-008 partial — entity risk scoring surfaces over-privileged and anomalous accounts. Value dependent on data source connections.",
        docsUrl: "https://www.elastic.co/security"
      }
    ]
  },
  {
    vendorId: "V-029",
    vendorName: "SpecterOps",
    products: [
      {
        productId: "V-029-P-001",
        productName: "BloodHound Enterprise",
        capabilities: ["PAM-008", "PAM-016"],
        partialCapabilities: ["PAM-005", "PAM-010", "PAM-017", "PAM-019", "PAM-020", "PAM-021"],
        notes: "Identity Attack Path Management (APM) platform — distinct from PAM, IGA, and ITDR. Continuously maps and prioritizes identity attack paths to mission-critical Tier 0 assets in AD, Entra ID, and (2026) Okta, GitHub, macOS/Jamf via OpenGraph extensions. Core distinguishing capabilities: attack path graph analysis — maps every privilege relationship, trust, and inheritance chain (not just assigned permissions) to reveal how attackers chain access across identities; automated choke point analysis quantifies impact of each remediation and identifies which fixes break the highest percentage of attack paths; Privilege Zones segment critical assets and enforce segmentation by visualizing all attack paths into those zones; risk exposure scoring — most organizations start at 70-100% exposure, goal is below 20%; SIEM/SOAR integrations — BloodHound attack path data enriches Microsoft Sentinel, Palo Alto Cortex XSOAR, and ServiceNow VRM with identity context. Available as SaaS and on-premises (air-gapped environments). PAM-008 full — discovers all privileged identities and the attack paths through which they can reach Tier 0 assets. PAM-016 full — identifies every privilege escalation path and quantifies remediation impact. Does not provide credential vaulting, session recording, MFA, or access control — proactive attack surface reduction only. BloodHound CE (free open source tool) is the community edition and will be covered in the freeware section.",
        docsUrl: "https://specterops.io/bloodhound-enterprise/"
      }
    ]
  },
  {
    vendorId: "V-030",
    vendorName: "SentinelOne",
    products: [
      {
        productId: "V-030-P-001",
        productName: "SentinelOne Singularity Identity",
        capabilities: ["PAM-032"],
        partialCapabilities: ["PAM-008", "PAM-010", "PAM-016", "PAM-017", "PAM-019", "PAM-020"],
        notes: "ITDR integrated with SentinelOne's Singularity XDR platform — derived from Attivo Networks acquisition. Unifies identity and endpoint protection in a single agent and platform. Core capabilities: proactive exposure discovery — continuously uncovers misconfigurations and vulnerabilities in AD, Entra ID, Okta, and Ping Identity; real-time attack detection — detects credential-based attacks, lateral movement, privilege escalation, and directory attacks as they happen; advanced deception technology (honeypots and decoy credentials that attract and expose attackers — Attivo heritage distinguishing capability); automated remediation of identity exposures; NHI security (service accounts, AI agents) expanded in 2026; endpoint + identity correlation provides context ITDR tools without endpoint visibility lack. Singularity Identity for Identity Providers covers AD, Entra ID, Okta, Ping Identity. Not a PAM product — does not vault credentials, record sessions, or manage access. Detection and posture management only.",
        docsUrl: "https://www.sentinelone.com/platform/identity/"
      }
    ]
  },
  {
    vendorId: "V-031",
    vendorName: "Tenable",
    products: [
      {
        productId: "V-031-P-001",
        productName: "Tenable Identity Exposure",
        capabilities: ["PAM-032"],
        partialCapabilities: ["PAM-008", "PAM-010", "PAM-016", "PAM-017", "PAM-019"],
        notes: "Identity Security Posture Management (ISPM) for AD, Entra ID, and Okta — formerly Tenable AD. Key distinguishing architectural capability: does NOT require deployment on domain controllers, endpoints, or Entra ID environments — agentless, requires only a standard user account. This significantly reduces deployment complexity and attack surface compared to solutions requiring DC sensors. Two core detection layers: Indicators of Exposure (IoEs) — continuously measures security maturity and identifies misconfigurations, excessive privileges, risky trust relationships, and insecure configurations before attackers exploit them; Indicators of Attack (IoAs) — detects active attack techniques in real-time including DCShadow, DCSync, Brute Force, Password Spraying, Golden Ticket, Kerberoasting, and lateral movement. Integrates with Tenable's broader Exposure Management platform for unified vulnerability and identity risk view. SIEM integration — IoA Attack IDs exported via Syslog for cross-reference. Available as SaaS and on-premises. PAM-032 full — real-time attack detection with IoAs. PAM-016 partial — identifies privilege escalation paths but detection and posture only, no enforcement.",
        docsUrl: "https://docs.tenable.com/identity-exposure/"
      },
      {
        productId: "V-031-P-002",
        productName: "Tenable CIEM",
        capabilities: ["PAM-008"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-016", "PAM-017"],
        notes: "Cloud Infrastructure Entitlement Management — acquired Ermetic in 2023, now part of Tenable CNAPP platform. Provides visibility into all identities (IAM, federated, third-party), entitlements, resources, and configurations across AWS, Azure, and GCP. Enforces least privilege using built-in and custom templates. Identifies riskiest permissions and misconfigurations across identity, network, compute, and data resources.",
        docsUrl: "https://www.tenable.com/products/tenable-ciem"
      }
    ]
  },
  {
    vendorId: "V-032",
    vendorName: "Segura",
    products: [
      {
        productId: "V-032-P-001",
        productName: "Segura PAM Core",
        capabilities: ["PAM-005", "PAM-007", "PAM-008", "PAM-009", "PAM-013", "PAM-015", "PAM-019", "PAM-020", "PAM-021", "PAM-023", "PAM-024", "PAM-025", "PAM-026", "PAM-027", "PAM-029", "PAM-030", "PAM-031", "PAM-033"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-006", "PAM-010", "PAM-014", "PAM-017", "PAM-032"],
        notes: "Full-stack PAM platform — available as on-premises software and SaaS. Core capabilities: agentless credential vaulting, automated password rotation with 174+ system connectors, session recording with full-color video and metadata, JIT access, approval workflows (four-eyes principle), account discovery and onboarding, RBAC, break glass, SSH key management, AAPM (Application-to-Application Password Management), remote access proxying, compliance-ready automated reporting (PCI DSS, SOX, ISO 27001, HIPAA, NIST, GDPR, SAMA, NCA, NTC). Quantum Connector enables unified coverage across cloud providers, OT environments (ICS/SCADA), IoT devices, and on-premises systems — distinguishing capability for industrial and critical infrastructure environments. AI-driven auditing and session analysis features. Quick deployment — customers report same-day operationality. Highest customer growth rate among all 12 vendors in the 2025 Gartner MQ.",
        docsUrl: "https://segura.security/products/privileged-access-management/"
      },
      {
        productId: "V-032-P-002",
        productName: "Segura Endpoint Privilege Manager",
        capabilities: ["PAM-005", "PAM-009", "PAM-016"],
        partialCapabilities: ["PAM-006", "PAM-007", "PAM-008", "PAM-019", "PAM-020"],
        notes: "Endpoint privilege management (PEDM) for workstations and servers. Removes unnecessary local admin rights, application allowlisting/blocklisting, privilege elevation workflows.",
        docsUrl: "https://segura.security/products/"
      },
      {
        productId: "V-032-P-003",
        productName: "Segura DevOps Secret Manager",
        capabilities: ["PAM-023", "PAM-024", "PAM-028"],
        partialCapabilities: ["PAM-006", "PAM-019", "PAM-021"],
        notes: "Secrets management for DevOps and CI/CD pipelines. Scan Discovery for secrets sprawl detection. Centralized secrets lifecycle management with full audit trail. Compatible with all major operating systems, web applications, network devices, databases, directory systems, mobile devices, and browsers.",
        docsUrl: "https://segura.security/products/devops-secret-manager/"
      }
    ]
  },
  {
    vendorId: "V-033",
    vendorName: "WALLIX",
    products: [
      {
        productId: "V-033-P-001",
        productName: "WALLIX Bastion",
        capabilities: ["PAM-005", "PAM-007", "PAM-009", "PAM-015", "PAM-019", "PAM-020", "PAM-021", "PAM-023", "PAM-024", "PAM-025", "PAM-026", "PAM-027", "PAM-029", "PAM-030", "PAM-033"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-006", "PAM-008", "PAM-010", "PAM-014", "PAM-017", "PAM-031", "PAM-032"],
        notes: "Core PAM product — the foundation of the WALLIX One platform. Available on-premises, SaaS (hosted on Microsoft Azure, ISO/IEC 27001 certified), and hardware appliance. Three integrated components: Session Manager (authenticated users granted access to authorized targets only, full-color video audit trail with transcript and metadata), Password Manager (encrypted vault AES-256, password complexity management, rotation, SSH key rotation, AAPM for application-to-application credential management, check-in/check-out), Access Manager (access request workflows, approval routing, role-based access governance). Covers IT and OT environments — IEC 62443 compliant for industrial control systems and SCADA. WALLIX One Console provides centralized management for large and distributed environments. BSI (Germany) and ANSSI (France) certified. Strong NIS2 and DORA compliance capabilities for European regulated organizations. Acquired Malizen for AI-driven behavioral anomaly detection in 2025. PAM-031 partial — JIT via approval workflows and time-limited access grants, not zero standing privilege architecture. PAM-032 partial — Malizen integration adds AI anomaly detection capabilities.",
        docsUrl: "https://www.wallix.com/products/privileged-access-management/"
      },
      {
        productId: "V-033-P-002",
        productName: "WALLIX Remote Access",
        capabilities: ["PAM-013", "PAM-015", "PAM-019", "PAM-020", "PAM-033"],
        partialCapabilities: ["PAM-001", "PAM-003", "PAM-030"],
        notes: "Dedicated secure remote access for vendors, contractors, and third-party providers. VPN-less access with full session monitoring and auditing. Controls privileged access for external parties without exposing the internal network. Session recording for third-party activity. MFA enforced via WALLIX IDaaS or integrated IdP.",
        docsUrl: "https://www.wallix.com/products/"
      },
      {
        productId: "V-033-P-003",
        productName: "WALLIX IDaaS",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-015", "PAM-017", "PAM-018"],
        partialCapabilities: ["PAM-004", "PAM-025", "PAM-026"],
        notes: "Identity-as-a-Service — cloud-hosted SSO and MFA. Centralizes and encrypts sensitive identity data for secure sharing. SAML, OIDC support. MFA methods including hardware tokens, OTP, push. Streamlines access across applications while enforcing consistent authentication policies.",
        docsUrl: "https://www.wallix.com/products/"
      }
    ]
  },
  {
    vendorId: "V-034",
    vendorName: "Securonix",
    products: [
      {
        productId: "V-034-P-001",
        productName: "Securonix Unified Defense SIEM",
        capabilities: ["PAM-019", "PAM-020", "PAM-021", "PAM-032"],
        partialCapabilities: ["PAM-008", "PAM-010"],
        notes: "Cloud-native Unified Defense SIEM — SIEM, UEBA, SOAR, and TIP in one platform, no separate module fees. Core capabilities: unlimited-scale data ingestion on Snowflake and AWS, advanced behavioral analytics (UEBA) with 3,000+ ML models, risk-based scoring and peer group analysis, Agentic Mesh (AI agents that coordinate detection, investigation, and response across the threat lifecycle with human-in-the-loop oversight), ThreatQuotient-powered threat intelligence integration, MITRE ATT&CK-aligned use case content, automated investigation and response playbooks, compliance reporting. Distinguishing pricing model: DPM Flex (flexible consumption with no per-volume surprises). PAM-032 full — deep UEBA with insider threat, credential misuse, anomalous privilege access detection. PAM-008 partial — surfaces over-privileged or anomalous account behavior. UEBA can also be deployed standalone on top of an existing SIEM (see V-034-P-002).",
        docsUrl: "https://www.securonix.com/products/siem-solutions/"
      },
      {
        productId: "V-034-P-002",
        productName: "Securonix UEBA",
        capabilities: ["PAM-032"],
        partialCapabilities: ["PAM-008", "PAM-010", "PAM-019", "PAM-020"],
        notes: "Standalone UEBA add-on deployable on top of any existing SIEM without replacement. Monitors privileged access anomalies, insider threats, credential misuse, and lateral movement using ML behavioral models. Risk-based scoring prioritizes high-risk identities. Can integrate with downstream SIEM, SOAR, and ticketing platforms. Patented identity-based pricing (per user, not per data volume).",
        docsUrl: "https://www.securonix.com/products/ueba/"
      }
    ]
  },
  {
    vendorId: "V-035",
    vendorName: "CrowdStrike",
    products: [
      {
        productId: "V-035-P-001",
        productName: "CrowdStrike Falcon Next-Gen SIEM",
        capabilities: ["PAM-019", "PAM-020", "PAM-021", "PAM-032"],
        partialCapabilities: ["PAM-008", "PAM-010"],
        notes: "Cloud-native Next-Gen SIEM integrated natively with the Falcon platform — 150x faster search than legacy SIEMs, over 1PB/day data ingestion. Core capabilities: unified data ingestion from endpoints, identity, cloud, SaaS, and network via single Falcon sensor, AI-driven correlation and detection, Charlotte AI Agentic Detection Triage (autonomously analyzes and prioritizes detections), Falcon Fusion SOAR (1,500+ automated actions), identity-driven case management correlating cross-domain detections in real time, MITRE ATT&CK coverage. Distinguishing capability: identity + endpoint telemetry combined in one platform — behavioral detections have both endpoint and identity context simultaneously, which standalone SIEMs cannot match natively.",
        docsUrl: "https://www.crowdstrike.com/en-us/platform/next-gen-siem/"
      },
      {
        productId: "V-035-P-002",
        productName: "CrowdStrike Falcon Next-Gen Identity Security",
        capabilities: ["PAM-004", "PAM-015", "PAM-031", "PAM-032"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-005", "PAM-008", "PAM-010", "PAM-016", "PAM-017", "PAM-019", "PAM-020"],
        notes: "Unified identity security solution launched August 2025 — combines initial access prevention, JIT privileged access, ITDR, and SaaS identity security in one platform. Key components: Falcon Identity Protection (ITDR for AD, Entra ID, Okta — real-time detection of credential theft, lateral movement, privilege escalation); Falcon Privileged Access (JIT access GA April 2025 — eliminates standing privileges, dynamically grants and revokes access using real-time endpoint and identity telemetry, risk-aware access decisions, automates MFA enforcement and AD actions via SOAR); FalconID (FIDO2 phishing-resistant passwordless MFA announced Sept 2025); SaaS Identity Security (misconfigurations, risky behaviors, overprovisioned NHI access). Delivered through single Falcon sensor and single console. PAM-031 full — JIT with zero standing privilege is core Falcon Privileged Access design. PAM-004 full via FalconID FIDO2 MFA enforcement. Not a full PAM vault — no credential vaulting, session recording proxy, or password rotation. Positioned as a modern alternative to traditional PAM for organizations already on the Falcon platform.",
        docsUrl: "https://www.crowdstrike.com/en-us/platform/next-gen-identity-security/"
      }
    ]
  },
  {
    vendorId: "V-036",
    vendorName: "Gurucul",
    products: [
      {
        productId: "V-036-P-001",
        productName: "Gurucul Next-Gen SIEM",
        capabilities: ["PAM-019", "PAM-020", "PAM-021", "PAM-032"],
        partialCapabilities: ["PAM-008", "PAM-010"],
        notes: "Full Next-Gen SIEM platform with UEBA natively at the foundation — not bolted on. Core capabilities: 3,000+ ML models for behavioral analytics, open big data architecture (not proprietary black box), link chain analysis (automatically stitches threat context into a complete evidence case), dynamic risk scoring 0-100 normalized in real-time, peer group analysis, SOAR automation with customizable playbooks, MITRE ATT&CK framework mapping (83% coverage), Identity & Access Analytics module specifically targeting privilege misuse, open architecture integration via FlexConnector framework. Gurucul Studio — only tool on market allowing security teams to build custom ML behavior models with drag-and-drop. Flexible deployment: cloud-native SaaS or integration with Snowflake as data lake. PAM-032 full — UEBA-native platform with specific privileged access intelligence and insider threat detection models.",
        docsUrl: "https://gurucul.com/products/next-gen-siem/"
      },
      {
        productId: "V-036-P-002",
        productName: "Gurucul UEBA",
        capabilities: ["PAM-032"],
        partialCapabilities: ["PAM-005", "PAM-008", "PAM-010", "PAM-019", "PAM-020"],
        notes: "Standalone UEBA deployable on top of existing SIEMs. 3,000+ ML models, dynamic risk scoring, peer baselining, link chain analysis. Specifically monitors privileged account anomalies including unusual access outside baseline, data hoarding, lateral movement, and credential changes. Integrates with IAM systems to verify that access privileges are being used appropriately.",
        docsUrl: "https://gurucul.com/products/user-and-entity-behavior-analytics-ueba/"
      },
      {
        productId: "V-036-P-003",
        productName: "Gurucul AI-IRM",
        capabilities: ["PAM-032"],
        partialCapabilities: ["PAM-005", "PAM-008", "PAM-010", "PAM-016", "PAM-019"],
        notes: "AI Insider Risk Management — launched September 2025. Industry's first natively converged insider threat platform combining UEBA, Identity & Access Analytics, intelligent DLP, external risk indicators, and AI-Insider Analyst. Reduces insider risk by 50%+ by minimizing identity and access threat surface. AI-Insider Analyst automates alert triage with bias-free risk scoring. Integrates SOAR-driven playbooks for isolating risky users, revoking access, and blocking exfiltration. Covers human insiders, contractors, NHIs, and AI agents.",
        docsUrl: "https://gurucul.com/press-releases/gurucul-announces-ai-insider-risk-management/"
      }
    ]
  },
  {
    vendorId: "V-037",
    vendorName: "Fortinet",
    products: [
      {
        productId: "V-037-P-001",
        productName: "FortiSIEM",
        capabilities: ["PAM-019", "PAM-020", "PAM-021"],
        partialCapabilities: ["PAM-008", "PAM-010", "PAM-032"],
        notes: "Full-featured SIEM with unique IT/OT convergence capabilities. Core capabilities: unified IT and OT event collection and correlation, built-in CMDB with automatic asset discovery and performance monitoring (distinguishing capability — eliminates the need for a separate CMDB), AI-driven detection analytics with UEBA powered by FortiGuard threat intelligence, native SOAR automation (FortiSOAR integration and built-in playbooks), agentic AI investigation assistant (v7.5), link graph technology for visualizing relationships between users, devices, and incidents, MITRE ATT&CK mapping, compliance reporting. Flexible deployment: SaaS, cloud, on-premises, and hardware appliance. Free Windows agent for IT/OT endpoint monitoring (v7.5). Federated data lake search across independent data sources. PAM-032 partial — UEBA capabilities present but narrower behavioral analytics depth than dedicated UEBA Leaders. Fortinet Security Fabric customers benefit from native integration across FortiGate firewalls, FortiNAC, FortiEDR — richer correlated context than SIEM-only deployments.",
        docsUrl: "https://www.fortinet.com/products/siem/fortisiem"
      }
    ]
  },
  {
    vendorId: "V-038",
    vendorName: "Palo Alto Networks",
    products: [
      {
        productId: "V-038-P-001",
        productName: "Cortex XSIAM",
        capabilities: ["PAM-019", "PAM-020", "PAM-021", "PAM-032"],
        partialCapabilities: ["PAM-008", "PAM-010", "PAM-015", "PAM-017"],
        notes: "AI-powered SecOps platform — SIEM, XDR, SOAR, ASM, TIP, CDR, and ITDR unified in a single platform. Positioned as a SIEM replacement rather than a traditional SIEM. Core capabilities: Precision AI-powered log management, correlation, and alerting (all common SIEM functions); XDR for endpoint, cloud, and network threat detection; Cortex XSOAR SOAR integration (600+ integrations, 800+ prebuilt playbooks, GenAI assistance); Attack Surface Management (ASM); Threat Intelligence Platform; AgentiX agentic AI framework trained on 1.2B real-world playbook executions; intelligent alert stitching reducing thousands of alerts to high-priority incidents; ITDR capabilities (identity threat detection and response). QRadar migration path: no-cost migration services via IBM Consulting for eligible former QRadar SaaS customers. PAM-032 full — behavioral analytics and identity threat detection via ITDR capabilities. PAM-015 partial — MFA enforcement through policy, not a native MFA provider. Customers on Palo Alto's broader platform (Prisma Access, Strata NGFW) gain richer correlated context.",
        docsUrl: "https://www.paloaltonetworks.com/cortex/cortex-xsiam"
      }
    ]
  },
  {
    vendorId: "V-039",
    vendorName: "RSA",
    products: [
      {
        productId: "V-039-P-001",
        productName: "RSA ID Plus",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-004", "PAM-015", "PAM-017", "PAM-018"],
        partialCapabilities: ["PAM-005", "PAM-008", "PAM-010", "PAM-019", "PAM-025", "PAM-026", "PAM-032"],
        notes: "Hybrid IAM platform — cloud, hybrid, and on-premises deployment in a single product. Available in tiers: E0 (cloud-only), E1 (hybrid MFA + basic access), E2 (hybrid + adaptive + SSO), E3 (full platform). Distinguishing capabilities: hybrid failover — RSA ID Plus maintains MFA authentication during Microsoft Entra cloud outages (unique in the market); broadest passwordless coverage — FIDO2, QR codes, biometrics, hardware tokens, mobile passkeys, OTP, PKI/CBA, all supporting offline/air-gapped/legacy environments including OT systems, mainframes, macOS, and AD-joined devices that Microsoft Entra cannot reach natively; RSA Help Desk Live Verify — patent-pending technology that stops MFA bypass attacks targeting IT help desk personnel; RSA Risk AI — adaptive access security assessing user risk before granting access; RSA Mobile Lock — detects threats to mobile devices and blocks authentication until resolved; ISPM (Identity Security Posture Management) capabilities; Microsoft integration: RSA ID Plus for Microsoft M1 is a dedicated add-on to Microsoft Entra ID on Azure Marketplace. Trusted by banks, hospitals, government agencies, and power plants. PAM-004 full — phishing-resistant FIDO2, hardware tokens, and PKI/CBA. PAM-032 partial — Risk AI and threat intelligence provide behavioral risk scoring.",
        docsUrl: "https://www.rsa.com/products/id-plus/"
      },
      {
        productId: "V-039-P-002",
        productName: "RSA Governance & Lifecycle",
        capabilities: ["PAM-011", "PAM-012", "PAM-022"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-007", "PAM-021"],
        notes: "IGA product — identity lifecycle management, access certifications, access request workflows, SOD enforcement, provisioning and deprovisioning. Integrates with RSA ID Plus for unified identity security posture management. Governance and compliance reporting for regulated industries.",
        docsUrl: "https://www.rsa.com/"
      }
    ]
  },
  {
    vendorId: "V-040",
    vendorName: "Entrust",
    products: [
      {
        productId: "V-040-P-001",
        productName: "Entrust IDaaS",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-004", "PAM-015", "PAM-017", "PAM-018"],
        partialCapabilities: ["PAM-005", "PAM-019", "PAM-025", "PAM-026"],
        notes: "Cloud-based IAM platform — SaaS delivery, no infrastructure required. Core capabilities: SSO for cloud and on-premises applications (SAML, OIDC), MFA with the broadest authenticator range including FIDO2/passkeys, PKI/certificate-based authentication, biometrics, grid cards, social logins, OTPs, push notifications, adaptive risk-based authentication (RBA) evaluating location, behavioral biometrics, travel velocity, device integrity, AI-driven biometric verification and deepfake detection, identity orchestration with no-code/low-code journey builder, identity verification (ID proofing with government document scanning and selfie matching for onboarding). Covers workforce, customer (CIAM), and partner (B2B) identities. PAM-004 full — PKI/CBA and FIDO2 are the only two authentication methods recognized as phishing-resistant by US EO 14028; Entrust supports both. Phishing-resistant enforcement configurable via policy.",
        docsUrl: "https://www.entrust.com/products/iam/identity-as-a-service"
      },
      {
        productId: "V-040-P-002",
        productName: "Entrust Identity Enterprise",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-004", "PAM-015", "PAM-017", "PAM-018"],
        partialCapabilities: ["PAM-005", "PAM-019", "PAM-025"],
        notes: "On-premises IAM platform for large organizations with complex security requirements or strict data residency needs. Full feature parity with IDaaS for authentication capabilities. Adds: federation module for on-premises SSO including Office 365, credential-based passwordless workstation login, smart card issuance and management, support for citizen identity use cases (border crossing, licensing, voting — government deployments). Supports Risk-Based Authentication (RBA) with Zero Trust at its core. Available as on-premises software, virtual appliance, or hybrid. Strong in defense and government sectors requiring national-level identity assurance.",
        docsUrl: "https://www.entrust.com/products/iam/identity-enterprise"
      }
    ]
  },
  {
    vendorId: "V-041",
    vendorName: "Transmit Security",
    products: [
      {
        productId: "V-041-P-001",
        productName: "Mosaic by Transmit Security",
        capabilities: ["PAM-001", "PAM-002", "PAM-003"],
        partialCapabilities: ["PAM-004", "PAM-015", "PAM-017", "PAM-032"],
        notes: "Unified CIAM platform combining identity management, fraud prevention, and identity verification. Three core services: Authentication Service (passwordless, MFA, passkeys, biometrics, magic links, adaptive risk-based authentication), Orchestration Service (no-code/low-code identity journey builder with drag-and-drop, policy engine for real-time risk decisions), Fraud Prevention (Predictive AI detecting deepfakes, synthetic identities, agentic AI attacks, behavioral anomalies). Identity verification includes document scanning (150+ AI/ML features), selfie biometrics, KYC/AML automation. SaaS-only delivery. PAM-004 partial — phishing-resistant MFA options available including FIDO2 and passkeys. PAM-032 partial — Predictive AI provides behavioral intelligence and identity threat detection for customer accounts. Primary focus is customer identity (CIAM), not workforce or infrastructure PAM. Does not provide credential vaulting, session recording, discovery, or privileged access controls.",
        docsUrl: "https://transmitsecurity.com/platform"
      }
    ]
  },
  {
    vendorId: "V-042",
    vendorName: "Thales",
    products: [
      {
        productId: "V-042-P-001",
        productName: "SafeNet Trusted Access",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-004", "PAM-015", "PAM-017", "PAM-018"],
        partialCapabilities: ["PAM-005", "PAM-019", "PAM-025", "PAM-026"],
        notes: "Cloud-based workforce IAM — SSO, MFA, and adaptive access management. SaaS delivery, no infrastructure required. Distinguishing capability: broadest range of authentication methods of any IAM platform, supporting FIDO2, PKI/CBA, hardware OTP tokens, software tokens, push notifications, biometrics, smart cards, and more — the SafeNet hardware token portfolio spans 30+ years. Granular, scenario-based access policies. Integrates with all major IdPs and applications. SafeNet Trusted Access can extend MFA to legacy on-premises applications and OT environments that other SaaS IAM platforms cannot reach. PAM-004 full — FIDO2 and PKI/CBA both supported, both recognized as phishing-resistant under US EO 14028. Adaptive authentication evaluates device, network, and geographic context for risk-based step-up.",
        docsUrl: "https://cpl.thalesgroup.com/access-management/safenet-trusted-access"
      },
      {
        productId: "V-042-P-002",
        productName: "Thales OneWelcome Identity Platform",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-015", "PAM-017", "PAM-018"],
        partialCapabilities: ["PAM-004", "PAM-005", "PAM-011", "PAM-012", "PAM-019", "PAM-025", "PAM-026"],
        notes: "CIAM and B2B IAM platform — customer, partner, and supplier identity management. Acquired by Thales from OneWelcome. Modular architecture with identity apps for different use cases: CIAM (consumer), B2B IAM (partners/suppliers), workforce IAM. Supports FIDO2 passkeys, hardware tokens, smart cards, software authenticators. Identity lifecycle management, consent management, GDPR compliance. Strong in regulated financial services (strong customer authentication for PCI SCA compliance) and European organizations requiring GDPR-compliant customer identity.",
        docsUrl: "https://cpl.thalesgroup.com/access-management/onewelcome-identity-platform"
      }
    ]
  },
  {
    vendorId: "V-043",
    vendorName: "Oracle",
    products: [
      {
        productId: "V-043-P-001",
        productName: "Oracle Identity Governance (OIG)",
        capabilities: ["PAM-011", "PAM-012", "PAM-022"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-007", "PAM-008", "PAM-021"],
        notes: "Enterprise IGA platform — on-premises or Oracle Cloud Infrastructure (OCI) containerized deployment. Full-featured legacy enterprise IGA: identity lifecycle management, access certifications with AI-driven intelligent role mining, access request workflows, provisioning and deprovisioning via connectors, SOD policy enforcement, compliance reporting (SOX, GDPR). Oracle Identity Role Intelligence uses AI/ML for role optimization and peer group analysis. Available as Docker/Kubernetes images for cloud deployment. IMPORTANT: OIG premier support ends December 2026. Oracle is migrating customers to Oracle Access Governance (OAG). Existing deployments will continue on extended support but new implementations should use OAG.",
        docsUrl: "https://www.oracle.com/security/identity-management/governance/"
      },
      {
        productId: "V-043-P-002",
        productName: "Oracle Access Governance",
        capabilities: ["PAM-011", "PAM-012", "PAM-022"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-007", "PAM-008", "PAM-021", "PAM-031"],
        notes: "Cloud-native SaaS IGA — the strategic successor to OIG. Modern architecture with prescriptive analytics using AI/ML for anomaly detection and access recommendations. Key capabilities: identity lifecycle management, access certifications with AI-driven recommendations, access request workflows, SOD enforcement, integration with OCI IAM and major cloud/SaaS applications. OAG integrates with OIG for hybrid governance. Peer group analysis and outlier detection. Access reviews with usage data and risk context. PAM-031 partial — supports JIT provisioning patterns and time-bound access grants. Broader connector coverage than OIG via cloud-native integrations.",
        docsUrl: "https://www.oracle.com/security/cloud-security/access-governance/"
      }
    ]
  },
  {
    vendorId: "V-044",
    vendorName: "SAP",
    products: [
      {
        productId: "V-044-P-001",
        productName: "SAP Cloud Identity Access Governance",
        capabilities: ["PAM-012", "PAM-022"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-007", "PAM-009", "PAM-011", "PAM-019", "PAM-021"],
        notes: "Cloud-native SaaS access governance on SAP Business Technology Platform (BTP). Core SAP IAG services: Access Analysis (SoD risk analysis and mitigation for SAP and select non-SAP systems), Access Request (approval workflows and compliant provisioning), Role Design (role optimization), Access Certification (user access reviews and periodic review campaigns), Privileged Access Management (super-user access management, log consolidation for SAP systems, automated log assessment). PAM-009 partial — PAM module manages super-user access in SAP applications, not general infrastructure. Best fit for organizations running SAP S/4HANA Cloud, SuccessFactors, Ariba, Concur. Supports 16+ SAP cloud solutions and select on-premises systems via IAG Bridge. Limited governance coverage outside the SAP application ecosystem.",
        docsUrl: "https://help.sap.com/docs/cloud-identity-access-governance"
      },
      {
        productId: "V-044-P-002",
        productName: "SAP Access Control",
        capabilities: ["PAM-012", "PAM-022"],
        partialCapabilities: ["PAM-005", "PAM-007", "PAM-009", "PAM-011", "PAM-019", "PAM-021"],
        notes: "On-premises SAP GRC product for access governance. Part of SAP GRC suite alongside Process Control and Risk Management. Core capabilities: SoD (segregation of duties) risk analysis and mitigation, compliant provisioning workflows, emergency access management (firefighter/super-user access with full audit trail), access certification campaigns, role management. Strong SOD enforcement for SAP ERP environments (R/3, S/4HANA, ECC). Mainstream support ends December 2027, extended support to 2030. SAP GRC Edition for HANA (expected Q1 2026) is the successor. Scope limited to SAP application layer — not a general enterprise IGA or infrastructure PAM solution.",
        docsUrl: "https://www.sap.com/products/financial-management/access-control.html"
      }
    ]
  },
  {
    vendorId: "V-045",
    vendorName: "Pathlock",
    products: [
      {
        productId: "V-045-P-001",
        productName: "Pathlock Cloud",
        capabilities: ["PAM-012", "PAM-022"],
        partialCapabilities: ["PAM-005", "PAM-007", "PAM-008", "PAM-011", "PAM-016", "PAM-021", "PAM-031"],
        notes: "Application Access Governance platform — cloud-native SaaS. Core capabilities: fine-grained SoD analysis across 140+ applications (SAP, Oracle, Workday, Salesforce, ServiceNow, NetSuite, and more), user access reviews enriched with HR data, usage history, and risk context (drives 20-30% revocation rates vs 2-3% typical of role-only reviews), compliant provisioning workflows, elevated access management (JIT-like emergency and temporary access requests with automatic time-based revocation and full audit trail of all activity during elevated session), continuous controls monitoring, transaction monitoring for sensitive activities, audit preparation automation (SOX, PCI DSS, HIPAA, GDPR, ITAR, EAR). PAM-031 partial — elevated access management provides time-bound privileged access with automatic revocation, but not zero standing privilege infrastructure access. PAM-016 partial — identifies excessive permissions and SoD violations across application landscape. Not a general IGA platform or infrastructure PAM — specialized for ERP/SaaS application governance.",
        docsUrl: "https://pathlock.com/products/application-access-governance/"
      }
    ]
  },
  {
    vendorId: "V-046",
    vendorName: "Broadcom",
    products: [
      {
        productId: "V-046-P-001",
        productName: "Symantec IGA",
        capabilities: ["PAM-011", "PAM-012", "PAM-022"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-007", "PAM-021"],
        notes: "Legacy IGA platform — formerly CA Identity Manager, acquired by Broadcom via CA Technologies (2018). User provisioning and deprovisioning, access request workflows, access certifications, SOD policy enforcement, role management, compliance reporting. Deployed at large enterprises with long-standing CA investments. Broadcom has made minimal product investment post-acquisition — limited roadmap. On-premises deployment only. Organizations with existing deployments are evaluating migration to modern IGA platforms (SailPoint, Saviynt, One Identity). Not recommended for new IGA implementations.",
        docsUrl: "https://www.broadcom.com/products/cyber-security/identity/symantec-iga"
      }
    ]
  },
  {
    vendorId: "V-047",
    vendorName: "OpenText",
    products: [
      {
        productId: "V-047-P-001",
        productName: "OpenText Identity Manager",
        capabilities: ["PAM-011", "PAM-012", "PAM-022"],
        partialCapabilities: ["PAM-005", "PAM-006", "PAM-007", "PAM-021"],
        notes: "Enterprise IGA platform — formerly Micro Focus Identity Manager (NetIQ Identity Manager, originally Novell Identity Manager). One of the oldest and most established IGA products in the market with 30+ years of history. Strengths: deep integration with heterogeneous on-premises environments (LDAP, AD, eDirectory, HR systems, databases, mainframes), complex workflow engine, extensive connector library. Identity lifecycle management, access certifications, access request workflows, provisioning and deprovisioning, role management, SOD enforcement. Particularly strong in complex multi-directory environments typical of legacy enterprise infrastructure. Available as on-premises software and SaaS. Still actively maintained by OpenText post-Micro Focus acquisition.",
        docsUrl: "https://www.opentext.com/products/identity-manager"
      },
      {
        productId: "V-047-P-002",
        productName: "OpenText NetIQ Access Manager",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-015", "PAM-017", "PAM-018"],
        partialCapabilities: ["PAM-004", "PAM-005", "PAM-019", "PAM-025"],
        notes: "Access management platform — formerly Micro Focus/NetIQ Access Manager. On-premises and cloud access management with SSO (SAML, OAuth, OIDC, Kerberos, RADIUS), MFA, adaptive access policies, federation. Strong in organizations requiring deep integration with Novell/NetIQ/eDirectory directory infrastructure. Primarily relevant for organizations already in the OpenText/Micro Focus ecosystem.",
        docsUrl: "https://www.opentext.com/products/netiq-access-manager"
      }
    ]
  },
  {
    vendorId: "V-048",
    vendorName: "Beyond Identity",
    products: [
      {
        productId: "V-048-P-001",
        productName: "Beyond Identity Secure Workforce",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-004"],
        partialCapabilities: ["PAM-015", "PAM-019", "PAM-032"],
        notes: "Phishing-resistant passwordless MFA for enterprise workforce — eliminates all phishable authentication factors (passwords, OTPs, push notifications, SMS). Core capabilities: Universal Passkeys (FIDO2, device-bound, non-syncable — private key stored in device TPM and cannot leave the device), continuous device trust verification on every auth request checking firewall, disk encryption, biometrics enabled, screen lock, OS patch level, MDM enrollment active, and EDR/XDR signals, integration with CrowdStrike Falcon, SentinelOne, and other EDR platforms for real-time device risk signals, adaptive step-up authentication when device risk increases mid-session, integrates with all major IdPs (Okta, Microsoft Entra, Ping, ForgeRock) as external authentication method without requiring replacement of existing IAM stack. Distinguishing architectural difference from other phishing-resistant MFA: simultaneous identity authentication and device security validation on every request — standard FIDO2 implementations do not verify ongoing device security posture. PAM-004 full — device-bound FIDO2 passkeys, no phishable fallback methods, no bypass path. PAM-032 partial — device risk signals provide behavioral and posture-based risk intelligence.",
        docsUrl: "https://docs.beyondidentity.com/"
      },
      {
        productId: "V-048-P-002",
        productName: "Beyond Identity Secure DevOps",
        capabilities: ["PAM-001", "PAM-002", "PAM-004"],
        partialCapabilities: ["PAM-019", "PAM-023", "PAM-024", "PAM-028"],
        notes: "Phishing-resistant authentication for developer workflows and CI/CD pipelines. FIDO2-based authentication for code commits, pipeline access, and development tooling. Eliminates shared credentials, SSH keys, and passwords in DevOps workflows. Code signing and commit verification. Integrates with GitHub, GitLab, and major CI/CD platforms.",
        docsUrl: "https://docs.beyondidentity.com/"
      }
    ]
  },
  {
    vendorId: "V-049",
    vendorName: "ServiceNow",
    products: [
      {
        productId: "V-049-P-001",
        productName: "ServiceNow Identity Security (Veza)",
        capabilities: ["PAM-008", "PAM-010", "PAM-016"],
        partialCapabilities: ["PAM-005", "PAM-017", "PAM-019", "PAM-022", "PAM-032"],
        notes: "AI-native identity security platform — Veza Access Platform embedded in ServiceNow AI. Core capability: the Access Graph, a continuous real-time graph of every identity (human, non-human, AI agents) and every permission across an enterprise's entire technology estate. Supports hundreds of systems including cloud providers (AWS, Azure, GCP), SaaS applications, on-premises directories, and databases natively. Key capabilities: fine-grained permission visibility (maps what each identity can actually do, not just what roles are assigned — detects unused permissions, excessive entitlements, toxic combinations), privileged access monitoring (surfaces which accounts have privileged access and what they are doing with it), NHI governance (service accounts, API keys, OAuth tokens, AI agent credentials), ISPM (continuous security posture assessment and remediation), access entitlement management, dormant account detection (38% of accounts dormant per Veza research), next-gen IGA workflows via ServiceNow platform integration (access reviews triggered, assignments remediated, tickets auto-created). AI Agent Security: visibility into AI agent identities, their permissions, and their activity — governs agentic access at instance level. Integration with ServiceNow's CMDB, Vulnerability Response, Incident Response, and Integrated Risk Management provides identity context to security and risk workflows. PAM-008 full — Access Graph discovers all privileged identities and their actual permissions across all systems. PAM-010 full — identifies dormant accounts at scale. PAM-016 full — identifies toxic privilege combinations and excessive entitlements with remediation workflows.",
        docsUrl: "https://www.servicenow.com/products/autonomous-security-risk.html"
      }
    ]
  },
  {
    vendorId: "V-050",
    vendorName: "HYPR",
    products: [
      {
        productId: "V-050-P-001",
        productName: "HYPR Identity Assurance Platform",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-004"],
        partialCapabilities: ["PAM-015", "PAM-019", "PAM-032"],
        notes: "Enterprise passwordless authentication platform covering workforce and customers. Three integrated components: HYPR Authenticate (passkeys-based phishing-resistant MFA — transforms smartphones into FIDO2 Enterprise Passkeys, 300% faster than legacy MFA, eliminates push bombing; non-syncable, device-bound credentials that cannot leave the device), HYPR Adapt (continuous risk monitoring — collects device posture, mobile/web/browser context, real-time events, user behavior and CrowdStrike EDR telemetry to dynamically adjust security controls mid-session, not just at login), HYPR Affirm (identity verification orchestration — verifies real identity at account recovery, step-up, and help desk workflows, preventing MFA bypass attacks). Enterprise Passkeys for Microsoft Entra ID: Microsoft-validated FIDO2, covers both web apps and Windows desktop login simultaneously (distinguishing — many competitors cover one or the other but not both). Partnership with Yubico: HYPR Affirm can provision YubiKeys to remotely verified users via an automated, auditable workflow eliminating manual handoffs. Supports PIV-compliant authentication for government and compliance use cases. PAM-004 full — device-bound non-syncable Enterprise Passkeys, no phishable fallback. PAM-032 partial — HYPR Adapt provides continuous behavioral risk assessment integrated with EDR telemetry.",
        docsUrl: "https://docs.hypr.com/"
      }
    ]
  },
  {
    vendorId: "V-051",
    vendorName: "SecureAuth",
    products: [
      {
        productId: "V-051-P-001",
        productName: "SecureAuth Identity Platform",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-015", "PAM-017", "PAM-018"],
        partialCapabilities: ["PAM-004", "PAM-019", "PAM-032"],
        notes: "Unified identity security platform — workforce IAM, customer IAM (CIAM), and AI agent identity governance. Deployable hybrid, on-premises, or cloud without capability differences. Core capabilities: nearly 30 MFA methods (broadest range of any adaptive auth platform), adaptive authentication with more risk check categories than any competitor per KuppingerCole (device, location, IP reputation, behavioral biometrics, geovelocity, dynamic perimeter), continuous authentication throughout session not just at login (session-aware authorization — re-verifies identity on sensitive actions and adjusts controls in real-time), AI-driven risk scoring, SSO with federation protocol support including legacy and homegrown applications (broad protocol support distinguishes from newer SaaS-only platforms), identity orchestration, AI agent governance (discovery, registration, governance, and detection for NHIs and AI agents in a unified control plane), token-bound sessions and fine-grained API scope enforcement. PAM-004 partial — FIDO2 and phishing-resistant options available but not the exclusive authentication method (supports full range including less phishing-resistant methods for backwards compatibility). PAM-032 partial — behavioral analytics and continuous risk assessment provide UEBA-adjacent identity threat monitoring.",
        docsUrl: "https://docs.secureauth.com/"
      }
    ]
  },
  {
    vendorId: "V-052",
    vendorName: "HID Global",
    products: [
      {
        productId: "V-052-P-001",
        productName: "HID DigitalPersona",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-004", "PAM-015"],
        partialCapabilities: ["PAM-005", "PAM-017", "PAM-019", "PAM-025"],
        notes: "Enterprise multi-factor authentication platform — industry-leading desktop MFA with the widest array of authentication methods and form factors. Core capabilities: passwordless desktop authentication for Windows (workstation and server), SSO to web, legacy, and cloud applications via federation, RADIUS-based MFA for VPN and RDP Gateway, ADFS extension for biometric and smart card MFA, AD and AD LDS (LDAP) deployment models. Authentication methods: fingerprint biometrics, facial recognition, contactless ID cards (physical access badge as IT authenticator — distinguishing physical-logical convergence capability), smart cards and security keys (HID Crescendo — FIDO2, PKI, OATH), OTP tokens, NFC devices, mobile authenticators. Compliance capabilities: leverages Microsoft event forwarding and Power BI for compliance reporting; designed to meet CJIS, NIS2, HIPAA, PCI DSS, and NIST requirements. Supports shared workstation environments (banking tellers, healthcare clinical workstations, manufacturing floor) where multiple users share one Windows machine. Microsoft Entra ID External Authentication Method (EAM) support allows contactless cards and fingerprints as additional factors beyond native Entra capabilities. PAM-004 full — FIDO2 and PKI/CBA both supported (both phishing-resistant per US EO 14028). PAM-015 full — individual accountability enforced even on shared workstations via biometric-bound authentication.",
        docsUrl: "https://docs.hidglobal.com/"
      },
      {
        productId: "V-052-P-002",
        productName: "HID Crescendo Cards and Keys",
        capabilities: ["PAM-004"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-015"],
        notes: "Hardware smart cards and FIDO2 security keys — the HID Crescendo product family includes smart cards, USB keys, and contactless credentials supporting FIDO2, PKI/CBA, and OATH. Available in multiple form factors: smart cards, USB-A/C security keys, NFC-enabled contactless cards. Used independently or in combination with HID DigitalPersona or any compatible FIDO2 relying party. HID Crescendo C2300 supports both FIDO2 and PKI (dual protocol — same credential covers phishing-resistant web authentication and digital signing/encryption). Widely deployed in government, defense, and regulated financial services requiring hardware-backed, certificate-based authentication.",
        docsUrl: "https://docs.hidglobal.com/"
      }
    ]
  },
  {
    vendorId: "V-053",
    vendorName: "1Kosmos",
    products: [
      {
        productId: "V-053-P-001",
        productName: "1Kosmos BlockID",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-004", "PAM-015"],
        partialCapabilities: ["PAM-017", "PAM-019"],
        notes: "Identity verification and passwordless authentication platform — workforce and customer use cases. Core distinguishing capability: government-verified identity binding at enrollment — users present government-issued ID and complete liveness biometric check (verified to 99% accuracy across 140 countries), which is then cryptographically bound to a FIDO2 credential via a zero-knowledge, privacy-preserving architecture (no centralized PII honeypot). Authentication capabilities: FIDO2 passkeys (device-bound via LiveID biometrics), NIST 800-63-3 AAL2/AAL3 compliant, no passwords, no OTPs. The 1Key physical token (FIDO2/CTAP2) extends phishing-resistant authentication to restricted environments where mobile devices are prohibited: call centers, clean rooms, manufacturing floors, shared workstations. Certifications: NIST 800-63-3 (Kantara), FIDO2, UK DIATF, iBeta ISO/IEC 30107-3, FedRAMP High, DoD IL4. 1B+ daily authentications on the platform. PAM-004 full — device-bound FIDO2 with identity-proofed enrollment eliminates both credential theft and enrollment impersonation. PAM-015 full — every authentication is bound to a government-verified biometric — highest assurance individual accountability of any vendor in this dataset.",
        docsUrl: "https://docs.1kosmos.com/"
      }
    ]
  },
  {
    vendorId: "V-054",
    vendorName: "Yubico",
    products: [
      {
        productId: "V-054-P-001",
        productName: "YubiKey",
        capabilities: ["PAM-004"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-015", "PAM-023", "PAM-024"],
        notes: "Hardware security key — the gold standard phishing-resistant hardware authenticator. Multi-protocol support on a single device: FIDO2/WebAuthn (passkeys — device-bound, private key never leaves hardware), FIDO U2F, PIV/Smart Card (X.509 certificates, digital signing, encryption), OATH (HOTP, TOTP), OpenPGP, Yubico OTP. Available in multiple form factors: USB-A, USB-C, Lightning, NFC, nano. YubiKey Bio Series adds fingerprint biometric to FIDO2 and PIV on the same key. YubiKey 5 FIPS Series: FIPS 140-2 and 140-3 validated for government and regulated industries. Enterprise features: Enterprise Attestation (YubiKey serial numbers retrievable by IdP during FIDO2 registration for asset tracking and policy enforcement), PIN complexity enforcement at hardware level (blocks common/simple PINs), CTAP 2.1 implementation. Works out of the box across hundreds of enterprise applications and IdPs (Microsoft, Okta, Ping, Entra, AWS, Google) without agents or software on the authenticating device. IP68 rated, no battery, no cellular connectivity required — works in OT environments and air-gapped systems. PAM-004 full — hardware-backed FIDO2 and PIV/CBA, both phishing-resistant per US EO 14028, NIST 800-63B AAL3 compliant. PAM-001 and PAM-002 partial — YubiKey is the authenticator factor; the IdP or PAM platform enforces the MFA policy. PAM-015 partial — hardware binding and Enterprise Attestation tie each authentication to a specific physical device issued to a specific individual. PAM-023 partial — YubiKey PIV stores private keys and certificates in hardware secure element. PAM-024 partial — manages X.509 certificate lifecycle for PIV-based authentication.",
        docsUrl: "https://docs.yubico.com/"
      },
      {
        productId: "V-054-P-002",
        productName: "YubiHSM 2",
        capabilities: ["PAM-023"],
        partialCapabilities: ["PAM-024", "PAM-028"],
        notes: "Hardware Security Module for server-side cryptographic key management and secrets protection. Ultra-compact form factor (USB-A nano). Core capabilities: hardware-protected storage for root CA keys, code signing keys, TLS certificates, and application secrets; cryptographic operations performed inside tamper-resistant hardware (RSA, ECC, AES, HMAC); role-based access control for HSM access; audit logging of all cryptographic operations; wrap and unwrap operations for secure key export/import. Available in FIPS 140-2 Level 3 validated version (YubiHSM 2 FIPS). Used for protecting the cryptographic foundation of PKI infrastructure, code signing pipelines, and application-to-application secret management. Pairs with YubiKey for a hardware-to-hardware trust chain.",
        docsUrl: "https://docs.yubico.com/hardware/yubihsm-2/"
      }
    ]
  },
  {
    vendorId: "V-055",
    vendorName: "Trusona",
    products: [
      {
        productId: "V-055-P-001",
        productName: "Trusona Authentication Cloud",
        capabilities: ["PAM-001", "PAM-002", "PAM-004"],
        partialCapabilities: ["PAM-003", "PAM-015", "PAM-019"],
        notes: "Passwordless MFA and account takeover protection platform. Two integrated components: Authentication Cloud (FIDO2/WebAuthn-based passwordless authentication — app-less, no mobile app installation required, uses native browser/device capabilities; passkeys deployable in weeks; mitigates SIM swapping, keylogging, credential stuffing, and session replay attacks) and ATO Protect (account takeover protection for IT help desk and account recovery workflows — verifies real-world identity via government ID scanning + biometric liveness detection + authoritative record cross-check before allowing password reset or MFA recovery; integrates with existing ITSM and identity systems). Patented Anti-Replay Technology (TruAR) invalidates each authentication session after use — captured credentials cannot be replayed. Integrates with Microsoft Azure AD Conditional Access, Okta, and other enterprise IdPs. PAM-004 full — FIDO2-based, phishing-resistant, app-less MFA with anti-replay prevents all common credential theft vectors. PAM-015 partial — ATO Protect verifies real-world identity before privileged account recovery actions, preventing impersonation of privileged users at the help desk.",
        docsUrl: "https://www.trusona.com/trusona-authentication-cloud"
      }
    ]
  },
  {
    vendorId: "V-056",
    vendorName: "Nametag",
    products: [
      {
        productId: "V-056-P-001",
        productName: "Nametag Identity Verification Platform",
        capabilities: [],
        partialCapabilities: ["PAM-015", "PAM-019"],
        notes: "Workforce identity verification platform for high-risk identity moments — helpdesk verification, self-service account recovery, secure employee onboarding, and AI agent action verification. Core capabilities: Deepfake Defense™ (cryptographic attestation validates device/OS/sensor integrity before any biometric data is collected — blocks injection attacks that fool camera-based systems; distinguishing capability, not available from browser-based solutions), Adaptive Document Verification (government-issued ID verification across thousands of document types in 140+ countries with 99% accuracy), biometric liveness detection, Spatial Selfie (3D depth mapping to detect 2D photo and video spoofing). Verification request sent via any support channel (ServiceNow, email, self-service microsite); user verifies in under 30 seconds on their smartphone without pre-enrollment. Full audit trail — Proof of Verification records with customizable visibility into decision-making for compliance and audit purposes. Integrations: Okta (External Authentication Method), Microsoft Entra ID, ServiceNow ITSM, Beyond Identity. Addresses the Scattered Spider attack pattern: attackers social engineering help desk agents into resetting admin MFA or SSPR credentials by impersonating legitimate employees. PAM-015 partial — verifies real-world identity at privileged account recovery and onboarding events, ensuring that the individual receiving or recovering privileged credentials is the genuine, verified employee. PAM-019 partial — Proof of Verification provides audit records of every identity verification decision for compliance review.",
        docsUrl: "https://getnametag.com/platform/"
      }
    ]
  }
];

// =============================================================
// FREEWARE / OPEN SOURCE TOOLS
// =============================================================
// These are free or open source tools that provide PAM-relevant capabilities.
// Vendor IDs use FW-XXX prefix to distinguish from commercial entries.

export const freewareCapabilities: VendorCapability[] = [
  {
    vendorId: "FW-001",
    vendorName: "BloodHound Community Edition",
    isFreeware: true,
    products: [
      {
        productId: "FW-001-P-001",
        productName: "BloodHound CE",
        capabilities: [],
        partialCapabilities: ["PAM-008", "PAM-016"],
        notes: "Free open source Active Directory and Entra ID attack path visualization. Discovers all identity relationships, trust paths, and privilege inheritance chains in AD and Entra ID environments. Visualizes attack paths from any identity to Tier 0 assets. Key limitation vs Enterprise: manual or scheduled collection runs — no continuous monitoring, no automated choke point analysis, no Okta/GitHub/macOS coverage, no SaaS management layer. PAM-008 partial — discovers privileged identities and their access paths on-demand. PAM-016 partial — identifies privilege escalation paths but no automated remediation prioritization. No full capabilities — CE requires manual analyst effort to translate findings into action. GitHub: github.com/SpecterOps/BloodHound.",
        docsUrl: "https://support.bloodhoundenterprise.io/hc/en-us/categories/9895588985627-BloodHound-Community-Edition"
      }
    ]
  },
  {
    vendorId: "FW-002",
    vendorName: "Purple Knight",
    isFreeware: true,
    products: [
      {
        productId: "FW-002-P-001",
        productName: "Purple Knight",
        capabilities: [],
        partialCapabilities: ["PAM-008", "PAM-032"],
        notes: "Free AD/Entra ID security posture assessment by Semperis. Scans for misconfigurations, risky delegations, stale accounts, insecure ACLs, Kerberos weaknesses, and other privilege-related vulnerabilities across 100+ indicators. Generates a security score (0-100) with prioritized findings and remediation steps. Point-in-time only — must be re-run manually to track changes over time. No agent, no continuous monitoring, no alerting. Complements BloodHound CE (attack paths) with configuration and posture assessment. PAM-008 partial — identifies privileged accounts and misconfigurations on-demand scan. PAM-032 partial — detects indicators of attack patterns and misconfigurations that enable identity attacks. Download from semperis.com/purple-knight.",
        docsUrl: "https://www.semperis.com/purple-knight/"
      }
    ]
  },
  {
    vendorId: "FW-003",
    vendorName: "Forest Druid",
    isFreeware: true,
    products: [
      {
        productId: "FW-003-P-001",
        productName: "Forest Druid",
        capabilities: [],
        partialCapabilities: ["PAM-008", "PAM-016"],
        notes: "Free Tier 0 attack path discovery tool by Semperis. Identifies all assets that constitute Tier 0 (domain controllers, admin accounts, GPO links, critical OUs, privileged groups), maps every identity with a path to those assets, and visualizes the blast radius of any identity compromise. Helps organizations understand and reduce Tier 0 exposure. Point-in-time, not continuous. PAM-008 partial — discovers Tier 0 assets and the identities with access paths to them. PAM-016 partial — identifies privilege escalation paths into Tier 0. Download from semperis.com/forest-druid.",
        docsUrl: "https://www.semperis.com/forest-druid/"
      }
    ]
  },
  {
    vendorId: "FW-004",
    vendorName: "Windows LAPS",
    isFreeware: true,
    products: [
      {
        productId: "FW-004-P-001",
        productName: "Windows LAPS",
        capabilities: ["PAM-023", "PAM-029", "PAM-030"],
        partialCapabilities: ["PAM-005", "PAM-009", "PAM-019"],
        notes: "Built-in Windows feature for automated local administrator password management. Core capabilities: automatic password generation and rotation on a configurable schedule, encrypted password storage in AD DS attributes or Azure AD (Entra ID), role-based access control for password retrieval (who can see which machine's local admin password), password history, post-authentication reset (password automatically rotates after checkout if configured), audit logging of all password access events, support for Directory Services Repair Mode (DSRM) passwords on domain controllers. Available on Windows Server 2019+, Windows 10 22H2+, Windows 11, and Server Core. PAM-005 partial — enforces unique local admin passwords per machine (eliminates pass-the-hash lateral movement risk) but not a full least privilege enforcement platform. PAM-009 partial — separates local admin credentials into managed vault but does not enforce admin account separation at an enterprise policy level. PAM-019 partial — audit logs via Windows Event Log and AD; full SIEM-grade centralized logging requires integration with Sentinel, Splunk, or similar. CRITICAL NOTE: Windows LAPS is one of the most impactful and underutilized free security controls available. Eliminating shared local admin passwords across an estate removes a major lateral movement vector. Any Windows-heavy organization that has not deployed LAPS is leaving a significant attack surface open.",
        docsUrl: "https://learn.microsoft.com/en-us/windows-server/identity/laps/laps-overview"
      }
    ]
  },
  {
    vendorId: "FW-005",
    vendorName: "Teleport Community Edition",
    isFreeware: true,
    products: [
      {
        productId: "FW-005-P-001",
        productName: "Teleport Community Edition",
        capabilities: ["PAM-007", "PAM-015", "PAM-019", "PAM-020", "PAM-033"],
        partialCapabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-005", "PAM-013", "PAM-014"],
        notes: "Open source identity-native PAM for infrastructure access. AGPL-3.0 license. Secretless architecture — short-lived X.509 certificates replace all shared secrets (passwords, SSH keys, tokens). Certificates are issued per-session and expire automatically. Core capabilities: SSH access with certificate-based auth and full session recording, Kubernetes cluster access, PostgreSQL/MySQL/MongoDB database access via certificate-based proxy, Windows desktop access (RDP via certificate), internal web application access, unified audit log across all protocols and resources, MFA at login enforced via hardware security keys or TOTP, SSO integration via OIDC/SAML (Okta, Azure AD, GitHub, etc.), RBAC via Teleport roles. All sessions recorded with full audit trail including interactive commands, queries, and screen captures. No credential vault — eliminates passwords rather than storing them. PAM-007 full — proxied access without exposing target credentials. PAM-015 full — all sessions tied to individual user identity via short-lived certificates. PAM-013 partial — supports vendor/contractor access patterns but no dedicated RPAM product. PAM-014 partial — session timeout configurable. Note: Enterprise adds JIT Access Requests, device trust, and enhanced RBAC. Docs at goteleport.com/docs.",
        docsUrl: "https://goteleport.com/docs/"
      }
    ]
  },
  {
    vendorId: "FW-006",
    vendorName: "CyberArk Conjur Open Source",
    isFreeware: true,
    products: [
      {
        productId: "FW-006-P-001",
        productName: "Conjur Open Source",
        capabilities: ["PAM-023", "PAM-028"],
        partialCapabilities: ["PAM-006", "PAM-019", "PAM-024"],
        notes: "Open source secrets management for machine identities and DevOps pipelines by CyberArk. Apache 2.0 license. Core capabilities: machine identity authentication via Conjur policy (workloads authenticate using certificates, IAM roles, or Kubernetes service accounts — no static secrets required), secrets storage and retrieval with RBAC policies, native Kubernetes integration (Secrets Provider for K8s, Secrets Store CSI driver), Ansible, Jenkins, Terraform, AWS, Azure, GCP integrations, audit logging of all secrets access. Eliminates hardcoded credentials in code and configuration files. PAM-028 full — secrets stored in Conjur rather than hardcoded; rotation managed via policy. PAM-023 full — centralized encrypted secrets store with policy-based access. PAM-006 partial — manages machine/service account credentials but no full lifecycle governance. PAM-024 partial — certificate-based machine identity but not a full certificate lifecycle management platform. GitHub: github.com/cyberark/conjur.",
        docsUrl: "https://docs.conjur.org/Latest/en/Content/Overview/Conjur-OSS-Suite-Overview.html"
      }
    ]
  },
  {
    vendorId: "FW-007",
    vendorName: "Passbolt Community Edition",
    isFreeware: true,
    products: [
      {
        productId: "FW-007-P-001",
        productName: "Passbolt CE",
        capabilities: [],
        partialCapabilities: ["PAM-023", "PAM-024", "PAM-030"],
        notes: "Open source team password manager — self-hosted, end-to-end encrypted with OpenPGP. AGPL-3.0 license. Shared credential storage with folder-based RBAC, activity logs, and secure sharing. Browser extension-based UX. No session recording, no privileged session proxying, no automated rotation — primarily a credential storage and sharing tool. PAM-023 partial — encrypted credential storage but not a privileged vault with checkout workflows. PAM-030 partial — credentials retrievable by authorized users with audit trail. Most relevant for SMB environments that need basic shared password management without budget for commercial PAM. Docs at docs.passbolt.com.",
        docsUrl: "https://docs.passbolt.com/"
      }
    ]
  },
  {
    vendorId: "FW-008",
    vendorName: "Ansible Vault",
    isFreeware: true,
    products: [
      {
        productId: "FW-008-P-001",
        productName: "Ansible Vault",
        capabilities: [],
        partialCapabilities: ["PAM-023", "PAM-028"],
        notes: "Built-in secrets encryption for Ansible automation by Red Hat. Free — part of open source Ansible. Encrypts variables, files, and playbooks at rest with AES-256 symmetric encryption. Protects sensitive values (API keys, passwords, certificates) within Ansible projects. Not a secrets management platform — no dynamic secrets, no rotation, no audit logging, no RBAC beyond file-system level controls. Best used in combination with a dedicated secrets manager (HashiCorp Vault, AWS Secrets Manager, CyberArk Conjur) for production environments. PAM-023 partial — encrypts secrets at rest in Ansible, prevents plaintext credentials in playbooks. PAM-028 partial — reduces hardcoded credential exposure in automation code.",
        docsUrl: "https://docs.ansible.com/ansible/latest/vault_guide/vault.html"
      }
    ]
  },
  {
    vendorId: "FW-009",
    vendorName: "OpenSSH",
    isFreeware: true,
    products: [
      {
        productId: "FW-009-P-001",
        productName: "OpenSSH",
        capabilities: [],
        partialCapabilities: ["PAM-007", "PAM-013", "PAM-015", "PAM-019"],
        notes: "The de facto standard for secure remote access to Unix/Linux/macOS systems. Free and open source (BSD license). Maintained by the OpenBSD project. Pre-installed on virtually all Linux distributions, macOS, and Windows 10+ (optional feature). Key capabilities: SSH public key authentication (eliminates password-based SSH), SSH certificate authority (SSH CA) for short-lived certificate-based access — eliminates the need to distribute individual public keys, host key verification, port forwarding and tunneling, SFTP for secure file transfer, audit logging via syslog. SSH certificates (via SSH CA) provide JIT-adjacent access by issuing short-lived signed certificates that automatically expire. No session recording, no credential vaulting, no MFA enforcement (requires PAM module or external IdP integration). PAM-007 partial — proxied access possible with bastion host architecture but not built-in. PAM-015 partial — individual attribution via key or certificate, though shared key usage undermines accountability. PAM-019 partial — access events logged via syslog; centralized correlation requires SIEM. Note: OpenSSH with SSH CA is the free foundation that Teleport CE, BeyondTrust, CyberArk, and other commercial tools build upon.",
        docsUrl: "https://www.openssh.com/manual.html"
      }
    ]
  },
  {
    vendorId: "FW-010",
    vendorName: "Keycloak",
    isFreeware: true,
    products: [
      {
        productId: "FW-010-P-001",
        productName: "Keycloak",
        capabilities: ["PAM-001", "PAM-002", "PAM-003", "PAM-015", "PAM-017", "PAM-018"],
        partialCapabilities: ["PAM-004", "PAM-005", "PAM-011", "PAM-012", "PAM-019", "PAM-025", "PAM-026"],
        notes: "Open source IAM platform — self-hosted. Apache 2.0 license. Originally developed by Red Hat, now a CNCF project. Full-featured identity provider covering: SSO via SAML, OIDC, and OAuth 2.0 for all connected applications, MFA (TOTP, WebAuthn/FIDO2, OTP, SMS via extension), adaptive authentication with conditional policies, user federation (LDAP, Active Directory sync), social login, identity brokering with external IdPs, RBAC and fine-grained authorization policies, user lifecycle management (registration, password reset, email verification), session management with configurable timeouts and idle logout, audit logging via event listeners (Syslog, Elasticsearch, custom handlers). Keycloak is the free self-managed equivalent of commercial IdP products like Okta or Microsoft Entra ID P1. PAM-004 partial — FIDO2/WebAuthn available and enforceable via policy, but phishing-resistant enforcement requires correct policy configuration. PAM-011/PAM-012 partial — user lifecycle management capabilities present but no automated HR trigger integration out of the box. PAM-019 partial — event logging available but requires configuration and external SIEM integration for enterprise-grade retention. Most relevant for organizations that want enterprise IAM capabilities without commercial licensing cost.",
        docsUrl: "https://www.keycloak.org/documentation"
      }
    ]
  }
];
