'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRightIcon,
  ChartBarIcon,
  BoltIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  ShieldExclamationIcon,
  SignalIcon,
  WifiIcon,
} from "@heroicons/react/24/outline";
import { Section } from "@/components/section";
import { InfoCard } from "@/components/info-card";
import { PasswordGenerator } from "@/components/password-generator";
import { Timeline, TimelineItem } from "@/components/timeline";

const threats = [
  {
    title: "Phishing",
    description: "Emails or messages impersonating trusted sources to steal logins or payment data.",
    icon: <ShieldExclamationIcon className="h-6 w-6 text-warning" />,
    variant: "warning" as const,
    points: ["Check sender domains and spelling.", "Hover links to preview destinations.", "When unsure, contact the source directly."],
  },
  {
    title: "Social Engineering",
    description: "Attackers manipulate emotions—urgency, fear, curiosity—to push risky actions.",
    icon: <BoltIcon className="h-6 w-6 text-accent" />,
    variant: "accent" as const,
    points: ["Pause before reacting to threats or prizes.", "Verify identities using a second channel.", "Limit personal info you share publicly."],
  },
  {
    title: "Malware & Ransomware",
    description: "Malicious software that locks, leaks, or destroys data after unsafe downloads.",
    icon: <ShieldCheckIcon className="h-6 w-6 text-danger" />,
    variant: "danger" as const,
    points: ["Keep OS and apps updated.", "Avoid pirated software and unknown USBs.", "Maintain offline/cloud backups."],
  },
  {
    title: "Unsafe Wi‑Fi",
    description: "Public networks can expose traffic or enable man-in-the-middle attacks.",
    icon: <WifiIcon className="h-6 w-6 text-info" />,
    variant: "info" as const,
    points: ["Avoid sensitive tasks on public Wi‑Fi.", "Use VPN and HTTPS-only mode.", "Forget networks you don’t trust."],
  },
  {
    title: "Identity Theft",
    description: "Use of stolen PII to open accounts, file taxes, or impersonate you online.",
    icon: <ShieldExclamationIcon className="h-6 w-6 text-danger" />,
    variant: "danger" as const,
    points: ["Freeze credit where available.", "Use unique emails or aliases for signups.", "Review statements and alerts monthly."],
  },
  {
    title: "Cloud Misconfig",
    description: "Open buckets, weak IAM, or default creds exposing sensitive data.",
    icon: <ShieldCheckIcon className="h-6 w-6 text-warning" />,
    variant: "warning" as const,
    points: ["Disable public access by default.", "Use MFA + least privilege.", "Enable audit logs and alerts."],
  },
];

const tips = [
  { title: "Enable MFA everywhere", description: "Add an extra lock so stolen passwords can’t be reused." },
  { title: "Turn on alerts", description: "Get notified about logins, payments, and account changes." },
  { title: "Install from official stores", description: "Avoid sideloaded apps that may contain hidden malware." },
  { title: "Separate work & personal", description: "Use different profiles to isolate credentials." },
  { title: "Verify before you share", description: "Never send sensitive info over DM without confirming identity." },
  { title: "Backup routinely", description: "Keep 3 copies: device, external drive, and cloud." },
  { title: "Auto-update devices", description: "Patch browsers, OS, and routers to close known holes." },
  { title: "Review app permissions", description: "Remove mic/camera/location access you don’t need." },
];

const timelineItems: TimelineItem[] = [
  {
    year: "2024",
    label: "Deepfake Scam",
    title: "Voice-cloned CEO authorizes $25M transfer",
    description: "Attackers used AI-generated audio to mimic an executive and pressure finance staff.",
    lessons: ["Use call-back verification for large payments.", "Train staff to spot urgency + secrecy patterns."],
    tone: "danger",
  },
  {
    year: "2023",
    label: "Ransomware",
    title: "Hospital forced to divert patients",
    description: "Unpatched VPN appliance was exploited; backups were outdated.",
    lessons: ["Patch external systems rapidly.", "Test backups and keep an offline copy."],
    tone: "warning",
  },
  {
    year: "2022",
    label: "Phishing",
    title: "Payroll portal credentials stolen",
    description: "Lookalike domain captured employee logins.",
    lessons: ["Use MFA and domain monitoring.", "Enable browser password alerts."],
    tone: "info",
  },
  {
    year: "2021",
    label: "Supply Chain",
    title: "Compromised update delivers malware",
    description: "Users installed a trusted app update that was backdoored upstream.",
    lessons: ["Verify signatures and SBOMs.", "Monitor outbound connections after updates."],
    tone: "warning",
  },
];

