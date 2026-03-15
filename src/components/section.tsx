import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="relative mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
      <div className="mb-10 flex flex-col gap-3">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
        ) : null}
        <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
        {description ? (
          <p className="max-w-3xl text-base text-muted sm:text-lg">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
