'use client';

import useSWR, { Fetcher } from 'swr';

import { FishItem } from '@/lib/definition';
import { DonutChart } from '@/components/ClassementGraph/DonutChart';

const fetcher: Fetcher<{ data: FishItem[] }, string> = (apiEndPoint: string) =>
    fetch(apiEndPoint).then((res) => res.json());

export default function SexChart() {
    const { data, error } = useSWR('/api/fish_data', fetcher);

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    let fish_items = data.data;
    let counts: { [id: string]: number } = {};

    fish_items.forEach((fi) => {
        if (!counts[fi.sexe]) {
            counts[fi.sexe] = 0;
        }
        counts[fi.sexe] += 1;
    });

    return <DonutChart data={counts} />;
}
