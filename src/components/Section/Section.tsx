import React, { ReactNode } from "react";

interface ISection {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className }: ISection) {
  return (
    <section className={`py-10 lg:py-16 px-4 ${className ? className : ""}`}>
      {children}
    </section>
  );
}
