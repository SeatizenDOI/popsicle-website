import Image from 'next/image';

export default function EALS_CKMR() {
    return (
        <section>
            <p>
                Le CKMR, ou "Close-Kin Mark-Recapture" (capture-recapture de
                proches parents), est une méthode génétique utilisée pour
                estimer la taille et la dynamique d'une population en se basant
                sur les relations familiales entre les individus. C'est une
                technique particulièrement utile en écologie et en gestion des
                ressources marines et terrestres.
            </p>

            <p>
                En gros, le CKMR se base sur le fait qu'en analysant l'ADN d'un
                échantillon d'individus, on peut parfois détecter des relations
                familiales entre eux (comme des relations parent-enfant,
                frère-sœur, etc.). Avec ces relations de parenté, il est
                possible de faire des estimations de population sans avoir
                besoin de suivre physiquement chaque individu, ce qui est
                souvent difficile voire impossible pour des espèces marines ou
                des animaux sauvages.
            </p>

            <ul>
                <li>
                    Collecte d'échantillons d'ADN : On recueille des
                    échantillons d'ADN d'un groupe d'individus dans une
                    population.
                </li>
                <li>
                    Analyse génétique : En laboratoire, on étudie les profils
                    génétiques pour détecter des paires d'individus apparentés,
                    comme des parents et leurs enfants.
                </li>
                <li>
                    Détection des paires de proches parents : Grâce à des
                    algorithmes, on identifie les paires de proches parents.
                </li>
                <li>
                    Modélisation : Avec les données sur ces relations, les
                    scientifiques appliquent des modèles statistiques pour
                    estimer la taille de la population, sa structure, et
                    d'autres dynamiques.
                </li>
            </ul>
            <Image
                src="/ckmr.png"
                width={500}
                height={500}
                alt="Identification paires avec le CKMR"
            />
        </section>
    );
}
