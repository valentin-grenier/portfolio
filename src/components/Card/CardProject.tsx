import Link from "next/link";
import React from "react";

interface ICardProject {
  image: string;
  tags: string[];
  className?: string;
  slug: string;
}

export default function CardProject({
  image,
  tags,
  className,
  slug,
}: ICardProject) {
  return (
    <Link href={slug}>
      <div className="group relative w-auto h-56 md:h-72 md:w-72 rounded-2xl transition-all peer group-hover:bottom-4">
        <div
          className={`bg-danube-200 bg-no-repeat bg-cover bg-center absolute inset-0 rounded-2xl transition-opacity ${className}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="absolute bottom-4 lg:-bottom-12 left-1/2 -translate-x-1/2 flex gap-2 group-hover:lg:bottom-4 transition-all duration-500">
          {tags.map((item, key) => (
            <span
              key={key}
              className="text-[0.75rem] md:text-xs font-title font-semibold bg-danube-50 py-1 px-2 rounded-xl"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
