import React from 'react';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section/Section";
import Form from "@/components/Form/Form";
import Input from "@/components/Form/Input";
import Textarea from "@/components/Form/Textarea";
import ButtonSubmit from "@/components/Button/ButtonSubmit";
import ButtonLinkedIn from "@/components/Button/ButtonLinkedIn";
import ButtonGithub from "@/components/Button/ButtonGithub";
import ButtonMalt from "@/components/Button/ButtonMalt";
import ButtonContainer from "@/components/Button/ButtonContainer";

export default function Contact() {
  return (
    <>
      <Section>
        <h1>Contact</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="order-last lg:order-first">
            <p className="mb-4">
              Besoin d'échanger avec moi ? C'est avec plaisir que je répondrai à
              votre demande de contact !
            </p>
            <p className="mb-8">
              Vous pouvez aussi me trouver sur les réseaux sociaux.
            </p>
            <ButtonContainer direction="col" position="center">
              <ButtonLinkedIn text={"Mon profil LinkedIn"} />
              <ButtonGithub
                slug={"https://github.com/valentin-grenier"}
                text={"Mon GitHub"}
              />
              <ButtonMalt text={"Mon profil Malt"} />
            </ButtonContainer>
          </div>

          <Form />
        </div>
      </Section>
    </>
  );
}
