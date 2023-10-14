import Image from "next/image";
import React from 'react';

interface ICardTechnology {
  logo: string;
  title: string;
}

export default function CardTechnology({ logo, title }: ICardTechnology) {
  return (
    <div className="bg-white flex flex-col gap-2 items-center w-fit p-2 rounded-xl">
      <Image src={logo} alt={"logo"} className="w-fit h-16" />
      <span className="capitalize">{title}</span>
    </div>
  );
}
