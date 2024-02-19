"use client";
import { motion } from "framer-motion";
import Img from "next/image";
import Icons from "./Icons";

export default function About() {
  return (
    <section className="flex items-center justify-between" id={"about"}>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
        className="text-start leading-6 "
      >
        <span className="text-2xl md:text-4xl font-extrabold">
          Hello, I&lsquo;m Vaibhav
        </span>
        <p className="text-xl md:text-2xl my-6 md:my-6 max-w-xl">
          Passionate full-stack developer from Bengaluru, India.
        </p>
        <Icons />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
        className="w-full  hidden lg:flex py-8 justify-end"
      >
        <Img
          src="/coding.jpg"
          width={550}
          height={500}
          alt="Coding"
          className="rounded-2xl mr-10"
        />
      </motion.div>
    </section>
  );
}
