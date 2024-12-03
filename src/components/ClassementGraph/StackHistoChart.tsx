'use client';

import { colors } from '@/lib/data';

import * as d3 from 'd3';
import React, { useRef, useEffect, useState } from 'react';

export interface SexByMonthItem {
    month: string;
    M: number;
    F: number;
    Ind: number;
}

interface SexByMonthProps {
    data: SexByMonthItem[];
    x_title: string;
    y_title: string;
    width?: number;
    height?: number;
}

export const StackHistoChart: React.FC<SexByMonthProps> = ({
    data,
    x_title,
    y_title,
    width = 1200,
    height = 400,
}) => {
    const ref = useRef<SVGSVGElement | null>(null);

    // Initialize with all keys active
    const keys = ['M', 'F', 'Ind'];
    const [activeKeys, setActiveKeys] = useState<Set<string>>(new Set(keys));

    useEffect(() => {
        const margin = { top: 30, right: 30, bottom: 50, left: 50 };
        const chartWidth = width - margin.left - margin.right;
        const chartHeight = height - margin.top - margin.bottom;

        const svg = d3
            .select(ref.current)
            .attr('width', width)
            .attr('height', height);

        svg.selectAll('*').remove();

        const chart = svg
            .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);

        const filteredKeys = Array.from(activeKeys);

        const stackGenerator = d3.stack<SexByMonthItem>().keys(filteredKeys);
        const stackedData = stackGenerator(data);

        const x = d3
            .scaleBand()
            .domain(data.map((d) => d.month))
            .range([0, chartWidth])
            .padding(0.2);

        const y = d3
            .scaleLinear()
            .domain([
                0,
                d3.max(stackedData, (layer) => d3.max(layer, (d) => d[1]))!,
            ])
            .range([chartHeight, 0]);

        const color = d3.scaleOrdinal(colors);

        // Axes
        chart.append('g').call(d3.axisLeft(y));
        chart
            .append('g')
            .attr('transform', `translate(0, ${chartHeight})`)
            .call(d3.axisBottom(x));

        // Bars
        chart
            .selectAll('.layer')
            .data(stackedData)
            .join('g')
            .attr('fill', (d) => color(d.key)!)
            .classed('layer', true)
            .selectAll('rect')
            .data((d) => d)
            .join('rect')
            .attr('x', (d) => x(d.data.month)!)
            .attr('y', (d) => y(d[1]))
            .attr('height', (d) => y(d[0]) - y(d[1]))
            .attr('width', x.bandwidth());

        // Add Legend
        const legend = svg
            .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top / 2})`);

        keys.forEach((key, i) => {
            const legendGroup = legend
                .append('g')
                .attr('transform', `translate(${i * 80}, 0)`);

            legendGroup
                .append('rect')
                .attr('width', 20)
                .attr('height', 20)
                .attr('fill', color(key)!)
                .attr('cursor', 'pointer')
                .on('click', () => {
                    const updatedKeys = new Set(activeKeys);
                    if (updatedKeys.has(key)) {
                        updatedKeys.delete(key);
                    } else {
                        updatedKeys.add(key);
                    }
                    setActiveKeys(updatedKeys);
                });

            legendGroup
                .append('text')
                .attr('x', 25)
                .attr('y', 15)
                .attr('text-anchor', 'start')
                .style('font-size', '12px')
                .text(key)
                .attr('cursor', 'pointer')
                .on('click', () => {
                    const updatedKeys = new Set(activeKeys);
                    if (updatedKeys.has(key)) {
                        updatedKeys.delete(key);
                    } else {
                        updatedKeys.add(key);
                    }
                    setActiveKeys(updatedKeys);
                });
        });
    }, [data, width, height, activeKeys]);

    return <svg ref={ref}></svg>;
};
