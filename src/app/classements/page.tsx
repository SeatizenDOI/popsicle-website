import type { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Classement',
    description: 'Classement et statistiques des participants',
};

export default function Page() {
    return (
        <div className="mx-4 sm:mx-20 xl:mx-48 2xl:mx-96">
            <h1 className="mb-2 text-center text-lg font-bold sm:text-4xl">
                Classements - Le projet n'a pas encore commencé.
            </h1>
        </div>
    );
}

// import { Suspense } from 'react';
// import { CardsSkeleton } from '@/app/ui/skeletons';
// import SexGraph from '@/components/ClassementGraph/SexGraph';

// export default async function Page() {
//     return (
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             <SexGraph />
//             {/* <Suspense fallback={<CardsSkeleton />}> */}
//             {/* </Suspense> */}
//         </div>
//     );
// }
