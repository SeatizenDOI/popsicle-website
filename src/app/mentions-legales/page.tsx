import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Mentions Légales',
    description: "Loi et droit de l'utilisateur",
};

export default function Page() {
    return (
        <div className="mx-4 sm:mx-20 xl:mx-48 2xl:mx-96">
            <h1 className="mb-2 text-center text-4xl font-bold">
                Mentions Légales
            </h1>

            <h2 className="mb-2 mt-8 text-xl font-bold">1. Éditeur du site</h2>
            <p>
                Nom de l'entreprise : Ifremer
                <br />
                Adresse : 9 Rue Jean Bertho Le Port 97420, La Réunion <br />
                Téléphone : 02 62 42 03 40 <br />
                Email : villien@ifremer.fr <br />
                Directeur de la publication : Sylvain Bonhommeau
                <br />
            </p>

            <h2 className="mb-2 mt-8 text-xl font-bold">2. Hébergement</h2>
            <p>
                Hébergeur : OVH <br />
                Adresse : 2, rue Kellermann, 59100 Roubaix. <br />
                Téléphone : 1007
                <br />
            </p>

            <h2 className="mb-2 mt-8 text-xl font-bold">
                3. Propriété intellectuelle
            </h2>
            <p className="text-justify">
                Tout contenu, information, texte, matériau, nom, image,
                illustration et représentation visuelle (y compris, sans s'y
                limiter, ceux provenant de nos partenaires, affiliés,
                sous-traitants, employés et représentants) apparaissant sur ce
                site ou mis à disposition par Ifremer sous tout format («
                Contenu ») est protégé par les lois sur la propriété
                intellectuelle (« PI ») et ne peut être utilisé, republié,
                retransmis, reproduit, téléchargé ou utilisé de quelque manière
                que ce soit (sauf pour un usage privé et non commercial) sans
                l'autorisation écrite expresse d'Ifremer et/ou du titulaire de
                droits de PI concerné.
            </p>

            <h2 className="mb-2 mt-8 text-xl font-bold">4. Responsabilité</h2>
            <p className="text-justify">
                Ifremer met tout en œuvre pour assurer l'exactitude et la mise à
                jour des informations diffusées sur ce site. Toutefois, Ifremer
                ne peut garantir l'exactitude, la précision ou l'exhaustivité
                des informations mises à disposition. En conséquence, Ifremer
                décline toute responsabilité pour toute imprécision,
                inexactitude ou omission portant sur des informations
                disponibles sur ce site.
            </p>

            <h2 className="mb-2 mt-8 text-xl font-bold">
                5. Cookies et données personnelles
            </h2>
            <p className="text-justify">
                Ce site n'utilise pas de cookies et ne collecte pas de données
                scientifiques.
            </p>

            <h2 className="mb-2 mt-8 text-xl font-bold">6. Loi applicable</h2>
            <p className="text-justify">
                Les présentes mentions légales sont régies par la loi française.
                Tout litige relatif à l'utilisation de ce site est soumis à la
                compétence exclusive des tribunaux français.
            </p>
        </div>
    );
}
