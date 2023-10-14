import React from 'react';
import Link from "next/link";
import ExternalIcon from "@mui/icons-material/Launch";
import Image from "next/image";

interface IButtonLink {
  title: string;
  slug: string;
  isExternal?: boolean;
  hasExternalIcon?: boolean;
}

export default function ButtonLink({
  title,
  slug,
  isExternal,
  hasExternalIcon,
}: IButtonLink) {
  return (
    <Link
      href={slug}
      target={isExternal ? "_blank" : "_self"}
      className={`bg-danube-800 lg:hover:bg-danube-600 text-danube-50 rounded-lg font-title font-semibold text-md px-4 py-2 w-fit transition-colors ${
        hasExternalIcon ? "flex items-center gap-2" : ""
      }`}
    >
      {title}
      {hasExternalIcon && <ExternalIcon />}
    </Link>
  );
}
