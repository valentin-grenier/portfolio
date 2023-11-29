import { Poppins } from "next/font/google";
import React from "react";
import PlausibleProvider from "next-plausible";

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
    <PlausibleProvider domain="valentingrenier.fr">
      <html lang="fr" className={poppins.className}>
        <body className="text-danube-900 text-default bg-danube-bg max-w-[1280px] mx-auto">
          {children}
        </body>
      </html>
    </PlausibleProvider>
  );
}
