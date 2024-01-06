"use client";
import { Contact, Profile } from "@/components";
import Projects from "@/components/projects";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main className=" max-w-5xl mx-auto ">
      <Profile />
      <Projects />
      <Contact />
    </motion.main>
  );
}
