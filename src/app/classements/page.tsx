import type { Metadata } from 'next';
import SexChart from '@/app/classements/SexChart';
import SexByHeightChart from '@/app/classements/SexByHeightChart';
import SexByMonthChart from '@/app/classements/SexByMonthChart';
import HeightWeightChart from '@/app/classements/HeightWeightChart';
import ChartNav from '@/app/classements/ChartNav';

export const metadata: Metadata = {
    title: 'Classement',
    description: 'Classement et statistiques des participants',
};

const charts = {
    sex_chart: SexChart,
    sex_by_month_chart: SexByMonthChart,
    sex_by_height_chart: SexByHeightChart,
    height_weight_chart: HeightWeightChart,
};

export default async function Page() {
    return (
        <div className="flex flex-col">
            <ChartNav />
            {/* <SexChart />
            <SexByHeightChart />
            <SexByMonthChart />
            <HeightWeightChart /> */}
        </div>
    );
}
