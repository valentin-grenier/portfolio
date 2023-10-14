import React from 'react';
import { axiosInstance } from "@/axios/axios";
import Section from "@/components/Section/Section";

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
