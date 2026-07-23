import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/UI";
import { Reveal } from "@/components/Motion";
import { Icon, type IconName } from "@/components/Icon";
import { branchList } from "@/data/branches";

export const metadata: Metadata = {
  title: "Branches",
  description:
    "The Executive, Legislative, and Judicial branches of UofL SGA — what each does, who serves, and how to reach them.",
};

const icons: Record<string, IconName> = {
  executive: "bank",
  legislative: "users",
  judicial: "scale",
};

export default function BranchesPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Branches" }]}
        eyebrow="Branches"
        title="How SGA governs itself"
        intro="Like the federal government, SGA splits its power across three branches so students always have checks, balances, and multiple ways to be heard."
      />
      <section className="bg-background py-16 md:py-20">
        <div className="container-max flex flex-col gap-6">
          {branchList.map((b, i) => {
            const accentText =
              b.accent === "uofl-red" ? "text-uofl-red"
              : b.accent === "accent-loyalty" ? "text-accent-loyalty"
              : "text-accent-patterson";
            const accentBg =
              b.accent === "uofl-red" ? "bg-uofl-red"
              : b.accent === "accent-loyalty" ? "bg-accent-loyalty"
              : "bg-accent-patterson";
            const accentBorder =
              b.accent === "uofl-red" ? "hover:border-uofl-red"
              : b.accent === "accent-loyalty" ? "hover:border-accent-loyalty"
              : "hover:border-accent-patterson";
            return (
              <Reveal key={b.slug} delay={i * 0.08}>
                <Link
                  href={`/branches/${b.slug}`}
                  className={`group grid gap-6 rounded-lg border border-border-subtle bg-white p-6 transition-all duration-300 hover:shadow-ambient md:grid-cols-[auto_1fr_auto] md:items-center md:p-8 ${accentBorder}`}
                >
                  <span className={`flex h-16 w-16 items-center justify-center rounded-lg text-white ${accentBg}`}>
                    <Icon name={icons[b.slug]} size={30} />
                  </span>
                  <div>
                    <span className={`text-label-md font-bold uppercase tracking-[0.08em] ${accentText}`}>
                      {b.slug} Branch
                    </span>
                    <h2 className="mt-1 font-headline text-headline-md font-bold text-on-surface">
                      {b.name}
                    </h2>
                    <p className="mt-2 max-w-2xl text-body-md text-secondary">{b.tagline}.</p>
                  </div>
                  <span className="flex items-center gap-2 justify-self-start font-body text-label-md font-bold uppercase tracking-[0.05em] text-uofl-red md:justify-self-end">
                    View branch
                    <Icon name="arrow-right" size={18} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
