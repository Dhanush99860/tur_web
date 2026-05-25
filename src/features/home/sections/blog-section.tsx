import Image from "next/image";
import type { BlogPost } from "@/types";
import { PageContainer } from "@/components/layout/page-container";
import { HomeSectionHeading } from "@/features/home/components/home-section-heading";
import { SmartLink } from "@/components/shared/smart-link";
import { ArrowUpRightIcon } from "@/components/shared/icons";

type BlogSectionProps = {
  posts: BlogPost[];
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section className="home-section-shell">
      <PageContainer>
        {/* ── Header ── */}
        <div className="border-t border-[var(--border)] pt-8 sm:pt-10">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,40rem)_minmax(0,34rem)] lg:items-end lg:justify-between lg:gap-8">
            <HomeSectionHeading
              eyebrow="From the Blog"
              title={<>Technical guides and specification resources.</>}
              className="max-w-[50rem]"
              titleClassName="max-w-[22ch]"
            />

            <div className="flex max-w-[34rem] flex-col gap-4 lg:items-end lg:justify-self-end lg:pb-1">
              <p className="text-[var(--muted-foreground)] text-[14.5px] leading-[1.8] lg:text-right">
                In-depth specification guidance covering master key hierarchies, automatic door
                operators and European security standards.
              </p>
              <SmartLink
                href="/blog"
                className="group inline-flex items-center gap-2 text-[12.5px] font-semibold text-[var(--accent)] transition-opacity duration-200 hover:opacity-75"
              >
                View All Guides
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </SmartLink>
            </div>
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {posts.map((post) => (
            <SmartLink
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--border)_80%,transparent)] bg-[var(--card)] transition-all duration-300 hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-xl">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 1023px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
                {/* Category badge */}
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/45 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                <p className="text-[11.5px] text-[var(--muted-foreground)]">
                  {formatDate(post.publishedAt)}
                </p>

                <h3 className="mt-2.5 text-[1.05rem] font-bold leading-[1.22] tracking-[-0.03em] text-[var(--foreground)]">
                  {post.title}
                </h3>

                <p className="mt-3 flex-1 line-clamp-3 text-[var(--muted-foreground)] text-[14.5px] leading-[1.8]">
                  {post.excerpt}
                </p>

                {/* CTA row */}
                <div className="mt-5 flex items-center justify-between gap-4 border-t border-[color-mix(in_srgb,var(--border)_70%,transparent)] pt-5">
                  <span className="text-[13px] font-semibold text-[var(--foreground)]">
                    Read Article
                  </span>
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--accent)_55%,transparent)] text-[var(--accent)] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white">
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </SmartLink>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
