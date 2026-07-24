import Link from "next/link";
import { mainNav, sgaLinks, studentServices } from "@/data/links";
import { Icon } from "./Icon";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-uofl-black/90 text-white backdrop-blur-xl">
      {/* Red CTA strip */}
      <div className="bg-uofl-red">
        <div className="container-max flex flex-col items-start justify-between gap-4 py-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-headline text-headline-md font-bold text-white">
              Have an idea, a problem, or a question?
            </h2>
            <p className="mt-1 text-body-md text-white/85">
              SGA works for you. Tell us what would make your time at UofL better.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded bg-uofl-black px-7 py-3.5 font-body text-label-md font-bold uppercase tracking-[0.05em] text-white transition-colors hover:bg-white hover:text-uofl-black"
          >
            Get in touch
          </Link>
        </div>
      </div>

      <div className="container-max grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded bg-uofl-red font-headline text-headline-sm font-bold text-white">
              U
            </span>
            <span className="font-headline text-headline-sm font-bold">UofL SGA</span>
          </div>
          <p className="mt-4 max-w-xs text-body-sm text-white/70">
            The official voice of the University of Louisville student body since the
            university&apos;s founding as a public institution.
          </p>
          <div className="mt-5 flex flex-col gap-2 text-body-sm text-white/70">
            <a
              href={`mailto:${sgaLinks.email}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Icon name="mail" size={16} /> {sgaLinks.email}
            </a>
            <span className="flex items-center gap-2">
              <Icon name="map-pin" size={16} /> 2100 S Floyd St, SAC W301
            </span>
            <a
              href={sgaLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Icon name="instagram" size={16} /> @uoflsga
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-body text-label-md font-bold uppercase tracking-[0.08em] text-white/50">
            Explore
          </h3>
          <ul className="flex flex-col gap-2.5 text-body-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white/75 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="text-white/75 transition-colors hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-body text-label-md font-bold uppercase tracking-[0.08em] text-white/50">
            Student Tools
          </h3>
          <ul className="flex flex-col gap-2.5 text-body-sm">
            {studentServices.slice(0, 6).map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-white/75 transition-colors hover:text-white"
                >
                  {s.label}
                  <Icon name="external" size={12} className="opacity-50" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-body text-label-md font-bold uppercase tracking-[0.08em] text-white/50">
            Official SGA
          </h3>
          <ul className="flex flex-col gap-2.5 text-body-sm">
            <li>
              <a href={sgaLinks.home} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-white/75 transition-colors hover:text-white">
                SGA on louisville.edu <Icon name="external" size={12} className="opacity-50" />
              </a>
            </li>
            <li>
              <a href={sgaLinks.documents} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-white/75 transition-colors hover:text-white">
                Governing Documents <Icon name="external" size={12} className="opacity-50" />
              </a>
            </li>
            <li>
              <a href={sgaLinks.resources} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-white/75 transition-colors hover:text-white">
                SGA Resources <Icon name="external" size={12} className="opacity-50" />
              </a>
            </li>
            <li>
              <a href={sgaLinks.studentOfTheMonth} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-white/75 transition-colors hover:text-white">
                Student of the Month <Icon name="external" size={12} className="opacity-50" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-max flex flex-col items-center justify-between gap-3 py-6 text-label-sm text-white/55 md:flex-row">
          <p>© {year} University of Louisville Student Government Association.</p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>
              A student-built prototype — not the official university website.
            </span>
            <a
              href="https://louisville.edu/accessibility"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Accessibility
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
