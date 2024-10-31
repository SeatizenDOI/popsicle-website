'use client';

import { clsx } from 'clsx';
import { usePathname } from 'next/navigation'
import { LinkItem } from '@/app/lib/definition';
import Link from 'next/link'


/** Build a single link in nav header. */
export function HeaderLink(link: LinkItem) {

    const pathname = usePathname();
    
    return (
        <Link
            key={link.name}
            href={link.href}
            className={clsx(
                'flex h-[48px] items-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:justify-start md:p-2 md:px-3',
                {
                    'bg-sky-100 text-blue-600': pathname === link.href,
                }
            )}
        >
            <p>{link.name}</p>
        </Link>
    );
}