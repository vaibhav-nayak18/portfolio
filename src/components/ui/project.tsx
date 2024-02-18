type Props = {
  title: string;
  desc: string;
  tech: string[];
  link: {
    code: string;
    live: string;
  };
};

import Image from "next/image";
import Link from "next/link";
import Button from "./button";
export default function Project({ title, desc, link, tech }: Props) {
  return (
    <div
      className="flex flex-col items-center lg:flex-row
              lg:justify-between gap-2 lg:gap-8 bg-brand-950 p-4 rounded-2xl"
    >
      <Image
        className="rounded-xl"
        alt={title}
        src={"/coding.jpg"}
        width={350}
        height={350}
      />
      <div className=" flex flex-col gap-6 rounded-2xl max-w-[550px] ">
        <h1 className="text-center text-2xl font-bold">{title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum et
          sed officia vero impedit enim accusamus officiis. Quis quisquam nam
          nihil recusandae deleniti beatae modi amet, quos natus cum eaque.
        </p>
        <div className="flex gap-2 flex-wrap">
          {tech?.map((val) => (
            <span className="bg-[#0c121e] px-2 py-[1px] rounded-xl" key={val}>
              {val}
            </span>
          ))}
        </div>
        <div className=" flex items-center justify-center gap-8">
          <Button>
            <Link href={link.code}>Code</Link>
          </Button>
          <Button>
            <Link href={link.live}>Live</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
