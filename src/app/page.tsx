import FeaturedPosts from "@/components/home/featured-posts";
import Hero from "@/components/home/Hero";
import { getFeaturedPosts } from "@/lib/posts-utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ding Blog",
  description: "Welcome to Ding Blog.",
};

export default function Home() {
  const posts = getFeaturedPosts();
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts ?? []} />
    </>
  );
}
