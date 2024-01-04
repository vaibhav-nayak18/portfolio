import Link from "next/link";

export default function Header() {
  return (
    <nav className=" border border-white  rounded-3xl py-2 px-4 flex justify-between">
      <div className="">
        <span>Vaibhav Nayak</span>
      </div>
      <ul className="hidden gap-3 md:flex">
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
      <span className="md:hidden">=</span>
    </nav>
  );
}
