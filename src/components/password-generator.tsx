'use client';

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ClipboardIcon, CheckCircleIcon, ExclamationTriangleIcon, SparklesIcon } from "@heroicons/react/24/outline";

const charset = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+{}[]<>?~",
};

type Settings = {
  length: number;
  upper: boolean;
  lower: boolean;
  numbers: boolean;
  symbols: boolean;
};

export function PasswordGenerator() {
  const [settings, setSettings] = useState<Settings>({
    length: 16,
    upper: true,
    lower: true,
    numbers: true,
    symbols: true,
  });
  const [password, setPassword] = useState("Click generate");
  const [copied, setCopied] = useState(false);

  const activeSets = useMemo(
    () => Object.entries(settings).filter(([key, value]) => key in charset && value),
    [settings]
  );

  const generate = () => {
    if (!activeSets.length) {
      setPassword("Select at least one set");
      return;
    }
    const pool = activeSets.map(([key]) => charset[key as keyof typeof charset]).join("");
    const required = activeSets.map(([key]) => charset[key as keyof typeof charset]);

    const chars: string[] = [];
    required.forEach((set) => chars.push(set[Math.floor(Math.random() * set.length)]));

    while (chars.length < settings.length) {
      const pick = pool[Math.floor(Math.random() * pool.length)];
      chars.push(pick);
    }

    for (let i = chars.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [chars[i], chars[j]] = [chars[j], chars[i]];
    }

    setPassword(chars.slice(0, settings.length).join(""));
    setCopied(false);
  };

  useEffect(() => {
    generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCopy = async () => {
    if (!password || password.startsWith("Select") || password === "Click generate") return;
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };

  const toggle = (key: keyof Settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="rounded-[var(--radius-lg)] border border-accent/30 bg-gradient-to-br from-card/90 via-panel/90 to-card/90 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <SparklesIcon className="h-5 w-5 text-accent" />
          Strong Password Generator
        </div>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-foreground transition hover:border-accent/60 hover:text-accent"
        >
          {copied ? (
            <>
              <CheckCircleIcon className="h-4 w-4" /> Copied
            </>
          ) : (
            <>
              <ClipboardIcon className="h-4 w-4" /> Copy
            </>
          )}
        </button>
      </div>

      <div className="mt-3 rounded-[var(--radius-md)] border border-border bg-black/30 px-4 py-3 font-mono text-base tracking-tight text-foreground">
        {password}
      </div>

      <div className="mt-4 space-y-3 text-sm text-muted">
        <div className="flex items-center justify-between gap-3">
          <label className="font-semibold text-foreground">Length: {settings.length}</label>
          <input
            type="range"
            min={12}
            max={32}
            value={settings.length}
            onChange={(e) => setSettings((prev) => ({ ...prev, length: Number(e.target.value) }))}
            className="w-48 accent-accent"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {(["upper", "lower", "numbers", "symbols"] as Array<keyof Settings>).map((key) => (
            <label
              key={key}
              className="flex items-center gap-2 rounded-[var(--radius-sm)] border border-border bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-foreground transition hover:border-accent/60"
            >
              <input
                type="checkbox"
                checked={settings[key] as boolean}
                onChange={() => toggle(key)}
                className="h-4 w-4 accent-accent"
              />
              {key}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted">
        <ExclamationTriangleIcon className="h-4 w-4 text-warning" />
        Never reuse passwords. Enable passkeys or MFA wherever possible.
      </div>
    </motion.div>
  );
}
