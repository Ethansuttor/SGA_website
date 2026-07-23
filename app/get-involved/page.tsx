import type { Metadata } from "next";
import { PageHeader, SectionHeading } from "@/components/UI";
import { Reveal } from "@/components/Motion";
import { Icon, type IconName } from "@/components/Icon";
import { Button } from "@/components/Button";
import { involvementLinks } from "@/data/links";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Join a board, fund your organization, and find your people. How to get involved with UofL SGA and student life — including a plain-English guide to CPC funding.",
};

interface OrgCard {
  name: string;
  abbr: string;
  desc: string;
  href: string;
  icon: IconName;
  accentText: string;
  accentBg: string;
}

const orgs: OrgCard[] = [
  {
    name: "Student Organization Advisory Board",
    abbr: "SOAB",
    desc: "Reviews and funds registered student organizations. SOAB is the board that runs the Club Programming Committee funding process.",
    href: involvementLinks.soab,
    icon: "wallet",
    accentText: "text-uofl-red",
    accentBg: "bg-uofl-red",
  },
  {
    name: "Engage Lead Serve Board",
    abbr: "ELSB",
    desc: "Builds student leaders through service, civic engagement, and large-scale volunteer programming across Louisville.",
    href: involvementLinks.elsb,
    icon: "compass",
    accentText: "text-accent-progress",
    accentBg: "bg-accent-progress",
  },
  {
    name: "Student Activities Board",
    abbr: "SAB",
    desc: "The board behind the concerts, comedians, films, and traditions that fill the campus events calendar all year.",
    href: involvementLinks.sab,
    icon: "sparkle",
    accentText: "text-accent-courage",
    accentBg: "bg-accent-courage",
  },
  {
    name: "Fraternity & Sorority Life",
    abbr: "FSL",
    desc: "Louisville's Greek community — councils and chapters offering scholarship, service, and lifelong networks.",
    href: involvementLinks.fsl,
    icon: "users",
    accentText: "text-accent-loyalty",
    accentBg: "bg-accent-loyalty",
  },
  {
    name: "Departmental Councils",
    abbr: "Councils",
    desc: "College- and department-level councils that represent students within their specific academic community.",
    href: "https://student.louisville.edu/sga-about-our-councils-0",
    icon: "bank",
    accentText: "text-accent-innovation",
    accentBg: "bg-accent-innovation",
  },
  {
    name: "Service Learning & Civic Engagement",
    abbr: "SLCE",
    desc: "Connects coursework and volunteering, turning class credit into real community impact around the city.",
    href: involvementLinks.slce,
    icon: "shield",
    accentText: "text-accent-laurel",
    accentBg: "bg-accent-laurel",
  },
];

const cpcSteps = [
  { n: "1", title: "Be an eligible RSO", desc: "Your organization must be a registered student organization in good standing on Engage. Registration is free and handled through the involvement office." },
  { n: "2", title: "Submit a funding request", desc: "Bring your event or project — with a budget — to the Student Organization Advisory Board (SOAB) through the current Engage pathway." },
  { n: "3", title: "The committee reviews it", desc: "A committee of roughly six students weighs each request against the funding guidelines: who it serves, how many students benefit, and whether costs are reasonable." },
  { n: "4", title: "Get funded & report back", desc: "Approved funds go toward the eligible costs — event expenses, programming, and travel — and organizations follow the spending and reporting rules." },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Get Involved" }]}
        eyebrow="Get Involved"
        title="Find your people — and fund your ideas"
        intro="Whether you want to run an event, lead a board, or just find one of 400+ organizations to join, this is the map. Every card links to the real UofL page where it happens."
      />

      {/* Org grid — the boards & councils */}
      <section className="bg-background py-16 md:py-20">
        <div className="container-max">
          <SectionHeading
            eyebrow="Boards & councils"
            title="Where student leadership happens"
            intro="These are the student-run boards SGA works alongside. Click through to each group's official Engage or university page to join or learn more."
          />
          <div className="grid gap-gutter md:grid-cols-2 lg:grid-cols-3">
            {orgs.map((o, i) => (
              <Reveal key={o.abbr} delay={i * 0.06} className="h-full">
                <a
                  href={o.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-lg border border-border-subtle bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-uofl-red hover:shadow-ambient"
                >
                  <div className="flex items-center justify-between">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-lg text-white ${o.accentBg}`}>
                      <Icon name={o.icon} size={24} />
                    </span>
                    <span className={`font-headline text-headline-md font-bold ${o.accentText} opacity-90`}>
                      {o.abbr}
                    </span>
                  </div>
                  <h3 className="mt-5 font-headline text-headline-sm font-bold leading-snug text-on-surface transition-colors group-hover:text-uofl-red">
                    {o.name}
                  </h3>
                  <p className="mt-2 flex-1 text-body-sm text-secondary">{o.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-label-md font-semibold text-uofl-red">
                    Visit page <Icon name="arrow-up-right" size={16} />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CPC funding explainer */}
      <section className="border-y border-border-subtle bg-white py-16 md:py-20">
        <div className="container-max">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <span className="text-label-md font-bold uppercase tracking-[0.12em] text-uofl-red">
                Get money for your org
              </span>
              <h2 className="mt-2 font-headline text-headline-lg-mobile font-bold text-on-surface md:text-headline-lg">
                How CPC funding actually works
              </h2>
              <p className="mt-4 text-body-lg text-secondary">
                The Club Programming Committee (CPC) is how student organizations get money
                for events and programming. There&apos;s no mystery to it — here&apos;s the
                whole process in plain English, plus who&apos;s eligible and what it covers.
              </p>
              <div className="mt-6 rounded-lg border border-border-subtle border-l-4 border-l-accent-progress bg-surface-container-low p-5">
                <h3 className="font-headline text-headline-sm font-bold text-on-surface">What it funds</h3>
                <p className="mt-2 text-body-sm text-secondary">
                  Eligible event and programming costs for registered student organizations —
                  the kinds of expenses that make campus events happen. It is <strong>not</strong> a
                  personal grant, and the committee applies published guidelines to every request.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button href={involvementLinks.soab} external variant="primary" icon="external">
                  Start with SOAB on Engage
                </Button>
                <Button href={involvementLinks.studentOrgsHub} external variant="outline" icon="external">
                  RSO policies & banking
                </Button>
              </div>
            </Reveal>

            <div className="flex flex-col gap-4">
              {cpcSteps.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.08}>
                  <div className="flex gap-5 rounded-lg border border-border-subtle bg-surface-container-low p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-uofl-red font-headline text-headline-sm font-bold text-white">
                      {s.n}
                    </span>
                    <div>
                      <h3 className="font-headline text-headline-sm font-bold text-on-surface">{s.title}</h3>
                      <p className="mt-1 text-body-sm text-secondary">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
              <p className="text-body-sm text-secondary">
                Graduate organization? Funding runs through the{" "}
                <a href={involvementLinks.gscFunding} target="_blank" rel="noopener noreferrer" className="font-semibold text-uofl-red hover:underline">
                  Graduate Student Council
                </a>{" "}
                instead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Directory CTA */}
      <section className="bg-uofl-black py-14 text-white">
        <div className="container-max flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-headline text-headline-md font-bold">Not sure where to start?</h2>
            <p className="mt-1 max-w-xl text-body-md text-white/75">
              Browse the full directory of 400+ registered organizations and upcoming events on Engage,
              the university&apos;s official involvement platform.
            </p>
          </div>
          <Button href={involvementLinks.engageDirectory} external variant="primary" size="lg" icon="external" className="shrink-0">
            Explore Engage
          </Button>
        </div>
      </section>
    </>
  );
}
