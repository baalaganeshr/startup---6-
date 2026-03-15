export const threatLibrary = {
  spotlight: {
    title: "Top emerging threats",
    description: "Curated weekly feed of what matters most so you can triage quickly.",
  },
  threats: [
    {
      name: "Phishing-as-a-Service",
      severity: "High",
      vector: "Email/SMS",
      note: "Pre-built kits with OTP prompts and reverse proxy bypasses.",
      action: "Block lookalike domains and enforce FIDO2 for admins.",
    },
    {
      name: "Deepfake lures",
      severity: "High",
      vector: "Voice/Video",
      note: "Synthetic audio used to authorize urgent payments.",
      action: "Use call-back procedures and watermarking for executive comms.",
    },
    {
      name: "QRishing",
      severity: "Medium",
      vector: "Physical/Email",
      note: "QR codes leading to credential harvesters.",
      action: "Disable auto-login on mobile and inspect URLs before auth.",
    },
    {
      name: "Session hijack",
      severity: "Medium",
      vector: "Browser extensions",
      note: "Malicious add-ons exfiltrate cookies and tokens.",
      action: "Restrict extensions and rotate sessions after device loss.",
    },
    {
      name: "Supply chain implants",
      severity: "High",
      vector: "Software updates",
      note: "Backdoored packages in dependency trees.",
      action: "Pin versions, verify signatures, and run provenance checks.",
    },
    {
      name: "Rogue Wi‑Fi twins",
      severity: "Low",
      vector: "Wireless",
      note: "Evil twin APs harvesting credentials on public networks.",
      action: "Use VPN, disable auto-join, and prefer cellular for auth.",
    },
  ],
};

export const trainingModules = [
  {
    id: "phishing-101",
    title: "Phishing 101",
    duration: "12 min",
    level: "Beginner",
    outcomes: ["Spot red flags", "Verify senders", "Report confidently"],
  },
  {
    id: "password-mastery",
    title: "Password mastery",
    duration: "10 min",
    level: "Beginner",
    outcomes: ["Build strong passphrases", "Use managers", "Enable passkeys"],
  },
  {
    id: "device-hardening",
    title: "Device hardening",
    duration: "14 min",
    level: "Intermediate",
    outcomes: ["Patch cadence", "Disk encryption", "Secure Wi‑Fi"],
  },
  {
    id: "incident-first-hour",
    title: "Incident response: first hour",
    duration: "15 min",
    level: "Intermediate",
    outcomes: ["Contain", "Preserve evidence", "Escalate"]
  },
  {
    id: "cloud-guardrails",
    title: "Cloud guardrails",
    duration: "18 min",
    level: "Advanced",
    outcomes: ["Least privilege", "Secrets hygiene", "Audit trails"],
  },
];

export const playbooks = [
  {
    id: "phishing-playbook",
    title: "Phishing response",
    rto: "15 min",
    steps: [
      "Isolate the device and revoke sessions.",
      "Reset credentials and enforce MFA re-prompt.",
      "Block sender domain and URLs at gateway.",
      "Search mailboxes for similar indicators.",
      "File incident report with IOC list.",
    ],
  },
  {
    id: "ransomware-playbook",
    title: "Ransomware containment",
    rto: "30 min",
    steps: [
      "Disconnect host from network; keep power on for forensics.",
      "Trigger EDR isolation and snapshot disks.",
      "Validate backups and stage clean restore path.",
      "Notify legal/leadership; engage IR retainer.",
      "Hunt laterally for persistence and C2.",
    ],
  },
  {
    id: "lost-device-playbook",
    title: "Lost device",
    rto: "20 min",
    steps: [
      "Trigger remote wipe and revoke tokens.",
      "Rotate secrets stored locally (SSH/API).",
      "Invalidate saved auth cookies across apps.",
      "Update asset register and file support ticket.",
      "Monitor for suspicious logins from region.",
    ],
  },
];

export const resourceLibrary = [
  {
    title: "Security checklist",
    type: "Guide",
    length: "2 pages",
    summary: "Daily/weekly routines to stay hardened.",
  },
  {
    title: "Vendor risk template",
    type: "Template",
    length: "1 sheet",
    summary: "Lightweight due diligence for SaaS tools.",
  },
  {
    title: "Breach comms script",
    type: "Playbook",
    length: "3 steps",
    summary: "Clear messaging for stakeholders during incidents.",
  },
  {
    title: "Password manager buyer guide",
    type: "Guide",
    length: "5 min read",
    summary: "Criteria to evaluate consumer vs. team solutions.",
  },
  {
    title: "Zero trust primer",
    type: "Brief",
    length: "7 min read",
    summary: "Principles to reduce implicit trust across your stack.",
  },
];

export const glossaryTerms = [
  { term: "MFA", definition: "Multi-factor authentication; two or more factors to verify identity." },
  { term: "Phishing", definition: "Deceptive messages to steal credentials or money." },
  { term: "Passkey", definition: "FIDO-based, phishing-resistant login replacing passwords." },
  { term: "EDR", definition: "Endpoint Detection and Response tooling for endpoint telemetry and containment." },
  { term: "IOC", definition: "Indicator of Compromise, such as hashes, domains, or IPs." },
  { term: "Zero Trust", definition: "Never trust, always verify—continuous validation for every request." },
  { term: "Least privilege", definition: "Give identities only the access they need, nothing more." },
];

export const reportMetrics = {
  kpis: [
    { label: "MFA coverage", value: "94%", change: "+3% MoM" },
    { label: "Patch SLA met", value: "88%", change: "+5% MoM" },
    { label: "Phish click rate", value: "1.8%", change: "-0.4% MoM" },
    { label: "Mean time to contain", value: "22 min", change: "-6 min" },
  ],
  series: [
    { week: "W1", phishing: 42, malware: 18, ransomware: 6 },
    { week: "W2", phishing: 39, malware: 15, ransomware: 4 },
    { week: "W3", phishing: 33, malware: 14, ransomware: 5 },
    { week: "W4", phishing: 29, malware: 12, ransomware: 3 },
  ],
  highlights: [
    "MFA rollout on high-risk apps completed ahead of schedule.",
    "Phishing simulation click rate down to 1.8% across org.",
    "Ransomware tabletop revealed faster containment paths.",
  ],
};
