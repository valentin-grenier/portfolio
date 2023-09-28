import Link from "next/link";
import ButtonGithub from "../Button/ButtonGithub";
import ButtonLinkedIn from "../Button/ButtonLinkedIn";
import CancelIcon from "@mui/icons-material/Cancel";
import { Dispatch, SetStateAction } from "react";

interface IBurgerMenu {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function BurgerMenu({ isOpen, setIsOpen }: IBurgerMenu) {
  return (
    <nav
      className={`bg-danube-950 flex flex-col gap-8 py-8 px-4 absolute top-0 w-full h-full transition-all duration-500 ease-in-out z-50 ${
        isOpen ? " right-0" : "-right-full"
      }`}
    >
      {/* Close button */}
      <CancelIcon
        fontSize="large"
        className="absolute top-4 right-4 text-danube-50 cursor-pointer"
        onClick={() => setIsOpen(false)}
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
  );
}
