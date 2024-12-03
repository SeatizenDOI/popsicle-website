'use client';

import useSWR, { Fetcher } from 'swr';

import { FisherRank } from '@/lib/definition';

const fetcher: Fetcher<{ data: FisherRank[] }, string> = (
    apiEndPoint: string
) => fetch(apiEndPoint).then((res) => res.json());

export default function TableRank() {
    const { data, error } = useSWR('/api/classement', fetcher);

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    let fisher_rank = data.data;

    return (
        <div className="h-64 w-1/12 overflow-scroll border shadow-lg">
            <table>
                <thead>
                    <tr>
                        <th>Rang</th>
                        <th>Pseudo</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {fisher_rank
                        .sort((a, b) => a.rank - b.rank)
                        .map((fr) => {
                            return (
                                <tr key={fr.rank}>
                                    <td>{fr.rank}</td>
                                    <td>{fr.pseudo}</td>
                                    <td>{fr.nbPoint}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
}
