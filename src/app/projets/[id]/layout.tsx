import "../../../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Codit - un projet de Valentin Grenier",
  description:
    "Découvrez Codit, un projet que j'ai réalisé lors de ma formation chez O'clock.",
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
