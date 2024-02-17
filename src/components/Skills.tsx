"use client";
import { hexToRgb } from "@/utils/color";
import { skills } from "@/utils/icons";
import { FaDocker } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import Icon from "./ui/icon";
import Skill from "./ui/skill";

const extraSkill = [
  {
    name: "Docker",
    icon: <FaDocker />,
    color: "blue",
  },
  {
    name: "Golang",
    icon: <FaGolang />,
    color: "lightblue",
  },
];
export default function Skills() {
  return (
    <section id="skills" className="pb-6">
      <h1
        className={
          "saturate-125 text-brand-500 my-6 text-4xl font-bold text-center"
        }
      >
        Skills
      </h1>
      <ul className={"flex items-center gap-2.5 flex-wrap"}>
        {skills
          .filter((skill) => !skill.hide)
          .map((skill) => {
            const color = hexToRgb(skill.color, 40);
            return (
              <li className={"block"} key={skill.name}>
                <Skill style={{ backgroundColor: color?.toString() }}>
                  <Icon path={skill.icon} className={"size-4"} />
                  <span>{skill.name}</span>
                </Skill>
              </li>
            );
          })}
        {extraSkill.map((val) => (
          <Skill
            key={val.name}
            style={{ backgroundColor: "rgba(53 114 181 / 5)" }}
            {...val}
          >
            {val.icon} {val.name}
          </Skill>
        ))}
      </ul>
    </section>
  );
}
