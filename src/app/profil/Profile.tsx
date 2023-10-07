import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section/Section";
import CardSkill from "@/components/Card/CardSkill";
import Image from "next/image";
import valPetit from "../../../public/images/val_petit.jpg";
import valGuadeloupe from "../../../public/images/val_guadeloupe.jpg";
import logoReactLight from "../../../public/images/svg/reactLight.svg";
import logoPHPLight from "../../../public/images/svg/phpLight.svg";
import CardSkillSingle from "@/components/Card/CardSkillSingle";
import CardExperience from "@/components/Card/CardExperience";

export default function Profile() {
  return (
    <>
      <Header />
      <Section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="h-96 overflow-hidden rounded-2xl relative">
          <Image
            src={valPetit}
            alt={"Valentin Grenier enfant"}
            className="absolute bottom-0"
            priority
          />
        </div>
        <div>
          <h1>A propos</h1>
          <p>
            Depuis toujours, l'informatique a été une passion pour moi. Je
            rêvais de devenir développeur et de contribuer à la création de
            projets passionnants. Au fil des années, je me suis constamment
            formé et j'ai acquis de nouvelles compétences, toujours en
            travaillant avec acharnement pour atteindre mon objectif.
          </p>
        </div>
      </Section>

      <Section>
        <h2>Un peu d'histoire</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-96 overflow-hidden rounded-2xl md:order-last relative">
            <Image
              src={valGuadeloupe}
              alt={"Valentin Grenier en Guadeloupe"}
              className="absolute -bottom-40"
              priority
            />
          </div>

          <div>
            <p className="mb-4">
              Avant d'être un développeur, je suis avant tout une personne
              dévouée, rigoureuse et sympathique. Lorsque je ne suis pas devant
              mon ordinateur, je m'occupe en faisant du sport (badminton, surf,
              snowboard), en montant des Lego, en jouant aux jeux vidéos ou bien
              en faisant du bricolage. J'habite à Toulouse et j'adore me balader
              dans les rues de cette ville que j'aime tant.
            </p>
            <p>
              J'ai eu la chance de pouvoir beaucoup voyager dans ma vie et
              d'avoir pu passer une partie de mon enfance à Londres, me mettant
              dans le bain de l'anglais dès mon plus jeune âge. Plus tard, j'ai
              habité à Bruxelles, à Barcelone, et plus récemment en Guadeloupe,
              un pari fou que j'ai eu avec ma copine lorsque nous avions tous
              les deux terminés nos études supérieures.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="mb-8">Mes compétences techniques</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative overflow-hidden">
            <CardSkill
              title="Front-end"
              text="Je suis passionné par la création d'interfaces modernes, élégantes et axées sur l'expérience utilisateur."
            />
            <Image
              src={logoReactLight}
              alt=""
              className="absolute -bottom-8 -right-12 w-32 rotate-[20deg] opacity-25"
            />
          </div>
          <div className="relative overflow-hidden">
            <CardSkill
              title="Back-end"
              text="Je suis passionné par la création d'interfaces modernes, élégantes et axées sur l'expérience utilisateur."
            />
            <Image
              src={logoPHPLight}
              alt=""
              className="absolute -top-8 -right-12 w-32 rotate-[20deg] opacity-25"
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-8">
          <h2 className="mb-8">Mes compétences transverses</h2>
          <p className="w-3/4 mx-auto">
            En plus de mes compétences techniques en développement web, j'ai
            également acquis des compétences transverses qui me permettent de
            travailler efficacement en équipe et de fournir des résultats de
            haute qualité.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CardSkillSingle
            logo={""}
            alt={""}
            title={"WordPress avancé"}
            text={
              "J'ai travaillé avec WordPress pendant de nombreuses années et je suis très à l'aise avec ce CMS. Je peux sans problème développer un site WordPress from scratch, avec un thème sur-mesure ou préconçu, avec Elementor ou avec ACF."
            }
          />
          <CardSkillSingle
            logo={""}
            alt={""}
            title={"Git & GitHub"}
            text={
              "Utiliser un outil de versioning comme Git pour mieux gérer ses projets et son code, c'est quelque chose que j'ai appris chez O'clock. Je suis à l'aise avec les commits, les pull requests et les code reviews."
            }
          />
          <CardSkillSingle
            logo={""}
            alt={""}
            title={"SEO technique"}
            text={
              "J'ai développé une bonne compréhension des facteurs techniques qui ont un impact sur l'indexation des sites web dans les résultats de recherche : optimisation de la délivrabilité des contenus, bons formats d'images, meta-données ..."
            }
          />
          <CardSkillSingle
            logo={""}
            alt={""}
            title={"Environnement Linux"}
            text={
              "Lors de ma formation chez O'clock, j'ai appris à développer sous Linux Ubuntu. Je n'ai donc aucun problème à travailler autant sur Windows, sur MacOs ou sur Linux."
            }
          />
          <CardSkillSingle
            logo={""}
            alt={""}
            title={"Méthode Agile (SCRUM)"}
            text={
              "Toujours chez O'clock, notamment lors des travaux de groupe, nous avons appris à planifier les sprints, à mettre en place des Daily Scrum, et à effectuer des code reviews."
            }
          />
          <CardSkillSingle
            logo={""}
            alt={""}
            title={"Notions d'UX et UI Design"}
            text={
              "J'ai acquis des notions en UX et UI lors de mon master en stratégie digitale, ce qui m'a permis de développer une compréhension approfondie des principes de conception centrée sur l'utilisateur et de la création d'interfaces utilisateur intuitives."
            }
          />
        </div>
      </Section>

      <Section>
        <h2>Mon parcours en quelques mots</h2>
        <div>
          <CardExperience
            title={'Titre Professionnel "Développeur web et web mobile"'}
            date={" Février - Août 2023"}
          />
        </div>
      </Section>
      <Footer />
    </>
  );
}
