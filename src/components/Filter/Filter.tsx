"use client";

import React, { useState } from "react";

export default function Filter() {
  const [selected, setSelected] = useState("all");

  function handleFilterClick(filter: string) {
    setSelected(filter);
  }

  return (
    <div className="flex gap-4 items-center mb-8">
      <span>Filtrer</span>
      <button
        className={`transition-all px-2 py-1 rounded-md ${
          selected === "all"
            ? "bg-danube-800 text-danube-50 font-semibold"
            : "bg-danube-800/0"
        }`}
        onClick={() => handleFilterClick("all")}
      >
        Tout
      </button>
      <button
        className={`transition-all px-2 py-1 rounded-md ${
          selected === "wordpress"
            ? "bg-danube-800 text-danube-50 font-semibold"
            : "bg-danube-800/0"
        }`}
        onClick={() => handleFilterClick("wordpress")}
      >
        WordPress
      </button>
      <button
        className={`transition-all px-2 py-1 rounded-md ${
          selected === "react"
            ? "bg-danube-800 text-danube-50 font-semibold"
            : "bg-danube-800/0"
        }`}
        onClick={() => handleFilterClick("react")}
      >
        React
      </button>
    </div>
  );
}
