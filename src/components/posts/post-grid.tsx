import { IPost } from "@/types/post";
import PostItem from "./post-item";

interface IPostsGrid {
  posts: IPost[];
}
export default function PostsGrid({ posts }: IPostsGrid) {
  return (
    <ul className="posts-grid">
      {posts.map((post: IPost) => (
        <PostItem key={post.title} post={post} />
      ))}
    </ul>
  );
}
