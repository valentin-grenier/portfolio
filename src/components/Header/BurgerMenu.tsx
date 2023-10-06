import Link from "next/link";
import ButtonGithub from "../Button/ButtonGithub";
import ButtonLinkedIn from "../Button/ButtonLinkedIn";
import CancelIcon from "@mui/icons-material/Cancel";
import { Dispatch, SetStateAction } from "react";
import LunchDining from "@mui/icons-material/LunchDining";

interface IBurgerMenu {
  // isOpen: boolean;
  // setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function BurgerMenu({}: IBurgerMenu) {
  return (
    <>
      {/* Button */}
      <button className="bg-white p-2 rounded-lg lg:hidden">
        <LunchDining fontSize="medium" className="text-danube-900" />
      </button>

      <nav
        className={`bg-danube-950 flex-col gap-8 py-8 px-4 absolute top-0 w-full h-full transition-all duration-500 ease-in-out z-50 hidden`}
      >
        {/* Close button */}
        <CancelIcon
          fontSize="large"
          className="absolute top-4 right-4 text-danube-50 cursor-pointer"
        />

        {/* Headline */}
        <div className="text-danube-50">
          <span className="text-3xl font-title font-semibold">
            Valentin Grenier
          </span>
          <br />
          <span className="text-xl">Développeur web front-end</span>
        </div>

        <hr className="border-2 opacity-10" />

        {/* Menu */}
        <ul className="flex flex-col gap-4 font-semibold text-danube-50 rounded-lg">
          <Link href="/" className="font-title text-xl">
            Accueil
          </Link>
          <Link href="/" className="font-title text-xl">
            Projets
          </Link>
          <Link href="/" className="font-title text-xl">
            Profil
          </Link>
          <Link href="/" className="font-title text-xl">
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
      </nav>
    </>
  );
}
