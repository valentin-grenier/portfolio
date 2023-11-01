import ButtonContainer from "@/components/Button/ButtonContainer";
import ButtonLink from "@/components/Button/ButtonLink";
import LottieAnimation from "@/components/LottieAnimation/LottieAnimation";
import Section from "@/components/Section/Section";

export default function NotFound() {
  const lottie =
    "https://lottie.host/92e61ee5-2557-409e-b9a7-752f74072c80/EA2MjWyfzf.json";

  return (
    <Section className="text-center lg:py-4">
      <LottieAnimation lottie={lottie} />
      <h1 className="text-3xl">
        Oh non !<br /> <strong>C'est cassé !</strong>
      </h1>
      <p>
        Il semblerait que Philou ait tout débranché.
        <br /> Sinon, la page que vous recherchez n'existe pas.
      </p>
      <ButtonContainer position="center">
        <ButtonLink title={"Revenir à l'accueil"} slug={"/"} />
      </ButtonContainer>
    </Section>
  );
}
