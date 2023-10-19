import Image from "next/image";
import React from "react";

interface ISkills {
  title: string;
  text: string;
  images: ISkill;
  stack?: "Front" | "Back" | "Misc";
  containerClassName?: string;
  iconsContainerClassName?: string;
}

export interface ISkill {
  [x: string]: any;
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    icon: {
      url: string;
      alt: string;
    };
    stack: string;
    long_title: string;
    skill_description: string;
  };
}

export default function CardSkill({
  title,
  text,
  images,
  stack,
  containerClassName,
  iconsContainerClassName,
}: ISkills) {
  const skills = images.filter(
    (item: { acf: { stack: string | undefined } }) => item.acf.stack === stack
  );

  return (
    <div className={`bg-white p-5 rounded-2xl ${containerClassName}`}>
      <h3 className="text-danube-accent">{title}</h3>
      <p className="mb-8">{text}</p>
      <div
        className={`flex flex-wrap gap-y-6 lg:gap-4 xl:gap-8 ${iconsContainerClassName}`}
      >
        {skills.map((item: ISkill) => (
          <div
            className="w-1/3 lg:w-fit flex flex-col items-center"
            key={item.id}
          >
            <Image
              src={item.acf.icon.url}
              alt={item.acf.icon.alt}
              className="w-10 h-auto saturate-0 lg:hover:saturate-100 transition-all"
              width={0}
              height={0}
            />
            <span className="text-xs">{item.title.rendered}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
