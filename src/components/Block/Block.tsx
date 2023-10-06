import { ReactElement, ReactNode } from "react";

interface IBlock {
  children: ReactNode;
  image?: ReactElement;
  width?: string;
  className?: string;
}
export default function Block({ children, image, width, className }: IBlock) {
  return (
    <>
      {image ? (
        <div className={`bg-white rounded-2xl lg:flex ${className}`}>
          <div className="p-6 lg:w-3/4 lg:h-full">{children}</div>
          <div className="bg-gradient-blue rounded-2xl h-80 lg:min-h-fit xl:max-h-[275px] lg:w-1/4 overflow-hidden relative">
            {image}
          </div>
        </div>
      ) : (
        <div className={`bg-white p-6 rounded-2xl lg:mx-auto lg:w-${width}`}>
          {children}
        </div>
      )}
    </>
  );
}
