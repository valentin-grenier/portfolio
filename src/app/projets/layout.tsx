import "../../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mes projets - Valentin Grenier",
  description:
    "Découvrez mes projets de site vitrine et d'applications web réalisés avec WordPress et React",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="text-danube-900 text-default bg-danube-bg max-w-[1280px] mx-auto">
        {children}
      </body>
    </html>
  );
}
