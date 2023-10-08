interface IForm {
  children: React.ReactNode;
}

export default function Form({ children }: IForm) {
  return <form className="flex flex-col gap-6">{children}</form>;
}
