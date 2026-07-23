import type { Metadata } from "next";
import { PageHeader } from "@/components/UI";
import { Icon, type IconName } from "@/components/Icon";
import { Reveal } from "@/components/Motion";
import { sgaLinks } from "@/data/links";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach UofL SGA: office location in the Student Activities Center, hours, email, and Instagram. Send us a message directly.",
};

const details: { icon: IconName; label: string; value: string; href?: string; external?: boolean }[] = [
  { icon: "map-pin", label: "Office", value: "2100 S Floyd St, SAC W301, Louisville, KY 40292" },
  { icon: "clock", label: "Hours", value: "Monday – Friday, 9 a.m. – 5 p.m." },
  { icon: "mail", label: "Email", value: sgaLinks.email, href: `mailto:${sgaLinks.email}` },
  { icon: "instagram", label: "Instagram", value: "@uoflsga", href: sgaLinks.instagram, external: true },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Contact"
        title="Talk to your student government"
        intro="Got a question, an idea, or a problem SGA should know about? We're in the Student Activities Center and we answer our email. Reach out — this is what we're here for."
      />

      <section className="bg-background py-16 md:py-20">
        <div className="container-max grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Details */}
          <Reveal>
            <div className="flex flex-col gap-4">
              {details.map((d) => {
                const content = (
                  <div className="flex items-start gap-4 rounded-lg border border-border-subtle bg-white p-5 transition-colors hover:border-uofl-red">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-uofl-red text-white">
                      <Icon name={d.icon} size={20} />
                    </span>
                    <div>
                      <p className="text-label-md font-bold uppercase tracking-wide text-secondary">{d.label}</p>
                      <p className="mt-0.5 text-body-md font-medium text-on-surface">{d.value}</p>
                    </div>
                  </div>
                );
                return d.href ? (
                  <a
                    key={d.label}
                    href={d.href}
                    target={d.external ? "_blank" : undefined}
                    rel={d.external ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={d.label}>{content}</div>
                );
              })}

              {/* Map placeholder — real, labeled */}
              <div className="overflow-hidden rounded-lg border border-border-subtle bg-uofl-black">
                <div
                  className="flex h-44 items-center justify-center"
                  style={{ backgroundImage: "repeating-linear-gradient(45deg,rgba(255,255,255,0.05) 0 1px,transparent 1px 20px)" }}
                >
                  <div className="text-center">
                    <Icon name="map-pin" size={28} className="mx-auto text-uofl-red" />
                    <p className="mt-2 font-headline text-headline-sm font-bold text-white">Student Activities Center</p>
                    <p className="text-body-sm text-white/60">Belknap Campus · Room W301</p>
                  </div>
                </div>
                <a
                  href="https://louisville.edu/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-white/[0.06] py-3 text-label-md font-semibold text-white transition-colors hover:bg-white/[0.12]"
                >
                  Open in campus maps <Icon name="external" size={15} />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <h2 className="mb-4 font-headline text-headline-md font-bold text-on-surface">Send us a message</h2>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
