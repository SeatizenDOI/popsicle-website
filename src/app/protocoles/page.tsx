import type { Metadata } from 'next';
import Link from 'next/link';
import Map from '@/components/MapZonePeche/DynamicMapZone';
import ImageContainer from '@/components/ImageContainer';
import { zones_peches_start_stop } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Protocoles',
    description: "Fiche descriptive du protocole d'acquisition",
};

export default function Page() {
    return (
        <div className="mx-4 flex flex-col sm:mx-20 xl:mx-48 2xl:mx-96">
            <h1 className="mb-2 text-center text-lg font-bold sm:text-4xl">
                Protocole d’échantillonnage pour le projet de génétique POPSICLE
                (<i>Variola louti</i> )
            </h1>

            <div className="my-12 text-center text-base font-semibold sm:text-lg">
                Le protocole est aussi disponible au format{' '}
                <Link
                    href="/pdf/protocole.pdf"
                    className="animate-pulse font-bold text-primary_orange"
                >
                    PDF
                </Link>
                .
            </div>

            <div className="w-9/12 self-center">
                <ImageContainer
                    url="/Description_kit.jpg"
                    title="Description kit"
                    onlyAlt={true}
                />
                <h1 className="mb-2 mt-20 text-center text-2xl font-bold">
                    Schéma de distribution des points
                </h1>
                <ImageContainer
                    url="/proto_2.jpg"
                    title="Schéma de distribution des points."
                    onlyAlt={true}
                />
                <ImageContainer
                    url="/proto_3.jpg"
                    title="Protocole étape 1"
                    onlyAlt={true}
                    className="my-20"
                />
                <ImageContainer
                    url="/proto_4.jpg"
                    title="Protocole étape 2"
                    onlyAlt={true}
                    className="my-20"
                />
                <ImageContainer
                    url="/proto_5.jpg"
                    title="Protocole étape 3"
                    onlyAlt={true}
                    className="my-20"
                />
                <ImageContainer
                    url="/proto_6.jpg"
                    title="Protocole étape 4"
                    onlyAlt={true}
                    className="my-20"
                />
                <ImageContainer
                    url="/proto_7.jpg"
                    title="Protocole étape 5"
                    onlyAlt={true}
                    className="my-20"
                />
                <ImageContainer
                    url="/proto_8.jpg"
                    title="Protocole étape 6"
                    onlyAlt={true}
                    className="my-20"
                />
            </div>

            <h1 className="mb-4 mt-12 text-center text-lg font-bold sm:text-4xl">
                Liste des zones de pêches
            </h1>
            <div className="mt-4 flex w-full justify-center">
                <Map />
            </div>
            <div className="m-2 border shadow-lg sm:m-8">
                <table className="min-w-full border-collapse overflow-hidden rounded-lg bg-white shadow-lg">
                    <thead>
                        <tr className="bg-primary_orange text-white">
                            <th className="px-3 py-3 text-left text-xs font-semibold md:px-6 md:text-base">
                                Nom de la zone
                            </th>
                            <th
                                className="border-l-4 px-3 py-3 text-center text-xs font-semibold md:px-6 md:text-base"
                                colSpan={2}
                            >
                                Limite de la zone
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {zones_peches_start_stop.map((ze) => {
                            return (
                                <tr
                                    key={ze.zone}
                                    className="even:bg-tertiary_orange hover:bg-blue-50"
                                >
                                    <td className="px-3 py-3 text-xs font-semibold text-gray-800 md:px-6 md:text-base">
                                        {ze.zone}
                                    </td>
                                    <td className="px-3 py-3 text-xs text-gray-800 md:px-6 md:text-base">
                                        {ze.start}
                                    </td>
                                    <td className="px-3 py-3 text-xs text-gray-800 md:px-6 md:text-base">
                                        {ze.end}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
