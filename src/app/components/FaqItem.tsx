'use client';

import { useState } from "react";

export default function FaqItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);



    return (
        <div className="border-t border-gray-300">
            <button
                className="w-full flex flex-row justify-between py-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2 className="text-lg font-semibold text-blue-600">{question}</h2>

                <svg
                    className={`h-6 w-6 text-gray-600 transform transition-transform ${isOpen ? "rotate-90" : "rotate-0"}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>

            </button>
            {isOpen && <p className="pl-4 py-2 text-gray-700">{answer}</p>}
        </div>
    );
};