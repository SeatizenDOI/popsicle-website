import '@/app/ui/reglements.css';
import Link from 'next/link';
import type { Metadata } from 'next';
import PrimaryButton from '@/components/PrimaryButton';
import ImageContainer from '@/components/ImageContainer';

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
                Tout participant s’engage à respecter l’ensemble des articles du
                présent règlement.
            </p>
            <p className="text-justify">
                En cas de non-respect d’une règle, les organisateurs du projet
                se réservent le droit de <b>disqualifier immédiatement</b> le
                participant concerné.
            </p>
            <p className="text-justify">
                Une notification officielle sera envoyée au participant via les
                <b> plateformes de communication du projet</b> (voir{' '}
                <Link href="#article_9">Article 9</Link>).
            </p>
            <h2 id="article_2">
                Article 2 – Conditions de Participation au Projet
            </h2>
            <ol>
                <li>
                    <b>Eligibilité</b>
                </li>
                <ul className="ml-4">
                    <li>
                        La participation est ouverte à toute personne majeure
                        résidant à La Réunion.
                    </li>
                    <li>
                        Seuls les pêcheurs non professionnels en bateau ou en
                        kayak ou à la côte peuvent participer.
                    </li>
                    <li>
                        Les pêcheurs professionnels sont exclus du projet
                        cependant il est possible que l’équipe SIH de l’IFREMER
                        puisse vous racheter vos rouges grand queue. Pour plus
                        d'informations : 02 62 43 36 84 ;
                        hugues.evano@ifremer.fr
                    </li>
                </ul>
                <li className="font-bold">Inscriptions</li>
                <ul className="ml-4">
                    <li>
                        Le nombre de participants est limité à{' '}
                        <b>250 personnes</b>.
                    </li>
                    <li>
                        L'inscription est obligatoire et se fait via une{' '}
                        <Link
                            href="https://forms.ifremer.fr/rbe/popsicle/"
                            className="font-bold text-primary_orange"
                        >
                            <b>fiche d’inscription</b>
                        </Link>
                        .
                    </li>
                    <li>
                        Les <b>250 premiers inscrits</b> seront retenus pour
                        participer.
                    </li>
                </ul>
                <li className="font-bold">Participation en équipe</li>
                <ul className="ml-4">
                    <li>
                        Un participant peut être une personne <b>seule</b> ou un{' '}
                        <b>groupe</b>
                        (équipe).
                    </li>
                    <li>
                        En cas de participation en équipe, une{' '}
                        <b>seule personne physique</b> sera désignée comme
                        référente et responsable de la communication avec les
                        organisateurs.
                    </li>
                    <li>
                        Les <b>récompenses</b> (
                        <Link href="#article_11">Article 11</Link>) seront
                        attribuées au participant référent, même en cas de
                        participation en équipe.
                    </li>
                </ul>
                <li className="font-bold">Indemnisation</li>
                <ul className="ml-4">
                    <li>
                        Les participants accumuleront des points en fonction des
                        échantillons et des informations fournies (voir{' '}
                        <Link href="#article_7">Article 7</Link>). Ces points
                        seront convertis en <b>bons d’achat </b> qui seront
                        distribués selon un <b>système de points défini</b>.
                    </li>
                </ul>
                <li className="font-bold">Confidentialité</li>
                <ul className="ml-4">
                    <li>
                        Aucune donnée individuelle ou personnelle ne sera
                        partagée.
                    </li>
                </ul>
            </ol>
            <h2 id="article_3">Article 3 – Durée</h2>
            <p>
                Le projet se déroulera <b>du 1 Mars au 15 juin 2025</b>.
            </p>
            <p className="text-justify">
                Toutefois, si <b>300 poissons</b> sont capturés avant la date de
                fin prévue, le projet prendra fin <b>de manière anticipée</b>.
                Dans ce cas, une annonce officielle sera faite aux participants
                via les
                <b> réseaux sociaux du projet</b>.
            </p>
            <h2 id="article_4">Article 4 - Inscription</h2>
            <p className="text-justify">
                Pour participer, chaque pêcheur doit obligatoirement remplir une
                <b> fiche d’inscription</b>.
            </p>
            <p>L’inscription peut se faire :</p>
            <ol className="ml-4">
                <li>
                    <b>En ligne</b>, via le site web du projet (lien à insérer).
                </li>
                <li>
                    <b>Par envoi manuel</b>, en transmettant la fiche
                    d’inscription annexée à ce règlement aux organisateurs via
                    les <b>outils de communication proposés</b> (WhatsApp et
                    Messenger).
                </li>
            </ol>
            <p>
                Aucune participation ne sera acceptée sans inscription
                préalable.
            </p>
            <h2 id="article_5">Article 5 - Lieu du projet</h2>
            <p className="text-justify">
                Pour être <b>validé</b>, chaque poisson capturé doit provenir
                des zones suivantes :
            </p>
            <ol className="ml-4">
                <li className="font-bold">La Réunion</li>
                <li className="font-bold">
                    Le banc des 90 miles (Mont Lapérouse)
                </li>
            </ol>
            <p className="text-justify">
                La capture doit avoir lieu <b>durant la période du projet </b> (
                <Link href="#article_3">Article 3</Link>).
            </p>
            <p className="text-justify">
                La <b>vérification du lieu de capture</b> sera réalisée via les{' '}
                <b> photos et vidéos</b> prises par le participant (voir{' '}
                <Link href="#article_6">Article 6</Link>).
            </p>
            <br />
            <p className="text-justify">
                Chaque participant s’engage à respecter :
            </p>
            <ul className="ml-4">
                <li>
                    {' '}
                    <b>La réglementation maritime en vigueur</b> (consulter le
                    site de la{' '}
                    <Link
                        href="https://docs.google.com/forms/d/e/1FAIpQLSedBqQrLrL93RY3YVnp3zKsyw-YRPzxW25fO0Um3pxvdGEGzA/viewform"
                        className="font-bold text-primary_orange"
                    >
                        site de la DMSOI
                    </Link>
                    )
                </li>
                <li>
                    <b>Les restrictions des zones protégées</b> de la{' '}
                    <Link
                        href="https://www.reservemarinereunion.fr/wp-content/uploads/2020/09/Plaquette-peche-de-loisir.pdf"
                        className="font-bold text-primary_orange"
                    >
                        Réserve marine de La Réunion
                    </Link>
                </li>
            </ul>
            <h2 id="article_6">Article 6 – Validité des Prises</h2>
            <p className="text-justify">
                Pour valider une prise, le poisson pêché et échantillonné doit
                être un Grand Queue et non un Tire Boure.
            </p>

            <p className="text-justify">
                ⚠ <b>Rappel</b> : Le projet prendra fin dès que{' '}
                <b>300 poissons</b> auront été enregistrés, même si la date
                limite du <b>15 juin 2025</b> n'est pas atteinte. Une
                communication officielle sera faite aux participants lorsque
                cette limitation sera atteinte.
            </p>
            <h2 id="article_6_1">
                Article 6.1 – Conditions de Validation d’une Prise
            </h2>
            <p className="text-justify">
                Pour <b>valider une prise</b>, le participant doit
                obligatoirement transmettre les éléments suivants via un des{' '}
                <b>outils de communication</b> mis à disposition (
                <Link href="#article_9">Article 9</Link>) :
            </p>
            <ul className="ml-4">
                <li className="font-bold">Pseudo pêcheur</li>
                <li className="font-bold">Date de la prise</li>
                <li className="font-bold">
                    <b>Lieu de la prise</b> (cf. carte des zones) +{' '}
                    <b>profondeur de capture</b>
                </li>
                <li>
                    <b>Photo et/ou vidéo du poisson</b> avec son{' '}
                    <b>étiquette</b>
                    (correspondant au n° du tube) avec La Réunion en arrière
                    plan <b>ou</b> la <b>carte GPS</b> (sur le banc des 90)
                </li>
                <li>
                    <b>Photo et/ou vidéo du poisson</b> avec son{' '}
                    <b>étiquette</b>
                    (correspondant au n° du tube) posé à <b>plat</b> sur la
                    règle de mesure
                </li>
                <li className="font-bold">Mesure du poisson en cm</li>
                <li>
                    <b>Morceau de nageoire caudale</b> (identique à la
                    réglementation en vigueur) dans le{' '}
                    <b>
                        tube de stockage correspondant au numéro de l'étiquette
                        du poisson
                    </b>
                </li>
            </ul>
            <p className="text-justify font-bold">
                ✅ Ces éléments permettent d’obtenir 25 points.
            </p>
            <h2 id="article_6_2">Article 6.2 – Points Bonus</h2>
            <p className="text-justify">
                Des points supplémentaires peuvent être obtenus en fournissant
                des éléments complémentaires avec la même prise :
            </p>
            <table className="w-full table-auto border-collapse border border-gray-300 text-left">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">
                            Bonus
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                            Conditions
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                            Points
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">
                            Poids du poisson
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                            Photo et/ou vidéo du poisson avec son étiquette sur
                            une balance
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                            +5 pts
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">
                            Tripes
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                            L’ensemble des tripes de la cavité abdominale,
                            placées dans le sachet correspondant (les gonades
                            sont particulièrement importantes)
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                            +10 pts
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">
                            Tête du poisson
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                            Tête coupée selon le protocole et placée dans le
                            sachet correspondant
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                            +10 pts
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">
                            Poisson entier
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                            Poisson entier donné suivant le protocole
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                            50 pts
                        </td>
                    </tr>
                </tbody>
            </table>
            <p className="text-justify">
                📌 Les protocoles détaillés sont disponibles ici : 🔗
                https://popsicle.ifremer.re/protocoles
            </p>
            <h2 id="article_7">Article 7 - Comptabilisation des Points</h2>
            <p className="text-justify">
                Les points sont attribués en fonction des informations et
                échantillons fournis par le participant.
            </p>
            <h3 className="my-4 text-lg font-bold">Barème de points</h3>
            <p className="mb-4">
                Les points sont attribués en fonction des informations et
                échantillons fournis par le participant.
            </p>
            <table className="mb-6 w-full border-collapse border border-gray-300 text-left">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">
                            Élément fourni
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                            Points attribués
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">
                            Données de base (
                            <Link href="#article_6_1">Article 6.1</Link> :
                            pseudo, date, lieu, profondeur, photos, longueur,
                            morceau de nageoire caudale...)
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                            25 pts
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">
                            Poids (photo/vidéo sur balance avec étiquette
                            visible)
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                            +5 pts
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">
                            Tripes (placées dans le sachet correspondant,
                            incluant les gonades)
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                            +10 pts
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">
                            Tête (coupée selon protocole et placée dans le
                            sachet correspondant)
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                            +10 pts
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">
                            Poisson entier (échantillon fourni en totalité)
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                            50 pts
                        </td>
                    </tr>
                </tbody>
            </table>
            <h3 className="mb-2 text-lg font-bold">Exemples de calculs</h3>
            <ul className="mb-6 list-disc pl-6">
                <li>✅ Données de base uniquement → 25 pts</li>
                <li>✅ Données de base (25 pts) + poids (+5 pts) → 30 pts</li>
                <li>
                    ✅ Données de base (25 pts) + tête (+10 pts) + tripes (+10
                    pts) → 45 pts
                </li>
                <li>
                    ✅ Données de base (25 pts) + poids (+5 pts) + tripes (+10
                    pts) + tête (+10 pts) = échantillonnage complet → 50 pts
                </li>
            </ul>
            <h3 className="mb-2 text-lg font-bold text-red-600">
                ⚠ Rappel important
            </h3>
            <p className="mb-4">
                Pour valider un poisson, chaque vidéo ou photo doit
                impérativement montrer l’étiquette avec le numéro correspondant
                au tube d’échantillon.
            </p>
            <p className="font-bold">
                ➡ Sans étiquette visible, la vidéo/photo ne sera pas prise en
                compte.
            </p>
            <h2 id="article_8">
                Article 8: Enregistrement des Prises et Réclamations
            </h2>
            <h3 className="mt-6 text-lg font-bold">
                📋 L’enregistrement des prises
            </h3>
            <p className="mb-2">
                L’enregistrement des prises se fera après validation des
                éléments suivants par les organisateurs :
            </p>
            <ul className="mb-6 list-disc pl-6">
                <li>
                    1️⃣ Vérification des données transmises (voir{' '}
                    <Link href="#article_6">Article 6</Link>).
                </li>
                <li>2️⃣ Réception du tube contenant le morceau de nageoire.</li>
                <li>
                    3️⃣ Vérification et réception des éléments bonus (sachet de
                    tripes, tête, poids avec photo/vidéo).
                </li>
            </ul>
            <h3 className="mb-2 text-lg font-bold text-blue-600">
                📩 Réclamations
            </h3>
            <p>
                Les réclamations doivent être envoyées par SMS, WhatsApp ou
                Messenger (voir <Link href="#article_9">Article 9</Link>).
            </p>
            <h2 id="article_9">Article 9: Moyen de communication</h2>
            <h3 className="mb-2 text-lg font-bold">
                📬 Transmission des informations et demandes
            </h3>
            <ul className="ml-4">
                <li>
                    Tous les échanges avec les organisateurs se feront par SMS,
                    WhatsApp ou Messenger.
                </li>
                <li>
                    Les demandes seront traitées les jours ouvrés, entre 9h et
                    17h.
                </li>
                <li>
                    Les photos et vidéos des prises doivent être transmises via
                    ces mêmes canaux.
                </li>
            </ul>

            <h3 className="mb-2 text-lg font-bold text-red-600">
                ⚠ Rappel important
            </h3>
            <p className="mb-4">
                À chaque vidéo ou photo, l’étiquette avec le numéro du tube
                d’échantillon doit être clairement visible avec le poisson.
            </p>
            <p className="font-bold">
                ➡ Sans étiquette visible, la vidéo/photo ne sera pas prise en
                compte.
            </p>

            <h2 id="article_10">Article 10: Récompenses</h2>
            <p className="text-justify">
                Les participants accumulent des points en fonction des
                échantillons et des informations fournies (voir{' '}
                <Link href="#article_7">Article 7</Link>). Ces points seront
                ensuite convertis en bons d’achat utilisables auprès des
                partenaires du projet.
            </p>
            <p className="mb-4">
                Les participants accumulent des points en fonction des
                échantillons et des informations fournies (
                <Link href="#article_7">Article 7</Link>). Ces points seront
                ensuite convertis en bons d’achat utilisables auprès des
                partenaires du projet.
            </p>

            <h3 className="mb-2 text-lg font-bold">
                10.1 Attribution des récompenses
            </h3>
            <p className="mb-4">
                Un seuil minimum de points devra être atteint pour prétendre à
                une récompense. À chaque palier atteint, le participant recevra
                un bon d’achat d’une valeur correspondante.
            </p>
            <p className="mb-4 font-bold">Calcul de la récompense :</p>
            <p className="mb-4">10 points = 1 €</p>
            <p className="mb-6">
                Exemple : Si un participant atteint 50 points, il recevra un bon
                d'achat de 5 €.
            </p>

            <h3 className="mb-2 text-lg font-bold">
                10.2 Modalités de distribution
            </h3>
            <p className="mb-4">
                Les bons d’achat seront distribués à la fin du projet soit à
                partir du 30 juin 2025.
            </p>
            <p className="mb-6">
                Les participants seront informés de leur solde de points et de
                la distribution des bons via les plateformes de communication du
                projet (<Link href="#article_9">Article 9</Link>).
            </p>

            <h3 className="mb-2 text-lg font-bold text-red-600">
                10.3 Cas particuliers
            </h3>
            <p className="mb-4">
                Toute tentative de fraude ou de non-respect du règlement
                entraînera une exclusion du programme et l’annulation des
                récompenses obtenues.
            </p>

            <h2 id="article_11">Article 11: Modification du Règlement </h2>
            <p className="text-justify">
                Les organisateurs du projet se réservent le droit de{' '}
                <b>modifier le règlement à tout moment</b> afin de s’adapter à
                d’éventuelles
                <b> nouvelles conditions</b>.
            </p>
            <p className="text-justify">
                Toute modification du règlement sera{' '}
                <b>communiquée aux participants</b> via les{' '}
                <b>plateformes de communication officielles du projet</b> (
                <Link href="#article_9">Article 9</Link>
                ).
            </p>
            <div className="flex flex-col">
                <h2 className="self-center">
                    Vous avez tout lu ? Alors foncez
                </h2>
                <div className="mt-2 self-center">
                    <PrimaryButton
                        link_ref={'https://forms.ifremer.fr/rbe/popsicle/'}
                        name={'Inscrivez-vous'}
                        new_page={true}
                    />
                </div>
            </div>
        </div>
    );
}
