import Link from "next/link";

interface IButtonLink {
  title: string;
  slug: string;
  isExternal?: boolean;
}

export default function ButtonLink({ title, slug, isExternal }: IButtonLink) {
  return (
    <div className="bg-danube-800 text-danube-50 w-fit mx-auto mt-8 px-4 py-2 rounded-lg">
      <Link
        href={slug}
        target={isExternal ? "_blank" : "_self"}
        className="font-title font-semibold text-md"
      >
        {title}
      </Link>
    </div>
  );
}
