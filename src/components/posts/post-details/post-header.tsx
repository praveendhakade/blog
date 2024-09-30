import Image from "next/image";

interface IPostHeader {
  title: string;
  image: string;
}
export const PostHeader = ({ title, image }: IPostHeader) => {
  return (
    <header className="post-header">
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
};
