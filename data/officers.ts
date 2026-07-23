/**
 * SGA leadership roster.
 *
 * ⚠️ SGA's elected officers change every academic term. To keep this site current,
 * this is the ONLY file you need to edit — update the names/emails/photos below and
 * every page (Home "Meet Your Top 4", Branch rosters) reflects it automatically.
 *
 * Roster confirmed from student.louisville.edu/sga (2025–2026 term). Photos are left
 * as null so cards fall back to a branded monogram tile rather than a wrong headshot;
 * drop a real image path into `photo` when you have one.
 */

export type Branch = "executive" | "legislative" | "judicial";

export interface Officer {
  id: string;
  name: string;
  title: string;
  branch: Branch;
  /** true for the four elected campus-wide executives shown on the homepage */
  top4?: boolean;
  email: string;
  /** public-facing image path in /public, or null for a monogram fallback */
  photo: string | null;
  blurb?: string;
}

export const officers: Officer[] = [
  {
    id: "president",
    name: "Macy Waddle",
    title: "Student Body President",
    branch: "executive",
    top4: true,
    email: "sgapres@louisville.edu",
    photo: null,
    blurb:
      "Leads the Association, sits on the Board of Trustees as the student representative, and is the primary student voice to university administration.",
  },
  {
    id: "evp",
    name: "Anna Hernandez",
    title: "Executive Vice President",
    branch: "executive",
    top4: true,
    email: "sgaevp@louisville.edu",
    photo: null,
    blurb:
      "Oversees the Executive Branch's internal operations and the departments that run day-to-day student services.",
  },
  {
    id: "avp",
    name: "Kathleen Price",
    title: "Academic Vice President",
    branch: "executive",
    top4: true,
    email: "sgaavp@louisville.edu",
    photo: null,
    blurb:
      "Represents students on academic policy, chairs the academic affairs committee, and advocates on grading, advising, and course issues.",
  },
  {
    id: "svp",
    name: "Grant Avis",
    title: "Services Vice President",
    branch: "executive",
    top4: true,
    email: "sgasvp@louisville.edu",
    photo: null,
    blurb:
      "Directs the student services SGA funds directly — from the safety programs to campus-life initiatives students use every week.",
  },
];

export const top4 = officers.filter((o) => o.top4);
