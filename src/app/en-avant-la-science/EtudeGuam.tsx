import Image from 'next/image';

export function EtudeGUAM() {
    return (
        <section>
            <h1>
                Etude réalisé sur une île du pacifique (ile de GUAM) entre 2012
                et 2017, publié en 2023
            </h1>
            <p>
                Grace à la mesure du poisson, à la lecture de l’age par les
                otolithe et la determination du sexe et du stade de maturité
                avec les gonades, cette étude a été réalisé.
            </p>
            <Image
                src="/guam_fig1.png"
                width={500}
                height={500}
                alt="Image Variola Louti"
            />
            <p>
                Ce schéma représente la répartition des sexes en fonction de
                leur taille et de leurs âges. Il démontre l’hermaphrodisme de
                cette espece avec des individus qui ont changer de sexe en
                fonction de divers paramètre.
            </p>
            <Image
                src="/guam_fig2.png"
                width={500}
                height={500}
                alt="Image Variola Louti"
            />
            <p>
                Ce schéma représente la moyenne des première maturité sexuelle
                des poisson (LF50) Femelle : 26.5 cm - 2.5 ans Male : 35.5 cm -
                6 ans
            </p>
        </section>
    );
}
