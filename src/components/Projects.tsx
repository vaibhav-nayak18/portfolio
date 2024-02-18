import Project from "./ui/project";

export type ProjectType = {
  title: string;
  tech: string[];
  desc: string;
  link: { code: string; live: string };
};
const projects: ProjectType[] = [
  {
    title: "full stack chat app",
    tech: [
      "react",
      "redux-toolkit",
      "react-query",
      "typescript",
      "node",
      "express js",
      "mongodb",
      "docker",
    ],
    desc: "",
    link: {
      code: "",
      live: "",
    },
  },
  {
    title: "full stack social app",
    tech: ["Next js", "typescript", "Go", "fiber", "mongodb", "docker"],
    desc: "",
    link: {
      code: "",
      live: "",
    },
  },
  {
    title: "Entertainment Hub",
    tech: ["react", "redux-toolkit", "typescript"],
    desc: "",
    link: {
      code: "",
      live: "",
    },
  },
];
export default function Projects() {
  return (
    <section className="p-2" id="projects">
      <h1 className="text-3xl mb-4 lg:mb-7 lg:text-5xl font-bold text-cyan-500 text-center">
        Projects
      </h1>
      <div className="flex flex-col gap-8 lg:gap-14 items-center">
        {projects.map((val) => (
          <Project key={val.title} {...val} />
        ))}
      </div>
    </section>
  );
}
