import { IPost } from "@/types/post";
import PostsGrid from "../posts/post-grid";

interface IFeaturedPosts {
  posts: IPost[];
}
export default function FeaturedPosts({ posts }: IFeaturedPosts) {
  return (
    <section className="latest">
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
