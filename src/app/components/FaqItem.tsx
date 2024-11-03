'use client';

import { useState } from "react";

export default function FaqItem ({ question, answer }: {question: string, answer: string}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-gray-300">
      <button
        className="w-full text-left py-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-semibold text-blue-600">{question}</h2>


      </button>
      {isOpen && <p className="pl-4 py-2 text-gray-700">{answer}</p>}
    </div>
  );
};

 FaqItem;