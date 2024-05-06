"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const links: { title: string; herf: string }[] = [
  {
    title: "About",
    herf: "about",
  },
  {
    title: "Skills",
    herf: "skills",
  },
  {
    title: "Projects",
    herf: "projects",
  },
];

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 0.9, y: 0 }}
      transition={{
        duration: 0.2,
        ease: "easeIn",
      }}
      className="border mt-4 border-[#6b92c8] bg-[#88A4E614]
      opacity-90 backdrop-blur-sm backdrop-saturate-125 transform-gpu ring-1 ring-brand-200/15
      rounded-xl shadow-brand-200/15 py-2 px-4 flex justify-between items-center"
    >
      <span className={"saturate-125 text-brand-400"}>Vaibhav Nayak</span>
      <ul className="hidden sm:flex gap-4 lg:gap-7 items-center ">
        {links.map((val) => (
          <Link
            href={"#" + val.herf}
            key={val.title}
            className={
              "py-1 px-2 rounded-lg hover:bg-[#8f9fc414] hover:text-gray-50 saturate-125 transition duration-200"
            }
          >
            {val.title}
          </Link>
        ))}
        <Link
          href={"https://github.com/vaibhavm18"}
          className=" text-xl hover:bg-brand-600/20 transition-all duration-250
           px-[6px] py-1 rounded-xl"
          target="_blank"
        >
          <FaGithub />
        </Link>
      </ul>
    </motion.header>
  );
}
