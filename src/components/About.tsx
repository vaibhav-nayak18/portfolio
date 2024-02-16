import Img from "next/image";
export default function About() {
  return (
    <section className="flex items-center justify-between">
      <div className="text-start leading-6 ">
        <span className="text-2xl md:text-4xl font-extrabold">
          Hello, I'm Vaibhav
        </span>
        <p className="text-xl md:text-2xl my-6 md:my-6 max-w-xl">
          Passionate full-stack software developer from Bengaluru, India
        </p>
        <span className="bg-white text-black rounded-3xl cursor-pointer py-2 px-4">
          Developer
        </span>
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
