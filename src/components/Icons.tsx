import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const iconsList = [
  {
    name: "Github",
    icon: <FaGithub />,
    ref: "",
    hover: "slate",
  },
  {
    name: "Twitter",
    icon: <FaXTwitter />,
    ref: "",
    hover: "blue",
  },
  {
    name: "Linkedin",
    icon: <FaLinkedin />,
    ref: "",
    hover: "red",
  },
];
export default function Icons() {
  return (
    <div className="flex gap-4 ">
      {iconsList.map((val) => (
        <Link
          key={val.name}
          className={`text-2xl p-1 rounded-lg transition-all duration-200 hover:bg-[#2e7393] `}
          href={val.ref}
        >
          {val.icon}
        </Link>
      ))}
      <span className="bg-white text-black py-1 px-3 rounded-3xl ml-auto">
        <Link href={"/"}>Resume</Link>
      </span>
    </div>
  );
}
