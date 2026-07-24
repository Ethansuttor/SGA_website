import Link from "next/link";
import { top4 } from "@/data/officers";
import { articles } from "@/data/news";
import { studentServices, sgaLinks, involvementLinks } from "@/data/links";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Reveal, StatCounter } from "@/components/Motion";
import { OfficerCard, SectionHeading, Chip } from "@/components/UI";

const stats = [
  { value: 400, suffix: "+", label: "Registered student organizations you can join or fund", accent: "text-accent-loyalty" },
  { value: 3, suffix: "", label: "Co-equal branches keeping SGA accountable to you", accent: "text-uofl-red" },
  { value: 1, suffix: "", label: "Student seat & vote on the UofL Board of Trustees", accent: "text-accent-progress" },
  { value: 1000, prefix: "$", suffix: "", label: "Undergraduate research awards granted each term", accent: "text-accent-courage" },
];

const howDoI = [
  {
    tag: "Meet an official",
    title: "Find out who represents you",
    desc: "Your Top 4 executives and the senators from your college — with the email addresses to reach them directly.",
    href: "/branches",
    icon: "users" as const,
    accent: "bg-uofl-red",
  },
  {
    tag: "Join SGA",
    title: "Run, serve, or get involved",
    desc: "Election timelines, open seats, and the campus boards that decide programming and funding. Leadership starts here.",
    href: "/get-involved",
    icon: "vote" as const,
    accent: "bg-accent-loyalty",
  },
  {
    tag: "Find resources",
    title: "Get money & help for your org",
    desc: "Plain-English guide to CPC funding, plus every campus service — advising, parking, careers — in one grid.",
    href: "/resources",
    icon: "wallet" as const,
    accent: "bg-accent-progress",
  },
];

