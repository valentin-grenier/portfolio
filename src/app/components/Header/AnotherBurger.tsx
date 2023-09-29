import { Dispatch, SetStateAction } from "react";

interface IAnotherBurger {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function AnotherBurger({ isOpen, setIsOpen }: IAnotherBurger) {
  return <div className="bg-danube-950 h-full absolute right-0 top-0"></div>;
}
