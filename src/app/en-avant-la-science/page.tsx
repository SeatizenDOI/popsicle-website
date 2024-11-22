import type { Metadata } from 'next';
import { Species } from '@/app/en-avant-la-science/Species';
import { EtudeGUAM } from '@/app/en-avant-la-science/EtudeGuam';
import { Tripes } from '@/app/en-avant-la-science/Tripes';
import { Nageoire } from '@/app/en-avant-la-science/Nageoire';
import { HeightAndWeight } from '@/app/en-avant-la-science/HeightAndWeight';
import { Story } from '@/app/en-avant-la-science/Story';
import { Otolithes } from '@/app/en-avant-la-science/Otolithes';
import { CKMR } from '@/app/en-avant-la-science/CKMR';

export const metadata: Metadata = {
    title: 'En avant la science',
    description: 'Explications des techniques scientifiques employées',
};

export default function Page() {
    return (
        <div className="mt-8 flex flex-row">
            <div className="hidden h-fit w-2/12 flex-col border p-6 sm:flex">
                <h2 className="py-2 text-sm font-bold">Espèce</h2>
                <h2 className="py-2 text-sm font-bold">Tripes</h2>
                <h2 className="py-2 text-sm font-bold">Nageoire</h2>
                <h2 className="py-2 text-sm font-bold">Histoire</h2>
                <h2 className="py-2 text-sm font-bold">CKMR</h2>
                <h2 className="py-2 text-sm font-bold">Otolithes</h2>
                <h2 className="py-2 text-sm font-bold">GUAM</h2>
                <h2 className="py-2 text-sm font-bold">
                    Relation Poids Taille
                </h2>
            </div>
            <div>
                <Species />
                <hr className="my-8" />
                <Story />
                <hr className="my-8" />
                <EtudeGUAM />
                <hr className="my-8" />
                <Nageoire />
                <hr className="my-8" />
                <Tripes />
                <hr className="my-8" />
                <HeightAndWeight />
                <hr className="my-8" />
                <Otolithes />
                <hr className="my-8" />
                <CKMR />
            </div>
        </div>
    );
}
