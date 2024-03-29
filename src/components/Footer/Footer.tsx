import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row md:justify-between my-8 px-4">
      <div className="mb-8 md:mb-0">
        <p className="font-title font-semibold text-center">
          Créé avec passion à{" "}
          <strong className="text-danube-accent">Toulouse</strong> - 2023
        </p>
      </div>
      <div>
        <nav className="flex gap-4 justify-center">
          <Link
            className="font-title font-semibold transition-all relative bottom-0 lg:hover:bottom-1"
            href="https://studio-val.fr"
          >
            Studio Val
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
