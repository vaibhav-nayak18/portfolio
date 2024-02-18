import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function Button({ children }: Props) {
  return (
    <button
      className="bg-brand-800 py-1 px-4 rounded-xl hover:bg-blue-700
     transition-all duration-200"
    >
      {children}
    </button>
  );
}
