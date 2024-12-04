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
    if (data.data.length === 0) return <div>No data to show</div>;

    let fish_items = data.data;

    let scatter_data: ScatterData[] = fish_items.map((fi) => {
        return {
            height: fi.tailleMesureCm,
            weight: fi.poidsEntierKg,
            sex: getSexeEnum(fi.sexe),
        };
    });

    return (
        <div className="flex flex-col">
            <ScatterChart data={scatter_data} />
            <h1 className="my-2 text-center text-lg font-bold sm:text-2xl">
                Relation Taille - Poids
            </h1>
        </div>
    );
}
