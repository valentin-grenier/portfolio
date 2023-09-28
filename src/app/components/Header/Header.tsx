"use client";

import LunchDining from "@mui/icons-material/LunchDining";
import BurgerMenu from "./BurgerMenu";
import { useState } from "react";

export default function Header() {
  // Toggle burger menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="flex items-center justify-between my-4 pl-2 pr-4">
        <div className="flex items-center gap">
          <div className="notification-element notification-orange w-fit"></div>
          <span className="font-title font-bold">En mission</span>
        </div>

        <button
          className="bg-white p-2 rounded-lg"
          onClick={() => setIsOpen(true)}
        >
          <LunchDining fontSize="medium" className="text-danube-900" />
        </button>
      </div>

      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
