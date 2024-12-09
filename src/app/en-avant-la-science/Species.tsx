import Image from 'next/image';
import ImageContainer from '@/components/ImageContainer';

export function Species() {
    return (
        <div>
            <div className="flex flex-col sm:flex-row">
                <div>
                    <div className="flex justify-center">
                        <Image
                            src="/variolalouti.png"
                            width={256}
                            height={256}
                            alt="Image variola louti"
                            className="h-52 w-fit bg-slate-900 p-4"
                        />
                    </div>

                    <h2 className="p-4 text-center text-lg font-bold text-green-600">
                        Mérou croissant queue jaune
                    </h2>

                    <ul className="pr-0 sm:pr-8 xl:pr-32">
                        <li>
                            <span className="font-extralight">
                                Nom créole :{' '}
                            </span>
                            Grand Queue
                        </li>
                        <li>
                            <span className="font-extralight">
                                Nom scientifique :
                            </span>{' '}
                            <span className="italic">Variola louti</span>
                        </li>
                        <li>
                            <span className="font-extralight">
                                Taille maximal :
                            </span>{' '}
                            90 cm (LF)
                        </li>
                        <li>
                            <span className="font-extralight">
                                Distribution :{' '}
                            </span>
                            Zone tropicale Indo-Pacifique
                        </li>
                        <li>
                            <span className="font-extralight">Habitat : </span>{' '}
                            Zone de récif corallien, crête récifale et pente
                            externe- 2 à 300 m de profondeur
                        </li>
                        <li>
                            <span className="font-extralight">
                                Description :{' '}
                            </span>
                            Le grand queue présente un liserai jaune vif sur
                            l’échancrure de sa nageoire caudale
                        </li>
                        <li>
                            <span className="font-extralight">
                                Particularité :{' '}
                            </span>
                            Hermaphrodite protogyne
                        </li>
                    </ul>
                </div>

                <div>
                    <div className="flex justify-center">
                        <Image
                            src="/variolaalbimarginata_2.png"
                            width={256}
                            height={256}
                            alt="Image variola albimarginata"
                            className="h-52 w-fit bg-slate-900 p-4"
                        />
                    </div>
                    <h2 className="p-4 text-center text-lg font-bold text-red-600">
                        Mérou croissant queue blanche
                    </h2>

                    <ul className="pr-0 sm:pr-8 xl:pr-32">
                        <li>
                            <span className="font-extralight">
                                Nom créole :{' '}
                            </span>
                            Tire Boure
                        </li>
                        <li>
                            <span className="font-extralight">
                                Nom scientifique :{' '}
                            </span>

                            <span className="italic">
                                Variola albimarginata
                            </span>
                        </li>
                        <li>
                            <span className="font-extralight">
                                Taille maximal :{' '}
                            </span>
                            65 cm (LF)
                        </li>
                        <li>
                            <span className="font-extralight">
                                Distribution :{' '}
                            </span>
                            Zone tropicale Indo-Pacifique
                        </li>
                        <li>
                            <span className="font-extralight">Habitat : </span>
                            Zone de récif corallien, crête récifale et pente
                            externe- 2 à 200 m de profondeur
                        </li>
                        <li>
                            <span className="font-extralight">
                                Description :{' '}
                            </span>
                            Le tire boure présente un liserai blanc sur
                            l’échancrure de sa nageoire caudale
                        </li>
                        <li>
                            <span className="font-extralight">
                                Particularité :{' '}
                            </span>
                            Hermaphrodite protogyne
                        </li>
                    </ul>
                </div>
            </div>
            <div className="pt-8">
                <ImageContainer
                    url="/cycle_vie.jpg"
                    title="Cycle de vie d'un Croissant Queue Jaune"
                    onlyAlt={true}
                    className="my-12"
                />
            </div>
        </div>
    );
}
