import type { Metadata } from 'next';
import { poppins } from '@/app/ui/fonts';
import '@/app/ui/globals.css';

export const metadata: Metadata = {
    title: {
        template: '%s | POPSICLE',
        default: 'POPSICLE',
    },
    description: 'Page pour le championnat lié au projet POPSICLE',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={`${poppins.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
