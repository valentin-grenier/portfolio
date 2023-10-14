import React from 'react';

interface ISuccessMessage {
  text: string;
}

export default function SuccessMessage({ text }: ISuccessMessage) {
  return (
    <div>
      <span>{text}</span>
    </div>
  );
}
