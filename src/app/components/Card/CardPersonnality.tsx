interface ICardPersonnality {
  title: string;
  text: string;
}

export default function CardPersonnality({ title, text }: ICardPersonnality) {
  return (
    <div>
      <h3 className="text-danube-accent">{title}</h3>
      <p className="mb-0">{text}</p>
    </div>
  );
}
