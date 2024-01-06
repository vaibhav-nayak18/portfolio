"use client";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ToggleButton } from ".";
import Sidebar from "./sidebar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButton = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header>
      <nav className="fixed top-2 left-1/2 hidden  -translate-x-1/2 mt-2 md:mt-4 border border-white rounded-3xl py-2 px-4 md:flex justify-between">
        <ul className=" gap-3 flex">
          <li>
            <Link href={"#about"}>About</Link>
          </li>
          <li>
            <Link href={"#projects"}>Projects</Link>
          </li>
          <li>
            <Link href={"#contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
      {!isOpen && (
        <div className="fixed right-4 top-4 md:hidden">
          <ToggleButton toggleSidebar={toggleButton}>
            <GiHamburgerMenu className="text-2xl " />
          </ToggleButton>
        </div>
      )}
      <Sidebar toggleBtn={toggleButton} isOpen={isOpen} />
    </header>
  );
}
