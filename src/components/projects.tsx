"use client";
import { projects } from "@/lib/data";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "./ui/button";

export default function Projects() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div ref={ref} id={"projects"} className="relative ">
      <div
        className=" sticky top-24 text-center text-xl md:text-3xl text-orange-600
      font-bold"
      >
        <h1>My Projects</h1>
        <motion.div
          style={{ scaleX }}
          className="h-[10px] rounded-xl bg-white mt-4 "
        ></motion.div>
      </div>
      {projects.map((item) => {
        return <Project key={item.id} {...item} />;
      })}
    </div>
  );
}
type Props = {
  id: number;
  title: string;
  type: string;
  img: string;
  desc: string;
  tech: string[];
};
function Project(item: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <div
      className="h-screen snap-center flex flex-col lg:flex-row  items-center 
      justify-center gap-10"
      ref={ref}
    >
      <Image
        src={item.img}
        alt="Project"
        width={300}
        height={300}
        className="w-auto h-auto hidden lg:block rounded-2xl"
        priority={true}
      />
      <div className="flex flex-col gap-6 items-center">
        <h1 className="text-xl md:text-3xl">{item.title}</h1>
        <p className=" text-start md:text-xl">{item.desc}</p>
        <div className="flex items-center gap-1 lg:gap-3 flex-wrap">
          {item.tech.map((val, i) => (
            <Button key={i}>{val}</Button>
          ))}
        </div>
        <div className="flex gap-10 items-center ">
          <Button variant={"destructive"}>Demo</Button>
          <Button variant={"destructive"}>Code</Button>
        </div>
      </div>
    </div>
  );
}
