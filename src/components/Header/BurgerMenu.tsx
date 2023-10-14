import Link from "next/link";
import ButtonGithub from "../Button/ButtonGithub";
import ButtonLinkedIn from "../Button/ButtonLinkedIn";
import CancelIcon from "@mui/icons-material/Cancel";
import React,{ Dispatch, SetStateAction } from "react";
import LunchDining from "@mui/icons-material/LunchDining";

interface IBurgerMenu {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function BurgerMenu({ isOpen, setIsOpen }: IBurgerMenu) {
  return (
    <>
      {/* Button */}
      <button
        className="bg-white px-2 py-1 rounded-lg lg:hidden"
        onClick={() => setIsOpen(true)}
      >
        <LunchDining fontSize="medium" className="text-danube-900" />
      </button>

      <nav
        className={`bg-danube-950 flex-col gap-8 py-8 px-4 fixed top-0 w-full h-full transition-all duration-500 ease-in-out z-50 ${
          isOpen ? "left-0" : "left-full"
        }`}
      >
        {/* Close button */}
        <CancelIcon
          fontSize="large"
          className="absolute top-4 right-4 text-danube-50 cursor-pointer"
          onClick={() => setIsOpen(false)}
        />

        <div className="flex flex-col gap-8">
          {/* Headline */}
          <div className="text-danube-50">
            <span className="text-2xl font-title font-semibold">
              Valentin Grenier
            </span>
            <br />
            <span className="text-lg">Développeur web front-end</span>
          </div>

          <hr className="border-2 opacity-10" />

          {/* Menu */}
          <ul className="flex flex-col gap-4 font-semibold text-danube-50 rounded-lg">
            <Link
              href="/"
              className="font-title text-lg"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/projets"
              className="font-title text-lg"
              onClick={() => setIsOpen(false)}
            >
              Projets
            </Link>
            <Link
              href="/profil"
              className="font-title text-lg"
              onClick={() => setIsOpen(false)}
            >
              Profil
            </Link>
            <Link
              href="/contact"
              className="font-title text-lg"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </ul>

          <hr className="border-2 opacity-10" />

          {/* Buttons */}
          <div className="flex gap-4">
            <ButtonGithub
              slug={"https://github.com/valentin-grenier"}
              text={"Github"}
              isLightTheme={true}
            />
            <ButtonLinkedIn text={"LinkedIn"} isLightTheme={true} />
          </div>
        </div>
      </nav>
    </>
  );
}
