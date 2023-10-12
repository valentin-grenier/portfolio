interface ISuccessMessage {
  text: string;
}

export default function SuccessMessage({ text }: ISuccessMessage) {
  return (
    <div className="bg-danube-200 w-fit mx-auto h-fit  px-8 py-4 rounded-lg">
      <p className="font-bold text-danube-800 text-center">{text}</p>
    </div>
  );
}
