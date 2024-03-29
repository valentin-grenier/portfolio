import Image from "next/image";
import React from "react";

interface ICardTechnology {
  title: string;
}

export default function CardTechnology({ title }: ICardTechnology) {
  // transforming title into lowercase string without special chars
  const logo = title.toLowerCase().replace(".", "").replace(" ", "");

  return (
    <div className="bg-white flex flex-col gap-2 items-center w-fit p-4 rounded-xl">
      <Image
        src={`/images/svg/${logo}.svg`}
        alt={"logo"}
        className="w-fit h-16"
        width={64}
        height={64}
      />
      <span className="capitalize">{title}</span>
    </div>
  );
}
