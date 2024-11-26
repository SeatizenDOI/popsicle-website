import Image from 'next/image';
import type { Metadata } from 'next';

import Map from '@/components/MapZonePeche/DynamicMapZone';

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

            <div className="flex flex-col justify-center py-8">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/IDQLxDn8i2s?si=nXFYpl58IdLad149"
                    title=" "
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen={true}
                    className="w-full self-center xl:w-2/3"
                ></iframe>
            </div>

            <h2 className="mb-2 mt-8 text-xl font-bold">
                1. Numéroter le tube et remplir la feuille d’échantillonnage. Un
                seul numéro d’échantillon par poisson avec 1 ou 2 prélèvement(s)
                de nageoire.
            </h2>
            <p className="text-justify">
                Exemple de numérotation: COM-VRL-0001 (Code pays - Code FAO
                espèce - numéro à 4 chiffres). Les informations à conserver sont
                si possible: numéro d’échantillon, lieu de capture, date de
                capture et d’échantillonnage, latitude/longitude, profondeur de
                capture, taille, poids, sexe, code FAO code (VRL,{' '}
                <i>Variola louti</i> - VRA, Variola albimarginata).{' '}
            </p>
            <p className="pt-4 font-semibold">
                Pour localiser le site ou la zone de pêche, veuillez consulter
                la carte ci-dessous.
            </p>

            <div className="mt-4 flex w-full self-center">
                <Map />
            </div>

            <h2 className="mb-2 mt-8 text-xl font-bold">
                2- Mesurer la longueur à la fourche, le poids et prendre une
                photo du poisson si possible
            </h2>
            <ul>
                <li>
                    Mesurer le poisson au centimètre inférieur: Longueur du bout
                    de la mâchoire inférieure à la fourche
                </li>
                <li>
                    POIDS en KG Poids entier préférable sinon, noter si étêté,
                    éviscéré, sans branchie etc.
                </li>
            </ul>

            <div className="flex w-full self-center sm:w-1/2">
                <Image
                    alt="LF Variola"
                    src="/Longueur_LF.png"
                    width={1024}
                    height={1024}
                />
            </div>

            <h2 className="mb-2 mt-8 text-xl font-bold">
                3- (Facultatif) Noter le sexe + prendre une photo de la gonade
                entière et une photo d’une coupe transversale de la gonade avec
                le numéro d’échantillon sur la photo{' '}
            </h2>

            <h2 className="mb-2 mt-8 text-xl font-bold">
                4- Prendre 1 ou 2 échantillon(s) de nageoire et le(s) placer
                dans le tube numéroté
            </h2>
            <div className="flex w-full self-center">
                <Image
                    alt="Prélèvement"
                    src="/prelevement.png"
                    width={1024}
                    height={1024}
                />
            </div>

            <div className="flex flex-col xl:flex-row">
                <h3 className="round-lg m-4 h-fit bg-tertiary_orange p-12 font-semibold text-red-700">
                    Porter des gants ou laver vous les mains avant le
                    prélèvement
                </h3>

                <div className="round-lg m-4 bg-tertiary_orange p-12">
                    <h3 className="pb-4 font-semibold text-red-700">
                        Nettoyer et désinfecter les outils entre chaque
                        prélèvement
                    </h3>
                    <ol className="list-decimal">
                        <li>Rincer à l’eau</li>
                        <li>Laver avec du savon et une éponge</li>
                        <li>Rincer à l’eau</li>
                        <li>Sécher avec un sopalin propre</li>
                    </ol>
                </div>

                <div className="round-lg m-4 bg-tertiary_orange p-12">
                    <h3 className="pb-4 font-semibold text-red-700">
                        ATTENTION
                    </h3>
                    <ol className="list-decimal">
                        <li>
                            Sécher et nettoyer la zone de prélèvement avec un
                            sopalin
                        </li>
                        <li>
                            Prendre un morceau de nageoire (~1cm) et le placer
                            dans le tube (5 mL)
                        </li>
                        <li>
                            Immerger l’échantillon dans l’alcool et enlever les
                            bulles d’air
                        </li>
                        <li>Sceller avec du parafilm pour éviter les fuite</li>
                    </ol>
                </div>
                <h3 className="round-lg m-4 h-fit bg-tertiary_orange p-12 font-semibold text-red-700">
                    Stocker au congélateur à -20°C
                </h3>
            </div>
        </div>
    );
}
