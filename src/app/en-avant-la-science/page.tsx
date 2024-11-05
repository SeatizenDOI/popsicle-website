import type { Metadata } from 'next';
import EALS_Espece from '@/app/components/EALS_Espece';
import EALS_TaillePoids from '@/app/components/EALS_TaillePoids';
import EALS_Nageoire from '@/app/components/EALS_Nageoire';
import EALS_CKMR from '@/app/components/EALS_CKMR';
import EALS_Tripes from '@/app/components/EALS_Tripes';
import EALS_Etude_GUAM from '@/app/components/EALS_Etude_GUAM';

export const metadata: Metadata = {
    title: 'En avant la science',
    description: 'Explications des techniques scientifiques employées',
};

export default function Page() {
    return (
        <div className="gap-y-10">
            <EALS_Espece />
            <EALS_TaillePoids />
            <EALS_Nageoire />
            <EALS_CKMR />
            <EALS_Tripes />
            <EALS_Etude_GUAM />
        </div>
    );
}
