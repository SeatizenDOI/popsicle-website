import Image from 'next/image';

export default function EALS_TaillePoids() {
    return (
        <section>
            <h1>
                Pourquoi nous voulons récupérer la mesure précise et le poids du
                poisson ?
            </h1>

            <p>
                La mesure de la taille du poisson est l’élément cruciale pour
                avoir un point de point de départ fiable d’une étude.
            </p>

            <p>
                Le fait de peser et mesurer individuellement les poissons d'une
                espèce donnée permet de construire une relation entre la taille
                et le poids. Cette relation est ensuite appliquée aux poissons
                qui ne seront que mesurés afin d’estimer leur poids.{' '}
            </p>

            <p>
                La mesure suit une méthode internationnal standardiser. Il
                s’agit de la mesure Longueur - fourche (L.F).
            </p>

            <p>
                De plus, les mesure permettent également d’établir une courbe de
                croissance en fonction de l'âge, d’établir les taille de
                première maturité sexuelle, les tailles de transition de sexe…
            </p>

            <Image
                src="/graph_taille_individu.png"
                width={500}
                height={500}
                alt="Graphique montrant la relation entre la taille et le nombre d'individu."
            />
            <Image
                src="/lf_variola.png"
                width={500}
                height={500}
                alt="Image pour mesurer la longueur fourche d'un variola "
            />
        </section>
    );
}
