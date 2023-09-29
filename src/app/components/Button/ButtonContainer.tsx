import { ReactNode } from "react";

interface IButtonContainer {
  children: ReactNode;
}

export default function ButtonContainer({ children }: IButtonContainer) {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-6 lg:mt-12">
      {children}
    </div>
  );
}
