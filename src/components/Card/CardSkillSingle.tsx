import Image from "next/image";

interface ICardSkillSingle {
  logo?: string;
  alt?: string;
  title: string;
  text: string;
}

export default function CardSkillSingle({
  logo,
  alt,
  title,
  text,
}: ICardSkillSingle) {
  return (
    <div className="bg-white p-4 rounded-2xl h-fit">
      <div className="flex items-center gap-2 mb-4">
        {/* <Image src={logo} alt={alt} className="w-8 h-8" /> */}
        <h3 className="text-danube-accent lg:text-lg mb-0">{title}</h3>
      </div>
      <p>{text}</p>
    </div>
  );
}
