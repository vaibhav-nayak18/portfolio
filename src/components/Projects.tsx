import Project from "./ui/project";

export type ProjectType = {
  title: string;
  img: string;
  tech: string[];
  desc: string;
  link: { code: string; live: string; demo: string };
};
const projects: ProjectType[] = [
  {
    title: "full stack chat app",
    img: "https://utfs.io/f/0c5ad0ee-69e8-401e-be38-349496f7787c-v9ywyf.png",
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

    desc: `
    Developed a web application with React for the user interface, 
    Redux Toolkit for state management, React Query for data fetching,
    TypeScript for code readability, Node.js and Express.js for the backend,
    MongoDB for database storage, and Docker for deployment.`,

    link: {
      code: "https://github.com/vaibhavm18/Chat-Webapp",
      live: "https://chatclient.vaibhavnayak.com",
      demo: "https://youtu.be/sfP9lZDLYIQ",
    },
  },
  {
    title: "full stack social app",
    img: "https://utfs.io/f/3857cc08-f88d-4496-acd6-2f416ec4e557-tzitf7.png",
    tech: [
      "React js",
      "typescript",
      "Go",
      "fiber",
      "mongodb",
      "docker",
      "Zustand",
    ],
    desc: `
    Built a full-stack social knowledge-sharing application allowing users to post topics, briefs, and engage with
    like/dislike functionality.
    Developed a web application utilizing React for the user interface,
    TypeScript for enhanced developer experience and type safety, 
    Go and Fiber for creating efficient and scalable backend APIs,
    MongoDB for data storage and management,
    Docker for containerization to ensure consistent deployment across environments, and Zustand for simplified state management,
    handling complex application state. 
    
    `,
    link: {
      code: "https://github.com/vaibhavm18/Social-App",
      live: "https://socials.vaibhavnayak.com/",
      demo: "https://youtu.be/jk93Tbs6Fbg",
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
        {projects.map((val, i) => (
          <Project key={val.title} {...val} index={i + 1} />
        ))}
      </div>
    </section>
  );
}
