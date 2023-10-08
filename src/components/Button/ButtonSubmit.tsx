interface IButtonSubmit {
  text: string;
}

export default function ButtonSubmit({ text }: IButtonSubmit) {
  return (
    <button className="bg-danube-800 lg:hover:bg-danube-600 text-danube-50 rounded-lg font-title font-semibold text-md px-4 py-2 w-fit transition-colors">
      {text}
    </button>
  );
}
