import { IPost, IPostFile } from "@/types/post";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "src", "posts");

export const getPostData = (postSlugName: string) => {
  const postSlug = postSlugName.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const postData = data as IPostFile;
  return {
    slug: postSlug,
    ...postData,
    content,
  } as IPost;
};
export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory);

  return postFiles
    .map((postFile) => getPostData(postFile))
    .sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
}

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.isFeatured);
};
