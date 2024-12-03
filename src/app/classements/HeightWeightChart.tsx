'use client';

import useSWR, { Fetcher } from 'swr';

import { FishItem, getSexeEnum } from '@/lib/definition';
import {
    ScatterChart,
    ScatterData,
} from '@/components/ClassementGraph/ScatterChart';

const fetcher: Fetcher<{ data: FishItem[] }, string> = (apiEndPoint: string) =>
    fetch(apiEndPoint).then((res) => res.json());

export default function HeightWeightChart() {
    const { data, error } = useSWR('/api/fish_data', fetcher);

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    let fish_items = data.data;

    let scatter_data: ScatterData[] = fish_items.map((fi) => {
        return {
            height: fi.tailleMesureCm,
            weight: fi.poidsEntierKg,
            sex: getSexeEnum(fi.sexe),
        };
    });

    return <ScatterChart data={scatter_data} />;
}
