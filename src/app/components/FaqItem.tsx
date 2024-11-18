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
        <div className="bg-primary_grey my-2 rounded-lg">
            <button
                className="flex w-full flex-row justify-between py-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2 className="px-8 py-2 text-2xl font-semibold">{question}</h2>

                <svg
                    className={`h-12 w-12 transform transition-transform ${isOpen ? 'rotate-90' : 'rotate-0'}`}
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
                <p className="bg-secondary_grey px-8 py-8 text-justify">
                    {answer}
                </p>
            )}
        </div>
    );
}
