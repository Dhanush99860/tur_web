import Image from "next/image";
import type { BlogPost } from "@/types";
import { PageContainer } from "@/components/layout/page-container";
import { SmartLink } from "@/components/shared/smart-link";
import { ArrowUpRightIcon } from "@/components/shared/icons";

type BlogPostPageProps = {
  post: BlogPost;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BlogPostPage({ post }: BlogPostPageProps) {
  return (
    <main id="main-content">
      <PageContainer className="section-shell">
        <div className="mx-auto max-w-[72rem]">
          {/* ── Post header ── */}
          <header className="border-b border-[var(--border)] pb-10">
            {/* Category badge */}
            <span className="inline-block rounded-full border border-[color-mix(in_srgb,var(--accent)_30%,transparent)] bg-[color-mix(in_srgb,var(--accent)_8%,transparent)] px-3.5 py-1.5 text-[9.5px] font-bold uppercase tracking-[0.26em] text-[var(--accent)]">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[0.94] tracking-[-0.05em] text-[var(--foreground)]">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="mt-5 max-w-[62ch] text-[16px] leading-[1.75] text-[var(--muted-foreground)]">
              {post.excerpt}
            </p>

            {/* Meta row */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-[12.5px] text-[var(--muted-foreground)]">
              <span>{formatDate(post.publishedAt)}</span>
              <span className="opacity-40">·</span>
              <span>{post.readingTimeMin} min read</span>
            </div>
          </header>

          {/* ── Hero image ── */}
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              sizes="(max-width: 1279px) 100vw, 72rem"
              className="object-cover"
              priority
            />
          </div>

          {/* ── Tags row ── */}
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[color-mix(in_srgb,var(--border)_100%,transparent)] bg-[var(--card)] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* ── Body content ── */}
          <article className="mt-10 space-y-8">
            {post.body.map((section, idx) => (
              <div key={idx}>
                {section.heading ? (
                  <h2 className="mb-4 text-[1.25rem] font-semibold leading-[1.25] tracking-[-0.03em] text-[var(--foreground)]">
                    {section.heading}
                  </h2>
                ) : null}
                <div className="space-y-4">
                  {section.paragraphs.map((para, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-[var(--muted-foreground)] text-[14.5px] leading-[1.8]"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </article>

          {/* ── Bottom CTA ── */}
          <div className="mt-14 grid gap-4 border-t border-[var(--border)] pt-10 sm:grid-cols-2">
            <SmartLink
              href="/blog"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-[color-mix(in_srgb,var(--border)_80%,transparent)] bg-[var(--card)] px-6 py-5 transition-all duration-300 hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
            >
              <span>
                <p className="text-[9.5px] font-bold uppercase tracking-[0.28em] text-[var(--muted-foreground)]">
                  Browse
                </p>
                <p className="mt-1 text-[15px] font-semibold tracking-[-0.02em] text-[var(--foreground)]">
                  All guides
                </p>
              </span>
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--border)_100%,transparent)] text-[var(--muted-foreground)] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white">
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </span>
            </SmartLink>

            <SmartLink
              href="/contact"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-[color-mix(in_srgb,var(--accent)_30%,transparent)] bg-[color-mix(in_srgb,var(--accent)_6%,transparent)] px-6 py-5 transition-all duration-300 hover:bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
            >
              <span>
                <p className="text-[9.5px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
                  Get in touch
                </p>
                <p className="mt-1 text-[15px] font-semibold tracking-[-0.02em] text-[var(--foreground)]">
                  Inquire with TUR
                </p>
              </span>
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--accent)_40%,transparent)] text-[var(--accent)] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white">
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </span>
            </SmartLink>
          </div>
        </div>
      </PageContainer>
    </main>
  );
}
