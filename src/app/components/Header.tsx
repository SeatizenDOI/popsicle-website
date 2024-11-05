'use client';

import {
    DocumentCurrencyRupeeIcon,
    ScaleIcon,
    TrophyIcon,
    ChatBubbleLeftRightIcon,
    AcademicCapIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link'
import Image from 'next/image'
import { LinkItem } from '@/app/lib/definition';
import { HeaderLink } from '@/app/components/HeaderLink';
import { useState } from "react";
import "@/app/ui/header.css";

const url_paths: LinkItem[] = [
    { name: "Règlements", href: '/reglements', icon: ScaleIcon },
    { name: "Protocoles", href: '/protocoles', icon: DocumentCurrencyRupeeIcon },
    { name: "En Avant La Science", href: '/en-avant-la-science', icon: AcademicCapIcon },
    { name: "Classements", href: '/classements', icon: TrophyIcon },
    { name: "FAQ", href: '/faq', icon: ChatBubbleLeftRightIcon },
];

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-white flex flex-row items-center justify-between">

            <Link
                className="mb-2 flex items-end justify-start p-4"
                href="/"
            >

                <div className="w-32 text-black md:w-40 font-black">
                    <Image
                        src="/logo.png"
                        width={250}
                        height={250}
                        alt="Logo popsicle"
                    />
                </div>
            </Link>
            <nav>
                <section className="flex lg:hidden p-8">
                    <div
                        className="space-y-2"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            className="absolute top-0 right-0 p-8"
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
                        <ul className="flex flex-col items-center justify-between min-h-[250px]">
                            {url_paths.map((url) => HeaderLink(url, false))}
                        </ul>
                    </div>
                </section>

                <ul className="hidden p-8 lg:flex">
                    {url_paths.map((url) => HeaderLink(url, true))}
                </ul>
            </nav>
        </div>
    );
}