const resources = [
  {
    title: "Report phishing fast",
    description: "Forward suspicious emails to your IT or report@phishing.gov.",
    icon: <ExclamationTriangleIcon className="h-6 w-6 text-warning" />,
    variant: "warning" as const,
  },
  {
    title: "Take a 5-minute quiz",
    description: "Test your instincts and share with friends.",
    icon: <CheckCircleIcon className="h-6 w-6 text-accent" />,
    variant: "accent" as const,
  },
  {
    title: "Stay updated",
    description: "Subscribe to vendor and security bulletins for critical patches.",
    icon: <SignalIcon className="h-6 w-6 text-info" />,
    variant: "info" as const,
  },
  {
    title: "Practice incident drills",
    description: "Run tabletop scenarios for phishing, ransomware, and lost devices.",
    icon: <ShieldCheckIcon className="h-6 w-6 text-accent" />,
    variant: "accent" as const,
  },
];

const riskSignals = [
  { label: "Suspicious logins (24h)", value: "1,284", note: "Most blocked via MFA" },
  { label: "Leaked credentials", value: "312", note: "Rotate and enable alerts" },
  { label: "Phishing domains tracked", value: "428", note: "Lookalike brands active" },
  { label: "Unpatched endpoints", value: "76", note: "Prioritize critical updates" },
];

const threatCounters = [
  { label: "Total phishing sites detected today", value: "12,842", delta: "+6.4% vs avg", tone: "warning" },
  { label: "Passwords breached this hour", value: "9,118", delta: "High flux", tone: "danger" },
  { label: "Ransomware cases (global)", value: "1,087", delta: "↓ 2.1%", tone: "accent" },
  { label: "Suspicious logins blocked", value: "18,420", delta: "+2FA saves", tone: "info" },
];

type TrendKey = "phishing" | "breaches" | "ransomware" | "logins";

const trendData: Array<{ day: string } & Record<TrendKey, number>> = [
  { day: "Mon", phishing: 2200, breaches: 620, ransomware: 70, logins: 1500 },
  { day: "Tue", phishing: 2480, breaches: 700, ransomware: 90, logins: 1620 },
  { day: "Wed", phishing: 2610, breaches: 810, ransomware: 120, logins: 1700 },
  { day: "Thu", phishing: 2740, breaches: 760, ransomware: 110, logins: 1650 },
  { day: "Fri", phishing: 3010, breaches: 920, ransomware: 140, logins: 1820 },
  { day: "Sat", phishing: 2140, breaches: 580, ransomware: 80, logins: 1400 },
  { day: "Sun", phishing: 1980, breaches: 540, ransomware: 65, logins: 1320 },
];

const threatFeed = [
  { ts: "09:24", type: "Phishing", severity: "High", note: "Brand-impersonation emails blocked" },
  { ts: "09:12", type: "Credential stuffing", severity: "Medium", note: "Login throttling triggered" },
  { ts: "08:58", type: "Ransomware", severity: "High", note: "Payload quarantined in sandbox" },
  { ts: "08:41", type: "Malware", severity: "Low", note: "Suspicious USB autorun blocked" },
  { ts: "08:25", type: "Phishing", severity: "Medium", note: "Lookalike domain reported" },
];

const threatLevel = {
  status: "High",
  note: "Active phishing + credential stuffing spikes",
  tone: "danger" as const,
};

