import Image from "next/image";
import { blogPosts } from "@/content/blog/posts";
import { PageContainer } from "@/components/layout/page-container";
import { SmartLink } from "@/components/shared/smart-link";
import { ArrowUpRightIcon } from "@/components/shared/icons";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BlogListingPage() {
  return (
    <main id="main-content">
      {/* ── Hero header ── */}
      <PageContainer className="section-shell">
        <div className="border-b border-[var(--border)] pb-10 sm:pb-14">
          <div className="flex items-center gap-2.5">
            <span className="h-px w-5 bg-[color-mix(in_srgb,var(--accent)_24%,var(--border))]" />
            <p className="text-[9.5px] font-bold uppercase tracking-[0.28em] text-[var(--muted-foreground)]">
              Blog
            </p>
          </div>

          <h1 className="mt-4 font-display text-[clamp(2.4rem,5vw,4rem)] font-medium leading-[0.93] tracking-[-0.055em] text-[var(--foreground)]">
            Technical guides and<br />
            specification resources.
          </h1>

          <p className="mt-5 max-w-[56ch] text-[var(--muted-foreground)] text-[14.5px] leading-[1.8]">
            In-depth technical guides and specification resources from TUR — covering master key
            systems, automatic door operators, door hardware standards and project coordination.
          </p>
        </div>

        {/* ── Post grid ── */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <SmartLink
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--border)_80%,transparent)] bg-[var(--card)] transition-all duration-300 hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
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
                  <span className="mx-2 opacity-40">·</span>
                  {post.readingTimeMin} min read
                </p>

                <h2 className="mt-3 text-[1.15rem] font-semibold leading-[1.2] tracking-[-0.03em] text-[var(--foreground)]">
                  {post.title}
                </h2>

                <p className="mt-3 flex-1 line-clamp-3 text-[var(--muted-foreground)] text-[14.5px] leading-[1.8]">
                  {post.excerpt}
                </p>

                {/* CTA row */}
                <div className="mt-6 flex items-center justify-between gap-4 border-t border-[color-mix(in_srgb,var(--border)_70%,transparent)] pt-5">
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
    </main>
  );
}
