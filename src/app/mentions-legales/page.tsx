import { axiosInstance } from "@/axios/axios";
import Section from "@/components/Section/Section";

async function getData() {
  const res = await axiosInstance.get("http://localhost:1337/api/legal-notice");

  if (!res) {
    throw new Error("Failed fetching data");
  }

  const data = await res.data;

  return data.data;
}

export default async function LegalNotice() {
  const data = await getData();

  return (
    <>
      <Section>
        <h1>Mentions légales</h1>
        <div dangerouslySetInnerHTML={{ __html: data.attributes.content }} />
      </Section>
    </>
  );
}
