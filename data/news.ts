/**
 * News & Events content.
 *
 * Per the brief, body copy in this file is PLACEHOLDER — it is the one explicitly
 * sanctioned lorem/filler zone. Headlines and categories are written to read like
 * real UofL SGA activity so the listing looks alive; the article bodies are clearly
 * generic and meant to be swapped for real posts.
 */

export interface Article {
  slug: string;
  title: string;
  category: string;
  /** accent token key used for the category chip */
  accent: string;
  date: string; // ISO
  displayDate: string;
  excerpt: string;
  author: string;
  body: string[];
}

export const articles: Article[] = [
  {
    slug: "spring-budget-allocations-approved",
    title: "Senate Approves Spring Budget Allocations for Student Orgs",
    category: "Senate Update",
    accent: "accent-loyalty",
    date: "2026-03-12",
    displayDate: "March 12, 2026",
    excerpt:
      "The SGA Senate passed the final spring operating budget, expanding funding available to registered student organizations through the Club Programming Committee.",
    author: "SGA Communications",
    body: [
      "Placeholder article body. This is intentionally generic filler text standing in for a real Senate recap. When SGA publishes an actual budget summary, replace this copy in data/news.ts and the article renders here automatically.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel sapien sit amet dui malesuada aliquet. Integer pretium, arcu vitae posuere efficitur, lorem massa laoreet urna, non commodo justo massa quis lacus.",
      "Sed sit amet lacus at eros lacinia ultricies. Nunc dapibus, urna nec vestibulum tempus, velit quam volutpat magna, id efficitur risus arcu nec nibh. Praesent in leo nec justo tincidunt tempor.",
    ],
  },
  {
    slug: "sustainability-initiative-launch",
    title: "SGA Launches Expanded Campus Sustainability Initiative",
    category: "Campus Life",
    accent: "accent-progress",
    date: "2026-03-05",
    displayDate: "March 5, 2026",
    excerpt:
      "Partnering with campus facilities and the Service Learning & Civic Engagement office, SGA is rolling out expanded recycling stations and greener event standards.",
    author: "SGA Communications",
    body: [
      "Placeholder article body. Generic filler standing in for a real sustainability announcement.",
      "Aliquam erat volutpat. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Vivamus a ante congue, porta nunc nec, hendrerit turpis.",
      "Etiam vehicula, nunc non ultricies iaculis, nisi risus sagittis nulla, quis efficitur nunc nisl nec justo. Donec sed odio dui.",
    ],
  },
  {
    slug: "candidate-filing-opens",
    title: "Candidate Filing Period Opens for the Next SGA Election",
    category: "Elections",
    accent: "accent-patterson",
    date: "2026-02-28",
    displayDate: "February 28, 2026",
    excerpt:
      "Students interested in running for the executive ticket or a Senate seat can now submit their intent-to-run paperwork. Review the election documents before you file.",
    author: "SGA Election Commission",
    body: [
      "Placeholder article body. Generic filler standing in for a real elections notice.",
      "Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem.",
      "Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi.",
    ],
  },
  {
    slug: "student-of-the-month-february",
    title: "February Student of the Month Recognizes Community Leadership",
    category: "Recognition",
    accent: "accent-courage",
    date: "2026-02-18",
    displayDate: "February 18, 2026",
    excerpt:
      "The Dale T. Adams Student of the Month award honors a Cardinal whose service made a measurable difference for their peers this month.",
    author: "SGA Communications",
    body: [
      "Placeholder article body. Generic filler standing in for a real recognition post.",
      "Suspendisse potenti. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula.",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    ],
  },
  {
    slug: "textbook-affordability-resolution",
    title: "Senate Passes Resolution Backing Textbook Affordability",
    category: "Advocacy",
    accent: "accent-innovation",
    date: "2026-02-06",
    displayDate: "February 6, 2026",
    excerpt:
      "A new Senate resolution urges expanded use of open educational resources and transparent textbook cost listings at registration.",
    author: "SGA Communications",
    body: [
      "Placeholder article body. Generic filler standing in for a real advocacy update.",
      "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
      "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
    ],
  },
  {
    slug: "town-hall-safety-lighting",
    title: "Fall Town Hall Surfaces Campus Safety and Lighting Priorities",
    category: "Campus Life",
    accent: "accent-ash",
    date: "2026-01-29",
    displayDate: "January 29, 2026",
    excerpt:
      "Students brought lighting, walkability, and late-night transit to the semester's first open town hall. Here's what SGA committed to follow up on.",
    author: "SGA Communications",
    body: [
      "Placeholder article body. Generic filler standing in for a real town hall recap.",
      "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.",
      "Sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.",
    ],
  },
];

export const getArticle = (slug: string) =>
  articles.find((a) => a.slug === slug);
