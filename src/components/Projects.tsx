import Project from "./ui/project";

const projects = [
  {
    name: "full stack chat app",
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
  },
  {
    name: "full stack social app",
    tech: ["Next js", "typescript", "Go", "fiber", "mongodb", "docker"],
    desc: "",
  },
  {
    name: "Entertainment Hub",
    tech: ["react", "redux-toolkit", "typescript"],
    desc: "",
  },
];
export default function Projects() {
  return (
    <section className="pb-6" id="projects">
      <h1 className="text-3xl lg:text-5xl font-bold text-cyan-500 text-center">
        Projects
      </h1>
      <div className="">
        {projects.map((val) => (
          <Project key={val.name} />
        ))}
      </div>
    </section>
  );
}
