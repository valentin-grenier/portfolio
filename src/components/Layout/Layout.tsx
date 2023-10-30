import { Poppins } from "next/font/google";
import Head from "next/head";
import React from "react";

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
      <Head>
        <script
          defer
          data-domain="portfolio-front-black.vercel.app"
          src="https://plausible.io/js/script.js"
        ></script>
      </Head>
      <body className="text-danube-900 text-default bg-danube-bg max-w-[1280px] mx-auto">
        {children}
      </body>
    </html>
  );
}
