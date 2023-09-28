import { ReactElement, ReactNode } from "react";

interface IBlock {
  children: ReactNode;
  image?: ReactElement;
}
export default function Block({ children, image }: IBlock) {
  return (
    <>
      {image ? (
        <div className="bg-white rounded-2xl">
          <div className="px-4 py-6">{children}</div>
          <div className="bg-gradient-blue rounded-2xl h-80 overflow-hidden">
            {image}
          </div>
        </div>
      ) : (
        <div className="bg-white px-4 py-6 rounded-2xl">{children}</div>
      )}
    </>
  );
}
