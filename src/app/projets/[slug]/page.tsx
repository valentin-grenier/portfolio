import React from "react";

import ButtonContainer from "@/components/Button/ButtonContainer";
import ButtonGithub from "@/components/Button/ButtonGithub";
import ButtonLink from "@/components/Button/ButtonLink";

import Section from "@/components/Section/Section";
import Image from "next/image";
import CardTechnology from "@/components/Card/CardTechnology";
import { axiosInstance } from "@/axios/axios";
import axios from "axios";

async function getData(slug: string) {
  try {
    const res = await axiosInstance.get(
      `projects?slug=${slug}&acf_format=standard&_fields=id,title,acf`
    );

    if (res.status !== 200) {
      throw new Error("Failed fetching data from backend");
    }

    const data = await res.data;

    return data;
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
}

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const data = await getData(slug);
  const project = data[0];
  const projectContent = await project.acf;

  return (
    <>
      <main className="[&>*:first-child]:pt-4">
        {/* Introduction */}
        <Section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1
              className="text-center md:text-left leading-none"
              dangerouslySetInnerHTML={{ __html: project.title.rendered }}
            ></h1>
            <div
              dangerouslySetInnerHTML={{ __html: projectContent.introduction }}
            />
            <ButtonContainer
              position="center"
              direction="row"
              className="lg:justify-start"
            >
              {projectContent.github_link && (
                <ButtonGithub
                  slug={projectContent.github_link}
                  text={"Voir le code"}
                />
              )}
              {projectContent.site_link ? (
                <ButtonLink
                  title={"Voir le site"}
                  slug={projectContent.site_link}
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
              src={projectContent.main_image.url}
              alt={projectContent.main_image.alt}
              className="rounded-2xl w-full"
              width={1920}
              height={1080}
              priority
            />
          </div>
        </Section>
        <Section>
          <h2>Quelques mots sur le projet</h2>
          {projectContent.image.url ? (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <Image
                  src={projectContent.image.url}
                  alt={projectContent.main_image.alt}
                  className="rounded-2xl order-last lg:order-first"
                  layout="responsive"
                  width={450}
                  height={600}
                />
                <div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: projectContent.description,
                    }}
                  />
                </div>
              </div>
            </>
          ) : (
            <div
              dangerouslySetInnerHTML={{ __html: projectContent.description }}
            />
          )}
        </Section>
        <Section>
          <h2 className="text-center">Technologies utilisées</h2>
          <div className="flex flex-wrap justify-center gap-8 my-8">
            {projectContent.stacks.map((item: string, key: number) => (
              <CardTechnology title={item} key={key} />
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
