import type { Metadata } from "next";
import { PageHeader, SectionHeading, LinkCard } from "@/components/UI";
import { Reveal } from "@/components/Motion";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { sgaLinks } from "@/data/links";

export const metadata: Metadata = {
  title: "Elections",
  description:
    "Everything you need to run for SGA or vote: election documents, results, candidate intro videos, and the rules that govern the process.",
};

const timeline = [
  { phase: "File to run", desc: "Submit your intent-to-run paperwork and confirm eligibility.", icon: "document" as const },
  { phase: "Campaign", desc: "Meet students, share your platform, and record your intro video.", icon: "megaphone" as const },
  { phase: "Vote", desc: "The whole student body votes online during the election window.", icon: "vote" as const },
  { phase: "Results", desc: "Certified results are published and the new term begins.", icon: "check" as const },
];

export default function ElectionsPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Elections" }]}
        eyebrow="Elections"
        title="Run for office. Or decide who does."
        intro="SGA is elected by students, every year. Whether you want to be on the ballot or just cast an informed vote, here are the official documents, rules, results, and candidate videos."
        accentKey="accent-loyalty"
      />

      {/* Run for office CTA banner */}
      <section className="bg-accent-loyalty py-12 text-white">
        <div className="container-max flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <span className="text-label-md font-bold uppercase tracking-[0.1em] text-white/70">
              Thinking about it?
            </span>
            <h2 className="mt-2 font-headline text-headline-md font-bold">
              You don&apos;t need to be a &quot;politician&quot; to run.
            </h2>
            <p className="mt-2 text-body-md text-white/80">
              Every executive and senator started as a student who thought something on campus
              could be better. Read the election documents to see what running actually involves.
            </p>
          </div>
          <Button href={sgaLinks.electionDocuments} external variant="primary" size="lg" icon="external" className="shrink-0">
            Run for office
          </Button>
        </div>
      </section>

      {/* How elections work timeline */}
      <section className="bg-background py-16 md:py-20">
        <div className="container-max">
          <SectionHeading eyebrow="The process" title="How an SGA election works" accentKey="accent-loyalty" />
          <div className="grid gap-gutter md:grid-cols-4">
            {timeline.map((t, i) => (
              <Reveal key={t.phase} delay={i * 0.08} className="h-full">
                <div className="flex h-full flex-col rounded-lg border border-border-subtle bg-white p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-loyalty text-white">
                      <Icon name={t.icon} size={20} />
                    </span>
                    <span className="font-headline text-headline-md font-bold text-border-subtle">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-headline text-headline-sm font-bold text-on-surface">{t.phase}</h3>
                  <p className="mt-2 text-body-sm text-secondary">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Official documents & results */}
      <section className="border-y border-border-subtle bg-white py-16 md:py-20">
        <div className="container-max">
          <SectionHeading
            eyebrow="Official resources"
            title="Documents, rules & results"
            intro="These are maintained on the university's official SGA site — always the authoritative source during an active election."
            accentKey="accent-loyalty"
          />
          <div className="grid gap-gutter md:grid-cols-2 lg:grid-cols-4">
            <LinkCard external href={sgaLinks.electionDocuments} icon="document" title="Election Documents" desc="Forms, eligibility, and the paperwork you need to get on the ballot." accentKey="accent-loyalty" />
            <LinkCard external href={sgaLinks.electionResults} icon="check" title="Election Results" desc="Certified outcomes from recent SGA elections." accentKey="accent-progress" />
            <LinkCard external href={sgaLinks.introVideos} icon="megaphone" title="Candidate Intro Videos" desc="Hear directly from candidates before you vote." accentKey="uofl-red" />
            <LinkCard external href={sgaLinks.specialElectionRules} icon="gavel" title="Special Election Rules" desc="The rules governing special and mid-term elections." accentKey="accent-patterson" />
          </div>
        </div>
      </section>
    </>
  );
}
