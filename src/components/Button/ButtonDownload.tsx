import React from "react";

interface IButtonDownload {
  text: string;
  disabled: boolean;
}

export default function ButtonDownload({ text, disabled }: IButtonDownload) {
  return (
    <button
      disabled={disabled}
      className="bg-danube-800 lg:hover:bg-danube-600 disabled:bg-danube-300 lg:disabled:hover:bg-danube-300 text-danube-50 rounded-lg font-title font-semibold text-md px-4 py-2 w-fit transition-colors"
    >
      {text}
    </button>
  );
}