const mapHotspots = [
  { city: "Singapore", x: 72, y: 48, tone: "danger" },
  { city: "Frankfurt", x: 46, y: 36, tone: "warning" },
  { city: "São Paulo", x: 32, y: 62, tone: "accent" },
  { city: "Sydney", x: 82, y: 72, tone: "info" },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(83,243,195,0.08),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(124,192,255,0.08),transparent_36%)]" aria-hidden />
      <header className="sticky top-0 z-20 border-b border-border/70 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold font-display tracking-wide hover:text-accent">
            <span className="rounded-md bg-accent/15 px-2 py-1 text-accent">●</span>
            CyberSafe Hub
          </Link>
          <nav className="hidden items-center gap-4 text-sm text-muted sm:flex">
            <Link className="hover:text-foreground" href="/threats">Threats</Link>
            <Link className="hover:text-foreground" href="/training">Training</Link>
            <Link className="hover:text-foreground" href="/playbooks">Playbooks</Link>
            <Link className="hover:text-foreground" href="/resources">Resources</Link>
            <Link className="hover:text-foreground" href="/glossary">Glossary</Link>
            <Link className="hover:text-foreground" href="/reports">Reports</Link>
            <Link className="hover:text-foreground" href="/dashboard">Dashboard</Link>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-8 pt-14 sm:px-6 md:flex-row md:items-center md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
              <ShieldCheckIcon className="h-4 w-4" /> Stay ahead of cyber threats
            </div>
            <h1 className="font-display text-3xl font-semibold leading-tight sm:text-5xl">
              Learn the habits that keep your digital life safe.
            </h1>
            <p className="max-w-2xl text-lg text-muted">
              Practical, no-nonsense guidance on phishing, password hygiene, device safety, and more—designed for everyone, not just security pros.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-info px-4 py-3 text-sm font-semibold text-background shadow-[0_18px_50px_rgba(83,243,195,0.25)] transition hover:shadow-[0_22px_60px_rgba(124,192,255,0.25)]"
                href="#tips"
              >
                Start with safety tips
                <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-3 text-sm font-semibold text-foreground transition hover:border-accent/60 hover:text-accent"
                href="#cases"
              >
                See real-world cases
              </a>
              <Link
                className="inline-flex items-center gap-2 rounded-full bg-background/20 px-4 py-3 text-sm font-semibold text-foreground ring-1 ring-border transition hover:text-accent hover:ring-accent/60"
                href="/dashboard"
              >
                <ChartBarIcon className="h-4 w-4" /> Open live dashboard
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-muted">
              <span className="pill-label rounded-full bg-accent/10 px-3 py-1 text-accent">Threat breakdowns</span>
              <span className="pill-label rounded-full bg-info/10 px-3 py-1 text-info">Password playbook</span>
              <span className="pill-label rounded-full bg-danger/10 px-3 py-1 text-danger">Quick wins</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full max-w-md rounded-[var(--radius-lg)] border border-border bg-panel/80 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur"
          >
            <div className="flex items-center justify-between text-sm font-semibold text-muted">
              <span className="flex items-center gap-2 text-foreground">
                <SignalIcon className="h-4 w-4 text-accent" /> Live risk signals
              </span>
              <span className="flex items-center gap-2 text-accent">
                <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_rgba(83,243,195,0.8)]" /> Monitoring
              </span>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {riskSignals.map((signal) => (
                <motion.div
                  key={signal.label}
                  whileHover={{ y: -2 }}
                  className="rounded-[var(--radius-md)] border border-border bg-card/80 p-3 shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
                >
                  <p className="text-xs text-muted">{signal.label}</p>
                  <p className="text-xl font-semibold text-foreground">{signal.value}</p>
                  <p className="text-xs text-accent">{signal.note}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between rounded-[var(--radius-md)] border border-border/80 bg-card/60 px-4 py-3 text-sm text-muted">
              <span>Know the signals. Reduce your risk.</span>
              <ArrowRightIcon className="h-4 w-4 text-accent" />
            </div>
          </motion.div>
        </section>

        <Section
          id="threats"
          eyebrow="Common threats"
          title="Recognize attacks before they strike."
          description="Spotting early warning signs turns potential disasters into harmless blips."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {threats.map((threat) => (
              <InfoCard key={threat.title} {...threat} />
            ))}
          </div>
        </Section>

        <Section
          id="tips"
          eyebrow="Safety tips"
          title="Turn good habits into muscle memory."
          description="Simple routines drastically reduce risk—no jargon required."
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {tips.map((tip) => (
              <motion.div
                key={tip.title}
                whileHover={{ y: -3 }}
                className="flex gap-3 rounded-[var(--radius-md)] border border-border bg-card/70 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
              >
                <div className="mt-1 h-9 w-9 rounded-lg bg-accent/15 text-center text-sm font-semibold text-accent">
                  ✔
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold">{tip.title}</h3>
                  <p className="text-sm text-muted">{tip.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section
          id="passwords"
          eyebrow="Password security"
          title="Strong, unique, and stored safely."
          description="Weak or reused passwords cause most breaches. Fix that in minutes."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <InfoCard
                title="Recipe for a strong password"
                description="Make cracking attempts impractical by design."
                variant="info"
                points={[
                  "At least 14 characters (more is better).",
                  "Mix upper, lower, numbers, and symbols.",
                  "Avoid words, quotes, or personal info.",
                  "Use a unique password per site.",
                ]}
              />
              <InfoCard
                title="Use a password manager"
                description="It creates and stores unique passwords, auto-fills them, and syncs securely across devices."
                variant="accent"
                points={["Enable passkeys where available for phishing-resistant logins.", "Turn on breach alerts and auto-rotate when supported."]}
                icon={<LockClosedIcon className="h-6 w-6 text-accent" />}
              />
            </div>
            <PasswordGenerator />
          </div>
        </Section>

        <Section
          id="cases"
          eyebrow="Real-life cases"
          title="Lessons from incidents that made headlines."
          description="Real stories show how small mistakes become big problems—and how to avoid them."
        >
          <Timeline items={timelineItems} />
        </Section>

        <Section id="resources" eyebrow="Next steps" title="Keep improving your security posture.">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource) => (
              <InfoCard key={resource.title} {...resource} />
            ))}
          </div>
        </Section>
      </main>

    </div>
  );
}
