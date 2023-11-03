import React from "react";
import Link from "next/link";
import ExternalIcon from "@mui/icons-material/Launch";
import CloudDownloadRoundedIcon from "@mui/icons-material/CloudDownloadRounded";

interface IButtonLink {
  title: string;
  slug: string;
  isExternal?: boolean;
  hasExternalIcon?: boolean;
  isDisabled?: boolean;
  download?: boolean;
}

export default function ButtonLink({
  title,
  slug,
  isExternal,
  hasExternalIcon,
  isDisabled,
  download,
}: IButtonLink) {
  // Button classes
  const disabledClass = !isDisabled
    ? "lg:hover:bg-danube-600 cursor-pointer"
    : "cursor-auto opacity-70";

  return (
    <Link
      href={!isDisabled ? slug : ""}
      target={isExternal ? "_blank" : "_self"}
      className={`bg-danube-800 text-danube-50 flex items-center gap-2 rounded-lg font-title font-semibold text-md px-4 py-2 w-fit transition-colors ${disabledClass}`}
      download={download ? "true" : "false"}
    >
      {title}
      {hasExternalIcon && <ExternalIcon />}
      {download && <CloudDownloadRoundedIcon />}
    </Link>
  );
}
