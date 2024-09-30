import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={"/images/site/hero.jpg"}
          alt="Image showing Praveen"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Praveen</h1>
      <p>I am new to blogs, I blog about web development - especially React.</p>
    </section>
  );
}
