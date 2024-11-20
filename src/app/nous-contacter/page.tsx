import type { Metadata } from 'next';
import { Contact } from '@/components/Contact';

export const metadata: Metadata = {
    title: 'Nous Contacter',
    description: 'Liens vers nos réseaux',
};

export default function Page() {
    return (
        <div className="flex flex-col">
            <h1 className="m-8 text-center text-4xl font-bold">
                Formulaire de contact
            </h1>
            <Contact />
        </div>
    );
}
