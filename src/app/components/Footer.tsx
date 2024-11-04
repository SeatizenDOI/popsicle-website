import Link from 'next/link';
import { LinkItem } from '@/app/lib/definition';

export default function Footer() {
    const footer_links: LinkItem[] = [
        { href: '/contact-us', name: 'Nous Contacter' },
        { href: '/privacy-policy', name: 'Mentions Légales' },
    ];

    return (
        <footer className="bg-gray-5 py-8 font-medium">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-center md:justify-between">
                    {/* Left section with navigation links */}
                    <div className="mb-4 md:mb-0">
                        <div className="flex flex-row gap-4">
                            {footer_links.map((link) => {
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="hover:text-blue-600"
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right section with copyright */}
                    <div className="text-center text-gray-400">
                        © 2024 <span className="font-semibold">POPSICLE</span>.
                        Tous droits réservés.
                    </div>
                </div>
            </div>
        </footer>
    );
}
