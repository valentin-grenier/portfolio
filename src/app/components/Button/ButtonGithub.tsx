import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";

interface IButtonGithub {
  slug: string;
  text: string;
  isLightTheme: boolean;
}

export default function ButtonGithub({
  slug,
  text,
  isLightTheme,
}: IButtonGithub) {
  // Switching colors depending on the button theme
  const themeColor = isLightTheme
    ? "bg-danube-50 text-danube-950"
    : "bg-[#333333] text-danube-50";

  return (
    <div className={`${themeColor} w-fit px-4 py-2 rounded-lg `}>
      <Link
        href={slug}
        className={"flex items-center font-title font-semibold text-md"}
        target="_blank"
      >
        <GitHubIcon
          fontSize="medium"
          className={`${
            isLightTheme ? "text-danube-950" : "text-danube-50"
          } mr-1`}
        />
        {text}
      </Link>
    </div>
  );
}
