import ButtonContainer from "@/components/Button/ButtonContainer";
import ButtonGithub from "@/components/Button/ButtonGithub";
import ButtonLink from "@/components/Button/ButtonLink";

import Section from "@/components/Section/Section";
import Image from "next/image";
import logo from "../../../../public/images/svg/reactLight.svg";
import CardTechnology from "@/components/Card/CardTechnology";
import { axiosInstance } from "@/axios/axios";

async function getData(id: string) {
  try {
    const res = await axiosInstance.get(
      `projects/${id}?acf_format=standard&_fields=id,title,acf`
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

export default async function Project({ params }: { params: { id: string } }) {
  const data = await getData(params.id);
  const content = data.acf;

  return (
    <>
      <main className="[&>*:first-child]:pt-4">
        {/* Introduction */}
        <Section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1
              className="text-center md:text-left leading-none"
              dangerouslySetInnerHTML={{ __html: data.title.rendered }}
            ></h1>
            <div dangerouslySetInnerHTML={{ __html: content.introduction }} />
            <ButtonContainer className="justify-center lg:justify-start flex-row">
              {content.github_link && (
                <ButtonGithub
                  slug={content.github_link}
                  text={"Voir le code"}
                />
              )}

              {content.site_link ? (
                <ButtonLink
                  title={"Voir le site"}
                  slug={content.site_link}
                  isExternal
                  hasExternalIcon
                />
              ) : (
                <span className="font-semibold text-danube-accent">
                  En cours de développement
                </span>
              )}
            </ButtonContainer>
          </div>
          <div className="flex items-center">
            <Image
              src={content.main_image.url}
              alt={content.main_image.alt}
              className="rounded-2xl"
              layout="responsive"
              width={450}
              height={600}
            />
          </div>
        </Section>

        <Section>
          <h2>Quelques mots sur le projet</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <Image
              src={content.image.url}
              alt={content.main_image.alt}
              className="rounded-2xl order-last lg:order-first"
              layout="responsive"
              width={450}
              height={600}
            />
            <div>
              <div dangerouslySetInnerHTML={{ __html: content.description }} />
            </div>
          </div>
        </Section>

        <Section>
          <h2 className="text-center">Technologies utilisées</h2>
          <div className="flex flex-wrap justify-center gap-8 my-8">
            {content.stacks.map((item: string, key: number) => (
              <CardTechnology logo={logo} title={item} key={key} />
            ))}
          </div>

          <ButtonContainer position="center">
            <ButtonLink title={"Revenir aux projets"} slug={"/projets"} />
          </ButtonContainer>
        </Section>
      </main>
    </>
  );
}
