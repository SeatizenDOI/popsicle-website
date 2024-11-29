import type { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Classement',
    description: 'Classement et statistiques des participants',
};

// export default function Page() {
//     return (
//         <div className="mx-4 sm:mx-20 xl:mx-48 2xl:mx-96">
//             <h1 className="mb-2 text-center text-lg font-bold sm:text-4xl">
//                 Classements - Le projet n'a pas encore commencé.
//             </h1>
//         </div>
//     );
//
//5ca283272c7b2bb52dd12b1c285c686c
//74ce4bd1abea0f1f22fa166a4176a8d1
// }

import { Suspense } from 'react';
import { CardsSkeleton } from '@/app/ui/skeletons';
import GetGraph from '@/components/GetGraph';

export default async function Page() {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <GetGraph />
            {/* <Suspense fallback={<CardsSkeleton />}> */}
            {/* </Suspense> */}
        </div>
    );
}
