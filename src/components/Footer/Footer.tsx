import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row md:justify-between my-8 px-4">
      <div className="mb-8 md:mb-0">
        <p className="flex flex-col items-start font-title font-semibold text-center">
          <span>Créé avec passion à{" "}<strong className="text-danube-accent">Toulouse</strong></span>
          <span>2018 - {new Date().getFullYear()}</span>
        </p>
      </div>
      <div>
        <nav className="flex gap-4 justify-center">
          <Link
            className="font-title font-semibold transition-all relative bottom-0 lg:hover:bottom-1"
            href="https://studio-val.fr"
          >
            <strong>Studio Val</strong>
          </Link>
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
