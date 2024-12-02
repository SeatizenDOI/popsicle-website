'use client';

import useSWR, { Fetcher } from 'swr';
import { FishItem } from '@/lib/definition';
import * as d3 from 'd3';

const fetcher: Fetcher<{ data: FishItem[] }, string> = (apiEndPoint: string) =>
    fetch(apiEndPoint).then((res) => res.json());

function SexGraph() {
    const { data, error } = useSWR('/api/fish_data', fetcher);

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    let fish_items = data.data;
    fish_items.filter((fi) => fi.site === 'Seychelles');

    return (
        <div>
            {fish_items.map((fi) => {
                return (
                    <div>
                        <h1>{fi.espece}</h1>
                        <p>{fi.bateau}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default SexGraph;
