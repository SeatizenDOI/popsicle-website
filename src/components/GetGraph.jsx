'use client';

import * as d3 from 'd3';
import { useRef, useEffect } from 'react';

const apiEndpoint = '/api/fish_data';

export default function GetGraph() {
    let a = fetch(apiEndpoint, {
        method: 'GET',
    })
        .then((res) => res.json())
        .then((response) => {
            console.log('LAed');
        })
        .catch((err) => {
            console.log(err);
        });

    return <></>;
}
