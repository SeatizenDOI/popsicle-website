import type { Metadata } from 'next';
import { Suspense } from 'react';
import { CardsSkeleton } from '@/app/ui/skeletons';
import GetImage from '@/app/components/GetImage';

export const metadata: Metadata = {
    title: 'Classement',
    description: 'Classement et statistiques des participants',
};

export default function Page() {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Suspense fallback={<CardsSkeleton />}>
                <GetImage image_name={'er'} />
            </Suspense>
        </div>
    );
}
