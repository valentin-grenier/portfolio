"use client";

import { axiosInstanceContact } from "@/axios/axios";
import { useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import ButtonSubmit from "../Button/ButtonSubmit";
import Loader from "../Loader/Loader";

export default function Form() {
  // States
  const [error, setError] = useState(false);
  const [loading, isLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const target = event.currentTarget;
    const formData = new FormData(target);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    // Reset error message
    setError(false);

    // Display loader
    isLoading(true);

    // Send
    const res = await axiosInstanceContact.post("", formData, config);

    if (res.data.status === "validation_failed") {
      setError(true);
      isLoading(false);
    }
  }
  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <Input
        label={"Votre nom"}
        type={"text"}
        name={"your-name"}
        placeholder={"ex : Antoine Dupont"}
      />
      <Input
        label={"Votre adresse email"}
        type={"email"}
        name={"your-email"}
        placeholder={"ex : ad9@stadetoulousain.fr"}
      />
      <Input
        label={"Objet de votre demande"}
        type={"text"}
        name={"your-subject"}
        placeholder={"ex : Travaillons ensemble !"}
      />
      <Textarea
        label={"Votre message"}
        rows={4}
        placeholder={"ex : On prend un café ?"}
        name={"your-message"}
      />

      <span>{error && "Il y a une erreur dans le formulaire"}</span>

      {loading ? <Loader /> : <ButtonSubmit text="Envoyer" />}
    </form>
  );
}
