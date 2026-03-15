'use client';

import { motion } from "framer-motion";
import { ReactNode } from "react";

const variants = {
  accent: "bg-card border border-accent/40 text-foreground shadow-[0_20px_60px_rgba(83,243,195,0.15)]",
  info: "bg-card border border-info/35 text-foreground shadow-[0_20px_60px_rgba(124,192,255,0.12)]",
  warning: "bg-card border border-warning/40 text-foreground shadow-[0_20px_60px_rgba(247,201,72,0.15)]",
  danger: "bg-card border border-danger/35 text-foreground shadow-[0_20px_60px_rgba(255,107,107,0.15)]",
  neutral: "bg-card border border-border text-foreground shadow-[0_20px_60px_rgba(0,0,0,0.35)]",
};

interface InfoCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  points?: string[];
  variant?: keyof typeof variants;
}

export function InfoCard({ title, description, icon, points, variant = "neutral" }: InfoCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      className={`group relative overflow-hidden rounded-[var(--radius-lg)] p-5 backdrop-blur ${variants[variant]}`}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      <div className="flex items-start gap-3">
        {icon ? (
          <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-[12px] bg-white/5 text-lg">
            {icon}
          </div>
        ) : null}
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-muted">{description}</p>
          {points?.length ? (
            <ul className="mt-3 space-y-1.5 text-sm text-muted">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
