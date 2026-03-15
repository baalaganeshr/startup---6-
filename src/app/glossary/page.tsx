'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeftIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { glossaryTerms } from "@/data/content";

export default function GlossaryPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(83,243,195,0.08),transparent_32%),radial-gradient(circle_at_82%_6%,rgba(124,192,255,0.08),transparent_36%)]" aria-hidden />

      <header className="sticky top-0 z-20 border-b border-border/70 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold font-display tracking-wide hover:text-accent">
            <span className="rounded-md bg-info/15 px-2 py-1 text-info">●</span>
            Glossary
          </Link>
          <div className="flex gap-2 text-sm font-semibold">
            <Link href="/resources" className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-foreground transition hover:border-accent/60 hover:text-accent">
              <ArrowLeftIcon className="h-4 w-4" /> Resources
            </Link>
            <Link href="/reports" className="inline-flex items-center gap-2 rounded-full border border-accent/60 bg-accent/10 px-3 py-2 text-accent transition hover:border-accent hover:bg-accent/20">
              Reports
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-10 space-y-6 sm:px-6">
        <div className="space-y-3">
          <p className="pill-label text-xs text-muted">Plain language</p>
          <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">Decode the jargon quickly.</h1>
          <p className="max-w-3xl text-base text-muted">All terms are demo entries. Swap with your own definitions later.</p>
          <div className="flex flex-wrap gap-2 text-xs text-muted">
            <span className="rounded-full bg-background/40 px-3 py-1">Security 101</span>
            <span className="rounded-full bg-background/40 px-3 py-1">Zero trust</span>
            <span className="rounded-full bg-background/40 px-3 py-1">Identity</span>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {glossaryTerms.map((entry) => (
            <motion.div
              key={entry.term}
              whileHover={{ y: -2 }}
              className="rounded-[var(--radius-lg)] border border-border bg-card/80 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 rounded-full bg-background/40 px-3 py-1 text-xs text-muted">
                    <MagnifyingGlassIcon className="h-4 w-4 text-accent" /> Term
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{entry.term}</h3>
                  <p className="text-sm text-muted">{entry.definition}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
