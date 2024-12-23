'use client';

import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';
import { colors } from '@/lib/data';

export type DonutChartItems = Record<string, number>;

interface DonutChartProps {
    data: DonutChartItems;
    width?: number;
    height?: number;
}

export const DonutChart: React.FC<DonutChartProps> = ({
    data,
    width = 1200,
    height = 400,
}) => {
    const ref = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        const svg = d3.select(ref.current);
        svg.selectAll('*').remove(); // Clear previous renders

        const radius = Math.min(width, height) / 2;

        const color = d3.scaleOrdinal(
            Object.keys(data),
            colors.slice(0, data.length)
        );

        // Convert data to array format
        const pie = d3.pie().value((d: any) => d[1]);
        const data_ready = pie(Object.entries(data) as unknown as number[]); // Typescript shit

        const arc = d3
            .arc()
            .innerRadius(radius / 2) // Inner radius for donut effect
            .outerRadius(radius);

        const g = svg
            .append('g')
            .attr('transform', `translate(${width / 2}, ${height / 2})`);

        g.selectAll('path')
            .data(data_ready)
            .join('path')
            .attr('d', arc as any) // TypeScript workaround for arc generator
            .attr('fill', (d: any) => color(d.data[0]))
            .attr('stroke', 'white')
            .style('stroke-width', '2px');

        // Add labels
        g.selectAll('text')
            .data(data_ready)
            .join('text')
            .text((d: any) => `${d.data[0]} (${d.data[1]})`)
            .attr('transform', (d: any) => `translate(${arc.centroid(d)})`)
            .style('text-anchor', 'middle')
            .style('font-size', '12px');
    }, [data]);

    return <svg ref={ref} width={width} height={height} />;
};
