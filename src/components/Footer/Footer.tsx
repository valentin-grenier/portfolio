import Link from "next/link";
import React from "react";
import ButtonContainer from "../Button/ButtonContainer";
import ButtonLink from "../Button/ButtonLink";
import iconWordPress from '../../../public/images/svg/wordpress.svg';

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row md:justify-between my-8 px-4">
      <div className="mb-8 md:mb-0">
        <p className="flex flex-col items-center font-title font-semibold text-center md:items-start">
          <span>Créé avec passion à{" "}<strong className="text-danube-accent">Toulouse</strong></span>
          <span>2018 - {new Date().getFullYear()}</span>
        </p>
      </div>
      <div>
        <nav className="flex flex-col gap-4 justify-center items-center md:flex-row">
            <ButtonContainer position="center" className="!m-0">
            <ButtonLink
              title="Studio Val"
              slug="https://studio-val.fr"
              isExternal={true}
              icon={<img src={iconWordPress.src} alt="" />}
              />
            </ButtonContainer>
          <Link
            className="font-title font-semibold transition-all relative bottom-0 lg:hover:bottom-1"
            href="/mentions-legales"
          >
            Mentions légales
          </Link>
          <Link
            className="font-title font-semibold transition-all relative bottom-0 lg:hover:bottom-1"
            href="/contact"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
