import Image from 'next/image';

export function Tripes() {
    return (
        <section>
            <h1>Pourquoi nous voulons récupérer les tripes ?</h1>
            <p>
                Nous voulons récupérer les tripes pour pouvoir determiner le
                sexe et le stade de maturation du poisson.
            </p>
            <p>
                En effet les gonades se situe dans le ventre du poisson et sont
                généralement coller aux intestins proche de l’anus. Le sexe et
                la maturité sexuelle sont determiner à l’oeil nu grace a des
                protocoles internationnaux standardiser décrivant les stades de
                maturité des poissons. Le recueil de ces paramètre permet de
                calculer la taille de la première reproduction, d’estimer les
                périodes de reproduction, l’âge du changement de sexe….
            </p>
            <p>
                La particularité du mérou grand queue comme le tir bour est
                qu’il est hermaphrodite protogyne.
            </p>
            <p>
                Le poisson naît d’abord femelle puis devient mâle au cour de sa
                vie. Le declenchement du changement de sexe dépend de multiple
                facteurs biologiques et environnementaux.
            </p>
            <ul>
                <li>Acquisition d ’un certain poids et/ ou un certains âge</li>
                <li>
                    Organisation sociale du groupe : densité de population
                    inversion sexuelle afin de répondre au déséquilibre constant
                    du sex- ratio (pêche, prédation…)
                </li>
                <li>
                    Facteur environnementaux : Température, salinité, pollution
                </li>
            </ul>
            <Image
                src="/tripes.png"
                width={500}
                height={500}
                alt="Evolution des tripes en fonction du stade de maturité"
            />
        </section>
    );
}
