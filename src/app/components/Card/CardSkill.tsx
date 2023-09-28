import Image from "next/image";
import { ReactElement } from "react";

interface ISkills {
  title: string;
  text: string;
  images?: {
    item: ReactElement;
    key: string;
  };
}

export default function CardSkill({ title, text, images }: ISkills) {
  return (
    <div className="bg-white p-5 rounded-2xl">
      <h3 className="text-danube-accent">{title}</h3>
      <p className="mb-0">{text}</p>
      {/* {images.map((item, key) => {
        <div key={item.id}>
          <Image src={item.src} alt={item.alt} />
        </div>;
      })} */}
    </div>
  );
}
