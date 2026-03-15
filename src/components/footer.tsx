"use client";

import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 pb-10 pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <Link href="/" className="inline-flex items-center gap-2 font-display text-base font-semibold text-foreground hover:text-accent">
        <span className="rounded-md bg-accent/15 px-2 py-1 text-accent">●</span>
        CyberSafe Hub
      </Link>
      <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
        <Link className="inline-flex items-center gap-1 hover:text-foreground" href="/dashboard">
          Dashboard <ArrowUpRightIcon className="h-4 w-4" />
        </Link>
        <Link className="inline-flex items-center gap-1 hover:text-foreground" href="/threats">
          Threats <ArrowUpRightIcon className="h-4 w-4" />
        </Link>
        <Link className="inline-flex items-center gap-1 hover:text-foreground" href="/training">
          Training <ArrowUpRightIcon className="h-4 w-4" />
        </Link>
        <Link className="inline-flex items-center gap-1 hover:text-foreground" href="/resources">
          Resources <ArrowUpRightIcon className="h-4 w-4" />
        </Link>
      </div>
      <span className="text-xs sm:text-sm">Built for modern browsers — stay patched, stay protected.</span>
    </footer>
  );
}
