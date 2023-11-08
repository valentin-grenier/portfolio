"use client";

import { useState, useEffect } from "react";
import Cookies from "universal-cookie";

export default function PopupPlausible() {
  const [isClose, setIsClose] = useState(true);

  const displayClass = !isClose ? "left-4" : "-left-full";

  function handleClick() {
    setIsClose(true);

    // Save "close" state info in cookies
    const cookie = new Cookies();
    cookie.set("valentingrenier-popup", "closed");
  }

  useEffect(() => {
    // Get the popup status from cookies
    const cookie = new Cookies();
    const popupStatus = cookie.get("valentingrenier-popup");

    // Check the value of the cookie
    if (popupStatus === "closed") {
      // If the value is equal to "closed", hide the cookie popup
      setIsClose(true);
    } else {
      // If not, display the cookie banner
      setIsClose(false);
    }
  }, []);

  return (
    <div
      className={`bg-white md:w-96 fixed bottom-4 ${displayClass} p-6 shadow-lg rounded-xl w-10/12 transition-position duration-700`}
    >
      <span className="font-bold">Collecte de données</span>
      <div className="mb-4">
        <p className="text-xs leading-normal mb-0">
          Ce site est rélié à l'outil de statistiques <strong>Plausible</strong>
          , et ne collecte que des données relatives aux visites du site.
          Promis, rien sur&nbsp;vous&nbsp;!
          <span className="ml-2 font-semibold">
            <a href="/mentions-legales">En savoir plus</a>
          </span>
        </p>
      </div>
      <button
        className="bg-danube-950 text-white font-semibold py-1 px-4 rounded-lg"
        onClick={handleClick}
      >
        C'est compris
      </button>
    </div>
  );
}
