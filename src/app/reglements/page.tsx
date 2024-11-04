import "@/app/ui/reglements.css"
import Link from 'next/link'

export default function Page() {
    return (
        <div className='reglements sm:mx-20 mx-4'>
            <h1>1. CONDITIONS GÉNÉRALES </h1>

            <h2>Article 1 – Respect du Règlement</h2>
            <p>Si un concurrent a manqué d’observer un quelconque des articles de ce règlement, il sera disqualifié.</p>

            <h2>Article 2 – Conditions de Participation aux Concours</h2>
            <p>Le championnat est réservé à tout participant pêcheur non professionnel et/ou non guide de pêche.</p>
            <p>Le nombre de participants est limité à 100 personnes. Une fiche d’inscription sera à remplir obligatoirement par le concurrent pour obtenir le droit de concourir.</p>

            <h2>Article 3 – Information sur le concours</h2>
            <p>Le concours se déroulera du 15 octobre 2024 au 15 juin 2025</p>

            <h2>Article 4 - Inscription</h2>
            <p>Le concours est ouvert à toute personne majeure résidant à la Réunion. Le participant devra obligatoirement remplir une fiche d’inscription pour pouvoir participer à ce concours.</p>

            <h2>Article 5 - Lieux du concours</h2>
            <p>Pour être validé, le poisson devra obligatoirement provenir de la Réunion et du banc des 90 miles (Mont Lapérouse). Chaque concurrent doit respecter la réglementation maritime en vigueur et les zones protégées du parc marin de la Réunion.</p>
            <ul className={"list-disc list-inside"}>
                <li><Link href="https://www.reservemarinereunion.fr/wp-content/uploads/2020/09/Plaquette-peche-de-loisir.pdf">Réserve marine</Link></li>
            </ul>

            <h2>Article 6 – Validité des Prises</h2>
            <p>Pour cette étude il n’y a pas de limite de taille de capture dans un premier temps. </p>
            <p>En effet pour cette étude nous avons besoin de xx poissons de -25 cm. </p>
            <p>Une fois ce quota atteint, <strong>tout poisson en dessous de cette taille ne sera pas comptabilisé sauf si celui-ci est relâché</strong>.</p>
            <p>Pour ces poissons, un petit bout de nageoire et la longueur suffira pour obtenir un total des 60 pts.</p>
            <br />
            <p>Pour valider une prise, il faut impérativement fournir les informations suivantes : </p>
            <ul className={"list-disc list-inside"}>
                <li>Pseudo pêcheur</li>
                <li>Date de la prise</li>
                <li>Lieu de la prise (segmentation carte) + profondeur de capture</li>
                <li>Photo et/ou vidéo du poisson avec son étiquette (correspondant au n° du tube) avec la réunion en arrière plan</li>
                <li>Photo et/ou vidéo  du poisson avec son étiquette (correspondant au n° du tube) posé à plat sur la règle de mesure</li>
                <li>Mesure du poisson en cm</li>
                <li>PMorceau de nageoire dans le tube de stockage correspondant au numéro de l'étiquette du poisson</li>
            </ul>
            <br />
            <p>Pour valider des points Bonus, il faut impérativement fournir avec la même prise : </p>
            <ul className={"list-disc list-inside"}>
                <li><strong><u>+5 pts : Poids du poisson</u></strong> :  photo et/ou vidéo avec le poisson avec son étiquette (correspondant au n° du tube) sur la balance</li>
                <li><strong><u>+10 pts </u></strong> : L’ensemble des tripes de la cavité abdominale à prélever et mettre dans le sachet correspondant au poisson</li>
                <li><strong><u>+10 pts : Couper la tête</u></strong> : (Voir Schéma sur le protocole) et la mettre dans le sachet correspondant au poisson</li>
                <li><strong><u>+10 pts : Si toutes les infos d’un poisson sont fournie</u></strong> :  photo et/ou vidéo avec le poisson avec son étiquette (correspondant au n° du tube) sur la balance</li>
            </ul>
        </div>
    );
}