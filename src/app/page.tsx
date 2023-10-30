import Image from "next/image";
import React from "react";
import logoReactLight from "../../public/images/svg/reactLight.svg";
import logoWordPressLight from "../../public/images/svg/wordpressLight.svg";
import logoPHPLight from "../../public/images/svg/phpLight.svg";
import profilePicture from "../../public/images/pdp_val_transp.png";

import { axiosInstance } from "@/axios/axios";

import Section from "../components/Section/Section";
import Block from "../components/Block/Block";
import CardSkill from "../components/Card/CardSkill";
import CardPersonnality from "../components/Card/CardPersonnality";
import ButtonLink from "../components/Button/ButtonLink";
import Carousel from "../components/Carousel/Carousel";
import ButtonLinkedIn from "../components/Button/ButtonLinkedIn";
import ButtonGithub from "../components/Button/ButtonGithub";
import ButtonContainer from "../components/Button/ButtonContainer";

export default async function Home() {
  const skills = await getSkills();
  const projects = await getProjects();

  return (
    <>
      <main className="overflow-hidden">
        {/* Hero */}
        <Section className="bg-gradient-blue text-center text-light p-4 mx-4 rounded-xl h-72 lg:h-[70vh] xl:max-h-[50vh] flex flex-col justify-center relative overflow-hidden">
          <h1 className="text-3xl text-danube-50 md:text-4xl lg:text-5xl mb-6 lg:mx-auto lg:w-1/2 z-10">
            Valentin Grenier, enchanté&nbsp;!
          </h1>
          <p className="font-title font-medium text-lg lg:mx-auto lg:w-1/3 z-10">
            Développeur web front-end spécialisé sur&nbsp;
            <strong className="text-danube-300">React</strong> et&nbsp;
            <strong className="text-danube-300">WordPress</strong>
          </p>

          <Image
            src={logoReactLight}
            alt="logo react"
            className="absolute -top-8 -right-[80px] w-40 md:w-64 animate-rotate"
          />

          <Image
            src={logoWordPressLight}
            alt="logo WordPress"
            className="absolute -bottom-[48px] lg:-bottom-[96px] -left-12 w-32 md:w-48 lg:w-64 animate-rotate"
          />
        </Section>

        {/* Data */}
        <Section className="flex gap-2 md:gap-16 lg:gap-32 justify-between md:justify-center pt-16">
          <div className="text-center">
            <p className="font-title font-semibold text-sm lg:text-lg leading-snug mb-0">
              <strong className="text-xl lg:text-4xl">+15 </strong>
              <br /> sites
              <br /> conçus
            </p>
          </div>
          <div className="text-center">
            <p className="font-title font-semibold text-sm lg:text-lg leading-snug mb-0">
              <strong className="text-xl lg:text-4xl">+30 </strong>
              <br /> entreprises
              <br /> accompagnées
            </p>
          </div>
          <div className="text-center">
            <p className="font-title font-semibold text-sm lg:text-lg leading-snug mb-0">
              <strong className="text-xl lg:text-4xl">+5 </strong>
              <br /> années <br />
              en freelance
            </p>
          </div>
        </Section>

        {/* Introduction */}
        <Section>
          <Block
            image={
              <Image
                src={profilePicture}
                alt="photo Valentin Grenier"
                className="relative lg:absolute left-1/2 -translate-x-1/2 lg:-bottom-4 xl:-bottom-28"
              />
            }
          >
            <h2>
              <strong>Bienvenue</strong> sur mon site personnel
            </h2>
            <p>
              Je m’appelle Valentin et je suis tombé dans le monde du
              développement web en 2018. <strong>Autodidacte</strong> au départ,
              c’est en parallèle de mes études en école de commerce et
              communication que j’ai décidé d’apprendre le développement web,
              tout d’abord sur <strong>WordPress</strong>, avec plus tard
              l'ambition de pouvoir accomplir mon rêve : devenir développeur
              web. Plutôt que de créer un CV basique en HTML et CSS, j’ai choisi
              une approche différente et qui reflète ma personnalité :{" "}
              <strong>un site web soigné et créatif</strong>.
            </p>
          </Block>
        </Section>

        {/* Mon savoir-faire */}
        <Section className="flex flex-col gap-6">
          <h2 className="text-center">Mon savoir-faire</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="relative overflow-hidden lg:col-span-2">
              <CardSkill
                title="Front-end"
                text="Je suis passionné par la création d'interfaces modernes, élégantes et axées sur l'expérience utilisateur."
                images={skills}
                stack="Front"
              />
              <Image
                src={logoReactLight}
                alt="logo React"
                className="absolute -bottom-8 -right-12 w-32 rotate-[20deg] opacity-25"
              />
            </div>
            <div className="relative overflow-hidden">
              <CardSkill
                title="Back-end"
                text="Je maîtrise le développement back-end, me permettant de créer des solutions complètes et fonctionnelles."
                images={skills}
                stack="Back"
              />
              <Image
                src={logoPHPLight}
                alt="logo PHP"
                className="absolute -bottom-8 -right-8 w-28 -rotate-[20deg] opacity-25"
              />
            </div>
            <div className="relative overflow-hidden">
              <CardSkill
                title="Autres compétences"
                text="Je sais intervenir sur un projet en ayant une vision globale de toutes les parties impliquées."
                images={skills}
                stack="Misc"
              />
              <Image
                src={logoWordPressLight}
                alt="logo WordPress"
                className="absolute -bottom-8 -right-12 w-32 rotate-[20deg] opacity-25"
              />
            </div>
          </div>
        </Section>

        {/* Ma personnalité */}
        <Section>
          <h2>Ma personnalité</h2>
          <div className="flex flex-col lg:flex-row gap-12 md:mt-8">
            <CardPersonnality
              title="Passionné et dévoué"
              text="J’adore mon métier et je ne vois pas le temps passer quand je développe des applications web. Cette passion me pousse à toujours rechercher de nouvelles techniques et technologies pour améliorer mes compétences."
            />
            <CardPersonnality
              title="Bon esprit d'équipe"
              text="J’apprécie pouvoir gérer et faire partie d'une équipe, tout comme avec mes clients qui sont mes coéquipiers. Cette collaboration étroite me permet de créer des solutions web encore plus enrichissantes."
            />
            <CardPersonnality
              title="Challengeur"
              text="Je cherche constamment à me dépasser à chaque nouveau projet, et je m'intéresse régulièrement à des sujets inconnus. Cette soif d'apprentissage me motive à rester à la pointe de la technologie."
            />
          </div>
        </Section>

        {/* Mon parcours */}
        <Section>
          <Block width="3/4">
            <h2 className="text-center">Mon parcours</h2>
            <p className="mb-4">
              Mon parcours est plutôt atypique. J’ai commencé mes études
              post-bac dans le domaine du management, puis j’ai obtenu un master
              en communication et stratégie digitale. En parallèle, de mon
              cursus universitaire, je me suis formé en autodidacte sur le
              développement web et plus spécifiquement sur WordPress, avant de
              me lancer en freelance en tant que{" "}
              <strong>développeur WordPress et web designer</strong>.
            </p>
            <p>
              Mais j’ai voulu voir encore plus loin pour travailler sur des
              projets autres que la création et l’actualisation de sites
              WordPress. C’est pourquoi j’ai rejoints l’école O’clock pour une
              formation intensive de 6 mois, afin d’obtenir un{" "}
              <strong>
                Titre Professionnel de Développeur Web et Web Mobile
              </strong>
              , certifiant mes compétences et ma détermination.
            </p>
            <ButtonContainer position="center">
              <ButtonLink
                title={"En savoir plus"}
                slug={"/a-propos#parcours"}
              />
            </ButtonContainer>
          </Block>
        </Section>

        {/* Mes derniers projets */}
        <Section className="px-0">
          <h2 className="px-4">Mes derniers projets</h2>
          <Carousel projects={projects} />
          <ButtonContainer position="center" className="mt-[64px] lg:mt-24">
            <ButtonLink title={"Voir tous mes projets"} slug={"/projets"} />
          </ButtonContainer>
        </Section>

        {/* On en parle ? */}
        <Section>
          <Block width="1/2">
            <h2 className="text-center">On en parle&nbsp;?</h2>
            <p className=" text-center mb-0">
              Faisons connaissance ! Je serai ravi de pouvoir échanger avec vous
              et de discuter d’éventuelles opportunités.
            </p>
            <ButtonContainer position="center" direction="col">
              <ButtonLink
                title={"Contactez-moi"}
                slug={"/contact"}
              />
              <ButtonLinkedIn text={"Mon profil"} />
              <ButtonGithub
                slug={"https://github.com/valentin-grenier"}
                text={"Mes repos"}
              />
            </ButtonContainer>
          </Block>
        </Section>
      </main>
    </>
  );
}

// Get skills data from backend
async function getSkills() {
  try {
    const res = await axiosInstance.get(
      "skill?acf_format=standard&_fields=id,title.rendered,acf.icon.url,acf.icon.alt,acf.stack&order=asc&per_page=100"
    );

    if (!res) {
      throw new Error("Failed fetching data");
    }

    const data = await res.data;

    return data;
  } catch (error) {
    return error;
  }
}

// Get projects data from backend
async function getProjects() {
  try {
    const res = await axiosInstance.get(
      "projects?acf_format=standard&_fields=id,slug,acf.thumbnail.url,acf.thumbnail.alt,acf.stacks&per_page=6"
    );

    if (!res) {
      throw new Error("Failed fetching data");
    }

    const data = await res.data;

    return data;
  } catch (error) {
    return error;
  }
}
