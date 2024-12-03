'use client';
import { useState } from 'react';
import SexChart from '@/app/classements/SexChart';
import SexByHeightChart from '@/app/classements/SexByHeightChart';
import SexByMonthChart from '@/app/classements/SexByMonthChart';
import HeightWeightChart from '@/app/classements/HeightWeightChart';

const ChartNav = () => {
    const [activeChart, setActiveChart] = useState('chart1');

    return (
        <div className="flex flex-col items-center p-4">
            {/* Navigation Menu */}
            <nav className="mb-4">
                <ul className="flex list-none space-x-4">
                    <li>
                        <button
                            className={`rounded px-4 py-2 ${
                                activeChart === 'chart1'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-800'
                            }`}
                            onClick={() => setActiveChart('chart1')}
                        >
                            Chart 1
                        </button>
                    </li>
                    <li>
                        <button
                            className={`rounded px-4 py-2 ${
                                activeChart === 'chart2'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-800'
                            }`}
                            onClick={() => setActiveChart('chart2')}
                        >
                            Chart 2
                        </button>
                    </li>
                    <li>
                        <button
                            className={`rounded px-4 py-2 ${
                                activeChart === 'chart3'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-800'
                            }`}
                            onClick={() => setActiveChart('chart3')}
                        >
                            Chart 3
                        </button>
                    </li>
                    <li>
                        <button
                            className={`rounded px-4 py-2 ${
                                activeChart === 'chart4'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-800'
                            }`}
                            onClick={() => setActiveChart('chart4')}
                        >
                            Chart 4
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Chart Display */}
            <div className="w-full">
                {activeChart === 'chart1' && <SexChart />}
                {activeChart === 'chart2' && <SexByHeightChart />}
                {activeChart === 'chart3' && <SexByMonthChart />}
                {activeChart === 'chart4' && <HeightWeightChart />}
            </div>
        </div>
    );
};

export default ChartNav;
