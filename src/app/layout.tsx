import "../styles/globals.css";
import React from "react";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ButtonScrollToTop from "@/components/Button/ButtonScrollToTop";
import Layout from "@/components/Layout/Layout";
import PopupPlausible from "@/components/Popup/PopupPlausible";

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
      <PopupPlausible />
      <Footer />
    </Layout>
  );
}
