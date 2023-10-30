import Link from "next/link";
import ButtonGithub from "../Button/ButtonGithub";
import ButtonLinkedIn from "../Button/ButtonLinkedIn";
import CancelIcon from "@mui/icons-material/Cancel";
import React, { Dispatch, SetStateAction } from "react";
import LunchDining from "@mui/icons-material/LunchDining";
import ButtonContainer from "../Button/ButtonContainer";
import Hr from "../Hr/Hr";

interface IBurgerMenu {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

interface IMenuItem {
  name: string;
  slug: string;
}

const menuItems = [
  {
    name: "Accueil",
    slug: "/",
  },
  {
    name: "Projets",
    slug: "/projets",
  },
  {
    name: "Profil",
    slug: "/profil",
  },
  {
    name: "Contact",
    slug: "/contact",
  },
];

export default function BurgerMenu({ isOpen, setIsOpen }: IBurgerMenu) {
  return (
    <>
      {/* Button Burger Menu */}
      <button
        className="bg-white px-2 py-1 rounded-lg lg:hidden"
        onClick={() => setIsOpen(true)}
        aria-label="Ouvrir le menu mobile"
      >
        <LunchDining fontSize="medium" className="text-danube-900" />
      </button>

      <nav
        className={`bg-danube-950 flex-col gap-8 pt-16 pb-8 px-4 fixed top-0 w-full h-full transition-all duration-500 ease-in-out z-50 ${
          isOpen ? "left-0" : "left-full"
        }`}
      >
        {/* Close button */}
        <CancelIcon
          fontSize="large"
          className="absolute top-4 right-4 text-danube-50 cursor-pointer"
          onClick={() => setIsOpen(false)}
          aria-label="Fermer le menu mobile"
        />

        <div className="flex flex-col items-end gap-8">
          {/* Headline */}
          <div className="text-danube-50 text-end">
            <span className="text-2xl font-title font-semibold">
              Valentin Grenier
            </span>
            <br />
            <span className="text-lg">Développeur web front-end</span>
          </div>

          <Hr />

          {/* Menu */}
          <ul className="flex flex-col items-end gap-4 font-semibold text-danube-50 rounded-lg">
            {menuItems.map((item: IMenuItem, key) => (
              <li>
                <Link
                  key={key}
                  href={item.slug}
                  className="font-title text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <Hr />

          {/* Buttons */}
          <ButtonContainer position="end">
            <ButtonGithub
              slug={"https://github.com/valentin-grenier"}
              text={"Github"}
              isLightTheme={true}
            />
            <ButtonLinkedIn text={"LinkedIn"} isLightTheme={true} />
          </ButtonContainer>
        </div>
      </nav>
    </>
  );
}
