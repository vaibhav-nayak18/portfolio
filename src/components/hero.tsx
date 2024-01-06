"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 0.4,
      }}
      id="home"
      className="h-screen snap-center  pt-32 flex flex-col gap-8 
                 items-center"
    >
      <p className="text-xl md:text-3xl text-center">
        Hello, I am Vaibhav, a <i className="font-bold">full stack developer</i>
        . I also have experience in building mobile apps using{" "}
        <i className="font-bold">React Native</i>
      </p>
      <div className="flex gap-4 text-xl md:text-2xl md:gap-12">
        <Link href={"#contact"}>Contact Me</Link>
        <Link href={""}>Resume</Link>
      </div>
    </motion.div>
  );
}
