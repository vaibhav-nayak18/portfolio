"use client";
import { Hero } from "@/components";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main className=" max-w-5xl mx-auto  ">
      <Hero />
    </motion.main>
  );
}
