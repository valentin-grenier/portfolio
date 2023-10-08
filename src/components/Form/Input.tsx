interface IInput {
  label: string;
  type: "number" | "email" | "text";
  name: string;
  placeholder: string;
}

export default function Input({ label, type, name, placeholder }: IInput) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-semibold">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="py-2 px-4 rounded-xl"
      />
    </div>
  );
}
