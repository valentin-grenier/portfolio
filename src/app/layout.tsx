import "../styles/globals.css";
import type { Metadata } from "next";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ButtonScrollToTop from "@/components/Button/ButtonScrollToTop";
import Layout from "@/components/Layout/Layout";

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
    <Layout>
      <Header />
      {children}
      <ButtonScrollToTop />
      <Footer />
    </Layout>
  );
}
