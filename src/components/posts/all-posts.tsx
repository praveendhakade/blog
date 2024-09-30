import { IPost } from "@/types/post";
import PostsGrid from "./post-grid";

interface IAllPosts {
  posts: IPost[];
}
export const AllPosts = ({ posts }: IAllPosts) => {
  return (
    <section className="posts">
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};
