"use client";

import { axiosInstanceContact } from "@/axios/axios";
import React, { useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import ButtonSubmit from "../Button/ButtonSubmit";
import Loader from "../Loader/Loader";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";

// HCaptcha site key
const siteKey = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || "default-site-key";

export default function Form() {
  // States
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, isLoading] = useState(false);
  const [isValidCaptcha, setIsValidCaptcha] = useState(false);

  // Verify if HCaptcha is valid
  function onVerifyCatpcha(token: string) {
    setIsValidCaptcha(true);
  }

  // Handle form submit
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
    setError("");

    // Display loader
    isLoading(true);

    // If HCaptcha is not valid, don't send form and throw an error
    if (!isValidCaptcha) {
      setError("Êtes-vous un bot ? Validez le captcha 😉");
      isLoading(false);
    } else {
      // Send formData to backend
      const res = await axiosInstanceContact.post("", formData, config);
      isLoading(false);

      if (res.data.status === "validation_failed") {
        setError("Des champs ne sont pas valides ⚠️");
      } else {
        setSuccess(true);
      }
    }
  }
  return (
    <>
      {!success ? (
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

          {loading ? (
            <Loader />
          ) : (
            <>
              <HCaptcha sitekey={siteKey} onVerify={onVerifyCatpcha} />
              {error !== "" && <ErrorMessage text={error} />}
              <ButtonSubmit text="Envoyer" disabled={!isValidCaptcha} />
            </>
          )}
        </form>
      ) : (
        <SuccessMessage text="Votre demande de contact a bien été envoyée. Je reviens vers vous rapidement !" />
      )}
    </>
  );
}
