import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/data/news";
import { Chip } from "@/components/UI";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { sgaLinks } from "@/data/links";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return { title: "Article" };
  return { title: a.title, description: a.excerpt };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const more = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <article className="glass-strong">
        {/* Article header */}
        <header className="border-b border-border-subtle">
          <div className="container-max max-w-3xl py-12 md:py-16">
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-label-sm text-secondary">
              <Link href="/" className="hover:text-uofl-red">Home</Link>
              <Icon name="chevron-right" size={14} className="text-border-subtle" />
              <Link href="/news" className="hover:text-uofl-red">News</Link>
              <Icon name="chevron-right" size={14} className="text-border-subtle" />
              <span className="text-on-surface line-clamp-1">{article.title}</span>
            </nav>
            <Chip label={article.category} accentKey={article.accent} />
            <h1 className="mt-5 font-headline text-[30px] font-bold leading-[1.12] text-on-surface md:text-[42px]">
              {article.title}
            </h1>
            <div className="mt-5 flex items-center gap-3 text-label-md text-secondary">
              <span className="font-semibold text-on-surface">{article.author}</span>
              <span aria-hidden>·</span>
              <time dateTime={article.date}>{article.displayDate}</time>
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="container-max max-w-3xl py-12">
          <div className="glass glass-sheen mb-8 flex items-start gap-3 rounded-lg border-l-4 border-l-accent-courage p-4">
            <Icon name="document" size={18} className="mt-0.5 shrink-0 text-accent-bronze" />
            <p className="text-body-sm text-secondary">
              Placeholder article. Body copy in this prototype&apos;s news section is filler —
              swap it for real SGA posts in <code className="rounded bg-surface-container px-1.5 py-0.5">data/news.ts</code>.
            </p>
          </div>
          <div className="flex flex-col gap-5 text-body-lg leading-relaxed text-on-surface">
            {article.body.map((p, i) => (
              <p key={i} className={i === 0 ? "text-[19px] font-medium text-on-surface" : ""}>
                {p}
              </p>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4 border-t border-border-subtle pt-8">
            <Button href="/news" variant="outline" icon="arrow-right">
              Back to all news
            </Button>
            <Button href={sgaLinks.instagram} external variant="ghost" icon="arrow-up-right">
              Follow @uoflsga for the latest
            </Button>
          </div>
        </div>
      </article>

      {/* More stories */}
      <section className="border-t border-white/40 py-14">
        <div className="container-max">
          <h2 className="mb-6 font-headline text-headline-md font-bold text-on-surface">More from SGA</h2>
          <div className="grid gap-gutter md:grid-cols-3">
            {more.map((a) => (
              <Link
                key={a.slug}
                href={`/news/${a.slug}`}
                className="glass glass-sheen glass-hover group flex h-full flex-col rounded-lg p-6"
              >
                <Chip label={a.category} accentKey={a.accent} />
                <h3 className="mt-4 flex-1 font-headline text-headline-sm font-bold leading-snug text-on-surface transition-colors group-hover:text-uofl-red">
                  {a.title}
                </h3>
                <time className="mt-4 text-label-sm text-secondary">{a.displayDate}</time>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
