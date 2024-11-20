import Link from 'next/link';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';

export function SocialMediaComponent() {
    return (
        <div className="mx-8 flex flex-row justify-evenly py-4 text-2xl lg:py-0">
            <Link
                href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
                className="mx-2 p-1 text-gray-600 hover:scale-150 hover:text-blue-400"
            >
                <FaFacebook />
            </Link>
            <Link
                href="https://wa.me/"
                className="mx-2 p-1 text-gray-600 hover:scale-150 hover:text-emerald-500"
            >
                <FaWhatsapp />
            </Link>
            <Link
                href="mailto:contact.popsicle974@gmail.com"
                className="mx-2 p-1 text-gray-600 hover:scale-150 hover:text-red-400"
            >
                <SiGmail />
            </Link>
            <Link
                href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
                className="mx-2 p-1 text-gray-600 hover:scale-150 hover:text-pink-400"
            >
                <FaInstagram />
            </Link>
        </div>
    );
}
