import type { Metadata } from 'next';
import { Species } from '@/app/en-avant-la-science/Species';
import { Tripes } from '@/app/en-avant-la-science/Tripes';
import { Nageoire } from '@/app/en-avant-la-science/Nageoire';
import { HeightAndWeight } from '@/app/en-avant-la-science/HeightAndWeight';
import { Otolithes } from '@/app/en-avant-la-science/Otolithes';

import ScienceItem from '@/components/ScienceItem';

export const metadata: Metadata = {
    title: 'En avant la science',
    description: 'Explications des techniques scientifiques employées',
};

export default function Page() {
    const scienceItem = [
        {
            question: 'Biologie du Grand Queue et du Tire Boure',
            answer: Species,
        },
        {
            question: 'Taille et poids pour les relations biométriques',
            answer: HeightAndWeight,
        },
        {
            question:
                "Les nageoires donnent l'espèce grâce à des analyses génétiques",
            answer: Nageoire,
        },
        {
            question: 'Otolithes pour l’âge et la croissance',
            answer: Otolithes,
        },
        {
            question:
                'Les tripes déterminent le sexe et le stade de maturation du poisson',
            answer: Tripes,
        },
    ];

    return (
        <div className="mx-auto flex max-w-7xl flex-col p-4">
            <h1 className="mb-2 text-center text-lg font-bold sm:text-4xl">
                En Avant La Science
            </h1>
            {scienceItem.map((item, index) => (
                <ScienceItem
                    key={index}
                    question={item.question}
                    answer={item.answer()}
                />
            ))}
        </div>
    );
}
