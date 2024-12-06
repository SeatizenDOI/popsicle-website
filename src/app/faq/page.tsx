import FaqItem from '@/components/FaqItem';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'FAQ',
    description: 'Foires aux questions',
};

export default function FaqPage() {
    const faqData = [
        {
            question: 'Pourquoi devrais-je participer ?',
            answer: 'Vous pêchez des mérous croissant à queue jaune ? Nous aurions besoin de prélever un morceau de nageoire.',
        },
        {
            question: 'Quel poisson nous intéresse ?',
            answer: 'Nous pêchons uniquement le mérou croissant à queue jaune.',
        },
        {
            question: "Quelles sont les sites d'études ?",
            answer: "Les sites d'études sont la Réunion et Mayotte mais le seul site d'échantillonage est la Réunion.",
        },
        {
            question:
                'Quelle est la période du projet de science participative ?',
            answer: 'La période du projet de science participative se déroule du 15 décembre au 15 juin. ',
        },
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
