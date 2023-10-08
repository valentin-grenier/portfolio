import ButtonContainer from "@/components/Button/ButtonContainer";
import ButtonGithub from "@/components/Button/ButtonGithub";
import ButtonLink from "@/components/Button/ButtonLink";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Section from "@/components/Section/Section";
import Image from "next/image";
import code from "../../../../public/images/code.jpg";
import logo from "../../../../public/images/svg/reactLight.svg";
import CardTechnology from "@/components/Card/CardTechnology";

export default function Project() {
  return (
    <>
      <main className="[&>*:first-child]:pt-4">
        {/* Introduction */}
        <Section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-center md:text-left">Codit</h1>
            <p>
              Le projet Codit est issu d'une formation chez O'Clock. Il s'agit
              d'une plateforme de présentation de projets et de code pour les
              développeurs. Cette plateforme a été conçue pour faciliter la mise
              en avant des réalisations des développeurs et promouvoir la
              collaboration au sein de la communauté de développeurs.
            </p>
            <ButtonContainer className="justify-center lg:justify-start flex-row">
              <ButtonGithub
                slug={"https://github.com/valentin-grenier"}
                text={"Voir le code"}
              />
              <ButtonLink
                title={"Voir le site"}
                slug={"#"}
                isExternal
                hasExternalIcon
              />
            </ButtonContainer>
          </div>
          <div className="flex items-center">
            <Image src={code} alt={"code"} className="rounded-2xl" />
          </div>
        </Section>

        <Section>
          <h2>Quelques mots sur le projet</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <Image
              src={code}
              alt={"code"}
              className="rounded-2xl order-last lg:order-first"
            />
            <div>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti et fugit ipsa dolore dolorum perferendis dignissimos
                velit, eligendi laboriosam ullam voluptate tempore cupiditate
                nam, obcaecati id magni vitae minima perspiciatis optio
                distinctio sit, neque mollitia voluptatibus necessitatibus!
                Obcaecati est, nemo libero alias vel suscipit vero illo neque,
                et ipsa veniam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti et fugit ipsa dolore dolorum perferendis dignissimos
                velit, eligendi laboriosam ullam voluptate tempore cupiditate
                nam, obcaecati id magni vitae minima perspiciatis optio
                distinctio sit, neque mollitia voluptatibus necessitatibus!
                Obcaecati est, nemo libero alias vel suscipit vero illo neque,
                et ipsa veniam.
              </p>
            </div>
          </div>
        </Section>

        <Section>
          <h2 className="text-center">Technologies utilisées</h2>

          <div className="flex flex-wrap justify-center gap-8 my-8">
            <CardTechnology logo={logo} title={"React"} />
            <CardTechnology logo={logo} title={"Redux"} />
            <CardTechnology logo={logo} title={"TypeScript"} />
            <CardTechnology logo={logo} title={"Tailwind CSS"} />
            <CardTechnology logo={logo} title={"Symfony"} />
          </div>

          <ButtonContainer position="center">
            <ButtonLink title={"Revenir aux projets"} slug={"/projets"} />
          </ButtonContainer>
        </Section>
      </main>
    </>
  );
}
