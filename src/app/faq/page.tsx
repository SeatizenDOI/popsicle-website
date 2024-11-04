import FaqItem from '@/app/components/FaqItem';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'FAQ',
    description: 'Foires aux questions',
};

export default function FaqPage() {
    const faqData = [
        {
            question: 'What is Next.js?',
            answer: 'Next.js is a React framework...',
        },
        {
            question: 'How do I create a page?',
            answer: 'Use the pages directory...',
        },
        // Add more questions and answers as needed
    ];

    return (
        <div className="mx-auto max-w-7xl p-4">
            <h1 className="mb-8 text-center text-2xl font-bold">
                Foires aux questions
            </h1>
            {faqData.map((item, index) => (
                <FaqItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                />
            ))}
        </div>
    );
}
