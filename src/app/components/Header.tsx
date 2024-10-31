'use client'; 

import Link from 'next/link'
import { LinkItem } from '@/app/lib/definition';
import { HeaderLink } from '@/app/components/HeaderLink';

const url_paths: LinkItem[] = [
    { name: "Règlements", href: '/reglements', },
    { name: "Protocoles", href: '/protocoles', },
    { name: "En Avant La Science", href: '/en-avant-la-science', },
    { name: "Classements", href: '/classements', },
    { name: "FAQ", href: '/faq', },
];


export default function Header() {
    return (
        <div className="flex w-full flex-row">
            <Link
                className="mb-2 flex items-end justify-start rounded-r-md bg-blue-600 p-4"
                href="/"
            >
                <div className="w-32 text-white md:w-40">
                    <p>Sylvain Bonhommeau</p>
                </div>
            </Link>
            <div className='flex w-full justify-end space-x-2 md:space-x-2 md:p-1'>
                {url_paths.map((url) => HeaderLink(url) )}
            </div>
        </div>
    );
}