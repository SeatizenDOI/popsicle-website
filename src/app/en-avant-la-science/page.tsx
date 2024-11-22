import type { Metadata } from 'next';
import { Species } from '@/app/en-avant-la-science/Species';
import { EtudeGUAM } from '@/app/en-avant-la-science/EtudeGuam';
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
            question:
                'Pourquoi nous voulons récupérer la mesure précise et le poids du poisson ?',
            answer: HeightAndWeight,
        },
        {
            question:
                'Pourquoi nous voulons récupérer un morceau de nageoire ?',
            answer: Nageoire,
        },
        {
            question: 'Otolithes',
            answer: Otolithes,
        },
        {
            question: 'Pourquoi nous voulons récupérer les tripes ?',
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
