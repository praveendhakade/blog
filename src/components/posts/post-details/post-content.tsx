import { IPost } from "@/types/post";
import { PostHeader } from "./post-header";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Element } from "hast";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);
const MarkdownImage = ({ src, alt }: { src: string; alt: string }) => (
  <Image src={src} alt={alt} width={800} height={400} />
);
export const PostContent = ({ post }: { post: IPost }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className="post-content">
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown
        components={{
          img: ({ src, alt }) => <MarkdownImage src={src!} alt={alt!} />,
          p(para) {
            const { node } = para;
            if (
              node?.children[0] &&
              node.children[0].type === "element" &&
              (node.children[0] as Element).tagName === "img"
            ) {
              return <div className="image">{para.children}</div>;
            }
            return <p>{para.children}</p>;
          },
          code(code) {
            const { lang, children } = code;
            return (
              <SyntaxHighlighter language={lang} style={atomDark}>
                {String(children)}
              </SyntaxHighlighter>
            );
          },
        }}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
};
