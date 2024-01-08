"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import { Button } from "./ui/button";

const heroVarient = {
  initial: {
    opacity: 0,
    x: -200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delayChildren: 0.2,
    },
  },
  scrollButton: {
    opacity: 0.4,
    y: 30,
    transition: {
      duration: 5,
      repeat: Infinity,
    },
  },
};
export default function Hero() {
  return (
    <motion.div
      variants={heroVarient}
      initial={"initial"}
      animate={"animate"}
      id="home"
      className="h-screen  snap-center  pt-32 md:pt-44 flex flex-col gap-16 
                 items-center "
    >
      <motion.p
        initial={heroVarient.initial}
        animate={heroVarient.animate}
        className="text-xl md:text-3xl text-center"
      >
        Hello, I am Vaibhav, a <i className="font-bold">full stack developer</i>
        . I also have experience in building mobile apps using{" "}
        <i className="font-bold">React Native</i>
      </motion.p>
      <motion.div className="flex gap-4 text-xl md:text-2xl md:gap-12">
        <Button>
          <Link href={"#contact"}>Contact Me</Link>
        </Button>
        <Button>
          <Link href={""}>Resume</Link>
        </Button>
      </motion.div>
      <motion.span
        animate={heroVarient.scrollButton}
        className="text-2xl md:text-4xl"
      >
        <Link href={"#skill"}>
          <FaArrowDown />
        </Link>
      </motion.span>
    </motion.div>
  );
}
