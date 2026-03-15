'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeftIcon,
  BoltIcon,
  ChartBarIcon,
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  SignalIcon,
} from "@heroicons/react/24/outline";

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

export default function DashboardPage() {
  const chartWidth = 360;
  const chartHeight = 160;
  const maxVal = Math.max(
    ...trendData.flatMap((p) => [p.phishing, p.breaches, p.ransomware, p.logins])
  );

  const pathFor = (key: TrendKey) => {
    const step = chartWidth / Math.max(trendData.length - 1, 1);
    return trendData
      .map((point, idx) => {
        const x = idx * step;
        const y = chartHeight - (point[key] / maxVal) * (chartHeight - 24) - 8;
        return `${idx === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
      })
      .join(" ");
  };

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(83,243,195,0.08),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(124,192,255,0.08),transparent_36%)]" aria-hidden />

      <header className="sticky top-0 z-20 border-b border-border/70 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold font-display tracking-wide hover:text-accent">
            <span className="rounded-md bg-accent/15 px-2 py-1 text-accent">●</span>
            CyberSafe Hub — Dashboard
          </Link>
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-3 py-2 text-sm font-semibold text-foreground transition hover:border-accent/60 hover:text-accent sm:w-auto"
          >
            <ArrowLeftIcon className="h-4 w-4" /> Back to overview
          </Link>
        </div>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-10 space-y-6 sm:px-6">
        <div className="flex flex-col gap-3">
          <p className="pill-label text-xs text-muted">Live dashboard</p>
          <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">Mission control for cyber threats.</h1>
          <p className="max-w-3xl text-base text-muted">
            Real-time posture at a glance: volume, velocity, and where attacks originate. Data is simulated for demo purposes.
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-muted">
            <span className="flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-accent">
              <ChartBarIcon className="h-4 w-4" /> Live signals
            </span>
            <span className="flex items-center gap-2 rounded-full bg-danger/10 px-3 py-1 text-danger">
              <BoltIcon className="h-4 w-4" /> Active alerts
            </span>
            <span className="flex items-center gap-2 rounded-full bg-info/10 px-3 py-1 text-info">
              <SignalIcon className="h-4 w-4" /> Trends
            </span>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {threatCounters.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -3 }}
                  className={`rounded-[var(--radius-md)] border border-border bg-card/80 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.35)] ${
                    item.tone === "warning"
                      ? "border-warning/50"
                      : item.tone === "danger"
                        ? "border-danger/50"
                        : item.tone === "accent"
                          ? "border-accent/50"
                          : "border-info/50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">{item.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-foreground">{item.value}</p>
                  <p className="text-xs text-accent">{item.delta}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              <div className="lg:col-span-2 rounded-[var(--radius-lg)] border border-border bg-panel/80 p-4 shadow-[0_26px_70px_rgba(0,0,0,0.45)]">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="pill-label text-xs text-muted">Live activity</p>
                    <h3 className="font-display text-xl font-semibold text-foreground">7-day threat trends</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-muted">
                    <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-accent" /> Phishing</span>
                    <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-info" /> Breaches</span>
                    <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-danger" /> Ransomware</span>
                  </div>
                </div>
                <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="mt-3 h-40 w-full">
                  <defs>
                    <linearGradient id="phish" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="rgba(83,243,195,0.6)" />
                      <stop offset="100%" stopColor="rgba(83,243,195,0.05)" />
                    </linearGradient>
                    <linearGradient id="breach" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="rgba(124,192,255,0.7)" />
                      <stop offset="100%" stopColor="rgba(124,192,255,0.08)" />
                    </linearGradient>
                  </defs>
                  <path d={pathFor("phishing")} fill="none" stroke="url(#phish)" strokeWidth="3" strokeLinecap="round" />
                  <path d={pathFor("breaches")} fill="none" stroke="url(#breach)" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="6 4" />
                  <path d={pathFor("ransomware")} fill="none" stroke="rgba(255,107,107,0.8)" strokeWidth="2.6" strokeLinecap="round" />
                </svg>
                <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted">
                  {trendData.map((d) => (
                    <span key={d.day} className="rounded-full border border-border px-2 py-1">
                      {d.day} • {(d.phishing / 1000).toFixed(1)}k phishing
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 rounded-[var(--radius-lg)] border border-border bg-card/80 p-4 shadow-[0_22px_60px_rgba(0,0,0,0.4)]">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="pill-label text-xs text-muted">Threat level</p>
                    <h4 className="font-display text-lg font-semibold text-foreground">{threatLevel.status}</h4>
                  </div>
                  <div className="relative inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-semibold">
                    <span className={`absolute -left-2 h-3 w-3 rounded-full ${threatLevel.tone === "danger" ? "bg-danger" : "bg-warning"} animate-ping`} aria-hidden />
                    <span className={`h-2 w-2 rounded-full ${threatLevel.tone === "danger" ? "bg-danger" : "bg-warning"}`} />
                    {threatLevel.status}
                  </div>
                </div>
                <p className="text-sm text-muted">{threatLevel.note}</p>
                <div className="rounded-[var(--radius-md)] border border-border bg-background/30 p-3 text-xs text-muted">
                  Active alerts pulsing — review phishing domains, rotate credentials, enforce MFA for all admins.
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[var(--radius-lg)] border border-border bg-panel/80 p-4 shadow-[0_22px_60px_rgba(0,0,0,0.45)]">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="pill-label text-xs text-muted">Origin map</p>
                  <h4 className="font-display text-lg font-semibold text-foreground">Hotspots</h4>
                </div>
                <span className="text-xs text-muted">simulated</span>
              </div>
              <div className="relative mt-3 h-56 overflow-hidden rounded-[var(--radius-md)] bg-[radial-gradient(circle_at_50%_30%,rgba(83,243,195,0.08),transparent_40%),radial-gradient(circle_at_20%_70%,rgba(124,192,255,0.08),transparent_45%),#0b1526] border border-border sm:h-48">
                {mapHotspots.map((spot) => (
                  <div
                    key={spot.city}
                    className="absolute"
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  >
                    <span className={`block h-3 w-3 rounded-full ${spot.tone === "danger" ? "bg-danger" : spot.tone === "warning" ? "bg-warning" : spot.tone === "accent" ? "bg-accent" : "bg-info"} animate-ping opacity-60`} />
                    <span className={`-mt-2 block h-3 w-3 rounded-full border border-background ${spot.tone === "danger" ? "bg-danger" : spot.tone === "warning" ? "bg-warning" : spot.tone === "accent" ? "bg-accent" : "bg-info"}`} />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[var(--radius-lg)] border border-border bg-card/80 p-4 shadow-[0_22px_60px_rgba(0,0,0,0.4)]">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="pill-label text-xs text-muted">Recent alerts</p>
                  <h4 className="font-display text-lg font-semibold text-foreground">Live feed</h4>
                </div>
                <span className="text-xs text-accent">auto-scroll</span>
              </div>
              <div className="mt-3 space-y-2 text-sm text-muted">
                {threatFeed.map((alert) => (
                  <div key={`${alert.ts}-${alert.type}`} className="flex flex-col gap-2 rounded-[var(--radius-sm)] border border-border/60 bg-background/30 px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-foreground">{alert.ts} • {alert.type}</p>
                      <p className="text-xs text-muted">{alert.note}</p>
                    </div>
                    <span className={`pill-label w-fit rounded-full px-2 py-1 text-[10px] ${
                      alert.severity === "High" ? "bg-danger/20 text-danger" : alert.severity === "Medium" ? "bg-warning/20 text-warning" : "bg-info/20 text-info"
                    }`}>
                      {alert.severity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
