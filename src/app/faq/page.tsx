import FaqItem from '@/components/FaqItem';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'FAQ',
    description: 'Foires aux questions',
};

export default function FaqPage() {
    const faqData = [
        {
            question: 'Pourquoi devrais-je participer?',
            answer: "Participer au projet POPSICLE, c'est contribuer à la préservation de l'avenir de la pêche du Variola Louti en assurant une gestion durable de cette ressource. En partageant vos prises, vous jouez un rôle clé dans une recherche scientifique qui protège votre activité et l'écosystème marin pour les générations futures.",
        },
        {
            question: 'Quel poisson pêchons-nous?',
            answer: 'Dans le cadre du projet POPSICLE, nous pêchons le Croisant queue jaune (Variola louti), une espèce de mérou prisée, essentielle pour les écosystèmes marins et la pêche durable.',
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
