import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon";
import type { Officer } from "@/data/officers";

/* Accent token → tailwind class maps (kept explicit so Tailwind sees the classes) */
const accentText: Record<string, string> = {
  "uofl-red": "text-uofl-red",
  "accent-loyalty": "text-accent-loyalty",
  "accent-progress": "text-accent-progress",
  "accent-courage": "text-accent-courage",
  "accent-innovation": "text-accent-innovation",
  "accent-patterson": "text-accent-patterson",
  "accent-ash": "text-accent-ash",
  "accent-bronze": "text-accent-bronze",
  "accent-laurel": "text-accent-laurel",
};
const accentBg: Record<string, string> = {
  "uofl-red": "bg-uofl-red",
  "accent-loyalty": "bg-accent-loyalty",
  "accent-progress": "bg-accent-progress",
  "accent-courage": "bg-accent-courage",
  "accent-innovation": "bg-accent-innovation",
  "accent-patterson": "bg-accent-patterson",
  "accent-ash": "bg-accent-ash",
  "accent-bronze": "bg-accent-bronze",
  "accent-laurel": "bg-accent-laurel",
};
const accentBorderTop: Record<string, string> = {
  "uofl-red": "border-t-uofl-red",
  "accent-loyalty": "border-t-accent-loyalty",
  "accent-progress": "border-t-accent-progress",
  "accent-courage": "border-t-accent-courage",
  "accent-innovation": "border-t-accent-innovation",
  "accent-patterson": "border-t-accent-patterson",
  "accent-ash": "border-t-accent-ash",
  "accent-bronze": "border-t-accent-bronze",
  "accent-laurel": "border-t-accent-laurel",
};

export const accent = { accentText, accentBg, accentBorderTop };

/* ---------- Breadcrumb + page header ---------- */
export function PageHeader({
  breadcrumbs,
  eyebrow,
  title,
  intro,
  accentKey = "uofl-red",
}: {
  breadcrumbs: { label: string; href?: string }[];
  eyebrow?: string;
  title: string;
  intro?: string;
  accentKey?: string;
}) {
  return (
    <section className="glass glass-sheen border-x-0 border-t-0 border-b border-b-white/50">
      <div className="container-max py-12 md:py-16">
        <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-2 text-label-sm text-secondary">
          {breadcrumbs.map((b, i) => (
            <span key={i} className="flex items-center gap-2">
              {b.href ? (
                <Link href={b.href} className="transition-colors hover:text-uofl-red">
                  {b.label}
                </Link>
              ) : (
                <span className="text-on-surface">{b.label}</span>
              )}
              {i < breadcrumbs.length - 1 && (
                <Icon name="chevron-right" size={14} className="text-border-subtle" />
              )}
            </span>
          ))}
        </nav>
        {eyebrow && (
          <span className={`mb-3 block font-body text-label-md font-bold uppercase tracking-[0.12em] ${accentText[accentKey]}`}>
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-4xl font-headline text-[34px] font-bold leading-[1.1] text-on-surface md:text-headline-xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-3xl text-body-lg text-secondary">{intro}</p>
        )}
      </div>
    </section>
  );
}

/* ---------- Section heading ---------- */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  accentKey = "uofl-red",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  accentKey?: string;
}) {
  return (
    <div className={`mb-10 flex flex-col ${align === "center" ? "items-center text-center" : "items-start"}`}>
      {eyebrow && (
        <span className={`mb-2 block font-body text-label-md font-bold uppercase tracking-[0.12em] ${accentText[accentKey]}`}>
          {eyebrow}
        </span>
      )}
      <h2 className="font-headline text-headline-lg-mobile font-bold text-on-surface md:text-headline-lg">
        {title}
      </h2>
      {intro && (
        <p className={`mt-3 max-w-2xl text-body-md text-secondary ${align === "center" ? "" : ""}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

/* ---------- Category chip ---------- */
export function Chip({ label, accentKey = "uofl-red" }: { label: string; accentKey?: string }) {
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-label-sm font-bold uppercase tracking-[0.06em] text-white ${accentBg[accentKey]}`}>
      {label}
    </span>
  );
}

/* ---------- Officer card (data-driven, monogram fallback) ---------- */
export function OfficerCard({ officer }: { officer: Officer }) {
  const initials = officer.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <div className="glass glass-sheen glass-hover group flex flex-col rounded-lg">
      <div className="relative h-52 w-full overflow-hidden rounded-t-lg bg-surface-container-high/60">
        {officer.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={officer.photo}
            alt={officer.name}
            className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-uofl-black to-[#3a3a3a]">
            <span className="font-headline text-[52px] font-bold text-white/90">
              {initials}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col border-t-[3px] border-t-uofl-red p-5">
        <p className="text-label-sm font-bold uppercase tracking-wide text-uofl-red">
          {officer.title}
        </p>
        <h3 className="mt-1 font-headline text-headline-sm font-bold text-on-surface">
          {officer.name}
        </h3>
        {officer.blurb && (
          <p className="mt-2 flex-1 text-body-sm text-secondary">{officer.blurb}</p>
        )}
        <a
          href={`mailto:${officer.email}`}
          className="mt-4 inline-flex items-center gap-1.5 text-label-md font-semibold text-secondary transition-colors hover:text-uofl-red"
        >
          <Icon name="mail" size={16} /> Contact
        </a>
      </div>
    </div>
  );
}

/* ---------- Generic link card (internal) ---------- */
export function LinkCard({
  href,
  icon,
  title,
  desc,
  accentKey = "uofl-red",
  external,
}: {
  href: string;
  icon: IconName;
  title: string;
  desc: string;
  accentKey?: string;
  external?: boolean;
}) {
  const inner = (
    <>
      <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-lg text-white ${accentBg[accentKey]}`}>
        <Icon name={icon} size={24} />
      </div>
      <h3 className="flex items-center gap-1.5 font-headline text-headline-sm font-bold text-on-surface transition-colors group-hover:text-uofl-red">
        {title}
        {external && <Icon name="arrow-up-right" size={18} className="text-secondary" />}
      </h3>
      <p className="mt-2 text-body-sm text-secondary">{desc}</p>
    </>
  );
  const cls =
    "glass glass-sheen glass-hover group flex h-full flex-col rounded-lg p-6";
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/* ---------- Content prose wrapper ---------- */
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4 text-body-lg leading-relaxed text-on-surface [&_a]:font-semibold [&_a]:text-uofl-red [&_a:hover]:underline">
      {children}
    </div>
  );
}
