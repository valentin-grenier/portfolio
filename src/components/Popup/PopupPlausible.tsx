"use client";

import { useState, useEffect } from "react";

export default function PopupPlausible() {
  const [isClose, setIsClose] = useState(false);

  const displayClass = !isClose ? "left-4" : "-left-full";

  function handleClick() {
    setIsClose(true);
    sessionStorage.setItem("popup-plausible", "closed");
  }

  return (
    <div
      className={`bg-white md:w-96 fixed bottom-4 ${displayClass} p-6 shadow-lg rounded-xl w-10/12 transition-position duration-700`}
    >
      <span className="font-bold">Collecte de données</span>
      <p className="text-xs leading-normal mb-4">
        Ce site est rélié à l'outil de statistiques <strong>Plausible</strong>,
        qui ne collecte que des données relatives aux visites du site. Promis,
        rien sur&nbsp;vous&nbsp;!
      </p>
      <button
        className="bg-danube-950 text-white font-semibold py-1 px-4 rounded-lg"
        onClick={handleClick}
      >
        C'est compris
      </button>
    </div>
  );
}
