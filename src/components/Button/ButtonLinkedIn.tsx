import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

interface IButtonLinkedIn {
  text: string;
  isLightTheme?: boolean;
}

export default function ButtonLinkedIn({
  text,
  isLightTheme,
}: IButtonLinkedIn) {
  // Switching colors depending on the button theme
  const themeColor = isLightTheme
    ? "bg-danube-50 lg:hover-bg-danube-300 text-danube-950"
    : "bg-[#0077B5] lg:hover:bg-[#0076b5d5] text-danube-50";

  return (
    <div
      className={`${themeColor} w-fit px-4 py-2 rounded-lg transition-colors`}
    >
      <Link
        href={"https://www.linkedin.com/in/valentin-grenier/"}
        className={"flex items-center font-title font-semibold text-md"}
        target="_blank"
      >
        <LinkedInIcon
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
