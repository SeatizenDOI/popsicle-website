import Image from 'next/image';

export function Otolithes() {
    return (
        <div>
            <p className="text-justify">
                Les otolithes permettent de connaître l'âge et déterminer la
                croissance du poisson. Il s’agit de concrétions calcaire qui se
                trouvent dans l’oreille interne du poisson. Cela lui permet de
                s’orienter dans l’espace et de percevoir les sons et les
                vibrations. Il y a 3 paires, on ne garde que la grande qui
                s’appelle la Sagitae. Pour déterminer l’âge du poisson, on
                compte les stries claires et sombres comme les cernes sur la
                souche d’un arbre.
            </p>
            <div className="flex flex-col justify-between border pt-4 sm:flex-row">
                <Image
                    src="/Otolithe_1.png"
                    width={500}
                    height={500}
                    alt="Description position otolithes"
                    className="h-fit w-1/2"
                />

                <Image
                    src="/Otolithe_2.png"
                    width={500}
                    height={500}
                    alt="Comparaison otolithe et arbre"
                    className="h-fit w-1/2"
                />
            </div>
        </div>
    );
}
