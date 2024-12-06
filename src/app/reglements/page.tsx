import '@/app/ui/reglements.css';
import Link from 'next/link';
import type { Metadata } from 'next';
import PrimaryButton from '@/components/PrimaryButton';

export const metadata: Metadata = {
    title: 'Règlements',
    description:
        'Description des règles de participation au projet de science citoyenne.',
};

export default function Page() {
    let table_values = {
        'Donnée de base (Article 6.1)': [25, 25, 25, 25, 25, 25, 25],
        'Poids + photo/video sur balance': [0, 5, 5, 5, 0, 0, 5],
        Tripes: [0, 0, 10, 10, 10, 0, 0],
        Tête: [0, 0, 0, 10, 0, 10, 10],
        'Bonus échantillonage complet': [0, 0, 0, 10, 0, 0, 0],
        Total: [25, 30, 40, 60, 35, 35, 40],
    };
    return (
        <div className="reglements mx-4 sm:mx-20 xl:mx-48 2xl:mx-96">
            <h1 className="m-8 text-center text-lg font-bold sm:text-4xl">
                1. CONDITIONS GÉNÉRALES
            </h1>
            <h2 id="article_1">Article 1 – Respect du Règlement</h2>
            <p className="text-justify">
                Si un participant a manqué d’observer un des articles de ce
                règlement, il sera disqualifié. Les organisateurs du projet
                notifieront le participant via les plateformes de communication
                du projet (<Link href="#article_9">Article 9</Link>).
            </p>
            <h2 id="article_2">
                Article 2 – Conditions de Participation au projet
            </h2>
            <p className="text-justify">
                La participation est ouverte à toute personne majeure résidant à
                la Réunion.
            </p>
            <p className="text-justify">
                La participation au projet est réservée à tout participant
                pêcheur non professionnel en bateau et en kayak. Les guides de
                pêche sont aussi exclus. Le nombre de participants est limité à
                100 personnes. Une fiche d’inscription sera à remplir
                obligatoirement par le participant pour obtenir le droit de
                participer.
            </p>
            <p className="text-justify">
                Les 100 premiers inscrits pourront participer. Un participant
                peut représenter une personne physique ou plusieurs personnes
                réunies en “équipe”. Le classement (
                <Link href="#article_10">Article 10</Link>) et récompense (
                <Link href="#article_11">Article 11</Link>) seront seulement
                attribués au participant même s’il s’agit de plusieurs personnes
                physiques. Par exemple, un T-shirt du projet pourra être obtenu
                mais un seul T-shirt sera fourni au participant. En cas de
                participation en équipe, la personne physique inscrite sera
                responsable des communications avec les organisateurs du projet.
            </p>
            <h2 id="article_3">Article 3 – Information sur le concours</h2>
            <p>
                Le projet se déroulera du 1er décembre 2024 au 15 juin 2025. Si
                1000 poissons sont capturés avant la date de fin (15 juin 2025),
                le projet prendra fin de manière anticipée. Dans ce cas, cette
                fin anticipée sera communiquée aux participants via les réseaux
                sociaux du projet.
            </p>
            <h2 id="article_4">Article 4 - Inscription</h2>
            <p className="text-justify">
                Le participant devra obligatoirement remplir une fiche
                d’inscription pour pouvoir participer à ce concours. La demande
                d’inscription peut se faire en ligne (sur cette{' '}
                <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSedBqQrLrL93RY3YVnp3zKsyw-YRPzxW25fO0Um3pxvdGEGzA/viewform"
                    className="font-bold text-primary_orange"
                >
                    page
                </Link>
                ) ou en envoyant la demande en annexe ci-après aux organisateurs
                via les outils de communication proposés (whatsapp et messenger)
            </p>
            <h2 id="article_5">Article 5 - Lieu du projet</h2>
            <p className="text-justify">
                Pour être validé, le poisson devra obligatoirement être capturé
                à la Réunion ou sur le banc des 90 miles (Mont Lapérouse) durant
                la période du projet (<Link href="#article_3">Article 3</Link>).
                La vérification du lieu de capture sera effectuée via les
                photos/vidéos prises (<Link href="#article_6">Article 6</Link>).
            </p>
            <br />
            <p className="text-justify font-semibold">
                Chaque concurrent doit respecter la réglementation maritime en
                vigueur (
                <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSedBqQrLrL93RY3YVnp3zKsyw-YRPzxW25fO0Um3pxvdGEGzA/viewform"
                    className="font-bold text-primary_orange"
                >
                    site de la DMSOI
                </Link>
                ) ainsi que les zones protégées de la Réserve Marine de la
                Réunion (
                <Link
                    href="https://www.reservemarinereunion.fr/wp-content/uploads/2020/09/Plaquette-peche-de-loisir.pdf"
                    className="font-bold text-primary_orange"
                >
                    Réserve marine
                </Link>
                ).
            </p>
            <h2 id="article_6">Article 6 – Validité des Prises</h2>
            <p className="text-justify">
                Pour cette étude il n’y a pas de limite de taille de capture
                dans un premier temps.
            </p>
            <p className="text-justify">
                Nous avons besoin de 50 poissons entiers de moins 25 cm. Une
                fois ce quota atteint,
                <span className="font-semibold">
                    {'  '}
                    tout poisson en dessous de cette taille ne sera pas
                    comptabilisé sauf si celui-ci est relâché (preuve par
                    vidéo).{' '}
                </span>{' '}
                Pour ces poissons, un petit bout de nageoire caudale (identique
                à la réglementation en vigueur), la longueur et une vidéo/photo
                du relâché suffira pour obtenir un total{' '}
                <span className="font-semibold">de 25 points.</span> Pour
                rappel, un maximum de 1000 poissons sur la durée du projet est
                fixé. Le projet prend fin lorsque ce nombre est atteint même
                avant la date finale du 15 juin 2025. Les participants seront
                avertis par les moyens de communication du projet lorsque cette
                limitation est atteinte.
            </p>
            <br />
            <p className="text-justify">
                <span id="article_61">6.1</span> Pour valider une prise, il faut
                impérativement transmettre les informations et échantillons
                suivants via un des outils mis à disposition (
                <Link href="#article_9">Article 9</Link>) :
            </p>
            <ul>
                <li>Pseudo pêcheur</li>
                <li>Date de la prise</li>
                <li>
                    Lieu de la prise (segmentation carte) + profondeur de
                    capture
                </li>
                <li>
                    Photo et/ou vidéo du poisson avec son étiquette
                    (correspondant au n° du tube) avec La Réunion en arrière
                    plan ou la carte GPS (sur le banc des 90)
                </li>
                <li>
                    Photo et/ou vidéo du poisson avec son étiquette
                    (correspondant au n° du tube) posé à plat sur la règle de
                    mesure
                </li>
                <li>Mesure du poisson en cm</li>
                <li>
                    Morceau de nageoire caudale (identique à la réglementation
                    en vigueur) dans le tube de stockage correspondant au numéro
                    de l'étiquette du poisson
                </li>
            </ul>
            <p className="text-justify">
                Ces informations et échantillons permettent d’obtenir{' '}
                <span className="font-semibold">25 points.</span>
            </p>
            <br />
            <p className="text-justify">
                <span id="article_62">6.2</span> Pour valider des points Bonus,
                il faut impérativement fournir avec la même prise :
            </p>
            <ul className="pt-4">
                <li>
                    <strong>
                        <u>+ 5 pts : Poids du poisson</u>
                    </strong>
                    : photo et/ou vidéo avec le poisson avec son étiquette
                    (correspondant au n° du tube) sur la balance
                </li>
                <li className="pt-2">
                    <strong>
                        <u>+10 pts </u>
                    </strong>
                    : L’ensemble des tripes de la cavité abdominale à prélever
                    et mettre dans le sachet correspondant au poisson. La partie
                    importante est les gonades (cf photos protocoles)
                </li>
                <li className="pt-2">
                    <strong>
                        <u>+10 pts : Couper la tête</u>
                    </strong>
                    : (Voir Schéma sur le protocole) et la mettre dans le sachet
                    correspondant au poisson
                </li>
                <li className="pt-2">
                    <strong>
                        <u>
                            +10 pts : Si toutes les infos d’un poisson sont
                            fournies (taille, poids, tripes, têtes)
                        </u>
                    </strong>
                </li>
            </ul>
            <p className="pt-4">
                Ou Poisson entier :{' '}
                <span className="font-semibold"> 60 pts</span>
            </p>
            <h2 id="article_7">Article 7 - Comptabilisation des points</h2>
            <table className="text-surface min-w-full border-collapse overflow-hidden rounded-lg bg-white text-center text-sm font-light shadow-sm">
                <thead>
                    <tr>
                        <th className="border bg-tertiary_orange px-3 py-3 text-center text-lg md:px-6">
                            Informations ou échantillons fournis
                        </th>
                        <th
                            className="border bg-tertiary_orange px-3 py-3 text-center text-lg md:px-6"
                            colSpan={7}
                        >
                            Calcul des points
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(table_values).map(([key, values]) => (
                        <tr key={key}>
                            <th className="border bg-tertiary_orange px-3 py-3 text-left text-lg md:px-6">
                                {key}
                            </th>
                            {values.map((value, index) =>
                                key === 'Total' ? (
                                    <th
                                        key={index}
                                        className="border bg-tertiary_orange px-3 py-3 text-center md:px-6"
                                    >
                                        {value}
                                    </th>
                                ) : (
                                    <td
                                        key={index}
                                        className={` ${
                                            value === 0
                                                ? 'bg-red-200 pl-2'
                                                : 'bg-green-200 pl-2'
                                        } border px-3 py-3 font-medium md:px-6`}
                                    >
                                        {value}
                                    </td>
                                )
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3>Exemple de calcul</h3>
            <p className="text-justify">
                Données de base (25 pts) + le poids fourni (+ 5pts) soit un
                total de 25 + 5 = 30pts
            </p>
            <p className="text-justify">
                Données de base (25 pts) + la tête (+ 10pts) + les tripes (+
                10pts) sont fournie en plus : 25 + 10 + 10 = 45 pts
            </p>
            <p className="text-justify">
                Données de base (25 pts) + poids (+ 5pts) + tripes (+ 10pts) +
                tête (+ 10pts) sont fournie : 25 + 5 + 10 + 10 = 50 pts donc
                l’échantillonnage est complet : bonus + 10 pts soit 60 pts
            </p>
            <h2 id="article_8">
                Article 8 - Enregistrements des prises - Réclamations
            </h2>
            <p className="text-justify">
                L’enregistrement de chaque prise sera validé par les
                organisateurs du projet après vérification des données à fournir
                ainsi que la réception du tube avec le morceau de nageoire.
            </p>
            <p className="text-justify">
                Un bonus de point sera validé par les organisateurs du projet
                après réception du sachet de tripes et/ou de la tête du poisson
                et/ou du poids avec sa photo ou vidéo.
            </p>
            <p className="text-justify">
                Un bonus de + 10 points sera attribué à tout participant
                fournissant toutes les données d’un échantillonnage complet ou
                offrant le poisson entier.
            </p>
            <p className="pt-4 font-bold">
                Une mise à jour hebdomadaire sera effectuée via les réseaux
                sociaux dédiés et le site web du projet.
            </p>
            <h2 id="article_9">Article 9: Moyen de communication</h2>
            <p className="text-justify">
                Toute demande ou information à transmettre se fera par SMS,
                Whatsapp ou messenger. Les demandes seront traitées durant les
                jours ouvrés (du lundi au vendredi de 9h à 17h). Les photos et
                les vidéos seront transmises par ces canaux (SMS, Whatsapp ou
                messenger).
            </p>{' '}
            <br />
            <p className="text-justify font-bold text-red-600 underline">
                Attention : à chaque vidéo ou photo l'étiquette du numéro
                correspondant au tube d’échantillon doit apparaître avec le
                poisson pour que celui-ci soit validé. Si il n’y a pas
                d’étiquette avec le poisson, la vidéo ou la photo ne sera pas
                prise en compte.
            </p>
            <h2 id="article_10">Article 10: Modalités de Classement</h2>
            <p className="text-justify">
                Le classement sera établi par le total des points par pseudo à
                chaque semaine. A la fin du projet, les points seront
                comptabilisés pour chaque participant et le classement final
                sera établi.
            </p>
            <h2 id="article_11">Article 11: Récompense </h2>
            <p className="text-justify">
                Pour pouvoir gagner le lot final, il faut un minimum de points.
                Le cumul de ces points sera de à minima{' '}
                <span className="font-bold underline">300 pts</span>.
            </p>
            <ul className="pt-4">
                <li>
                    Premier prix: Bon d’achat de 1000 € dans un des magasins de
                    la Caz à Pêche
                </li>
                <li>
                    Deuxième prix: Bon d’achat de 750 € dans un des magasins de
                    la Caz à Pêche
                </li>
                <li>
                    Troisième prix: Bon d’achat de 500 € dans un des magasins de
                    la Caz à Pêche
                </li>
                <li>
                    Pour tous les participants atteignant 300 points: un T-shirt
                    du projet
                </li>
                <li>
                    Pour tous les participants: un sac étanche du projet
                    contenant des kits d’échantillonnage
                </li>
            </ul>
            <h2 id="article_12">Article 12: Modification du règlement </h2>
            <p className="text-justify">
                A tout moment, les organisateurs du projet pourront modifier le
                règlement du projet pour s’adapter à de nouvelles conditions
                particulières. Les modifications seront communiquées à tous les
                participants via les plateformes de communication du projet (
                <Link href="#article_9">Article 9</Link>
                ).
            </p>
            <div className="flex flex-col">
                <h2 className="self-center">
                    Vous avez tout lu ? Alors foncez
                </h2>
                <div className="mt-2 self-center">
                    <PrimaryButton
                        link_ref={'https://forms.gle/JCbwYwZUYQESgGDQ7'}
                        name={'Inscrivez-vous'}
                        new_page={true}
                    />
                </div>
            </div>
        </div>
    );
}
