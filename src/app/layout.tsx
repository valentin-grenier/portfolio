import "../styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Valentin Grenier",
  description:
    "Développeur web front-end, spécialisé sur React.js et WordPress",
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={poppins.className}>
      <body className="text-danube-900 text-default bg-danube-bg max-w-[1280px] mx-auto">
        {children}
      </body>
    </html>
  );
}
