import type { Metadata } from "next";
import { PageHeader, SectionHeading } from "@/components/UI";
import { Reveal } from "@/components/Motion";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { studentServices, sgaLinks, involvementLinks } from "@/data/links";

export const metadata: Metadata = {
  title: "Resources & Documents",
  description:
    "The SGA document archive and every campus service in one place — advising, parking, careers, Blackboard, and more.",
};

// Clearly-labeled placeholder document library (real PDFs are not bundled).
const docLibrary = [
  { title: "SGA Constitution", type: "Governing Document", note: "Placeholder — official copy", accent: "text-uofl-red", href: sgaLinks.documents },
  { title: "SGA Bylaws", type: "Governing Document", note: "Placeholder — official copy", accent: "text-uofl-red", href: sgaLinks.documents },
  { title: "Senate Meeting Minutes — Fall", type: "Minutes · This year", note: "Placeholder archive entry", accent: "text-accent-loyalty", href: sgaLinks.home },
  { title: "Senate Meeting Minutes — Spring", type: "Minutes · This year", note: "Placeholder archive entry", accent: "text-accent-loyalty", href: sgaLinks.home },
  { title: "Annual Budget Report", type: "Finance", note: "Placeholder archive entry", accent: "text-accent-progress", href: sgaLinks.home },
  { title: "CPC Funding Guidelines", type: "Finance", note: "Placeholder — see Get Involved", accent: "text-accent-progress", href: involvementLinks.soab },
  { title: "Election Code", type: "Elections", note: "Placeholder — official copy", accent: "text-accent-patterson", href: sgaLinks.electionDocuments },
  { title: "Committee Reports", type: "Reports", note: "Placeholder archive entry", accent: "text-accent-bronze", href: sgaLinks.home },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources & Documents" }]}
        eyebrow="Resources & Documents"
        title="Everything, in one place"
        intro="The SGA document archive plus every campus tool students actually use. No digging through five different portals — it's all here."
      />

      {/* Campus services quick-links */}
      <section className="py-16 md:py-20">
        <div className="container-max">
          <SectionHeading
            eyebrow="Campus services"
            title="Student tools & services"
            intro="Every link goes to the real UofL system — the same tools promoted in the university's global navigation."
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {studentServices.map((s, i) => (
              <Reveal key={s.href} delay={(i % 4) * 0.05}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glass-sheen glass-hover group flex h-full items-center justify-between gap-3 rounded-lg px-4 py-4"
                >
                  <span className="flex flex-col">
                    <span className="font-body text-body-md font-semibold text-on-surface">{s.label}</span>
                    <span className="text-label-sm text-secondary">{s.desc}</span>
                  </span>
                  <Icon name="arrow-up-right" size={18} className="shrink-0 text-secondary transition-colors group-hover:text-uofl-red" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Document archive */}
      <section className="border-y border-white/40 py-16 md:py-20">
        <div className="container-max">
          <SectionHeading
            eyebrow="Document archive"
            title="SGA documents & records"
            intro="A structured archive of SGA's governing documents, minutes, and reports."
          />
          <div className="glass glass-sheen mb-6 flex items-start gap-3 rounded-lg border-l-4 border-l-accent-courage p-4">
            <Icon name="document" size={20} className="mt-0.5 shrink-0 text-accent-bronze" />
            <p className="text-body-sm text-secondary">
              <strong className="text-on-surface">Prototype note:</strong> the entries below are
              labeled placeholders — the actual PDFs live on the official SGA site. Each card links
              to the authoritative source. Wire a real document store in behind these cards and the
              layout stays the same.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {docLibrary.map((d, i) => (
              <Reveal key={d.title} delay={(i % 2) * 0.06}>
                <a
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glass-sheen glass-hover group flex items-center gap-4 rounded-lg p-5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-surface-container text-secondary transition-colors group-hover:bg-uofl-red group-hover:text-white">
                    <Icon name="document" size={22} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className={`text-label-sm font-bold uppercase tracking-wide ${d.accent}`}>
                      {d.type}
                    </span>
                    <h3 className="truncate font-headline text-headline-sm font-bold text-on-surface transition-colors group-hover:text-uofl-red">
                      {d.title}
                    </h3>
                    <p className="text-label-sm text-secondary">{d.note}</p>
                  </div>
                  <Icon name="arrow-up-right" size={18} className="shrink-0 text-secondary transition-colors group-hover:text-uofl-red" />
                </a>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <Button href={sgaLinks.resources} external variant="outline" icon="external">
              Full SGA resources on louisville.edu
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
