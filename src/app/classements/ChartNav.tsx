'use client';
import { useState } from 'react';
import SexChart from '@/app/classements/SexChart';
import SexByHeightChart from '@/app/classements/SexByHeightChart';
import SexByMonthChart from '@/app/classements/SexByMonthChart';
import HeightWeightChart from '@/app/classements/HeightWeightChart';

const ChartNav = () => {
    const [activeChart, setActiveChart] = useState('chart1');

    let item_button = ({ title, href }: { title: string; href: string }) => {
        return (
            <button
                className={`m-2 rounded px-4 py-2 ${
                    activeChart === href
                        ? 'bg-primary_orange text-white'
                        : 'bg-gray-200 text-gray-800'
                }`}
                onClick={() => setActiveChart(href)}
            >
                {title}
            </button>
        );
    };

    return (
        <div className="mt-8 flex flex-col items-center p-4">
            {/* Navigation Menu */}
            <nav className="mb-4">
                <div className="flex flex-wrap justify-center">
                    {item_button({
                        title: 'Nombre de Grand Queue échantillonnés',
                        href: 'chart1',
                    })}

                    {item_button({
                        title: "Nombre d'individus par classe de taille",
                        href: 'chart2',
                    })}

                    {item_button({
                        title: " Nombre d'individus par mois",
                        href: 'chart3',
                    })}

                    {item_button({
                        title: 'Relation Taille - Poids',
                        href: 'chart4',
                    })}
                </div>
            </nav>

            {/* Chart Display */}
            <div className="w-fit overflow-y-scroll p-8">
                {activeChart === 'chart1' && <SexChart />}
                {activeChart === 'chart2' && <SexByHeightChart />}
                {activeChart === 'chart3' && <SexByMonthChart />}
                {activeChart === 'chart4' && <HeightWeightChart />}
            </div>
        </div>
    );
};

export default ChartNav;