export default function HomePage() {
  const latest = articles.slice(0, 3);
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden bg-uofl-black text-white">
        {/* Diagonal red accent block — geometric, brand, not a gradient */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-0 hidden h-full w-[55%] bg-uofl-red lg:block"
          style={{ clipPath: "polygon(28% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #fff 0 1px, transparent 1px 64px)",
          }}
        />
        <div className="container-max relative grid gap-10 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 px-3 py-1 text-label-sm font-bold uppercase tracking-[0.1em] text-white/80">
              <span className="h-2 w-2 rounded-full bg-uofl-red" />
              University of Louisville · Student Government
            </span>
            <h1 className="mt-6 font-headline text-[40px] font-bold leading-[1.05] tracking-[-0.02em] md:text-[60px] md:leading-[0.98]">
              Your student
              <br />
              government,
              <br />
              <span className="text-uofl-red lg:text-white">working for you.</span>
            </h1>
            <p className="mt-6 max-w-xl text-body-lg text-white/80">
              SGA is the official voice of every Cardinal. We fund your
              organizations, advocate for your needs to administration, and run
              the services you use every week — from a seat on the Board of
              Trustees to the money behind campus events.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/get-involved" variant="primary" size="lg" icon="arrow-right">
                Get involved
              </Button>
              <Button href="/resources" variant="secondary" size="lg" className="border-2 border-white/20 bg-transparent hover:bg-white hover:text-uofl-black">
                Find funding &amp; help
              </Button>
            </div>
          </Reveal>

          {/* Hero side card — "in 5 seconds, here's what SGA does" */}
          <Reveal delay={0.15}>
            <div className="glass-dark glass-sheen relative rounded-lg p-6 lg:ml-auto lg:max-w-sm">
              <p className="text-label-md font-bold uppercase tracking-[0.1em] text-white/60">
                What that means for you
              </p>
              <ul className="mt-4 flex flex-col divide-y divide-white/10">
                {[
                  { icon: "wallet" as const, text: "Money for your club or event through the Club Programming Committee" },
                  { icon: "megaphone" as const, text: "A real vote on university decisions that affect students" },
                  { icon: "shield" as const, text: "Services SGA funds directly — safety, academics, campus life" },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3 py-3.5">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded bg-uofl-red text-white">
                      <Icon name={item.icon} size={16} />
                    </span>
                    <span className="text-body-sm text-white/85">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- STATS STRIP ---------- */}
      <section className="glass glass-sheen border-x-0 border-t-0 border-b border-b-white/40">
        <div className="container-max grid grid-cols-2 divide-x divide-y divide-white/40 lg:grid-cols-4 lg:divide-y-0">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className="flex flex-col gap-1 px-4 py-8 md:px-6 md:py-10"
            >
              <span className={`font-headline text-[40px] font-bold leading-none md:text-[52px] ${s.accent}`}>
                <StatCounter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </span>
              <span className="mt-2 text-body-sm text-secondary">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- HOW DO I... ---------- */}
      <section className="py-16 md:py-24">
        <div className="container-max">
          <SectionHeading
            eyebrow="Start here"
            title="How do I…"
            intro="Three things students ask us most. Pick the one that sounds like you."
          />
          <div className="grid gap-gutter md:grid-cols-3">
            {howDoI.map((tile, i) => (
              <Reveal key={tile.title} delay={i * 0.08} as="article" className="h-full">
                <Link
                  href={tile.href}
                  className="glass glass-sheen glass-hover group flex h-full flex-col rounded-lg p-7"
                >
                  <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-lg text-white ${tile.accent}`}>
                    <Icon name={tile.icon} size={26} />
                  </div>
                  <span className="text-label-md font-bold uppercase tracking-[0.08em] text-secondary">
                    {tile.tag}
                  </span>
                  <h3 className="mt-1 font-headline text-headline-md font-bold text-on-surface">
                    {tile.title}
                  </h3>
                  <p className="mt-3 flex-1 text-body-md text-secondary">{tile.desc}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 font-body text-label-md font-bold uppercase tracking-[0.05em] text-uofl-red">
                    Go
                    <Icon name="arrow-right" size={18} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- MEET YOUR TOP 4 ---------- */}
      <section className="border-y border-white/40 py-16 md:py-24">
        <div className="container-max">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Your elected leaders"
              title="Meet your Top 4"
              intro="The four executives elected campus-wide to represent every Cardinal this term. Reach any of them directly."
            />
            <Button href="/branches/executive" variant="ghost" icon="arrow-right" className="mb-10 shrink-0">
              See the full executive branch
            </Button>
          </div>
          <div className="grid gap-gutter sm:grid-cols-2 lg:grid-cols-4">
            {top4.map((officer, i) => (
              <Reveal key={officer.id} delay={i * 0.07} className="h-full">
                <OfficerCard officer={officer} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- NEWS PREVIEW ---------- */}
      <section className="py-16 md:py-24">
        <div className="container-max">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="News & updates"
              title="What SGA is working on"
              intro="Recaps, decisions, and announcements from your student government."
            />
            <Button href="/news" variant="ghost" icon="arrow-right" className="mb-10 shrink-0">
              View all news
            </Button>
          </div>
          <div className="grid gap-gutter md:grid-cols-3">
            {latest.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.08} as="article" className="h-full">
                <Link
                  href={`/news/${a.slug}`}
                  className="glass glass-sheen glass-hover group flex h-full flex-col overflow-hidden rounded-lg"
                >
                  <div className={`h-2 w-full ${a.accent === "accent-loyalty" ? "bg-accent-loyalty" : a.accent === "accent-progress" ? "bg-accent-progress" : "bg-accent-patterson"}`} />
                  <div className="flex flex-1 flex-col p-6">
                    <Chip label={a.category} accentKey={a.accent} />
                    <h3 className="mt-4 font-headline text-headline-sm font-bold leading-snug text-on-surface transition-colors group-hover:text-uofl-red">
                      {a.title}
                    </h3>
                    <p className="mt-2 flex-1 text-body-sm text-secondary line-clamp-3">
                      {a.excerpt}
                    </p>
                    <time className="mt-4 text-label-sm text-secondary">{a.displayDate}</time>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- QUICK LINKS MEGA GRID ---------- */}
      <section className="border-y border-white/10 bg-uofl-black/85 py-16 text-white backdrop-blur-xl md:py-24">
        <div className="container-max">
          <div className="mb-10 flex flex-col gap-3">
            <span className="text-label-md font-bold uppercase tracking-[0.12em] text-uofl-red">
              Everything in one place
            </span>
            <h2 className="max-w-2xl font-headline text-headline-lg-mobile font-bold md:text-headline-lg">
              The campus tools you actually use
            </h2>
            <p className="max-w-2xl text-body-md text-white/70">
              The same services the university promotes on every page — collected here so you never
              have to dig for them. Every link goes to the real UofL system.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {studentServices.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-dark glass-hover group flex items-center justify-between gap-3 rounded px-4 py-3.5"
              >
                <span className="flex flex-col">
                  <span className="font-body text-body-md font-semibold">{s.label}</span>
                  <span className="text-label-sm text-white/55">{s.desc}</span>
                </span>
                <Icon name="arrow-up-right" size={18} className="shrink-0 text-white/40 transition-colors group-hover:text-uofl-red" />
              </a>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={involvementLinks.engageDirectory} external variant="primary" icon="external">
              Browse all 400+ orgs on Engage
            </Button>
            <Button href={sgaLinks.home} external variant="ghost" className="text-white hover:text-white">
              Official SGA site on louisville.edu
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
