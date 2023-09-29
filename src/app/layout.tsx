import "./styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valentin Grenier",
  description:
    "Développeur web front-end, spécialisé sur React.js et WordPress",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="text-danube-900 text-default bg-danube-bg">
        {children}
      </body>
    </html>
  );
}
