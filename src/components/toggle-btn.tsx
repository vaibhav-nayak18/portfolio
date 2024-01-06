"use client";

import { ReactNode } from "react";

type Props = {
  toggleSidebar: () => void;
  children: ReactNode;
};
export default function ToggleButton({ children, toggleSidebar }: Props) {
  return (
    <button onClick={toggleSidebar} className="py-1 px-4 rounded-xl">
      {children}
    </button>
  );
}
