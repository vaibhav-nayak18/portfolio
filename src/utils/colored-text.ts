import cx from "./cx";

type Color =
  | "brand"
  | "blue"
  | "green"
  | "yellow"
  | "orange"
  | "red"
  | "purple";

export const getColoredTextClasses = (
  shadow?: Color,
  from?: Color,
  to?: Color,
  otherClasses?: string,
  includeLightTheme?: boolean
): string => {
  const gradientPrefix = includeLightTheme ? "" : "dark:";
  const classes = [];
  if (shadow && !includeLightTheme) {
    classes.push(
      cx("text-shadow", `shadow-${shadow}-300`, "dark:text-shadow-none")
    );
  }

  if (from || to) {
    classes.push(
      cx(
        "dark:saturate-150",
        `${gradientPrefix}bg-gradient-to-r`,
        `${gradientPrefix}bg-clip-text`,
        `${gradientPrefix}text-transparent`
      )
    );
  }

  return [
    cx(classes, otherClasses),
    `from-${from}`,
    `to-${to}`,
    "gradient",
  ].join(" ");
};
