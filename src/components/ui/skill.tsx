import { useHover } from "@/hooks/useHover";
import { CSSProperties, ReactNode } from "react";
import { cx } from "react-twc";

type Props = {
  style: CSSProperties;
  children: ReactNode;
};

export default function Skill({ style, children }: Props) {
  const hover = useHover(style);
  return (
    <span
      className={cx(
        "flex items-center gap-1.5",
        "rounded-2xl pl-3 pr-3.5 py-1.5 min-h-9",
        "text-xl font-medium cursor-default",
        "bg-brand-700/10",
        "cursor-pointer transition-all hover:scale-105 duration-200",
        "hover:bg-orange-500/10"
      )}
      {...hover}
    >
      {children}
    </span>
  );
}
