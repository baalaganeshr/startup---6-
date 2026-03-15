'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldExclamationIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { threatLibrary } from "@/data/content";

export default function ThreatsPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(83,243,195,0.08),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(124,192,255,0.08),transparent_36%)]" aria-hidden />

      <header className="sticky top-0 z-20 border-b border-border/70 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold font-display tracking-wide hover:text-accent">
            <span className="rounded-md bg-accent/15 px-2 py-1 text-accent">●</span>
            Threat Intelligence
          </Link>
          <div className="flex gap-2 text-sm font-semibold">
            <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-foreground transition hover:border-accent/60 hover:text-accent">
              <ArrowLeftIcon className="h-4 w-4" /> Back home
            </Link>
            <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-full border border-accent/60 bg-accent/10 px-3 py-2 text-accent transition hover:border-accent hover:bg-accent/20">
              Open dashboard
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-10 space-y-6 sm:px-6">
        <div className="space-y-3">
          <p className="pill-label text-xs text-muted">Live spotlight</p>
          <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">{threatLibrary.spotlight.title}</h1>
          <p className="max-w-3xl text-base text-muted">{threatLibrary.spotlight.description}</p>
          <div className="flex flex-wrap gap-2 text-xs text-muted">
            <span className="flex items-center gap-2 rounded-full bg-danger/10 px-3 py-1 text-danger">Criticals first</span>
            <span className="flex items-center gap-2 rounded-full bg-info/10 px-3 py-1 text-info">Weekly refresh</span>
            <span className="flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-accent">Action-ready</span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {threatLibrary.threats.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -3 }}
              className="rounded-[var(--radius-lg)] border border-border bg-panel/80 p-4 shadow-[0_22px_60px_rgba(0,0,0,0.45)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">{item.vector}</p>
                  <h3 className="font-display text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-muted">{item.note}</p>
                </div>
                <span className={`pill-label rounded-full px-3 py-1 text-xs font-semibold ${
                  item.severity === "High"
                    ? "bg-danger/15 text-danger"
                    : item.severity === "Medium"
                      ? "bg-warning/15 text-warning"
                      : "bg-info/15 text-info"
                }`}>
                  {item.severity}
                </span>
              </div>
              <div className="mt-3 flex items-start gap-2 rounded-[var(--radius-md)] border border-border/70 bg-background/40 px-3 py-2 text-sm text-muted">
                <ShieldExclamationIcon className="h-4 w-4 text-accent" />
                <div>
                  <p className="text-xs font-semibold text-foreground">Action</p>
                  <p>{item.action}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
