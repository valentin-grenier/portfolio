"use client";

import React from "react";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { useEffect, useState } from "react";

export default function ButtonScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 200);
    }

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // Compute and set innerWidth
    setInnerWidth(window.innerWidth);
  }, []);

  const scrollToTop = () => {
    // Scroll to the top when the button is clicked
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed right-4 lg:right-6 bg-white px-1 rounded-lg transition-position duration-500 ${
        isVisible ? "bottom-4" : "-bottom-8"
      }`}
      onClick={scrollToTop}
    >
      <KeyboardArrowUpRoundedIcon
        style={{
          fontSize: innerWidth <= 768 ? "32px" : "40px",
        }}
      />
    </button>
  );
}
