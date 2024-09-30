import { PostContent } from "@/components/posts/post-details/post-content";
import { getPostData } from "@/lib/posts-utils";
import { Metadata } from "next";

export const revalidate = 60;

type Props = {
  params: { postId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostData(params.postId);
  return {
    title: post.title,
    description: post.excerpt,
    icons: `/images/posts/${post.slug}/${post.image}`,
  };
}

export default function PostDetailsPage({ params }: Props) {
  const post = getPostData(params.postId);
  return (
    <div>
      <PostContent post={post} />
    </div>
  );
}
