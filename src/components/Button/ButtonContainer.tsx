import { ReactNode } from "react";

interface IButtonContainer {
  children: ReactNode;
  className?: string;
}

export default function ButtonContainer({
  children,
  className,
}: IButtonContainer) {
  return (
    <div
      className={`flex flex-col md:flex-row gap-4 ${className} mt-6 lg:mt-12`}
    >
      {children}
    </div>
  );
}
