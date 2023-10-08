interface ITextarea {
  label: string;
  name: string;
  rows: number;
  placeholder: string;
}

export default function Textarea({
  label,
  name,
  rows,
  placeholder,
}: ITextarea) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-semibold">
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        rows={rows}
        name={name}
        className="px-4 py-2 rounded-xl"
      ></textarea>
    </div>
  );
}
