import React from 'react';

interface IButtonSubmit {
  text: string;
  disabled: boolean;
}

export default function ButtonSubmit({ text, disabled }: IButtonSubmit) {
  return (
    <button
      disabled={disabled}
      className="bg-danube-800 lg:hover:bg-danube-600 disabled:bg-danube-300 lg:disabled:hover:bg-danube-300 text-danube-50 rounded-lg font-title font-semibold text-md px-4 py-2 w-fit transition-colors"
    >
      {text}
    </button>
  );
}
