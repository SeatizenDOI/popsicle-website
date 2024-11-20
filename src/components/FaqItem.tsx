'use client';

import { useState } from 'react';

export default function FaqItem({
    question,
    answer,
}: {
    question: string;
    answer: string;
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-secondary_orange my-2 rounded-2xl">
            <button
                className="flex w-full flex-row justify-between py-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2 className="px-8 py-2 text-sm font-semibold sm:text-2xl">
                    {question}
                </h2>

                <svg
                    className={`mr-8 h-10 w-10 transform transition-transform ${isOpen ? 'rotate-0' : 'rotate-90'}`}
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
            {isOpen && (
                <p className="bg-tertiary_orange rounded-b-2xl px-8 py-8 text-justify">
                    {answer}
                </p>
            )}
        </div>
    );
}
