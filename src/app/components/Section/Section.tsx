import { ReactNode } from "react";

interface ISection {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className }: ISection) {
  return <section className={` my-16 px-4 ${className}`}>{children}</section>;
}
