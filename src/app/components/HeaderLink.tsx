'use client';

import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';
import { LinkItem } from '@/app/lib/definition';
import Link from 'next/link';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

/** Build a single link in nav header. */
export function HeaderLink(link: LinkItem, isDesktop: boolean) {
    const pathname = usePathname();
    const LinkIcon = link.icon ?? ChatBubbleLeftRightIcon;

    return (
        <Link
            key={isDesktop ? link.name : link.name + '_menu'}
            href={link.href}
            className={clsx(
                'flex h-[48px] items-center gap-2 p-3 text-xl font-bold hover:text-blue-600 md:justify-start md:p-2 md:px-3',
                {
                    'text-blue-600': pathname === link.href,
                }
            )}
        >
            <LinkIcon className="w-6" />
            <p>{link.name}</p>
        </Link>
    );
}
