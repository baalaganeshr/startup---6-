'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeftIcon, ChartBarIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { reportMetrics } from "@/data/content";

export default function ReportsPage() {
  const maxVal = Math.max(...reportMetrics.series.flatMap((s) => [s.phishing, s.malware, s.ransomware]));
  const barScale = (val: number) => `${(val / maxVal) * 100}%`;

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(83,243,195,0.08),transparent_32%),radial-gradient(circle_at_82%_0%,rgba(255,107,107,0.08),transparent_36%)]" aria-hidden />

      <header className="sticky top-0 z-20 border-b border-border/70 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold font-display tracking-wide hover:text-accent">
            <span className="rounded-md bg-warning/15 px-2 py-1 text-warning">●</span>
            Reports & Signals
          </Link>
          <div className="flex gap-2 text-sm font-semibold">
            <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-foreground transition hover:border-accent/60 hover:text-accent">
              <ArrowLeftIcon className="h-4 w-4" /> Back home
            </Link>
            <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-full border border-warning/60 bg-warning/10 px-3 py-2 text-warning transition hover:border-warning hover:bg-warning/20">
              Live dashboard
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-10 space-y-6 sm:px-6">
        <div className="space-y-3">
          <p className="pill-label text-xs text-muted">Status at a glance</p>
          <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">Dummy KPIs you can swap later.</h1>
          <p className="max-w-3xl text-base text-muted">Static metrics and trends showcasing the layout. Replace with real telemetry when ready.</p>
          <div className="flex flex-wrap gap-2 text-xs text-muted">
            <span className="rounded-full bg-warning/10 px-3 py-1 text-warning">Trends</span>
            <span className="rounded-full bg-accent/10 px-3 py-1 text-accent">Coverage</span>
            <span className="rounded-full bg-danger/10 px-3 py-1 text-danger">Risk</span>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="space-y-4 rounded-[var(--radius-lg)] border border-border bg-panel/80 p-5 shadow-[0_26px_70px_rgba(0,0,0,0.45)] lg:col-span-2">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="pill-label text-xs text-muted">KPIs</p>
                <h2 className="font-display text-xl font-semibold text-foreground">Key performance indicators</h2>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-background/50 px-3 py-1 text-xs text-muted">
                <SparklesIcon className="h-4 w-4 text-accent" /> Simulated data
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {reportMetrics.kpis.map((kpi) => (
                <motion.div
                  key={kpi.label}
                  whileHover={{ y: -3 }}
                  className="rounded-[var(--radius-md)] border border-border bg-card/80 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">{kpi.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-foreground">{kpi.value}</p>
                  <p className="text-xs text-accent">{kpi.change}</p>
                </motion.div>
              ))}
            </div>

            <div className="rounded-[var(--radius-lg)] border border-border bg-background/40 p-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="pill-label text-xs text-muted">Weekly signal</p>
                  <h3 className="font-display text-lg font-semibold">Incident volume by type</h3>
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-muted">
                  <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-accent" /> Phishing</span>
                  <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-info" /> Malware</span>
                  <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-danger" /> Ransomware</span>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                {reportMetrics.series.map((row) => (
                  <div key={row.week} className="space-y-1">
                    <div className="flex items-center justify-between text-xs text-muted">
                      <span className="font-semibold text-foreground">{row.week}</span>
                      <span>{row.phishing + row.malware + row.ransomware} incidents</span>
                    </div>
                    <div className="flex h-2 overflow-hidden rounded-full border border-border/70 bg-background/60">
                      <div className="h-full bg-accent" style={{ width: barScale(row.phishing) }} />
                      <div className="h-full bg-info" style={{ width: barScale(row.malware) }} />
                      <div className="h-full bg-danger" style={{ width: barScale(row.ransomware) }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4 rounded-[var(--radius-lg)] border border-border bg-card/80 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="pill-label text-xs text-muted">Highlights</p>
                <h4 className="font-display text-lg font-semibold text-foreground">Notable moves</h4>
              </div>
              <ChartBarIcon className="h-5 w-5 text-accent" />
            </div>
            <div className="space-y-3 text-sm text-muted">
              {reportMetrics.highlights.map((line, idx) => (
                <div key={idx} className="rounded-[var(--radius-md)] border border-border/70 bg-background/40 px-3 py-2">
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
