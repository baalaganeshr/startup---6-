'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeftIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import { playbooks } from "@/data/content";

export default function PlaybooksPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(83,243,195,0.08),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(255,107,107,0.08),transparent_36%)]" aria-hidden />

      <header className="sticky top-0 z-20 border-b border-border/70 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold font-display tracking-wide hover:text-accent">
            <span className="rounded-md bg-danger/15 px-2 py-1 text-danger">●</span>
            Incident Playbooks
          </Link>
          <div className="flex gap-2 text-sm font-semibold">
            <Link href="/training" className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-foreground transition hover:border-accent/60 hover:text-accent">
              <ArrowLeftIcon className="h-4 w-4" /> Training
            </Link>
            <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-full border border-danger/60 bg-danger/10 px-3 py-2 text-danger transition hover:border-danger hover:bg-danger/20">
              View dashboard
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-10 space-y-6 sm:px-6">
        <div className="space-y-3">
          <p className="pill-label text-xs text-muted">First response</p>
          <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">Crisp, repeatable steps under pressure.</h1>
          <p className="max-w-3xl text-base text-muted">Use these dummy playbooks to practice containment and escalation. Timings are illustrative.</p>
          <div className="flex flex-wrap gap-2 text-xs text-muted">
            <span className="rounded-full bg-danger/10 px-3 py-1 text-danger">Contain fast</span>
            <span className="rounded-full bg-warning/10 px-3 py-1 text-warning">Preserve evidence</span>
            <span className="rounded-full bg-accent/10 px-3 py-1 text-accent">Communicate clearly</span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {playbooks.map((book) => (
            <motion.div
              key={book.id}
              whileHover={{ y: -4 }}
              className="rounded-[var(--radius-lg)] border border-border bg-card/80 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">RTO {book.rto}</p>
                  <h3 className="font-display text-xl font-semibold text-foreground">{book.title}</h3>
                  <div className="space-y-2">
                    {book.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 rounded-[var(--radius-md)] border border-border/60 bg-background/40 px-3 py-2">
                        <span className="mt-0.5 h-6 w-6 rounded-full bg-danger/10 text-center text-xs font-semibold text-danger">{idx + 1}</span>
                        <p className="text-sm text-muted">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <span className="pill-label rounded-full bg-danger/10 px-3 py-1 text-xs font-semibold text-danger">Playbook</span>
              </div>
              <div className="mt-4 flex items-center justify-between rounded-[var(--radius-md)] border border-border/70 bg-background/40 px-3 py-2 text-sm text-muted">
                <span className="inline-flex items-center gap-2 text-foreground">
                  <ClipboardDocumentListIcon className="h-4 w-4 text-danger" /> Follow steps
                </span>
                <span className="text-xs text-accent">Simulated</span>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
