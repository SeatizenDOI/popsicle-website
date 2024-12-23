'use client';

import useSWR, { Fetcher } from 'swr';

import { FishItem, getSexeEnum, Sexe } from '@/lib/definition';
import {
    StackHistoItem,
    StackHistoChart,
} from '@/components/ClassementGraph/StackHistoChart';

const SIZE_INTERVAL = 4;

const fetcher: Fetcher<{ data: FishItem[] }, string> = (apiEndPoint: string) =>
    fetch(apiEndPoint).then((res) => res.json());

export default function SexByHeightChart() {
    const { data, error } = useSWR('/api/fish_data', fetcher);

    if (error) return <div>Échec du chargement</div>;
    if (!data) return <div>Chargement...</div>;
    if (data.data.length === 0) return <div>Aucune donnée.</div>;

    let fish_items = data.data;
    let size_data: StackHistoItem[] = [];

    const max_size = Math.max(...fish_items.map((fi) => fi.tailleMesureCm));

    for (let i = 0; i < max_size; i += SIZE_INTERVAL) {
        const tmp = fish_items.filter(
            (fi) =>
                fi.tailleMesureCm >= i && fi.tailleMesureCm < i + SIZE_INTERVAL
        );
        let tmp_size_data: StackHistoItem = {
            x_label: '[' + i + ',' + (i + 4) + ']',
            values: {},
        };
        tmp_size_data.values[Sexe.MALE] = tmp.filter(
            (fi) => getSexeEnum(fi.sexe) === Sexe.MALE
        ).length;
        tmp_size_data.values[Sexe.FEMELLE] = tmp.filter(
            (fi) => getSexeEnum(fi.sexe) === Sexe.FEMELLE
        ).length;
        tmp_size_data.values[Sexe.IND] = tmp.filter(
            (fi) => getSexeEnum(fi.sexe) === Sexe.IND
        ).length;
        size_data.push(tmp_size_data);
    }

    return (
        <div className="flex flex-col overflow-scroll">
            <StackHistoChart
                data={size_data}
                x_title="Classe de Taille (LF en cm)"
                y_title="Nombre d'individus"
            />
            <h1 className="my-2 text-center text-lg font-bold sm:text-2xl">
                Nombre d'individus par classe de taille (LF en cm)
            </h1>
        </div>
    );
}
