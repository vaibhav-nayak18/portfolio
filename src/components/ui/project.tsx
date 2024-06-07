"use client";
type Props = {
  title: string;
  img: string;
  desc: string;
  tech: string[];
  link: {
    code: string;
    live: string;
    demo: string;
  };
  index: number;
};

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";

export default function Project({
  title,
  img,

  index,
  desc,
  link,
  tech,
}: Props) {
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
        src={img}
        width={350}
        height={350}
      />
      <div className=" flex flex-col items-center gap-6 rounded-2xl max-w-[550px] ">
        <h1 className="text-center text-2xl font-bold">{title}</h1>
        <p>{desc}</p>
        <div className="flex gap-2 flex-wrap">
          {tech?.map((val) => (
            <span className="bg-[#0c121e] px-2 py-[1px] rounded-xl" key={val}>
              {val}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-center gap-8">
          <Link href={link.code} target="_blank">
            <Button>Code</Button>
          </Link>
          <Link href={link.live} target="_blank">
            <Button>Live</Button>
          </Link>
          <Link href={link.demo} target="_blank">
            <Button>Demo</Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
