import Link from "next/link";
import { usePathname } from "next/navigation";
import React from 'react';

interface IMenuItem {
  slug: string;
  text: string;
  className?: string;
}

export default function MenuItem({ slug, text, className }: IMenuItem) {
  // Get current page slug
  const currentPage = usePathname();

  // Apply classes to current page link item
  const currentItemColor = "text-danube-accent";

  return (
    <Link
      href={slug}
      className={`px-4 font-bold relative transition-all lg:left-0 lg:hover:left-1 lg:duration-150 ${
        currentPage === slug && currentItemColor
      } ${className}`}
    >
      {text}
    </Link>
  );
}
