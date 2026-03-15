'use client';

import { motion } from "framer-motion";

export interface TimelineItem {
  year: string;
  label: string;
  title: string;
  description: string;
  lessons: string[];
  tone?: "danger" | "warning" | "info";
}

const tagColors: Record<NonNullable<TimelineItem["tone"]>, string> = {
  danger: "bg-danger text-background",
  warning: "bg-warning text-background",
  info: "bg-info text-background",
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative mt-6 border-l border-border/70 pl-6">
      {items.map((item, idx) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.05, duration: 0.35 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative mb-10"
        >
          <span className="absolute -left-[30px] mt-2 h-3 w-3 rounded-full bg-accent shadow-[0_0_12px_rgba(83,243,195,0.8)]" />
          <div className="rounded-[var(--radius-md)] border border-border bg-card/70 p-5 shadow-[0_16px_50px_rgba(0,0,0,0.35)]">
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-muted">
              <span className="text-foreground/80">{item.year}</span>
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${item.tone ? tagColors[item.tone] : "bg-border text-foreground"}`}>
                {item.label}
              </span>
            </div>
            <h3 className="mt-3 text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.description}</p>
            <ul className="mt-3 space-y-1.5 text-sm text-muted">
              {item.lessons.map((lesson) => (
                <li key={lesson} className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
