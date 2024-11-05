import Image from 'next/image';

export default function EALS_Nageoire() {
    return (
        <section>
            <h1>Pourquoi nous voulons récupérer un morceau de nageoire ?</h1>
            <p>
                Grâce au morceau de nageoire, nous pouvons extraire et analyser
                l’ADN du poisson. Grâce à cette ADN, nous pouvons :
            </p>
            <ul>
                <li>Identifier et déterminer l'espèce du poisson concerné. </li>
                <li>
                    Déterminer la structure de la population et la connectivité
                    des sous populations vivant dans des zones géographique
                    différente et ainsi comprendre les inter dépendance au sein
                    des stocks.
                </li>
                <li>
                    Utiliser une méthode génétique pour estimer le nombre
                    d'individus adultes dans une population de poissons marins
                    (CKMR)
                </li>
                <li>
                    Develloper de nouvelle techique de détermination de l’age et
                    du sexe (actuellement en cours de recherche) grâce à l’ADN.
                </li>
            </ul>
            <Image
                src="/methode_ckmr.png"
                width={500}
                height={500}
                alt="Identification paires avec le CKMR"
            />
        </section>
    );
}
