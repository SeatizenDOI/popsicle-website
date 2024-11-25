'use client';

import '@/app/ui/header.css';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { VscLaw } from 'react-icons/vsc';
import { FaQuestionCircle } from 'react-icons/fa';
import { GiDna2, GiTransparentTubes, GiPodium } from 'react-icons/gi';

import { LinkItem } from '@/lib/definition';
import { Counter } from '@/components/Counter';
import { HeaderLink } from '@/components/HeaderLink';

const url_paths: LinkItem[] = [
    { name: 'Règlements', href: '/reglements', icon: VscLaw },
    {
        name: 'Protocoles',
        href: '/protocoles',
        icon: GiTransparentTubes,
    },
    {
        name: 'En Avant La Science',
        href: '/en-avant-la-science',
        icon: GiDna2,
    },
    { name: 'Classements', href: '/classements', icon: GiPodium },
    { name: 'FAQ', href: '/faq', icon: FaQuestionCircle },
];

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <>
            <Link
                className="to fixed left-0 top-0 z-20 flex bg-transparent p-4"
                href="/"
            >
                <div className="h-auto w-52 xl:w-64">
                    <Image
                        src="/logo.png"
                        width={250}
                        height={250}
                        alt="Logo popsicle"
                    />
                </div>
            </Link>
            <div className="to fixed left-0 top-0 z-10 flex h-20 w-full flex-row items-center justify-end bg-white">
                <nav>
                    <section className="flex px-8 2xl:hidden">
                        <div
                            className="space-y-2"
                            onClick={() => setIsNavOpen((prev) => !prev)}
                        >
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        </div>

                        <div
                            className={
                                isNavOpen ? 'showMenuNav' : 'hideMenuNav'
                            }
                        >
                            <div
                                className="absolute right-0 top-0 p-8"
                                onClick={() => setIsNavOpen(false)}
                            >
                                <svg
                                    className="h-16 w-8 text-gray-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <div className="flex min-h-[250px] flex-col items-center justify-between">
                                {url_paths.map((url) => HeaderLink(url, false))}
                                <Counter isNavMenu={true} />
                            </div>
                        </div>
                    </section>

                    <div className="hidden px-8 2xl:flex">
                        {url_paths.map((url) => HeaderLink(url, true))}
                    </div>
                </nav>
                <Counter isNavMenu={false} />
            </div>
        </>
    );
}
