import Section from "@/components/Section/Section";

import Image from "next/image";
import code from "../../../public/images/code.jpg";
import ButtonGithub from "@/components/Button/ButtonGithub";
import ButtonContainer from "@/components/Button/ButtonContainer";
import Filter from "@/components/Filter/Filter";
import CardProject from "@/components/Card/CardProject";
import { axiosInstance } from "@/axios/axios";

interface ICardProject {
  id: number;
  acf: {
    thumbnail: {
      url: string;
      alt: string;
    };
    stacks: string[];
  };
}

async function getData() {
  try {
    const res = await axiosInstance.get(
      "projects?acf_format=standard&_fields=id,title,acf.stacks,acf.thumbnail.url,acf.thumbnail.alt"
    );

    if (!res) {
      throw new Error("Failed fetching data from backend");
    }

    const data = await res.data;

    return data;
  } catch (error) {
    console.error("API error:", error);
  }
}

export default async function Projets() {
  const data = await getData();

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
            />
          </div>
        </Section>

        {/* Projects grid */}
        <Section>
          <Filter />
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data.map((item: ICardProject) => (
              <CardProject
                image={item.acf.thumbnail.url}
                tags={item.acf.stacks.slice(0, 2)}
                slug={`projets/${item.id}`}
                key={item.id}
              />
            ))}
          </div>
        </Section>
      </main>
    </>
  );
}
