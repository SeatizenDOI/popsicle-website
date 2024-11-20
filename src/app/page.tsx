'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { LogoItem } from '@/lib/definition';
import { SocialMediaComponent } from '@/components/SocialMedia';

export default function HomePage() {
    const logos: LogoItem[] = [
        { path: '/logo/cnrs.jpg', alt: 'Logo du CNRS' },
        { path: '/logo/capam.jpeg', alt: 'Logo de la CAPAM' },
        { path: '/logo/coool.webp', alt: 'Logo de COOOOL' },
        { path: '/logo/Gouvernement.png', alt: 'Logo du gouvernement' },
        { path: '/logo/ifremer.png', alt: "Logo d'Ifremer" },
        { path: '/logo/ofb.jpg', alt: "Logo de l'OFB" },
        {
            path: '/logo/parc_naturel_marin.jpeg',
            alt: 'Logo du Parc naturel marin',
        },
        { path: '/logo/ue.png', alt: "Logo de l'Union Européenne" },
    ];

    const section1Ref = useRef<HTMLDivElement>(null);
    const section2Ref = useRef<HTMLDivElement>(null);
    const section3Ref = useRef<HTMLDivElement>(null);

    const scrollToNextSection = (
        sectionRef: React.RefObject<HTMLDivElement>
    ) => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
            });
        }
    };

    // Change section height according to header height
    return (
        <div>
            <section
                className="flex h-auto flex-col justify-between lg:h-[calc(100vh-10rem)]"
                ref={section1Ref}
            >
                <div className="flex flex-col-reverse lg:flex-row">
                    <div className="flex w-auto flex-col lg:w-2/4">
                        <h1 className="m-8 text-4xl font-black md:text-6xl lg:px-8 xl:text-8xl">
                            POPSICLE
                        </h1>
                        <h2 className="px-8 text-2xl font-semibold md:text-4xl lg:ml-8">
                            Un projet de science participative qui a besoin de
                            vous !
                        </h2>
                        <Link
                            href={'https://forms.gle/JCbwYwZUYQESgGDQ7'}
                            className="m-8 inline-block w-fit rounded-lg bg-primary_orange px-8 py-4 text-xl font-bold text-white shadow-md transition duration-200 hover:bg-primary_red lg:m-16"
                        >
                            <p>Inscrivez-vous</p>
                        </Link>
                        <div className="mb-4 max-w-20 p-8">
                            <SocialMediaComponent />
                        </div>
                    </div>
                    <div className="flex flex-row justify-center lg:w-2/4">
                        <Image
                            src={'/mervyn.jpeg'}
                            width={850}
                            height={510}
                            alt="Mervyn avec un variola louti"
                            className="mt-8"
                        />
                    </div>
                </div>
                <div className="relative bottom-0 hidden flex-col items-center space-y-2 lg:flex">
                    <div
                        className="mb-2 flex h-12 w-12 animate-bounce items-center justify-center rounded-full bg-primary_orange hover:bg-primary_red"
                        onClick={() => scrollToNextSection(section2Ref)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>
                </div>
            </section>
            <hr className="block lg:hidden" />
            <section
                className="mb-8 flex h-auto flex-col justify-between xl:h-[calc(100vh-5rem)]"
                ref={section2Ref}
            >
                <div className="flex flex-col">
                    <h1 className="py-12 text-center text-xl font-semibold lg:text-4xl [&>span]:text-primary_orange">
                        <span>POP</span>ulation <span>SI</span>ze of{' '}
                        <span>C</span>
                        oastal and <span>L</span>arge pelagic Fish<span>E</span>
                        s
                    </h1>
                    <p className="w-full self-center py-4 text-justify text-sm font-medium lg:text-lg lg:font-semibold xl:w-9/12 2xl:w-7/12">
                        Le projet POPSICLE est financé par le FEAMPA et vise à
                        fournir les informations scientifiques pour une
                        exploitation durable du Croisant queu jaune (Variola
                        louti). Des nouvelles méthodes génétiques vont être
                        utilisées pour déterminer l’âge, le sexe et le stade de
                        maturité des poissons. Ce projet se déroule à La Réunion
                        et à Mayotte jusqu’en 2026.{' '}
                    </p>
                    <p className="w-full self-center py-4 text-justify text-sm font-medium lg:text-lg lg:font-semibold xl:w-9/12 2xl:w-7/12">
                        Afin de pouvoir collecter les échantillons nécessaires,
                        les partenaires du projet (IFREMER, CNS, OFB/Parc
                        Naturel Marin de Mayotte et CAPAM) proposent une
                        approche de science participative. Ces échantillons
                        permettront de mieux connaître la biologie de cette
                        espèce et d’estimer la taille de la population.{' '}
                    </p>
                    <p className="w-full self-center py-4 text-justify text-sm font-medium lg:text-lg lg:font-semibold xl:w-9/12 2xl:w-7/12">
                        L’objectif de ce projet reste de gérer durablement cette
                        espèce et un nombre maximum de poissons pêché est fixé à
                        1000 pour ne pas mettre de pression sur la ressource.
                        Une fois ce nombre atteint, le projet participatif est
                        terminé. La date de fin du projet est fixée au 15 juin
                        2025 même si le nombre de 1000 poissons n’est pas
                        atteint.
                    </p>

                    <div className="flex w-full flex-wrap justify-around self-center px-4 xl:w-10/12">
                        {logos.map((l) => {
                            return (
                                <Image
                                    key={l.path}
                                    src={l.path}
                                    alt={l.alt}
                                    width={256}
                                    height={256}
                                    className="h:4 w-auto"
                                />
                            );
                        })}
                    </div>
                </div>

                <div className="relative bottom-0 hidden flex-col items-center space-y-2 lg:flex">
                    <div
                        className="mb-2 flex h-12 w-12 animate-bounce items-center justify-center rounded-full bg-primary_orange hover:bg-primary_red"
                        onClick={() => scrollToNextSection(section3Ref)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>
                </div>
            </section>

            <hr className="block lg:hidden" />

            <section
                className="flex h-auto flex-col justify-between lg:h-[calc(100vh-5rem)]"
                ref={section3Ref}
            >
                <div className="flex flex-col">
                    <h1 className="m-8 self-center text-lg font-bold sm:text-4xl">
                        Comment participer ?
                    </h1>
                    <p className="m-8 self-center">
                        Après avoir pris connaissance du règlement, vous pouvez
                        nous contacter par 3 moyens.
                    </p>
                    <div className="flex flex-col justify-center lg:flex-row">
                        <div className="m-8 flex flex-col justify-between border hover:scale-105 hover:shadow-2xl hover:shadow-primary_orange lg:w-96">
                            <h1 className="p-4 text-center text-sm font-semibold sm:text-xl">
                                Formulaire de contact
                            </h1>
                            <p></p>
                            <Link
                                href="/nous-contacter"
                                className="mb-4 inline-block w-fit self-center rounded-lg bg-primary_orange px-8 py-4 text-sm font-bold text-white shadow-md transition duration-200 hover:bg-primary_red sm:text-xl lg:m-4"
                            >
                                <p>Contactez-vous</p>
                            </Link>
                        </div>
                        <div className="m-8 flex aspect-auto min-h-64 flex-col justify-between border hover:scale-105 hover:shadow-2xl hover:shadow-primary_orange">
                            <h1 className="p-4 text-center text-sm font-semibold sm:text-xl">
                                Formulaire de demande d'inscription
                            </h1>
                            <p className="w-9/12 self-center text-center">
                                En remplissant ce formulaire, vous entrez dans
                                la file d’attente pour participer au projet.
                            </p>
                            <Link
                                href={'https://forms.gle/JCbwYwZUYQESgGDQ7'}
                                className="mb-4 inline-block w-fit self-center rounded-lg bg-primary_orange px-8 py-4 text-sm font-bold text-white shadow-md transition duration-200 hover:bg-primary_red sm:text-xl lg:m-4"
                            >
                                <p>Inscrivez-vous</p>
                            </Link>
                        </div>
                        <div className="m-8 flex min-h-64 flex-col justify-between border hover:scale-105 hover:shadow-2xl hover:shadow-primary_orange lg:w-96">
                            <h1 className="p-4 text-center text-sm font-semibold sm:text-xl">
                                Réseaux
                            </h1>
                            <p className="w-9/12 self-center text-center">
                                Suivez-nous sur les réseaux et contactez-nous
                                pour toutes informations.
                            </p>
                            <div className="mb-4 p-8">
                                <SocialMediaComponent />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative bottom-0 hidden flex-col items-center space-y-2 lg:flex">
                    <div
                        className="flex h-12 w-12 animate-bounce items-center justify-center rounded-full bg-primary_orange hover:bg-primary_red"
                        onClick={() => scrollToNextSection(section1Ref)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 rotate-180 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>
                </div>
            </section>
        </div>
    );
}
