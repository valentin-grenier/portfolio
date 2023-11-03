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
  let popupStatus = null;

  if (typeof window !== "undefined") {
    // Get the analytics disclaimer popup status from localStorage
    popupStatus = sessionStorage.getItem("popup-closed");
  }

  return (
    <Layout>
      <Header />
      {children}
      <ButtonScrollToTop />
      {popupStatus === "closed" ? "" : <PopupPlausible />}

      <Footer />
    </Layout>
  );
}
