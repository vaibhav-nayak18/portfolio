import { skills } from "@/utils/icons";
import { cx } from "react-twc";
import { Icon } from "./Icon";

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
            return (
              <li className={"block"} key={skill.name}>
                <span
                  className={cx(
                    "flex items-center gap-1.5",
                    "rounded-2xl pl-3 pr-3.5 py-1.5 min-h-9",
                    "text-xl font-medium cursor-default",
                    "bg-brand-700/10",
                    "cursor-pointer transition-all hover:scale-105 duration-200",
                    "hover:bg-orange-500/10"
                  )}
                >
                  <Icon path={skill.icon} className={"size-4"} />
                  <span>{skill.name}</span>
                </span>
              </li>
            );
          })}
      </ul>
    </section>
  );
}
