'use client';

import useSWR, { Fetcher } from 'swr';

import { FishItem, getSexeEnum } from '@/lib/definition';
import { DonutChart } from '@/components/ClassementGraph/DonutChart';

const fetcher: Fetcher<{ data: FishItem[] }, string> = (apiEndPoint: string) =>
    fetch(apiEndPoint).then((res) => res.json());

export default function SexChart() {
    const { data, error } = useSWR('/api/fish_data', fetcher);

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;
    if (data.data.length === 0) return <div>No data to show</div>;

    let fish_items = data.data;
    let counts: { [id: string]: number } = {};

    fish_items.forEach((fi) => {
        const gen_sex = getSexeEnum(fi.sexe);

        if (!counts[gen_sex]) {
            counts[gen_sex] = 0;
        }
        counts[gen_sex] += 1;
    });

    return (
        <div className="flex flex-col">
            <DonutChart data={counts} />
            <h1 className="my-2 text-center text-lg font-bold sm:text-2xl">
                Donut du nombre d'individus
            </h1>
        </div>
    );
}
