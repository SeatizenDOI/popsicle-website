import Image from 'next/image';

export function Nageoire() {
    return (
        <div>
            <p className="text-justify">
                Grâce au morceau de nageoire, nous pouvons extraire et analyser
                l’ADN du poisson. Grâce à cette ADN, nous pouvons :
            </p>
            <ul className="p-4">
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
                    Développer de nouvelle techique de détermination de l’age et
                    du sexe (actuellement en cours de recherche) grâce à l’ADN.
                </li>
            </ul>
            <div className="flex justify-center">
                <Image
                    src="/method_ckmr_2.png"
                    width={500}
                    height={500}
                    alt="Identification paires avec le CKMR"
                    className="h-fit w-2/3"
                />
            </div>
            <div>
                <h1 className="my-4 text-center text-lg font-bold">
                    Le mérou à croissant queue jaune (
                    <span className="italic">Variola louti</span>) nous raconte
                    son histoire : des pêcheurs aux généticiens !
                </h1>

                <h2 className="m-4 text-sm font-semibold">
                    {' '}
                    Qui vit où ? (Structure de population) : Les secrets
                    familiaux des mérous.
                </h2>
                <p className="pb-4 text-justify">
                    Imaginez que les mérous croissant queue jaune soient comme
                    les habitants de différents villages. Grâce aux échantillons
                    prélevés par les pêcheurs (un petit morceau de nageoire ou
                    de muscle), les scientifiques peuvent lire dans leur ADN
                    comme dans un livre d'histoire. Que nous raconte ce livre ?
                    Il nous révèle par exemple que les mérous du nord de
                    Madagascar forment peut-être une grande famille qui se
                    mélange peu avec leurs cousins ou voisins des Seychelles.
                    C'est comme si chaque région avait sa propre "famille" de
                    mérous, avec ses caractéristiques génétiques particulières.
                    Ces informations sont en or pour les scientifiques : On peut
                    identifier les zones où vivent des populations distinctes On
                    comprend mieux les déplacements des poissons entre les zones
                    de pêche On repère les groupes isolés qui pourraient être
                    plus fragiles
                </p>
                <h2 className="m-4 text-sm font-semibold">
                    Mais combien sont-ils vraiment ? La méthode "close-kin
                    mark-recapture" (CKMR)
                </h2>
                <p className="pb-4 text-justify">
                    Imaginez que chaque fois qu'un pêcheur attrape un mérou, on
                    fait un petit test ADN. Au fil des captures, on commence à
                    trouver des poissons qui sont parents entre eux : un père et
                    son petit, deux frères, une grand-mère et sa fille... C'est
                    un peu comme dans un village : plus il est petit, plus vous
                    avez de chances de croiser des membres d'une même famille.
                    Donc, si les pêcheurs trouvent beaucoup de mérous
                    apparentés, cela suggère une petite population. Au
                    contraire, si les liens de parenté sont rares, c'est que la
                    population est probablement plus grande. C'est malin, non ?
                </p>
            </div>
        </div>
    );
}
