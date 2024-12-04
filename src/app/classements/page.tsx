import type { Metadata } from 'next';
import ChartNav from '@/app/classements/ChartNav';
import TableRank from '@/app/classements/TableRank';

export const metadata: Metadata = {
    title: 'Classement',
    description: 'Classement et statistiques des participants',
};

export default async function Page() {
    return (
        <div className="">
            <h1 className="mb-2 text-center text-lg font-bold sm:text-4xl">
                Classement
            </h1>
            <div className="m-4 flex flex-col justify-around 2xl:flex-row">
                <TableRank />
                <ChartNav />
            </div>
        </div>
    );
}
