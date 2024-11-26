import ImageContainer from '@/components/ImageContainer';

export function CKMR() {
    return (
        <div>
            <h2 className="text-center text-lg font-bold">
                Qu'est-ce qu'une structure de population révélée par la
                génétique.
            </h2>

            <p className="pt-4">
                Une structure de population génétique, c'est la façon dont la
                diversité génétique est organisée et distribuée au sein d'une
                espèce.
            </p>
            <p>Voici les points essentiels :</p>

            <ol className="m-4 list-decimal">
                <li className="pt-8 font-semibold">
                    Les informations qu'on peut obtenir :
                </li>
                <ul>
                    <li>La délimitation des sous-populations</li>
                    <li>
                        Le degré d'échange entre ces sous-populations (flux de
                        gènes)
                    </li>
                    <li>La diversité génétique dans chaque groupe</li>
                    <li>Les liens de parenté entre individus</li>
                    <li>L'histoire démographique des populations</li>
                </ul>
                <li className="pt-8 font-semibold">Les outils utilisés :</li>
                <ul>
                    <li>Marqueurs moléculaires : microsatellites, SNPs...</li>
                    <li>
                        ADN mitochondrial (pour suivre les lignées maternelles)
                    </li>
                    <li>Chromosome Y (pour suivre les lignées paternelles)</li>
                </ul>
                <li className="pt-8 font-semibold">Ce qu'on peut détecter :</li>
                <ul>
                    <li>
                        Des barrières à la dispersion (naturelles ou
                        artificielles)
                    </li>
                    <li>Des corridors de migration</li>
                    <li>Des goulots d'étranglement démographiques passés</li>
                    <li>Des événements de colonisation</li>
                    <li>Le degré d'isolement des populations</li>
                </ul>
                <li className="pt-8 font-semibold">Applications concrètes :</li>
                <ul>
                    <li>Définir des unités de conservation</li>
                    <li>Identifier des populations menacées</li>
                    <li>Gérer les programmes de reproduction</li>
                    <li>Comprendre l'impact des barrières physiques</li>
                </ul>
            </ol>

            <ImageContainer
                url="/structure_population.svg"
                title="Structure des populations en génétique"
            />

            <ol className="m-4 list-decimal">
                <li className="pt-8 font-semibold">L'espèce</li>
                <ul>
                    <li>
                        Représente l'ensemble des individus capables de se
                        reproduire entre eux
                    </li>
                    <li>Constitue le niveau taxonomique de base</li>
                </ul>
                <li className="pt-8 font-semibold">La métapopulation</li>
                <ul>
                    <li>Ensemble de populations interconnectées</li>
                    <li>
                        Les populations peuvent échanger des gènes entre elles
                    </li>
                    <li>
                        Système dynamique avec extinctions et recolonisations
                        locales
                    </li>
                </ul>
                <li className="pt-8 font-semibold">Les populations</li>
                <ul>
                    <li>
                        Groupes d'individus dans une zone géographique définie
                    </li>
                    <li>
                        Échangent des gènes plus fréquemment entre eux qu'avec
                        d'autres populations
                    </li>
                    <li>
                        Peuvent être isolées partiellement ou totalement
                        d'autres populations
                    </li>
                </ul>
                <li className="pt-8 font-semibold">Les sous-populations</li>
                <ul>
                    <li>Subdivisions d'une population principale</li>
                    <li>Partagent des caractéristiques génétiques communes</li>
                    <li>
                        Maintiennent un certain degré d'échange génétique avec
                        d'autres sous-populations
                    </li>
                </ul>

                <li className="pt-8 font-semibold">Les dèmes</li>
                <ul>
                    <li>Plus petite unité de reproduction locale</li>
                    <li>
                        Groupe d'individus qui se reproduisent
                        préférentiellement entre eux
                    </li>
                    <li>Forte probabilité de partage d'ancêtres communs</li>
                </ul>
            </ol>
        </div>
    );
}
