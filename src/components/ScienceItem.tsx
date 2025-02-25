'use client';

import { ReactNode, useState } from 'react';

export default function ScienceItem({
    question,
    answer,
}: {
    question: string;
    answer: ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="my-2 rounded-2xl bg-secondary_orange">
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
                <div className="rounded-b-2xl bg-tertiary_orange px-8 py-8 text-justify">
                    {answer}
                </div>
            )}
        </div>
    );
}
