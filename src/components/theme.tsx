"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoIosMoon } from "react-icons/io";
import { IoSunny } from "react-icons/io5";

type themeType = "dark" | "light";

export default function Theme() {
  const [theme, setTheme] = useState<themeType>("dark");
  return (
    <motion.p
      onClick={() => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
      }}
      className="text-2xl md:text-3xl cursor-pointer  rounded-full w-10 h-10 flex items-center justify-center bg-gray-200"
    >
      {theme === "dark" ? (
        <IoIosMoon className={"text-gray-800"} />
      ) : (
        <IoSunny className={"text-gray-800"} />
      )}
    </motion.p>
  );
}
