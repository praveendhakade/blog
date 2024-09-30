import { AllPosts } from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Posts",
  description: "Read all posts",
};

export default function AllPostsPage() {
  const allPosts = getAllPosts();
  return <AllPosts posts={allPosts || []} />;
}
