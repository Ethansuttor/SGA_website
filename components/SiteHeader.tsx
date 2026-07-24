"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { mainNav, sgaLinks } from "@/data/links";
import { Icon } from "./Icon";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {/* Black utility bar — glassy black */}
      <div className="border-b border-white/10 bg-uofl-black/85 text-white backdrop-blur-md">
        <div className="container-max flex h-9 items-center justify-between text-label-sm">
          <a
            href="https://louisville.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold tracking-wide text-white/80 transition-colors hover:text-white"
          >
            University of Louisville
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://ulink.louisville.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-white/80 transition-colors hover:text-white sm:inline"
            >
              ULink
            </a>
            <a
              href={sgaLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SGA on Instagram"
              className="flex items-center gap-1.5 text-white/80 transition-colors hover:text-white"
            >
              <Icon name="instagram" size={14} />
              <span className="hidden sm:inline">@uoflsga</span>
            </a>
            <a
              href={`mailto:${sgaLinks.email}`}
              className="flex items-center gap-1.5 text-white/80 transition-colors hover:text-white"
            >
              <Icon name="mail" size={14} />
              <span className="hidden md:inline">{sgaLinks.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav — liquid glass with red underline active state */}
      <div className="glass glass-sheen border-x-0 border-t-0 border-b border-b-white/40">
        <div className="container-max flex h-[68px] items-center justify-between">
          <Link href="/" className="group flex items-center gap-3" aria-label="UofL SGA home">
            <span className="flex h-10 w-10 items-center justify-center rounded bg-uofl-red font-headline text-headline-sm font-bold text-white">
              U
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-headline text-headline-sm font-bold text-uofl-black">
                UofL SGA
              </span>
              <span className="text-label-sm text-secondary">
                Student Government
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
            {mainNav.map((item) => {
              const active = isActive(item.href);
              return (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={`relative flex items-center gap-1 py-6 font-body text-label-md font-semibold uppercase tracking-[0.04em] transition-colors ${
                      active
                        ? "text-uofl-red"
                        : "text-on-surface hover:text-uofl-red"
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <Icon name="chevron-down" size={14} className="mt-0.5" />
                    )}
                    <span
                      className={`absolute inset-x-0 bottom-0 h-[3px] origin-left bg-uofl-red transition-transform duration-200 ${
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                  {item.children && (
                    <div className="glass glass-sheen invisible absolute left-0 top-full w-60 -translate-y-1 rounded-lg opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block border-l-4 border-transparent px-4 py-3 text-body-sm font-medium text-on-surface transition-colors hover:border-uofl-red hover:bg-surface-container-low hover:text-uofl-red"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link
              href="/contact"
              className="rounded bg-uofl-red px-5 py-2.5 font-body text-label-md font-bold uppercase tracking-[0.05em] text-white transition-all hover:bg-[#8f0000] hover:shadow-ambient"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="flex h-11 w-11 items-center justify-center rounded text-uofl-black lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <Icon name={mobileOpen ? "close" : "menu"} size={26} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            key="mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="glass overflow-hidden border-x-0 border-t-0 border-b border-b-white/40 lg:hidden"
            aria-label="Mobile"
          >
            <div className="container-max flex flex-col py-2">
              {mainNav.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block border-l-4 py-3 pl-3 font-body text-body-md font-semibold ${
                      isActive(item.href)
                        ? "border-uofl-red text-uofl-red"
                        : "border-transparent text-on-surface"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="mb-1 flex flex-col">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 pl-8 text-body-sm text-secondary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mx-3 my-3 rounded bg-uofl-red px-5 py-3 text-center font-body text-label-md font-bold uppercase tracking-[0.05em] text-white"
              >
                Contact SGA
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
