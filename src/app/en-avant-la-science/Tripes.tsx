import ImageContainer from '@/components/ImageContainer';

export function Tripes() {
    return (
        <div>
            <p className="text-justify">
                Nous collectons les tripes pour déterminer le sexe et le stade
                de maturation du poisson.
            </p>
            <p className="pt-4 text-justify">
                En effet, les gonades se situent dans le ventre du poisson et
                sont généralement collées aux intestins, près de l’anus. Le sexe
                et la maturité sexuelle sont déterminés à l’œil nu grâce à des
                protocoles internationaux standardisés décrivant les stades de
                maturité des poissons. Ces paramètres permettent de calculer la
                taille de la première reproduction, d’estimer les périodes de
                reproduction et l’âge du changement de sexe, entre autres.
            </p>
            <p className="pt-4 text-justify">
                Comme de nombreux mérous, le mérou grand queue a la
                particularité d'être{' '}
                <span className="font-semibold">hermaphrodite protogyne</span>.
            </p>
            <p className="pt-4 text-justify">
                Le poisson naît femelle et devient mâle au cours de sa vie. Le
                déclenchement du changement de sexe dépend de multiples facteurs
                biologiques et environnementaux, tels que :
            </p>
            <ul className="p-4">
                <li>
                    l’acquisition d’un certain poids et/ou d’un certain âge,
                </li>
                <li>
                    l’organisation sociale du groupe : densité de population et
                    inversion sexuelle pour répondre au déséquilibre constant du
                    sex-ratio (pêche, prédation, etc.),
                </li>
                <li>
                    des facteurs environnementaux : température, salinité,
                    pollution...
                </li>
            </ul>
            <ImageContainer
                url="/tripes.svg"
                title="Evolution des gonades en fonction du sexe"
            />
        </div>
    );
}
