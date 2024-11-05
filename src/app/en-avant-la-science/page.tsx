import Image from 'next/image'
export default function Page() {
    return (
        <div>
            <section className='p-6'>

                <h1 className='text-center font-bold text-4xl mb-6'>Espèce du genre Variola</h1>

                <div className='flex flex-wrap justify-between'>
                    <div className='border-4 rounded-md border-red-600 flex flex-col items-center justify-center py-6 max-w-screen-md'>
                        <h2 className='text-center font-bold text-2xl mb-6 italic'>Variola louti</h2>
                        <Image
                            src="/variolalouti.png"
                            width={500}
                            height={500}
                            alt="Image Variola Louti"
                        />
                        <ul className='list-disc list-inside px-4'>
                            <li><span className="underline">Nom commun</span>: Mérou croissant queue jaune</li>
                            <li><span className="underline">Nom créole</span>: Grand queue</li>
                            <li><span className="underline">Taille maximal</span>: 90 cm (LF)</li>
                            <li><span className="underline">Distribution</span>: Zone tropicale Indo-Pacifique</li>
                            <li><span className="underline">Habitat</span>: Zone de récif coralien, crête récifale et pente externe - 2 à 250 m de profondeur</li>
                            <li className='text-sky-600'><span className="underline">Caractéristique</span>: Le grand queue présente <span className='font-bold underline text-red-600'>un liseraie jaune vif</span> sur l’échancrure de sa nageoire caudale.</li>
                        </ul>
                        <div className='p-4'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper porta dignissim. Aenean ac est ut libero aliquet tincidunt. Quisque dapibus rhoncus sapien, ac ultrices eros ullamcorper vitae. Nunc eget lorem eget augue rhoncus accumsan nec vitae nibh. Proin quam diam, convallis at orci nec, feugiat auctor lectus. In vestibulum, diam interdum dapibus eleifend, nunc neque efficitur arcu, in facilisis diam libero in turpis. Suspendisse lacinia, magna eget consectetur viverra, erat justo eleifend enim, ac bibendum leo ex eget nibh. Nam pellentesque velit ut sem feugiat efficitur. Ut ex sem, fringilla vel interdum sit amet, porta vel justo. Suspendisse mi sapien, laoreet eu eleifend nec, rhoncus id tortor. In auctor commodo odio in iaculis. Aenean vel diam turpis. Duis quis mauris lacus. Vestibulum eu nisi ipsum. Vestibulum interdum sapien sit amet turpis pharetra, sed egestas odio varius.
                            </p>
                            <p>
                                Nulla gravida venenatis fringilla. Aliquam ac mauris dictum, faucibus tortor ut, dictum dolor. Quisque eget nibh lacinia, vehicula magna ut, faucibus mauris. Etiam finibus felis libero, id tincidunt est faucibus a. Maecenas eget dapibus ipsum. Morbi pellentesque lectus erat, ac bibendum enim rhoncus ac. Sed porttitor a est a faucibus. Duis elit nulla, faucibus sed faucibus eu, auctor congue nulla. Pellentesque vitae consectetur mauris.
                            </p>
                        </div>
                    </div>
                    <div className='border-4 rounded-md border-red-600 flex flex-col items-center justify-center py-6 max-w-screen-md'>
                        <h2 className='text-center font-bold text-2xl mb-6 italic'>Variola albimarginata</h2>
                        <Image
                            src="/variolaalbimarginata.png"
                            width={500}
                            height={500}
                            alt="Image Variola albimarginata"
                        />
                        <ul className='list-disc list-inside p-4'>
                            <li><span className="underline">Nom commun</span>: </li>
                            <li><span className="underline">Nom créole</span>: TirBour</li>
                            <li><span className="underline">Taille maximal</span>: 65 cm (LF)</li>
                            <li><span className="underline">Distribution</span>: Zone tropicale Indo-Pacifique</li>
                            <li><span className="underline">Habitat</span>: Zone de récif coralien, crête récifale et pente externe - 2 à 250 m de profondeur</li>
                            <li className='text-sky-600'><span className="underline">Caractéristique</span>: Le tir bour présente <span className='font-bold underline text-red-600'>un liseraie blanc</span> sur l’échancrure de sa nageoire caudale.</li>
                        </ul>
                        <div className='p-4'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper porta dignissim. Aenean ac est ut libero aliquet tincidunt. Quisque dapibus rhoncus sapien, ac ultrices eros ullamcorper vitae. Nunc eget lorem eget augue rhoncus accumsan nec vitae nibh. Proin quam diam, convallis at orci nec, feugiat auctor lectus. In vestibulum, diam interdum dapibus eleifend, nunc neque efficitur arcu, in facilisis diam libero in turpis. Suspendisse lacinia, magna eget consectetur viverra, erat justo eleifend enim, ac bibendum leo ex eget nibh. Nam pellentesque velit ut sem feugiat efficitur. Ut ex sem, fringilla vel interdum sit amet, porta vel justo. Suspendisse mi sapien, laoreet eu eleifend nec, rhoncus id tortor. In auctor commodo odio in iaculis. Aenean vel diam turpis. Duis quis mauris lacus. Vestibulum eu nisi ipsum. Vestibulum interdum sapien sit amet turpis pharetra, sed egestas odio varius.
                            </p>
                            <p>
                                Nulla gravida venenatis fringilla. Aliquam ac mauris dictum, faucibus tortor ut, dictum dolor. Quisque eget nibh lacinia, vehicula magna ut, faucibus mauris. Etiam finibus felis libero, id tincidunt est faucibus a. Maecenas eget dapibus ipsum. Morbi pellentesque lectus erat, ac bibendum enim rhoncus ac. Sed porttitor a est a faucibus. Duis elit nulla, faucibus sed faucibus eu, auctor congue nulla. Pellentesque vitae consectetur mauris.
                            </p>
                        </div>
                    </div>
                </div>
                <h1 className='text-center font-bold text-4xl mb-6'>Famille: Osteichthyes ⇨  Serranidae ⇨  Genre Variola</h1>

            </section>

        </div>
    );
}