import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Chip } from "@/components/UI";
import { Reveal } from "@/components/Motion";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { articles } from "@/data/news";

export const metadata: Metadata = {
  title: "News & Events",
  description:
    "Updates, decisions, and announcements from UofL SGA — plus a link to the live campus events calendar.",
};

export default function NewsPage() {
  const [feature, ...rest] = articles;
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "News & Events" }]}
        eyebrow="News & Events"
        title="What's happening in SGA"
        intro="Recaps, decisions, and announcements from your student government. Looking for campus events? The live university calendar has every happening on campus."
      />

      <section className="py-16 md:py-20">
        <div className="container-max">
          {/* Featured article */}
          <Reveal>
            <Link
              href={`/news/${feature.slug}`}
              className="glass glass-sheen glass-hover group grid overflow-hidden rounded-lg md:grid-cols-2"
            >
              <div className="relative flex min-h-[240px] items-center justify-center bg-uofl-black p-8">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-[0.08]"
                  style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0 1px,transparent 1px 22px)" }}
                />
                <div className="relative">
                  <Chip label={feature.category} accentKey={feature.accent} />
                  <p className="mt-4 font-headline text-[26px] font-bold leading-tight text-white">
                    {feature.title}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8">
                <span className="text-label-md font-bold uppercase tracking-[0.08em] text-uofl-red">
                  Featured
                </span>
                <p className="mt-3 text-body-lg text-secondary">{feature.excerpt}</p>
                <div className="mt-5 flex items-center gap-3 text-label-sm text-secondary">
                  <span>{feature.author}</span>
                  <span aria-hidden>·</span>
                  <time>{feature.displayDate}</time>
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 font-body text-label-md font-bold uppercase tracking-[0.05em] text-uofl-red">
                  Read story
                  <Icon name="arrow-right" size={18} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Grid of remaining */}
          <div className="mt-gutter grid gap-gutter md:grid-cols-2 lg:grid-cols-3">
            {rest.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 0.07} as="article" className="h-full">
                <Link
                  href={`/news/${a.slug}`}
                  className="glass glass-sheen glass-hover group flex h-full flex-col overflow-hidden rounded-lg"
                >
                  <div className={`h-1.5 w-full ${
                    a.accent === "accent-loyalty" ? "bg-accent-loyalty"
                    : a.accent === "accent-progress" ? "bg-accent-progress"
                    : a.accent === "accent-patterson" ? "bg-accent-patterson"
                    : a.accent === "accent-courage" ? "bg-accent-courage"
                    : a.accent === "accent-innovation" ? "bg-accent-innovation"
                    : "bg-accent-ash"
                  }`} />
                  <div className="flex flex-1 flex-col p-6">
                    <Chip label={a.category} accentKey={a.accent} />
                    <h2 className="mt-4 font-headline text-headline-sm font-bold leading-snug text-on-surface transition-colors group-hover:text-uofl-red">
                      {a.title}
                    </h2>
                    <p className="mt-2 flex-1 text-body-sm text-secondary line-clamp-3">{a.excerpt}</p>
                    <time className="mt-4 text-label-sm text-secondary">{a.displayDate}</time>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Live calendar CTA */}
          <div className="glass glass-sheen mt-14 flex flex-col items-start justify-between gap-6 rounded-lg border-l-4 border-l-accent-progress p-7 md:flex-row md:items-center">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent-progress text-white">
                <Icon name="calendar" size={24} />
              </span>
              <div>
                <h2 className="font-headline text-headline-sm font-bold text-on-surface">Looking for campus events?</h2>
                <p className="mt-1 text-body-md text-secondary">
                  The university&apos;s official calendar lists every event on campus, live and up to date.
                </p>
              </div>
            </div>
            <Button href="https://events.louisville.edu" external variant="primary" icon="external" className="shrink-0">
              Open the campus calendar
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
