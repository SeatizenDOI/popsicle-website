import type { Metadata } from 'next';
import ChartNav from '@/app/classements/ChartNav';
import TableRank from '@/app/classements/TableRank';

export const metadata: Metadata = {
    title: 'Classement',
    description: 'Classement et statistiques des participants',
};

export default async function Page() {
    return (
        <div className="flex flex-col">
            <TableRank />
            <ChartNav />
        </div>
    );
}
