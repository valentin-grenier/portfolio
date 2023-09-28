import Image from "next/image";
import logoReactLight from "../../public/images/svg/reactLight.svg";
import logoWordPressLight from "../../public/images/svg/wordpressLight.svg";
import profilePicture from "../../public/images/pdp_val_transp.png";

import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Block from "./components/Block/Block";
import { profile } from "console";
import Skills from "./components/Skills/Skills";

export default function App() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <div className="bg-gradient-blue text-center text-light mx-2 p-4 rounded-xl h-80 flex flex-col justify-center relative overflow-hidden">
          <h1 className="text-3xl mb-6 z-10">Valentin Grenier, enchanté !</h1>
          <p className="font-title font-medium text-lg">
            Développeur web front-end spécialisé sur{" "}
            <strong className="text-danube-300">React</strong> et{" "}
            <strong className="text-danube-300">WordPress</strong>
          </p>

          <Image
            src={logoReactLight}
            alt="logo react"
            className="absolute -top-8 -right-[80px] w-40 animate-rotate opacity-50 grayscale"
          />

          <Image
            src={logoWordPressLight}
            alt="logo WordPress"
            className="absolute -bottom-[48px] -left-12 opacity-50 w-32 animate-rotate grayscale"
          />
        </div>

        {/* Data */}
        <Section className="flex flex-col gap-4 justify-center">
          <div className="text-center">
            <p className="font-title font-semibold text-lg">
              <strong className="text-2xl">+15 </strong>
              <br /> sites conçus
            </p>
          </div>
          <div className="text-center">
            <p className="font-title font-semibold text-lg">
              <strong className="text-2xl">+30 </strong>
              <br /> entreprises
              <br /> accompagnées
            </p>
          </div>
          <div className="text-center">
            <p className="font-title font-semibold text-lg">
              <strong className="text-2xl">+5 </strong>
              <br /> années en freelance
            </p>
          </div>
        </Section>

        {/* Introduction */}
        <Section>
          <Block
            image={<Image src={profilePicture} alt="photo Valentin Grenier" />}
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
              web.
            </p>
            <p>
              Plutôt que de créer un CV basique en HTML et CSS, j’ai choisi une
              approche différente et qui reflète ma personnalité :{" "}
              <strong>un site web soigné et créatif</strong>.
            </p>
          </Block>
        </Section>

        {/* Mon savoir-faire */}
        {/* <Section>
          <h2 className="text-center">Mon savoir-faire</h2>

          <Skills
            title="Front-end"
            text="Je suis passionné par la création d'interfaces modernes, élégantes et axées sur l'expérience utilisateur."
            images={}
          />
        </Section> */}
      </main>
    </>
  );
}
