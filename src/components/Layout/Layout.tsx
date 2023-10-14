import { Poppins } from "next/font/google";
import React from 'react';

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

interface ILayout {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <html lang="fr" className={poppins.className}>
      <body className="text-danube-900 text-default bg-danube-bg max-w-[1280px] mx-auto">
        {children}
      </body>
    </html>
  );
}
