"use client";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Theme from "./theme";

const navVariants = {
  hidden: {
    opacity: 0,
    y: "-100%",
    x: "-50%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: "0",
    x: "-50%",
    transition: {
      type: "spring",
      stiffness: 80,
      duration: 1,
    },
  },
};

export default function Header() {
  return (
    <header>
      <motion.nav
        variants={navVariants}
        initial={"hidden"}
        whileInView={"show"}
        className="fixed top-2 left-1/2   border
        border-white shadow-2xl backdrop-blur-[0.5rem] 
        shadow-gray-700  -translate-x-1/2 mt-2 md:mt-4
          rounded-3xl py-2 px-4  justify-between"
      >
        <ul className=" gap-4 md:gap-12 flex py-1 px-2 md:px-6 ">
          {links.map((val, i) => {
            return (
              <li
                key={i}
                className=" cursor-pointer hover:underline transition-all"
              >
                <Link href={val.hash} className="md:text-xl">
                  {val.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.nav>
      <motion.div
        initial={{
          opacity: 0,
          translateZ: 0.8,
          x: "100%",
        }}
        animate={{
          opacity: 1,
          translateZ: 1,
          x: "0",
        }}
        transition={{
          delay: 0.2,
        }}
        className="fixed flex gap-4 right-6 bottom-6"
      >
        <span
          className=" bg-gray-200 w-10 h-10 rounded-full cursor-pointer
              flex items-center justify-center"
        >
          <FaGithub className={"text-2xl md:text-3xl text-black"} />
        </span>
        <Theme />
      </motion.div>
    </header>
  );
}
