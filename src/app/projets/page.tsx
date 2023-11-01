import React from "react";

import Section from "@/components/Section/Section";

import Image from "next/image";
import code from "../../../public/images/code.jpg";
import ButtonGithub from "@/components/Button/ButtonGithub";
import ButtonContainer from "@/components/Button/ButtonContainer";
import Filter from "@/components/Filter/Filter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets · Valentin Grenier, Développeur Web Front-End",
  description:
    "Explorez ma galerie de projets web réalisés avec React, NextJS, WordPress et PHP lors de mes projets freelance et personnels.",
};

export default async function Projets() {
  return (
    <>
      <main>
        {/* Introduction */}
        <Section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h1>Mes projets</h1>
            <p>
              Au fil de ma carrière, j'ai eu la chance de participer à une vaste
              gamme de projets, couvrant un large éventail de domaines. Cette
              diversité m'a offert l'opportunité d'acquérir une expérience
              précieuse et polyvalente, renforçant ainsi ma capacité à aborder
              des défis variés et complexes avec confiance.
            </p>
            <ButtonContainer className="justify-center lg:justify-start">
              <ButtonGithub
                slug={"https://github.com/valentin-grenier"}
                text={"Mes projets sur GitHub"}
              />
            </ButtonContainer>
          </div>
          <div className="hidden lg:block h-full relative">
            <Image
              src={code}
              alt={"code"}
              className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-2xl"
              width={1920}
              height={1280}
              priority
              placeholder="blur"
            />
          </div>
        </Section>

        {/* Projects grid */}
        <Section>
          <Filter />
        </Section>
      </main>
    </>
  );
}
