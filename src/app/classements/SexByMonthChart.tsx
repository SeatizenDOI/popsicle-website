'use client';

import useSWR, { Fetcher } from 'swr';

import { FishItem } from '@/lib/definition';
import {
    StackHistoChart,
    SexByMonthItem,
} from '@/components/ClassementGraph/StackHistoChart';
import { months } from '@/lib/data';

const fetcher: Fetcher<{ data: FishItem[] }, string> = (apiEndPoint: string) =>
    fetch(apiEndPoint).then((res) => res.json());

export default function SexByMonthChart() {
    const { data, error } = useSWR('/api/fish_data', fetcher);

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    let fish_items = data.data;
    let month_data: SexByMonthItem[] = [];

    for (const [abr, full] of Object.entries(months)) {
        const tmp = fish_items.filter((fi) => fi.monthCapture === abr);
        month_data.push({
            month: full,
            M: tmp.filter((fi) => fi.sexe === 'Mâle').length,
            F: tmp.filter((fi) => fi.sexe === 'Femelle').length,
            Ind: tmp.filter((fi) => fi.sexe === 'Ind').length,
        });
    }

    return (
        <StackHistoChart
            data={month_data}
            x_title="Mois"
            y_title="Nombre d'individus"
        />
    );
}
