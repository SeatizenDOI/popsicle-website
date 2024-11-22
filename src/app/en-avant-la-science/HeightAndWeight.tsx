import Image from 'next/image';

export function HeightAndWeight() {
    return (
        <div>
            <p className="text-justify">
                La mesure de la taille du poisson est l’élément cruciale pour
                avoir un point de point de départ fiable d’une étude.{' '}
            </p>
            <p className="pt-4 text-justify">
                Le fait de peser et mesurer individuellement les poissons d'une
                espèce donnée permet de construire une relation entre la taille
                et le poids. Cette relation est ensuite appliquée aux poissons
                qui ne seront que mesurés afin d’estimer leur poids.{' '}
            </p>
            <p className="pt-4 text-justify">
                La mesure suit une méthode internationale standardisée. Il
                s’agit de la mesure Longueur - fourche (L.F).
            </p>
            <p className="py-4 text-justify">
                De plus, les mesures permettent également d’établir une courbe
                de croissance en fonction de l'âge, d’établir les tailles de
                première maturité sexuelle, les tailles de transition de sexe…
            </p>

            <div className="flex justify-between">
                <Image
                    src="/graph_taille_individu.png"
                    width={500}
                    height={500}
                    alt="Graphique montrant la relation entre la taille et le nombre d'individu."
                    className="h-fit w-1/2"
                />
                <Image
                    src="/lf_variola.png"
                    width={500}
                    height={500}
                    alt="Image pour mesurer la longueur fourche d'un variola "
                    className="h-fit w-1/2"
                />
            </div>
        </div>
    );
}
