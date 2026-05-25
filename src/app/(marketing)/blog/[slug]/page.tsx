import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getBlogPostBySlug, blogPosts } from "@/content/blog/posts";
import { BlogPostPage } from "@/features/blog/components/blog-post-page";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    image: post.image,
    keywords: post.tags,
  });
}

export default async function BlogPostRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();
  return <BlogPostPage post={post} />;
}
