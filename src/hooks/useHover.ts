import React, { CSSProperties } from "react";

export function useHover(
  styleOnHover: CSSProperties,
  styleOnNotHover: CSSProperties = {}
) {
  const [style, setStyle] = React.useState(styleOnNotHover);

  const onMouseEnter = () => setStyle(styleOnHover);
  const onMouseLeave = () => setStyle(styleOnNotHover);

  return { style, onMouseEnter, onMouseLeave };
}
