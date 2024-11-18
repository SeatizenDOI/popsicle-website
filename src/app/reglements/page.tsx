import '@/app/ui/reglements.css';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Règlements',
    description:
        'Description des règles de participation au projet de science citoyenne.',
};

export default function Page() {
    let table_values = {
        'Donnée de base': [25, 25, 25, 25, 25, 25, 25],
        'Poids + photo/video sur balance': [0, 5, 5, 5, 0, 0, 5],
        Tripes: [0, 0, 10, 10, 10, 0, 0],
        Tête: [0, 0, 0, 10, 0, 10, 10],
        'Bonus échantillonage complet': [0, 0, 0, 10, 0, 0, 0],
        Total: [25, 30, 40, 60, 35, 35, 40],
    };
    return (
        <div className="reglements mx-4 sm:mx-20 xl:mx-48 2xl:mx-96">
            <h1>1. CONDITIONS GÉNÉRALES </h1>

            <h2 id="article_1">Article 1 – Respect du Règlement</h2>
            <p className="text-justify">
                Si un participant a manqué d’observer un des articles de ce
                règlement, il sera disqualifié. Les organisateurs du projet
                notifieront le participant via les plateformes de communication
                du projet (<Link href="#article_9">Article 9</Link>).
            </p>

            <h2 id="article_2">
                Article 2 – Conditions de Participation au projet{' '}
            </h2>
            <p className="text-justify">
                La participation est ouverte à toute personne majeure résidant à
                la Réunion. La participation au projet est réservée à tout
                participant pêcheur non professionnel et/ou non guide de pêche
                en bateau et en kayak. Le nombre de participants est limité à
                100 personnes. Une fiche d’inscription sera à remplir
                obligatoirement par le participant pour obtenir le droit de
                participer. Les 100 premiers inscrits pourront participer. Un
                participant peut représenter une personne physique ou plusieurs
                personnes réunies en “équipe”. Le classement (
                <Link href="#article_10">Article 10</Link>) et récompense (
                <Link href="#article_11">Article 11</Link>) seront seulement
                attribués à un participant même s’il s’agit de plusieurs
                personnes physiques. Par exemple, un t-shirt du projet pourra
                être obtenu mais un seul t-shirt sera fourni au participant. En
                cas de participation en équipe, la personne physique inscrite
                sera responsable des communications avec les organisateurs du
                projet.
            </p>

            <h2 id="article_3">Article 3 – Information sur le concours</h2>
            <p>Le concours se déroulera du 15 octobre 2024 au 15 juin 2025</p>

            <h2 id="article_4">Article 4 - Inscription</h2>
            <p className="text-justify">
                Le concours est ouvert à toute personne majeure résidant à la
                Réunion. Le participant devra obligatoirement remplir une fiche
                d’inscription pour pouvoir participer à ce concours.
            </p>

            <h2 id="article_5">Article 5 - Lieux du concours</h2>
            <p className="text-justify">
                Pour être validé, le poisson devra obligatoirement provenir de
                la Réunion et du banc des 90 miles (Mont Lapérouse). Chaque
                concurrent doit respecter la réglementation maritime en vigueur
                et les zones protégées du parc marin de la Réunion.
            </p>
            <ul>
                <li>
                    <Link href="https://www.reservemarinereunion.fr/wp-content/uploads/2020/09/Plaquette-peche-de-loisir.pdf">
                        Réserve marine
                    </Link>
                </li>
            </ul>

            <h2 id="article_6">Article 6 – Validité des Prises</h2>
            <p>
                Pour cette étude il n’y a pas de limite de taille de capture
                dans un premier temps.
            </p>
            <p>
                En effet pour cette étude nous avons besoin de xx poissons de
                -25 cm.
            </p>
            <p>
                Une fois ce quota atteint,
                <strong>
                    tout poisson en dessous de cette taille ne sera pas
                    comptabilisé sauf si celui-ci est relâché
                </strong>
                .
            </p>
            <p>
                Pour ces poissons, un petit bout de nageoire et la longueur
                suffira pour obtenir un total des 60 pts.
            </p>
            <br />
            <p>
                Pour valider une prise, il faut impérativement fournir les
                informations suivantes :
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
                    (correspondant au n° du tube) avec la réunion en arrière
                    plan
                </li>
                <li>
                    Photo et/ou vidéo du poisson avec son étiquette
                    (correspondant au n° du tube) posé à plat sur la règle de
                    mesure
                </li>
                <li>Mesure du poisson en cm</li>
                <li>
                    PMorceau de nageoire dans le tube de stockage correspondant
                    au numéro de l'étiquette du poisson
                </li>
            </ul>
            <br />
            <p>
                Pour valider des points Bonus, il faut impérativement fournir
                avec la même prise :
            </p>
            <ul>
                <li>
                    <strong>
                        <u>+5 pts : Poids du poisson</u>
                    </strong>
                    : photo et/ou vidéo avec le poisson avec son étiquette
                    (correspondant au n° du tube) sur la balance
                </li>
                <li>
                    <strong>
                        <u>+10 pts </u>
                    </strong>
                    : L’ensemble des tripes de la cavité abdominale à prélever
                    et mettre dans le sachet correspondant au poisson
                </li>
                <li>
                    <strong>
                        <u>+10 pts : Couper la tête</u>
                    </strong>
                    : (Voir Schéma sur le protocole) et la mettre dans le sachet
                    correspondant au poisson
                </li>
                <li>
                    <strong>
                        <u>
                            +10 pts : Si toutes les infos d’un poisson sont
                            fournie
                        </u>
                    </strong>
                    : photo et/ou vidéo avec le poisson avec son étiquette
                    (correspondant au n° du tube) sur la balance
                </li>
            </ul>
            <h2 id="article_7">Article 7 - Comptabilisation des points</h2>

            <table className="text-surface min-w-full text-left text-sm font-light">
                <thead>
                    <tr>
                        <th className="bg-white">
                            Informations ou échantillons fournis
                        </th>
                        <th colSpan={7}>Calcul des points</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(table_values).map(([key, values]) => (
                        <tr key={key}>
                            <th>{key}</th>
                            {values.map((value, index) =>
                                key === 'Total' ? (
                                    <th key={index} className="">
                                        {value}
                                    </th>
                                ) : (
                                    <td
                                        key={index}
                                        className={value === 0 ? 'zero' : ''}
                                    >
                                        {value}
                                    </td>
                                )
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2 id="article_8">
                Article 8 - Enregistrements des prises - Réclamations
            </h2>

            <p>
                L’enregistrement de chaque prise sera validé par les
                organisateurs du projet après vérification des données à fournir
                ainsi que la réception du tube avec le morceau de nageoire.
            </p>
            <p>
                Un bonus de point sera validé par les organisateurs du projet
                après réception du sachet de tripes et/ ou de la tête du poisson
                et/ou du poids avec sa photo ou vidéo.
            </p>
            <p>
                Un bonus spécial de + 10 points sera attribué par les
                organisateurs du projet à tout participant qui fournira toutes
                les données requises qui correspond à un échantillonnage complet
                du poisson ou au don du poisson entier..
            </p>
            <p className="font-bold">
                Une mise à jour hebdomadaire sera effectuée via les réseaux
                sociaux dédiés et le site web du projet.
            </p>

            <h2 id="article_9">Article 9: Moyen de communication</h2>
            <p className="text-justify">
                Toute demande ou information à transmettre se fera par SMS,
                Whatsapp ou messenger. Les demandes seront traitées durant les
                jours ouvrés dans les journées (entre 9h et 17h). Les photos et
                les vidéos seront transmises par ces canaux (SMS, Whatsapp ou
                messenger).
                <span className="bg-red-600 font-bold underline">
                    Attention : à chaque vidéo ou photo l'étiquette du numéro
                    correspondant au tube d’échantillon doit apparaître avec le
                    poisson pour que celui-ci soit validé. Si il n’y a pas
                    d’étiquette avec le poisson, la vidéo ou la photo ne sera
                    pas prise en compte.
                </span>
            </p>
            <h2 id="article_10">Article 10: Modalités de Classement</h2>
            <p className="text-justify">
                Le classement sera établi par le comptage du total des points
                par pseudo à chaque semaine. A la fin du projet, les points
                seront comptabilisés pour chaque participant et le classement
                final sera établi.
            </p>
            <h2 id="article_11">Article 11: Récompense </h2>
            <p className="text-justify">
                Il faut mettre la liste des lots (t shirts, sacs étanches, lot
                final…) ici. Pour pouvoir gagner le lot final, il faut un
                minimum de points. Le cumul de ces points sera de à minima{' '}
                <span className="font-bold underline">300 pts</span>.
            </p>
            <h2 id="article_12">Article 12: Modification du règlement </h2>
            <p className="text-justify">
                A tout moment, les organisateurs du projet pourront modifier le
                règlement du projet pour s’adapter à de nouvelles conditions
                particulières. Les modifications seront communiquées à tous les
                participants via les plateformes de communication du projet (
                <Link href="#article_9">Article 9</Link>
                ).
            </p>
        </div>
    );
}
