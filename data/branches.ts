/**
 * The three branches of UofL SGA. Content drawn from the official branch pages
 * (student.louisville.edu/sga-*-branch) and the SGA governing structure.
 * Each branch is color-coded with an official UofL secondary accent so the site
 * reads as intentionally designed rather than flat red-and-black.
 */
import { sgaLinks } from "./links";
import type { Branch } from "./officers";

export interface BranchInfo {
  slug: Branch;
  name: string;
  tagline: string;
  /** accent token key (see tailwind.config.ts) */
  accent: string;
  officialUrl: string;
  description: string;
  responsibilities: string[];
  meeting: string;
  makeup: string;
}

export const branches: Record<Branch, BranchInfo> = {
  executive: {
    slug: "executive",
    name: "Executive Branch",
    tagline: "Runs day-to-day student services and represents students to administration",
    accent: "uofl-red",
    officialUrl: sgaLinks.executive,
    description:
      "The Executive Branch carries out the work students see every day. Led by the Student Body President and three campus-wide Vice Presidents, it directs SGA's service departments, sets the year's advocacy agenda, and is the student body's primary voice to university leadership and the Board of Trustees.",
    responsibilities: [
      "Direct SGA's service departments and campus-life programming",
      "Represent students to university administration and the Board of Trustees",
      "Set and execute the annual advocacy agenda",
      "Appoint department directors and oversee the executive budget",
    ],
    meeting: "Executive board meets weekly during the academic year; times posted each term.",
    makeup: "President, Executive VP, Academic VP, Services VP, and appointed directors.",
  },
  legislative: {
    slug: "legislative",
    name: "Legislative Branch",
    tagline: "The student Senate — writes resolutions and allocates student funding",
    accent: "accent-loyalty",
    officialUrl: sgaLinks.legislative,
    description:
      "The Legislative Branch is the student Senate: representatives elected from every academic college who write and pass the resolutions that set SGA's positions, approve the budget, and decide how student funding is allocated. If you want SGA to take a stance or fund something, it moves through the Senate.",
    responsibilities: [
      "Draft, debate, and pass resolutions on behalf of the student body",
      "Approve the SGA budget and appropriations",
      "Confirm executive appointments and oversee the branches",
      "Represent the specific concerns of each academic college",
    ],
    meeting: "The Senate meets regularly through the semester; sessions are open to students.",
    makeup: "Senators elected from each undergraduate college, led by the Senate leadership.",
  },
  judicial: {
    slug: "judicial",
    name: "Judicial Branch",
    tagline: "Interprets SGA's governing documents and oversees fair elections",
    accent: "accent-patterson",
    officialUrl: sgaLinks.judicial,
    description:
      "The Judicial Branch is SGA's supreme court. It interprets the Constitution and Bylaws, hears disputes over how they are applied, and safeguards the integrity of the election process. It is the check that keeps the other two branches accountable to the documents students ratified.",
    responsibilities: [
      "Interpret the SGA Constitution, Bylaws, and governing documents",
      "Hear and rule on disputes between branches or over election conduct",
      "Uphold the integrity and fairness of SGA elections",
      "Serve as the final check on constitutional questions within SGA",
    ],
    meeting: "Convenes as cases and constitutional questions arise.",
    makeup: "A Chief Justice and Associate Justices confirmed to the Court.",
  },
};

export const branchList = Object.values(branches);
