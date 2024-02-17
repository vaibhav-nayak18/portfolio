import { hexToRgb } from "@/utils/color";
import { getColoredTextClasses } from "@/utils/colored-text";
import { skills } from "@/utils/icons";
import { cx } from "react-twc";
import { Icon } from "./Icon";

export default function Skills() {
  return (
    <section>
      <h1
        className={getColoredTextClasses(
          "blue",
          "brand",
          "saturate-125 text-brand-500 mb-4 text-4xl font-bold text-center"
        )}
      >
        Skills
      </h1>
      <ul className={"flex items-center gap-2.5 flex-wrap"}>
        {skills
          .filter((skill) => !skill.hide)
          .map((skill) => {
            const color = hexToRgb(skill.color, 0, true);
            console.log("color", `bg-[${skill.color}]`);
            return (
              <li className={"block"} key={skill.name}>
                <span
                  className={cx(
                    "flex items-center gap-1.5",
                    "rounded-lg pl-3 pr-3.5 py-1.5 min-h-9",
                    "text-xl font-medium cursor-default",
                    "bg-brand-700/10",
                    "cursor-pointer transition-all hover:scale-105 duration-200",
                    `hover:bg-[${skill.color}]`,
                    "hover:bg-[#3178c6]"
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
