'use client';

import { colors } from '@/lib/data';
import { Sexe } from '@/lib/definition';

import * as d3 from 'd3';
import React, { useRef, useEffect, useState } from 'react';

export interface ScatterData {
    height: number;
    weight: number;
    sex: Sexe;
}

interface ScatterChartProps {
    data: ScatterData[];
    width?: number;
    height?: number;
}

export const ScatterChart: React.FC<ScatterChartProps> = ({
    data,
    width = 1200,
    height = 400,
}) => {
    const ref = useRef<SVGSVGElement | null>(null);
    const allKeys = [...new Set(data.map((d) => d.sex))];
    const [activeSexes, setActiveSexes] = useState<Set<string>>(
        new Set(allKeys)
    );

    useEffect(() => {
        const margin = { top: 20, right: 30, bottom: 40, left: 50 };
        const chartWidth = width - margin.left - margin.right;
        const chartHeight = height - margin.top - margin.bottom;

        const filteredData = data.filter((d) => activeSexes.has(d.sex));

        const x = d3
            .scaleLinear()
            .domain([
                d3.min(data, (d) => d.height)! - 5,
                d3.max(data, (d) => d.height)! + 5,
            ])
            .range([0, chartWidth]);

        const y = d3
            .scaleLinear()
            .domain([
                d3.min(data, (d) => d.weight)! - 5,
                d3.max(data, (d) => d.weight)! + 5,
            ])
            .range([chartHeight, 0]);

        const color = d3.scaleOrdinal(
            data.map((d) => d.sex),
            colors.slice(0, data.length)
        );
        const svg = d3
            .select(ref.current)
            .attr('width', width)
            .attr('height', height)
            .attr('viewBox', `0 0 ${width} ${height}`) // Set the internal coordinate system
            .attr('preserveAspectRatio', 'xMidYMid meet');

        svg.selectAll('*').remove();

        const chart = svg
            .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);

        // Add axes
        chart
            .append('g')
            .attr('transform', `translate(0, ${chartHeight})`)
            .call(d3.axisBottom(x));

        chart.append('g').call(d3.axisLeft(y));

        // Add labels for axes
        chart
            .append('text')
            .attr('x', chartWidth / 2)
            .attr('y', chartHeight + margin.bottom - 5)
            .attr('text-anchor', 'middle')
            .text('Taille (cm)');

        chart
            .append('text')
            .attr('x', -chartHeight / 2)
            .attr('y', -margin.left + 15)
            .attr('text-anchor', 'middle')
            .attr('transform', 'rotate(-90)')
            .text('Poids (kg)');

        // Add dots
        chart
            .selectAll('circle')
            .data(filteredData)
            .join('circle')
            .attr('cx', (d) => x(d.height))
            .attr('cy', (d) => y(d.weight))
            .attr('r', 5)
            .attr('fill', (d) => color(d.sex));

        // Add tooltip
        const tooltip = d3
            .select('body')
            .append('div')
            .style('position', 'absolute')
            .style('background', '#fff')
            .style('border', '1px solid #ccc')
            .style('padding', '8px')
            .style('border-radius', '4px')
            .style('pointer-events', 'none')
            .style('opacity', 0)
            .style('font-size', '12px');

        chart
            .selectAll('circle')
            .on('mouseover', function (event, d) {
                tooltip
                    .style('opacity', 1)
                    .html(
                        `Taille: ${(d as ScatterData).height} cm<br>Poids: ${(d as ScatterData).weight} kg<br>Sexe: ${(d as ScatterData).sex}`
                    );
            })
            .on('mousemove', (event) => {
                tooltip
                    .style('left', `${event.pageX + 10}px`)
                    .style('top', `${event.pageY - 20}px`);
            })
            .on('mouseout', () => {
                tooltip.style('opacity', 0);
            });

        // Add legend
        const legend = svg
            .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top / 2})`);

        allKeys.forEach((sex, i) => {
            const legendGroup = legend
                .append('g')
                .attr('transform', `translate(${i * 80}, 0)`);

            legendGroup
                .append('rect')
                .attr('width', 20)
                .attr('height', 20)
                .attr('fill', color(sex)!)
                .attr('cursor', 'pointer')
                .on('click', () => {
                    const updatedSet = new Set(activeSexes);
                    if (updatedSet.has(sex)) {
                        updatedSet.delete(sex);
                    } else {
                        updatedSet.add(sex);
                    }
                    setActiveSexes(updatedSet);
                });

            legendGroup
                .append('text')
                .attr('x', 25)
                .attr('y', 15)
                .attr('text-anchor', 'start')
                .style('font-size', '12px')
                .text(sex)
                .attr('cursor', 'pointer')
                .on('click', () => {
                    const updatedSet = new Set(activeSexes);
                    if (updatedSet.has(sex)) {
                        updatedSet.delete(sex);
                    } else {
                        updatedSet.add(sex);
                    }
                    setActiveSexes(updatedSet);
                });
        });
    }, [data, width, height, activeSexes]);

    return <svg ref={ref} className="h-auto w-full"></svg>;
};
