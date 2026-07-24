import type { Metadata } from "next";
import { PageHeader, SectionHeading, Prose, LinkCard } from "@/components/UI";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Motion";
import { Icon } from "@/components/Icon";
import { sgaLinks } from "@/data/links";
import { branchList } from "@/data/branches";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Who UofL SGA is, what the Preamble commits us to, the governing documents that bind us, and how the three branches fit together.",
};

const values = [
  { icon: "megaphone" as const, title: "Representation", desc: "We carry the student voice into the rooms where university decisions get made — including a vote on the Board of Trustees." },
  { icon: "wallet" as const, title: "Resources", desc: "We put student fee dollars back into student life, funding the organizations and events that make campus worth being on." },
  { icon: "shield" as const, title: "Accountability", desc: "Three co-equal branches check each other, and every officer answers to the students who elected them." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        eyebrow="About Us"
        title="The official voice of the student body"
        intro="SGA exists for one reason: to make sure students have real power in how this university runs. Here's what we stand for, the documents that hold us to it, and how we're structured."
      />

      {/* Mission / values */}
      <section className="py-16 md:py-20">
        <div className="container-max grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading eyebrow="Our mission" title="Empowering students. Enhancing campus." />
            <Prose>
              <p>
                The University of Louisville Student Government Association is the
                elected, student-run body that represents every undergraduate and
                graduate Cardinal. We advocate for student needs to administration,
                allocate resources to student organizations, and work to keep campus
                life vibrant, inclusive, and equitable.
              </p>
              <p>
                We&apos;re not a club or an honor society — we&apos;re a government,
                with a constitution, a budget, and three branches, built so that
                students always have a formal seat at the table.
              </p>
            </Prose>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={sgaLinks.preamble} external variant="outline" icon="external">
                Read the Preamble
              </Button>
              <Button href={sgaLinks.presidentMessage} external variant="ghost" icon="arrow-up-right">
                Message from the President
              </Button>
            </div>
          </Reveal>
          <div className="grid gap-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="glass glass-sheen flex items-start gap-4 rounded-lg p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-uofl-red text-white">
                    <Icon name={v.icon} size={22} />
                  </span>
                  <div>
                    <h3 className="font-headline text-headline-sm font-bold text-on-surface">{v.title}</h3>
                    <p className="mt-1 text-body-sm text-secondary">{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Org structure diagram */}
      <section className="border-y border-white/40 py-16 md:py-20">
        <div className="container-max">
          <SectionHeading
            eyebrow="How SGA is structured"
            title="Three branches, one student body"
            intro="Modeled on the government you already know — powers split so no one branch can act unchecked."
            align="center"
          />
          {/* Diagram */}
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex justify-center">
              <div className="rounded-lg border-2 border-uofl-black bg-uofl-black px-8 py-4 text-center text-white">
                <p className="text-label-sm uppercase tracking-[0.1em] text-white/60">Elects & is served by</p>
                <p className="font-headline text-headline-sm font-bold">The Student Body</p>
              </div>
            </div>
            <div aria-hidden className="mx-auto mb-6 h-8 w-px bg-border-subtle" />
            <div className="grid gap-5 md:grid-cols-3">
              {branchList.map((b, i) => {
                const border =
                  b.accent === "uofl-red"
                    ? "border-t-uofl-red"
                    : b.accent === "accent-loyalty"
                    ? "border-t-accent-loyalty"
                    : "border-t-accent-patterson";
                const text =
                  b.accent === "uofl-red"
                    ? "text-uofl-red"
                    : b.accent === "accent-loyalty"
                    ? "text-accent-loyalty"
                    : "text-accent-patterson";
                return (
                  <Reveal key={b.slug} delay={i * 0.1}>
                    <div className={`glass glass-sheen flex h-full flex-col rounded-lg border-t-4 ${border} p-6`}>
                      <span className={`text-label-md font-bold uppercase tracking-wide ${text}`}>
                        {b.slug}
                      </span>
                      <h3 className="mt-1 font-headline text-headline-sm font-bold text-on-surface">{b.name}</h3>
                      <p className="mt-2 flex-1 text-body-sm text-secondary">{b.tagline}.</p>
                      <a href={`/branches/${b.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-label-md font-semibold text-uofl-red hover:underline">
                        Learn more <Icon name="arrow-right" size={16} />
                      </a>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Governing documents */}
      <section className="py-16 md:py-20">
        <div className="container-max">
          <SectionHeading
            eyebrow="Governing documents"
            title="The rules we hold ourselves to"
            intro="SGA's authority comes from documents students ratified. These live on the official SGA site — read them anytime."
          />
          <div className="grid gap-gutter md:grid-cols-3">
            <LinkCard external href={sgaLinks.preamble} icon="book" title="Preamble" desc="The founding statement of purpose that opens the SGA Constitution." accentKey="accent-loyalty" />
            <LinkCard external href={sgaLinks.documents} icon="document" title="Governing Documents" desc="The Constitution, Bylaws, and codes that define how SGA operates." accentKey="uofl-red" />
            <LinkCard external href={sgaLinks.presidentMessage} icon="megaphone" title="Message from the President" desc="A direct note from the Student Body President on this year's priorities." accentKey="accent-progress" />
          </div>
        </div>
      </section>
    </>
  );
}
