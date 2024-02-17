import Img from "next/image";
import Icons from "./Icons";
export default function About() {
  return (
    <section className="flex items-center justify-between" id={"about"}>
      <div className="text-start leading-6 ">
        <span className="text-2xl md:text-4xl font-extrabold">
          Hello, I'm Vaibhav
        </span>
        <p className="text-xl md:text-2xl my-6 md:my-6 max-w-xl">
          Passionate full-stack developer from Bengaluru, India.
        </p>
        <Icons />
      </div>
      <div className="w-full  hidden lg:flex py-8 justify-end">
        <Img
          src="/coding.jpg"
          width={550}
          height={500}
          alt="Coding"
          className="rounded-2xl mr-10"
        />
      </div>
    </section>
  );
}
