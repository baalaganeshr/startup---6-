'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpenIcon, ArrowLeftIcon, PlayIcon } from "@heroicons/react/24/outline";
import { trainingModules } from "@/data/content";

export default function TrainingPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_24%,rgba(83,243,195,0.08),transparent_34%),radial-gradient(circle_at_85%_6%,rgba(124,192,255,0.08),transparent_40%)]" aria-hidden />

      <header className="sticky top-0 z-20 border-b border-border/70 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold font-display tracking-wide hover:text-accent">
            <span className="rounded-md bg-info/15 px-2 py-1 text-info">●</span>
            Training Modules
          </Link>
          <div className="flex gap-2 text-sm font-semibold">
            <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-foreground transition hover:border-accent/60 hover:text-accent">
              <ArrowLeftIcon className="h-4 w-4" /> Back home
            </Link>
            <Link href="/playbooks" className="inline-flex items-center gap-2 rounded-full border border-info/60 bg-info/10 px-3 py-2 text-info transition hover:border-info hover:bg-info/20">
              Incident playbooks
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-10 space-y-6 sm:px-6">
        <div className="space-y-3">
          <p className="pill-label text-xs text-muted">Self-paced</p>
          <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">Sharpen skills in minutes.</h1>
          <p className="max-w-3xl text-base text-muted">Bite-sized lessons with outcomes you can apply immediately. All content is simulated for demo.</p>
          <div className="flex flex-wrap gap-2 text-xs text-muted">
            <span className="flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-accent">Actionable outcomes</span>
            <span className="flex items-center gap-2 rounded-full bg-info/10 px-3 py-1 text-info">Short formats</span>
            <span className="flex items-center gap-2 rounded-full bg-warning/10 px-3 py-1 text-warning">Levels curated</span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {trainingModules.map((module) => (
            <motion.div
              key={module.id}
              whileHover={{ y: -4 }}
              className="rounded-[var(--radius-lg)] border border-border bg-panel/80 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">{module.level}</p>
                  <h3 className="font-display text-xl font-semibold text-foreground">{module.title}</h3>
                  <div className="flex flex-wrap gap-2 text-xs text-muted">
                    {module.outcomes.map((item) => (
                      <span key={item} className="rounded-full bg-background/40 px-3 py-1">{item}</span>
                    ))}
                  </div>
                </div>
                <span className="pill-label rounded-full bg-info/10 px-3 py-1 text-xs font-semibold text-info">{module.duration}</span>
              </div>
              <div className="mt-4 flex items-center justify-between rounded-[var(--radius-md)] border border-border/70 bg-background/40 px-3 py-2 text-sm text-muted">
                <span className="inline-flex items-center gap-2 text-foreground">
                  <BookOpenIcon className="h-4 w-4 text-info" /> Start lesson
                </span>
                <PlayIcon className="h-4 w-4 text-accent" />
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
