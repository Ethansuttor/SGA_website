/**
 * Verified external + internal link architecture.
 *
 * External URLs are pulled from the university's own pages and global utility nav.
 * Do not invent URLs here — every entry below resolves to a real, currently-maintained
 * page. When a UofL IA change breaks one, fix it in this one file.
 */

export interface QuickLink {
  label: string;
  href: string;
  /** short helper line shown under the label */
  desc?: string;
  external?: boolean;
}

/* ---- Official SGA structure (student.louisville.edu/sga) ---- */
export const sgaLinks = {
  home: "https://student.louisville.edu/sga",
  preamble: "https://student.louisville.edu/sga/about-us/preamble",
  documents: "https://student.louisville.edu/sga/about-us/documents",
  presidentMessage: "https://student.louisville.edu/sga/about-us/message",
  executive: "https://student.louisville.edu/sga-executive-branch",
  judicial: "https://student.louisville.edu/sga-judicial-branch",
  legislative: "https://student.louisville.edu/sga-legislative-branch",
  electionDocuments:
    "https://student.louisville.edu/sga/sga-election/sga-election-documents",
  electionResults: "https://student.louisville.edu/sga-election-results-0",
  introVideos: "https://student.louisville.edu/sga-intro-videos",
  specialElectionRules:
    "https://student.louisville.edu/sga/sga-election/sga-special-election-rules",
  studentOfTheMonth: "https://student.louisville.edu/sga-sotm",
  councils: "https://student.louisville.edu/sga-about-our-councils-0",
  resources: "https://student.louisville.edu/sga/resources",
  instagram: "https://www.instagram.com/uoflsga",
  email: "sgacares@louisville.edu",
} as const;

/* ---- Involvement / RSOs / funding ---- */
export const involvementLinks = {
  home: "https://student.louisville.edu/involvement",
  engagementOverview: "https://student.louisville.edu/involvement/engagement",
  soab: "https://louisville.campuslabs.com/engage/organization/soab",
  elsb: "https://louisville.campuslabs.com/engage/organization/elsb",
  sab: "https://louisville.campuslabs.com/engage/organization/student-activities-board",
  engageDirectory: "https://louisville.campuslabs.com/engage",
  studentOrgsHub: "https://louisville.edu/involvement/student-organizations",
  soabResource: "https://www.uoflsoab.org/",
  fsl: "https://student.louisville.edu/involvement/fraternity-sorority-life",
  slce: "https://student.louisville.edu/involvement/slce",
  involvementResources:
    "https://student.louisville.edu/involvement/student-involvement-resources",
  sac: "https://student.louisville.edu/sac",
  gscFunding: "https://graduate.louisville.edu/student-groups/gsc-rso-funding",
} as const;

/* ---- Real UofL student services (from the university global utility nav) ---- */
export const studentServices: QuickLink[] = [
  { label: "ULink", href: "https://ulink.louisville.edu/", desc: "Student portal", external: true },
  { label: "Blackboard", href: "http://blackboard.louisville.edu/", desc: "Courses & grades", external: true },
  { label: "Email (Outlook)", href: "http://outlook.office365.com/", desc: "Student email", external: true },
  { label: "CardSmart", href: "https://louisville.campus.eab.com/", desc: "Advising & appointments", external: true },
  { label: "Class Schedule", href: "https://courseleafpath.louisville.edu", desc: "Plan & register", external: true },
  { label: "CardBox", href: "https://louisville.app.box.com", desc: "Cloud file storage", external: true },
  { label: "Parking", href: "https://louisville.edu/parking/", desc: "Permits & maps", external: true },
  { label: "Housing Portal", href: "https://louisville.starrezhousing.com/StarRezPortalX/248308C1/1/1/Home-Home", desc: "On-campus housing", external: true },
  { label: "Cardinal Careers", href: "https://cardinalcareers-csm.symplicity.com/", desc: "Jobs & internships", external: true },
  { label: "Career Center", href: "https://louisville.edu/career", desc: "Coaching & resumes", external: true },
  { label: "Campus Store", href: "https://www.bkstr.com/uoflstore/home", desc: "Textbooks & gear", external: true },
  { label: "ITS Helpdesk", href: "https://louisville.edu/its/get-help/its-helpdesk", desc: "Tech support", external: true },
  { label: "Rec Center", href: "https://student.louisville.edu/campus-recreation", desc: "Gym & intramurals", external: true },
  { label: "Athletics", href: "https://gocards.com/", desc: "GoCards schedules", external: true },
  { label: "Student Services", href: "https://student.louisville.edu", desc: "Full services hub", external: true },
  { label: "Campus Calendar", href: "https://events.louisville.edu", desc: "Live event listing", external: true },
];

/* ---- Primary site navigation (internal routes) ---- */
export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const mainNav: NavItem[] = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Branches",
    href: "/branches",
    children: [
      { label: "Executive Branch", href: "/branches/executive" },
      { label: "Legislative Branch", href: "/branches/legislative" },
      { label: "Judicial Branch", href: "/branches/judicial" },
    ],
  },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Elections", href: "/elections" },
  { label: "Resources", href: "/resources" },
  { label: "News", href: "/news" },
];
