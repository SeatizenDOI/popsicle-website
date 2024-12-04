import ImageContainer from '@/components/ImageContainer';

export function HeightAndWeight() {
    return (
        <div>
            <p className="text-justify">
                La mesure de la taille du poisson est un élément clé pour
                établir une base fiable pour toute étude.
            </p>
            <p className="pt-4 text-justify">
                En pesant et mesurant individuellement les poissons d’une
                espèce, il est possible de définir une relation taille-poids.
                Cette relation permet ensuite d’estimer le poids des poissons
                uniquement mesurés.
            </p>
            <p className="pt-4 text-justify">
                La méthode utilisée est standardisée à l’échelle internationale
                : il s’agit de la Longueur - fourche (L.F).
            </p>

            <ImageContainer
                url="/lf_variola.svg"
                title="Mesure de la Longueur - fourche sur un Croissant Queue Jaune."
            />
            <p className="py-4 text-justify">
                Ces mesures servent également à construire une courbe de
                croissance en fonction de l’âge, à déterminer les tailles de
                première maturité sexuelle, les tailles de transition de sexe,
                et bien d’autres paramètres biologiques essentiels.
            </p>
        </div>
    );
}
