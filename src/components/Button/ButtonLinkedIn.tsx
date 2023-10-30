import React from 'react';
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

interface IButtonLinkedIn {
  text: string;
  isLightTheme?: boolean;
}

export default function ButtonLinkedIn({
  text,
  isLightTheme,
}: IButtonLinkedIn) {
  // Switching colors depending on the button theme
  const themeColor = isLightTheme
    ? "bg-danube-50 lg:hover-bg-danube-300 text-danube-950"
    : "bg-[#267DAB] lg:hover:bg-[#0076b5d5] text-white";

  return (
    <div
      className={`${themeColor} w-fit px-4 py-2 rounded-lg transition-colors`}
    >
      <Link
        href={"https://www.linkedin.com/in/valentin-grenier/"}
        className={"flex items-center font-title font-semibold text-md"}
        target="_blank"
      >
        <LinkedInIcon
          fontSize="medium"
          className={`${
            isLightTheme ? "text-danube-950" : "text-white"
          } mr-1`}
        />
        {text}
      </Link>
    </div>
  );
}
