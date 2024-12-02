import type { Metadata } from 'next';

import Map from '@/components/MapZonePeche/DynamicMapZone';
import VideoContainer from '@/components/VideoContainer';
import ImageContainer from '@/components/ImageContainer';

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

            <ImageContainer url="/protocole.jpg" title="Fiche protocole" />

            <VideoContainer
                url="https://www.youtube.com/embed/IDQLxDn8i2s?si=nXFYpl58IdLad149"
                title="Échantillonnage biologique de poissons récifaux : Prélèvement de muscle"
            />

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

            <ImageContainer
                url="/lf_variola.svg"
                title="Mesure de la Longueur - fourche sur un Croissant Queue Jaune."
            />

            <h2 className="mb-2 mt-8 text-xl font-bold">
                3- (Facultatif) Noter le sexe + prendre une photo de la gonade
                entière et une photo d’une coupe transversale de la gonade avec
                le numéro d’échantillon sur la photo{' '}
            </h2>

            <h2 className="mb-2 mt-8 text-xl font-bold">
                4- Prendre 1 ou 2 échantillon(s) de nageoire et le(s) placer
                dans le tube numéroté
            </h2>

            <ImageContainer url="/prelevement.png" title="Prélèvement." />
        </div>
    );
}
