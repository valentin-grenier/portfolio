import Image from "next/image";

interface ICardTechnology {
  logo: string;
  title: string;
}

export default function CardTechnology({ logo, title }: ICardTechnology) {
  return (
    <div className="bg-white flex flex-col gap-2 items-center w-fit p-2 rounded-xl">
      <Image
        src={logo}
        alt={"logo"}
        className="w-16 saturate-0 lg:hover:saturate-100 transition-all"
      />
      <span>{title}</span>
    </div>
  );
}