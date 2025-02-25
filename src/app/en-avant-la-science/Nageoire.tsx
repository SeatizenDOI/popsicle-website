import ImageContainer from '@/components/ImageContainer';

export function Nageoire() {
    return (
        <div>
            <p className="text-justify">
                Grâce au morceau de nageoire, nous pouvons extraire et analyser
                l'ADN du poisson. Cette analyse permet de :
            </p>
            <ul className="p-4">
                <li>Identifier et déterminer l'espèce du poisson </li>
                <li>
                    Étudier la structure de la population et la connectivité des
                    sous-populations vivant dans différentes zones
                    géographiques, afin de mieux comprendre les interdépendances
                    au sein des stocks
                </li>
                <li>
                    Utiliser une méthode génétique (CKMR) pour estimer le nombre
                    d'individus adultes dans une population
                </li>
                <li>
                    Développer de nouvelles techniques pour déterminer l’âge et
                    le sexe des poissons (actuellement en cours de recherche)
                </li>
            </ul>
            <ImageContainer
                url="/genet_nageoire.jpg"
                title="Explication de l'utilité d'une nageoire dans la génétique"
                onlyAlt={true}
                className="my-12"
            />

            <div className="mt-12">
                <h1 className="my-4 text-center text-lg font-bold">
                    Le mérou à croissant queue jaune (
                    <span className="italic">Variola louti</span> ) nous raconte
                    son histoire : des pêcheurs aux généticiens !
                </h1>
                <h2 className="m-4 text-lg font-semibold">
                    {' '}
                    Qui vit où ? (Structure de population) : Les secrets
                    familiaux des mérous.
                </h2>
                <p className="px-4 pb-4 text-justify">
                    Imaginez que les mérous grande queue jaune soient comme les
                    habitants de différents villages. Grâce aux échantillons
                    prélevés par les pêcheurs (un petit morceau de nageoire ou
                    de muscle), les scientifiques peuvent lire leur ADN comme
                    dans un livre d’histoire. Que nous raconte ce livre ?
                </p>
                <p className="px-4 pb-4 text-justify">
                    Il nous révèle, par exemple, que les mérous du nord de
                    Madagascar forment <strong> peut-être </strong> une grande
                    famille qui se mélange peu avec leurs cousins des
                    Seychelles. Chaque région pourrait ainsi avoir sa propre
                    "famille" de mérous, avec des caractéristiques génétiques
                    uniques.
                </p>
                <p className="px-4 pb-4 text-justify">
                    Ces informations sont précieuses pour les scientifiques :
                    elles permettent d’identifier les zones où vivent des
                    populations distinctes, de mieux comprendre les déplacements
                    des poissons entre les zones de pêche et de repérer les
                    groupes isolés qui pourraient être plus vulnérables.
                </p>

                <ImageContainer
                    url="/struc_pop.jpg"
                    title="Image montrant une structure de population"
                    onlyAlt={true}
                    className="my-12"
                />

                <h2 className="m-4 text-lg font-semibold">
                    Mais combien sont-ils vraiment ? La méthode "close-kin
                    mark-recapture" (CKMR)
                </h2>
                <p className="px-4 pb-4 text-justify">
                    Imaginez que chaque fois qu’un pêcheur attrape un mérou, on
                    effectue un petit test ADN. Au fil des captures, on commence
                    à découvrir des poissons qui sont apparentés : un père et
                    son petit, deux frères, une grand-mère et sa petite-fille...
                    C’est un peu comme dans un village : plus il est petit, plus
                    vous avez de chances de croiser des membres d’une même
                    famille.
                </p>
                <p className="px-4 pb-4 text-justify">
                    Ainsi, si les pêcheurs trouvent beaucoup de mérous
                    apparentés, cela suggère une population réduite. En
                    revanche, si les liens de parenté sont rares, cela indique
                    probablement une population plus grande. Plutôt malin, non ?
                </p>
                <ImageContainer
                    url="/metho_ckmr.jpg"
                    title="Principe du CKMR"
                    onlyAlt={true}
                    className="my-12"
                />
            </div>
        </div>
    );
}
