import cx from "./cx";

export type Color =
  | "brand"
  | "blue"
  | "green"
  | "yellow"
  | "orange"
  | "red"
  | "purple";

export const getColoredTextClasses = (
  from?: Color,
  to?: Color,
  otherClasses?: string
): string => {
  const classes = [];

  if (from || to) {
    classes.push(
      cx("saturate-150", `bg-gradient-to-r`, `bg-clip-text`, `text-transparent`)
    );
  }

  const res = [
    cx(classes, otherClasses),
    `from-${from}-600`,
    `to-${to}-700`,
  ].join(" ");
  return res;
};
