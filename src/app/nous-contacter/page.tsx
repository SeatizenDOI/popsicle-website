import type { Metadata } from 'next';
import { Contact } from '@/app/components/Contact';

export const metadata: Metadata = {
    title: 'Nous Contacter',
    description: 'Liens vers nos réseaux',
};

export default function Page() {
    return (
        <div>
            <Contact />
        </div>
    );
}
