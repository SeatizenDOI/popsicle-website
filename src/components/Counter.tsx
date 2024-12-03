'use client';

import useSWR, { Fetcher } from 'swr';

const fetcher: Fetcher<{ fish_number: number }, string> = (
    apiEndPoint: string
) => fetch(apiEndPoint).then((res) => res.json());

export function Counter({ isNavMenu }: { isNavMenu: boolean }) {
    const { data, error } = useSWR('/api/fish_counter', fetcher);

    return (
        <div
            className={` ${
                isNavMenu ? 'flex rounded-lg' : 'hidden sm:flex'
            } flex-row border bg-secondary_red px-4`}
        >
            <h2 className="w-64 px-2 py-4 text-center text-white">
                <span className="text-lg font-extrabold text-primary_orange">
                    {data?.fish_number ?? 0}
                </span>{' '}
                / 1000 mérous échantillonnés
            </h2>
        </div>
    );
}
