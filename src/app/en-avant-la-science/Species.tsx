import Image from 'next/image';

export function Species() {
    return (
        <div>
            <h1 className="text-center">
                Osteichthyes Serranidae Genre Variola
            </h1>
            <div className="flex flex-col sm:flex-row">
                <div className="border">
                    <Image
                        src="/variolalouti.png"
                        width={256}
                        height={256}
                        alt="Image variola louti"
                        className="w-full bg-slate-900 p-4"
                    />

                    <h2 className="p-4 text-center text-lg font-bold">
                        Mérou croissant queue jaune
                    </h2>

                    <ul>
                        <li>Nom créole: Grand queue</li>
                        <li>Nom scientifique : Variola louti</li>
                        <li>Taille max : 90 cm (LF)</li>
                        <li>Distribution : Zone tropical Indo-Pacifique</li>
                        <li>
                            Habitat: Zone de récif corallien, crête récifale et
                            pente externe- 2 à 250 m de profondeur
                        </li>
                        <li>
                            Description : Le grand queue présente un liserai
                            jaune vif sur l’échancrure de sa nageoire caudale
                        </li>
                    </ul>
                </div>

                <div>
                    <Image
                        src="/variolaalbimarginata_2.png"
                        width={256}
                        height={256}
                        alt="Image variola albimarginata"
                        className="w-full bg-slate-900 p-4"
                    />
                    <h2 className="p-4 text-center text-lg font-bold">
                        Mérou croissant queue blanche
                    </h2>

                    <ul>
                        <li>Nom créole: Ti bour</li>
                        <li>Nom scientifique : Variola albimarginata</li>
                        <li>Taille max : 65 cm (LF)</li>
                        <li>Distribution : Zone tropical Indo-Pacifique</li>
                        <li>
                            Habitat: Zone de récif corallien, crête récifale et
                            pente externe- 2 à 250 m de profondeur
                        </li>
                        <li>
                            Description : Le tir bour présente un liseraie blanc
                            sur l’échancrure de sa nageoire caudale
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
