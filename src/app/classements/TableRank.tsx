'use client';

import useSWR, { Fetcher } from 'swr';

import { FisherRank } from '@/lib/definition';
import { useState } from 'react';

const fetcher: Fetcher<{ data: FisherRank[] }, string> = (
    apiEndPoint: string
) => fetch(apiEndPoint).then((res) => res.json());

export default function TableRank() {
    const [searchTerm, setSearchTerm] = useState('');
    const { data, error } = useSWR('/api/classement', fetcher);

    if (error) return <div>Échec du chargement</div>;
    if (!data) return <div>Chargement...</div>;

    let fisher_rank = data.data.sort((a, b) => a.rank - b.rank);

    const filteredData = fisher_rank.filter((fr) =>
        fr.pseudo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="mt-4 w-full self-center sm:w-1/2 xl:mt-0 xl:w-1/4">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Chercher par pseudo..."
                    className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary_orange"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="h-[calc(100vh-20rem)] overflow-scroll border shadow-lg">
                <table className="min-w-full border-collapse overflow-hidden rounded-lg bg-white shadow-lg">
                    <thead>
                        <tr className="bg-primary_orange text-white">
                            <th className="px-6 py-3 text-left text-sm font-semibold">
                                Rang
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">
                                Pseudo
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">
                                Points
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((fr) => {
                            return (
                                <tr
                                    key={fr.rank}
                                    className="even:bg-tertiary_orange hover:bg-blue-50"
                                >
                                    <td className="px-6 py-3 text-sm text-gray-800">
                                        {fr.rank}
                                    </td>
                                    <td className="px-6 py-3 text-sm text-gray-800">
                                        {fr.pseudo}
                                    </td>
                                    <td className="px-6 py-3 text-sm text-gray-800">
                                        {fr.nbPoint}
                                    </td>
                                </tr>
                            );
                        })}
                        {filteredData.length === 0 && (
                            <tr>
                                <td
                                    colSpan={5}
                                    className="px-6 py-3 text-center text-gray-500"
                                >
                                    Aucun résultat.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
