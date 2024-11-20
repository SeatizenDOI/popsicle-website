import type { Metadata } from 'next';
import { Suspense } from 'react';
import { CardsSkeleton } from '@/app/ui/skeletons';

export const metadata: Metadata = {
    title: 'Classement',
    description: 'Classement et statistiques des participants',
};

export default function Page() {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Suspense fallback={<CardsSkeleton />}></Suspense>
        </div>
    );
}
