"use client";
type Props = {
  title: string;
  desc: string;
  tech: string[];
  link: {
    code: string;
    live: string;
  };
  index: number;
};

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";

export default function Project({ title, index, desc, link, tech }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 * index }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 * index, ease: "easeInOut" }}
      className="flex flex-col items-center lg:flex-row
              lg:justify-between gap-2 lg:gap-8 bg-brand-950 p-4 rounded-2xl"
    >
      <Image
        className="rounded-xl"
        alt={title}
        src={"/coding.jpg"}
        width={350}
        height={350}
      />
      <div className=" flex flex-col gap-6 rounded-2xl max-w-[550px] ">
        <h1 className="text-center text-2xl font-bold">{title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum et
          sed officia vero impedit enim accusamus officiis. Quis quisquam nam
          nihil recusandae deleniti beatae modi amet, quos natus cum eaque.
        </p>
        <div className="flex gap-2 flex-wrap">
          {tech?.map((val) => (
            <span className="bg-[#0c121e] px-2 py-[1px] rounded-xl" key={val}>
              {val}
            </span>
          ))}
        </div>
        <div className=" flex items-center justify-center gap-8">
          <Button>
            <Link href={link.code}>Code</Link>
          </Button>
          <Button>
            <Link href={link.live}>Live</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
