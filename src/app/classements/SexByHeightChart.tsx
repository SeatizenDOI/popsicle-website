'use client';

import useSWR, { Fetcher } from 'swr';

import { FishItem } from '@/lib/definition';
import {
    SexByMonthItem,
    StackHistoChart,
} from '@/components/ClassementGraph/StackHistoChart';

const SIZE_INTERVAL = 4;

const fetcher: Fetcher<{ data: FishItem[] }, string> = (apiEndPoint: string) =>
    fetch(apiEndPoint).then((res) => res.json());

export default function SexByHeightChart() {
    const { data, error } = useSWR('/api/fish_data', fetcher);

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    let fish_items = data.data;
    let size_data: SexByMonthItem[] = [];

    const max_size = Math.max(...fish_items.map((fi) => fi.tailleMesureCm));

    for (let i = 0; i < max_size; i += SIZE_INTERVAL) {
        const tmp = fish_items.filter(
            (fi) =>
                fi.tailleMesureCm >= i && fi.tailleMesureCm < i + SIZE_INTERVAL
        );
        size_data.push({
            month: '[' + i + ',' + (i + 4) + ']',
            M: tmp.filter((fi) => fi.sexe === 'Mâle').length,
            F: tmp.filter((fi) => fi.sexe === 'Femelle').length,
            Ind: tmp.filter((fi) => fi.sexe === 'Ind').length,
        });
    }

    return (
        <StackHistoChart
            data={size_data}
            x_title="Classe de Taille (LF en cm)"
            y_title="Nombre d'individus"
        />
    );
}
