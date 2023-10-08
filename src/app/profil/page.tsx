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
import ButtonContainer from "@/components/Button/ButtonContainer";
import ButtonLink from "@/components/Button/ButtonLink";
import ButtonLinkedIn from "@/components/Button/ButtonLinkedIn";

export default function Profile() {
  return (
    <>
      <Header />
      <Section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="h-64 lg:h-96 overflow-hidden rounded-2xl relative order-last md:order-first">
          <Image
            src={valPetit}
            alt={"Valentin Grenier enfant"}
            className="absolute bottom-0"
            priority
          />
        </div>
        <div>
          <h1 className="text-center md:text-left">A propos</h1>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="h-64 md:h-80 lg:h-96 overflow-hidden rounded-2xl md:order-last relative">
            <Image
              src={valGuadeloupe}
              alt={"Valentin Grenier en Guadeloupe"}
              className="absolute -bottom-24 md:-bottom-64 lg:-bottom-40"
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
        <div className="mb-8">
          <h2 className="text-center mb-8">Mes compétences transverses</h2>
          <p className=" w-full lg:w-3/4 lg:mx-auto text-left">
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
        <div className="flex flex-col w-full xl:w-2/3">
          <CardExperience
            title={"Titre Professionnel Développeur web et web mobile"}
            date={"2023"}
            school={"École O'clock"}
            company={""}
            text={
              "J'ai décidé de rejoindre l'école O'clock pour renforcer mes compétences acquises lors de mes années en freelance. Pendant six mois, dans un format condensé, j'ai revu les bases du développement web et j'ai appris à créer des sites et applications web complexes et structurés."
            }
          />
          <CardExperience
            title={"Développeur WordPress & Web Designer Freelance"}
            date={"2018 - Présent"}
            school={""}
            company={"Studio Val"}
            text={
              "Studio Val, c'est le nom que j'ai donné à mon entreprise. Au fil des années, j'ai appris le développement web en autodidacte pour finalement me lancer en freelance dès que j'en ai eu l'occasion. J'ai tout d'abord commencé en parallèle de mes études en management et communication, puis j'ai consacré 100% de mon temps pour développer ce projet une fois mes études terminées. Avec Studio Val, je propose la création, la refonte, et l'actualisation et la maintenance de tout site WordPress. Ayant un attrait pour le design, je propose également à mes clients de maquetter leur futur site avec un design moderne et à l'image de leur entreprise, ce qui me permet de proposer une offre complète."
            }
          />
          <CardExperience
            title={"Chef de projet digital en alternance"}
            date={"2019 - 2021"}
            school={"Digital Campus Toulouse"}
            company={"Atchik"}
            text={
              "J’ai accompagné Atchik, une entreprise de modération en ligne, sur plusieurs projets de communication : gestion des réseaux sociaux, actualisation du site WordPress, rédaction d’articles de blog et optimisation du référencement naturel et payant (SEO/SEA). J’ai également participé à l’évolution de la plateforme interne de modération en proposant une refonte visuelle et une meilleure expérience utilisateur (interview des utilisateurs de l’outil, maquettage et prototypage)."
            }
          />
          <CardExperience
            title={"Bachelor en Management - Cursus Full English"}
            date={"2016 - 2019"}
            school={"TBS Toulouse / TBS Barcelona"}
            company={""}
            text={
              "Mon entrée dans le monde des études supérieures a débuté par des études en management. Voulant toujours plus de défi, j'ai rejoint la filière \"English Track\" afin de suivre l'intégralité de mes cours en anglais, dès la sortie du lycée. Durant ces trois années, j'ai eu la chance de pouvoir habiter à Bruxelles et de suivre la moitié de mon cursus sur le campus de TBS Barcelone. Je suis donc très à l'aise avec l'anglais (un peu plus qu'avec l'espagnol, j'avoue). J'ai d'ailleurs obtenu le score de 895/990 au TOEIC en 2019."
            }
          />
          <CardExperience
            title={""}
            date={""}
            school={""}
            company={""}
            text={
              "J'ai aussi fait beaucoup de petits boulots, comme voiturier, convoyeur automobile, réceptionniste, coursier, … Mais si vous voulez en savoir plus, je vous donne rendez-vous sur mon profil LinkedIn !"
            }
          />
          <ButtonContainer>
            <ButtonLink title={"Me contacter"} slug={"/contact"} />
            <ButtonLinkedIn text={"Mon profil"} />
          </ButtonContainer>
        </div>
      </Section>
      <Footer />
    </>
  );
}