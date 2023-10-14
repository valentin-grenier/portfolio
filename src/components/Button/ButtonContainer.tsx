import React, { ReactNode } from "react";

interface IButtonContainer {
  children: ReactNode;
  className?: string;
  position?: "start" | "center" | "end";
  direction?: "col" | "row";
}

export default function ButtonContainer({
  children,
  className,
  position,
  direction,
}: IButtonContainer) {
  return (
    <div
      className={`flex flex-${direction} md:flex-row items-${position} justify-${position} gap-4 ${className} mt-6 lg:mt-12`}
    >
      {children}
    </div>
  );
}
