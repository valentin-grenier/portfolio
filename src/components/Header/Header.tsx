"use client";

import MenuItem from "./MenuItem";
import BurgerMenu from "./BurgerMenu";
import React, { useState } from "react";

export default function Header() {
  // Availability (0: no / 1: maybe / 2: yes)
  const [availability, setAvailability] = useState(2);

  const [isOpen, setIsOpen] = useState(true);

  return (
    <header className="my-8">
      <div className="flex lg:flex-row-reverse items-center justify-between my-4 pl-2 pr-4">
        <div className="flex items-center gap-2">
          <div
            className={`w-fit notification-element notification-${
              availability === 0
                ? "red"
                : availability === 1
                ? "orange"
                : "green"
            }`}
          ></div>
          <span className="font-title font-bold">
            {availability === 0
              ? "En mission"
              : availability === 1
              ? "A l'écoute"
              : "Disponible"}
          </span>
        </div>

        <nav className="hidden lg:block">
          <ul className="flex gap-2">
            <MenuItem slug={"/"} text={"Accueil"} />
            <MenuItem slug={"/projets"} text={"Projets"} />
            <MenuItem slug={"/profil"} text={"Profil"} />
            <MenuItem slug={"/contact"} text={"Contact"} className="absolute" />
          </ul>
        </nav>

        <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
}
