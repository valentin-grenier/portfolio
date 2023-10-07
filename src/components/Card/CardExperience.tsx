import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

interface ICardExperience {
  title: string;
  date: string;
  school: string;
  company: string;
  text: string;
}

export default function CardExperience({
  title,
  date,
  school,
  company,
  text,
}: ICardExperience) {
  return (
    <div className="pl-8 py-6 border-l-4 border-danube-200 relative">
      <span className="absolute top-14 -left-[10px] w-4 h-4 rounded-full bg-danube-accent"></span>
      <div className="bg-white p-6 rounded-2xl h-fit">
        {title !== "" && <h3 className="text-lg md:text-xl">{title}</h3>}

        <div className="flex flex-wrap gap-x-8 gap-y-2 mb-2">
          {school !== "" && (
            <div className="flex items-center gap-2">
              <SchoolIcon htmlColor="#5F77CC" />
              {school}
            </div>
          )}

          {company !== "" && (
            <div className="flex items-center gap-2">
              <WorkIcon htmlColor="#5F77CC" />
              {company}
            </div>
          )}

          {date !== "" && (
            <div className="flex items-center gap-2">
              <AccessTimeIcon htmlColor="#5F77CC" />
              {date}
            </div>
          )}
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}
