import Image from "next/image";
import React from 'react';

interface ICardSkillSingle {
  logo: string;
  alt: string;
  title: string;
  text: string;
}

export default function CardSkillSingle({
  logo,
  alt,
  title,
  text,
}: ICardSkillSingle) {
  return (
    <div className="bg-white p-4 rounded-2xl h-fit">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={logo}
          alt={alt}
          className="w-8 h-8 saturate-0"
          width={0}
          height={0}
        />
        <h3 className="text-danube-accent text-[18px] lg:text-lg mb-0">
          {title}
        </h3>
      </div>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}
