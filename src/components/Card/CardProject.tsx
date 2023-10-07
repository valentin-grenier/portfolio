import Link from "next/link";

interface ICardProject {
  image: string;
  tags: string[];
  className?: string;
  slug: string;
}

export default function CardProject({
  image,
  tags,
  className,
  slug,
}: ICardProject) {
  return (
    <Link href={slug}>
      <div
        className={`w-auto h-72 md:h-80 bg-no-repeat bg-cover rounded-2xl relative ${className}`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {tags.map((item, key) => (
            <span
              key={key}
              className="text-xs font-title font-semibold bg-danube-50 py-1 px-2 rounded-xl"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
