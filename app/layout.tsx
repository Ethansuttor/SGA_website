import type { Metadata, Viewport } from "next";
import { Montserrat, Libre_Franklin } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { GlassBackground } from "@/components/GlassBackground";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-libre-franklin",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://uofl-sga.vercel.app"),
  title: {
    default: "UofL SGA — University of Louisville Student Government",
    template: "%s · UofL SGA",
  },
  description:
    "The official voice of the University of Louisville student body. Meet your officers, get funding for your organization, find campus resources, and get involved.",
  keywords: [
    "UofL SGA",
    "University of Louisville Student Government",
    "student government",
    "RSO funding",
    "Louisville Cardinals",
  ],
  openGraph: {
    title: "UofL SGA — Student Government Association",
    description:
      "Meet your officers, get funding for your organization, and find the campus resources you actually use.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#AD0000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${libreFranklin.variable}`}>
      <body className="flex min-h-screen flex-col font-body text-body-md text-on-surface antialiased">
        <GlassBackground />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-uofl-red focus:px-4 focus:py-2 focus:font-bold focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
