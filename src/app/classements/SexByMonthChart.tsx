'use client';

import useSWR, { Fetcher } from 'swr';

import { FishItem, getSexeEnum, Sexe } from '@/lib/definition';
import {
    StackHistoChart,
    StackHistoItem,
} from '@/components/ClassementGraph/StackHistoChart';
import { months } from '@/lib/data';

const fetcher: Fetcher<{ data: FishItem[] }, string> = (apiEndPoint: string) =>
    fetch(apiEndPoint).then((res) => res.json());

export default function SexByMonthChart() {
    const { data, error } = useSWR('/api/fish_data', fetcher);

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;
    if (data.data.length === 0) return <div>No data to show</div>;

    let fish_items = data.data;
    let month_data: StackHistoItem[] = [];

    // For each month, we filter and sort by sexe.
    for (const [abr, full] of Object.entries(months)) {
        const tmp = fish_items.filter((fi) => fi.monthCapture === abr);
        let tmp_month: StackHistoItem = {
            x_label: full,
            values: {},
        };
        tmp_month.values[Sexe.MALE] = tmp.filter(
            (fi) => getSexeEnum(fi.sexe) === Sexe.MALE
        ).length;
        tmp_month.values[Sexe.FEMELLE] = tmp.filter(
            (fi) => getSexeEnum(fi.sexe) === Sexe.FEMELLE
        ).length;
        tmp_month.values[Sexe.IND] = tmp.filter(
            (fi) => getSexeEnum(fi.sexe) === Sexe.IND
        ).length;
        month_data.push(tmp_month);
    }

    return (
        <div className="flex flex-col">
            <StackHistoChart
                data={month_data}
                x_title="Mois"
                y_title="Nombre d'individus"
            />
            <h1 className="my-2 text-center text-lg font-bold sm:text-2xl">
                Nombre d'individus par mois
            </h1>
        </div>
    );
}
