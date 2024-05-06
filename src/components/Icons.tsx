import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const iconsList = [
  {
    name: "Github",
    icon: <FaGithub />,
    ref: "https://github.com/vaibhavm18",
    hover: "slate",
  },
  {
    name: "Twitter",
    icon: <FaXTwitter />,
    ref: "https://twitter.com/vaibhavmn018",
    hover: "blue",
  },
  // {
  //   name: "Linkedin",
  //   icon: <FaLinkedin />,
  //   ref: "",
  //   hover: "red",
  // },
];
export default function Icons() {
  return (
    <div className="flex gap-4 ">
      {iconsList.map((val) => (
        <Link
          key={val.name}
          className={`text-2xl p-1 rounded-lg transition-all duration-200
           hover:bg-[#2e7393]/30 `}
          href={val.ref}
          target="_blank"
        >
          {val.icon}
        </Link>
      ))}
      <span className="bg-white text-black py-1 px-3 rounded-3xl ml-auto">
        <Link
          href={
            "https://utfs.io/f/6e3a784a-fcd0-4876-b5bf-4e780bd18311-i1zd9m.pdf"
          }
          target="_blank"
        >
          Resume
        </Link>
      </span>
    </div>
  );
}
