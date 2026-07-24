import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { branches, branchList } from "@/data/branches";
import { officers } from "@/data/officers";
import type { Branch } from "@/data/officers";
import { Icon, type IconName } from "@/components/Icon";
import { Reveal } from "@/components/Motion";
import { OfficerCard } from "@/components/UI";
import { Button } from "@/components/Button";
import { sgaLinks } from "@/data/links";

const icons: Record<string, IconName> = {
  executive: "bank",
  legislative: "users",
  judicial: "scale",
};

export function generateStaticParams() {
  return branchList.map((b) => ({ branch: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ branch: string }>;
}): Promise<Metadata> {
  const { branch } = await params;
  const b = branches[branch as Branch];
  if (!b) return { title: "Branch" };
  return {
    title: b.name,
    description: b.tagline,
  };
}

export default async function BranchPage({
  params,
}: {
  params: Promise<{ branch: string }>;
}) {
  const { branch: branchParam } = await params;
  const branch = branches[branchParam as Branch];
  if (!branch) notFound();

  const roster = officers.filter((o) => o.branch === branch.slug);
  const accentText =
    branch.accent === "uofl-red" ? "text-uofl-red"
    : branch.accent === "accent-loyalty" ? "text-accent-loyalty"
    : "text-accent-patterson";
  const accentBg =
    branch.accent === "uofl-red" ? "bg-uofl-red"
    : branch.accent === "accent-loyalty" ? "bg-accent-loyalty"
    : "bg-accent-patterson";
  const accentBorderL =
    branch.accent === "uofl-red" ? "border-l-uofl-red"
    : branch.accent === "accent-loyalty" ? "border-l-accent-loyalty"
    : "border-l-accent-patterson";

  return (
    <div>
      <div className="container-max flex flex-col gap-8 py-10 md:flex-row md:gap-12 md:py-14">
        {/* Side nav — 4px accent left border on active item */}
        <aside className="md:w-60 md:shrink-0">
          <div className="mb-4">
            <h2 className="font-headline text-headline-sm font-bold text-on-surface">Branches</h2>
            <p className="text-body-sm text-secondary">SGA Leadership</p>
          </div>
          <nav className="glass glass-sheen flex flex-col overflow-hidden rounded-lg" aria-label="Branches">
            <Link
              href="/branches"
              className="flex items-center gap-3 border-l-4 border-transparent px-4 py-3 text-label-md font-semibold text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-uofl-red"
            >
              <Icon name="compass" size={18} /> Overview
            </Link>
            {branchList.map((b) => {
              const active = b.slug === branch.slug;
              const aBorder =
                b.accent === "uofl-red" ? "border-l-uofl-red"
                : b.accent === "accent-loyalty" ? "border-l-accent-loyalty"
                : "border-l-accent-patterson";
              const aText =
                b.accent === "uofl-red" ? "text-uofl-red"
                : b.accent === "accent-loyalty" ? "text-accent-loyalty"
                : "text-accent-patterson";
              return (
                <Link
                  key={b.slug}
                  href={`/branches/${b.slug}`}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-3 border-l-4 px-4 py-3 text-label-md font-semibold transition-colors ${
                    active
                      ? `${aBorder} ${aText} bg-surface-container-low`
                      : "border-transparent text-on-surface-variant hover:bg-surface-container-low hover:text-uofl-red"
                  }`}
                >
                  <Icon name={icons[b.slug]} size={18} /> {b.name}
                </Link>
              );
            })}
          </nav>

          <div className="glass glass-sheen mt-6 rounded-lg p-5">
            <p className="text-label-md font-bold uppercase tracking-wide text-secondary">Official page</p>
            <p className="mt-2 text-body-sm text-secondary">
              This branch on the university&apos;s own SGA site:
            </p>
            <a
              href={branch.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-label-md font-semibold text-uofl-red hover:underline"
            >
              louisville.edu <Icon name="external" size={15} />
            </a>
          </div>
        </aside>

        {/* Content */}
        <article className="flex-1">
          <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-label-sm text-secondary">
            <Link href="/" className="hover:text-uofl-red">Home</Link>
            <Icon name="chevron-right" size={14} className="text-border-subtle" />
            <Link href="/branches" className="hover:text-uofl-red">Branches</Link>
            <Icon name="chevron-right" size={14} className="text-border-subtle" />
            <span className="text-on-surface">{branch.name}</span>
          </nav>

          <div className="flex items-center gap-4">
            <span className={`flex h-14 w-14 items-center justify-center rounded-lg text-white ${accentBg}`}>
              <Icon name={icons[branch.slug]} size={28} />
            </span>
            <div>
              <span className={`text-label-md font-bold uppercase tracking-[0.08em] ${accentText}`}>
                {branch.slug} Branch
              </span>
              <h1 className="font-headline text-[30px] font-bold leading-tight text-on-surface md:text-headline-xl">
                {branch.name}
              </h1>
            </div>
          </div>

          <p className="mt-5 max-w-3xl text-body-lg text-secondary">{branch.description}</p>

          {/* Roster */}
          <section className="mt-12">
            <h2 className="mb-6 font-headline text-headline-md font-bold text-on-surface">
              {branch.slug === "executive" ? "Meet the Top 4 Officers" : "Leadership"}
            </h2>
            {roster.length > 0 ? (
              <div className="grid gap-gutter sm:grid-cols-2 lg:grid-cols-4">
                {roster.map((o, i) => (
                  <Reveal key={o.id} delay={i * 0.07} className="h-full">
                    <OfficerCard officer={o} />
                  </Reveal>
                ))}
              </div>
            ) : (
              <div className={`glass glass-sheen rounded-lg border-l-4 ${accentBorderL} p-6`}>
                <p className="text-body-md text-secondary">
                  The current {branch.name.toLowerCase()} roster is maintained on the official SGA
                  site. Add members to <code className="rounded bg-surface-container px-1.5 py-0.5 text-body-sm">data/officers.ts</code> to
                  list them here, or view the roster directly:
                </p>
                <a
                  href={branch.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 font-semibold text-uofl-red hover:underline"
                >
                  View on louisville.edu <Icon name="external" size={15} />
                </a>
              </div>
            )}
          </section>

          {/* Responsibilities + details */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <section className="glass glass-sheen rounded-lg p-6">
              <h2 className="font-headline text-headline-sm font-bold text-on-surface">What this branch does</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {branch.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-body-md text-on-surface">
                    <span className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white ${accentBg}`}>
                      <Icon name="check" size={12} />
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </section>
            <div className="flex flex-col gap-6">
              <section className="glass glass-sheen rounded-lg p-6">
                <h3 className="flex items-center gap-2 font-headline text-headline-sm font-bold text-on-surface">
                  <Icon name="users" size={20} className={accentText} /> Who serves
                </h3>
                <p className="mt-2 text-body-md text-secondary">{branch.makeup}</p>
              </section>
              <section className="glass glass-sheen rounded-lg p-6">
                <h3 className="flex items-center gap-2 font-headline text-headline-sm font-bold text-on-surface">
                  <Icon name="clock" size={20} className={accentText} /> Meetings
                </h3>
                <p className="mt-2 text-body-md text-secondary">{branch.meeting}</p>
              </section>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={`mailto:${sgaLinks.email}`} external variant="primary" icon="mail">
              Contact this branch
            </Button>
            <Button href="/get-involved" variant="outline" icon="arrow-right">
              Get involved
            </Button>
          </div>
        </article>
      </div>
    </div>
  );
}
