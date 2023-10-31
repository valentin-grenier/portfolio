import React from "react";
import { axiosInstance } from "@/axios/axios";
import Section from "@/components/Section/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales · Valentin Grenier, Développeur Web Front-End",
  description:
    "Consultez les informations légales et la politique de confidentialité de mon site web. Vos données sont entre de bonnes mains.",
};

async function getData() {
  try {
    const res = await axiosInstance.get(
      "pages/6?acf_format=standard&_fields=title.rendered,content.rendered"
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

export default async function LegalNotice() {
  const data = await getData();
  const title = data.title.rendered;
  const content = data.content.rendered;

  return (
    <>
      <Section>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Section>
    </>
  );
}
