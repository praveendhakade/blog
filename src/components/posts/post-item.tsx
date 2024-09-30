import { IPost } from "@/types/post";
import Image from "next/image";
import Link from "next/link";

export default function PostItem({ post }: { post: IPost }) {
  const { date, title, excerpt, image, slug } = post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/posts/${slug}/${image}`;
  return (
    <li className="post">
      <Link href={`/posts/${slug}`}>
        <div className="post-image">
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className="content">
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}
