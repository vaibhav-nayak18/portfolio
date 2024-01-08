"use client";
import { Contact, Hero, Projects, Skill } from "@/components";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main className="max-w-5xl mx-auto scroll-smooth">
      <Hero />
      <Skill />
      <Projects />
      <Contact />
    </motion.main>
  );
}
