import Link from "next/link";

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
    <header
      className="border mt-4 border-[#6b92c8] bg-[#88A4E614]
      opacity-90 backdrop-blur-sm backdrop-saturate-125 transform-gpu ring-1 ring-brand-200/15
      rounded-xl shadow-brand-200/15 py-2 px-4 flex justify-between items-center"
    >
      <span className={"saturate-125 text-brand-400"}>Vaibhav Nayak</span>
      <ul className="hidden sm:flex gap-4 lg:gap-7 ">
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
      </ul>
    </header>
  );
}
