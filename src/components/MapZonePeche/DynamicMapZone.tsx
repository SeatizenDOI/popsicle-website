'use client';

import dynamic from 'next/dynamic';

const DynamicHeader = dynamic(() => import('./MapZonePeche'), {
    loading: () => <p>Chargement...</p>,
    ssr: false,
});

export default function Home() {
    return <DynamicHeader />;
}
