import Link from "next/link";

interface IButtonLink {
  title: string;
  slug: string;
  isExternal?: boolean;
}

export default function ButtonLink({ title, slug, isExternal }: IButtonLink) {
  return (
    <Link
      href={slug}
      target={isExternal ? "_blank" : "_self"}
      className="bg-danube-800 text-danube-50 rounded-lg font-title font-semibold text-md px-4 py-2"
    >
      {title}
    </Link>
  );
}
