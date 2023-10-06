import { ReactNode } from "react";

interface IButtonContainer {
  children: ReactNode;
  className?: string;
  position?: "start" | "center" | "end";
}

export default function ButtonContainer({
  children,
  className,
  position,
}: IButtonContainer) {
  return (
    <div
      className={`flex flex-col md:flex-row items-${position} gap-4 ${className} mt-6 lg:mt-12`}
    >
      {children}
    </div>
  );
}
