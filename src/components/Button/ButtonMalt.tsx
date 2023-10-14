import React from 'react';
import Link from "next/link";
import logoMalt from "../../../public/images/svg/malt.svg";
import Image from "next/image";

interface IButtonMalt {
  text: string;
  isLightTheme?: boolean;
}

export default function ButtonMalt({ text, isLightTheme }: IButtonMalt) {
  // Switching colors depending on the button theme
  const themeColor = isLightTheme
    ? "bg-danube-50 lg:hover-bg-danube-300 text-danube-950"
    : "bg-[#ff5c57] lg:hover:bg-[#ff5d57d8] text-white";

  return (
    <div
      className={`${themeColor} w-fit px-4 py-2 rounded-lg transition-colors`}
    >
      <Link
        href={"https://www.malt.fr/profile/valentingrenier3"}
        className={"flex items-center font-title font-semibold text-md"}
        target="_blank"
      >
        <Image src={logoMalt} alt={"logo Malt"} className="w-6 invert-0 mr-1" />
        {text}
      </Link>
    </div>
  );
}
