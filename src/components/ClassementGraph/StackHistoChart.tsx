'use client';

import { colors } from '@/lib/data';

import * as d3 from 'd3';
import React, { useRef, useEffect, useState } from 'react';

export type StackHistoYValue = Record<string, number>;

export interface StackHistoItem {
    x_label: string;
    values: StackHistoYValue;
}

interface StackHistoProps {
    data: StackHistoItem[];
    x_title: string;
    y_title: string;
    width?: number;
    height?: number;
}

export const StackHistoChart: React.FC<StackHistoProps> = ({
    data,
    x_title,
    y_title,
    width = 1200,
    height = 400,
}) => {
    const ref = useRef<SVGSVGElement | null>(null);

    // Extract keys dynamically from the first item's `values` object
    const allKeys = Object.keys(data[0]?.values || {});
    const [activeKeys, setActiveKeys] = useState<Set<string>>(new Set(allKeys));

    useEffect(() => {
        const margin = { top: 50, right: 30, bottom: 50, left: 50 };
        const chartWidth = width - margin.left - margin.right;
        const chartHeight = height - margin.top - margin.bottom;

        const svg = d3
            .select(ref.current)
            .attr('width', width)
            .attr('height', height)
            .attr('viewBox', `0 0 ${width} ${height}`) // Set the internal coordinate system
            .attr('preserveAspectRatio', 'xMidYMid meet'); // Maintain aspect ratio

        svg.selectAll('*').remove();

        const chart = svg
            .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);

        // Filter keys to only include active ones
        const filteredKeys = Array.from(activeKeys);

        // Prepare stack generator
        const stackGenerator = d3
            .stack<StackHistoItem>()
            .keys(filteredKeys)
            .value((d, key) => d.values[key] || 0);
        const stackedData = stackGenerator(data);

        // Scales
        const x = d3
            .scaleBand()
            .domain(data.map((d) => d.x_label))
            .range([0, chartWidth])
            .padding(0.2);

        const y = d3
            .scaleLinear()
            .domain([
                0,
                d3.max(stackedData, (layer) => d3.max(layer, (d) => d[1]))!,
            ])
            .range([chartHeight, 0]);

        const color = d3.scaleOrdinal(
            Object.keys(data[0]?.values || {}),
            colors.slice(0, data.length)
        );

        // Axes
        chart.append('g').call(d3.axisLeft(y));
        chart
            .append('g')
            .attr('transform', `translate(0, ${chartHeight})`)
            .call(d3.axisBottom(x));

        // Axes titles
        svg.append('text')
            .attr('x', width / 2)
            .attr('y', height - 10)
            .attr('text-anchor', 'middle')
            .style('font-size', '14px')
            .text(x_title);

        svg.append('text')
            .attr('x', -height / 2)
            .attr('y', 15)
            .attr('text-anchor', 'middle')
            .attr('transform', 'rotate(-90)')
            .style('font-size', '14px')
            .text(y_title);

        // Tooltip setup
        const tooltip = d3
            .select('body')
            .append('div')
            .style('position', 'absolute')
            .style('visibility', 'hidden')
            .style('background', '#f9f9f9')
            .style('border', '1px solid #ccc')
            .style('padding', '8px')
            .style('border-radius', '4px')
            .style('font-size', '12px');

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
            .attr('x', (d) => x(d.data.x_label)!)
            .attr('y', (d) => y(d[1]))
            .attr('height', (d) => y(d[0]) - y(d[1]))
            .attr('width', x.bandwidth())
            .on('mouseover', (event: PointerEvent, d) => {
                if (!event.currentTarget) return;
                tooltip
                    .html(
                        `<strong>${(d3.select((event.currentTarget as Element).parentNode as unknown as string).datum() as any).key}</strong>: ${
                            d[1] - d[0]
                        }`
                    )
                    .style('visibility', 'visible');
            })
            .on('mousemove', (event) => {
                tooltip
                    .style('top', `${event.pageY - 20}px`)
                    .style('left', `${event.pageX + 10}px`);
            })
            .on('mouseout', () => {
                tooltip.style('visibility', 'hidden');
            });

        // Legend
        const legend = svg
            .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top / 2})`);

        allKeys.forEach((key, i) => {
            const legendGroup = legend
                .append('g')
                .attr('transform', `translate(${i * 120}, 0)`);

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
    }, [data, width, height, x_title, y_title, activeKeys]);

    return <svg ref={ref} className="h-auto w-full"></svg>;
};
