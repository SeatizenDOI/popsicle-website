import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'CGU',
    description: "Conditions générales d'utilisation",
};

export default function Page() {
    return (
        <div className="mx-4 sm:mx-20 xl:mx-48 2xl:mx-96">
            <h1 className="mb-2 text-center text-lg font-bold sm:text-4xl">
                Conditions générales d'utilisation
            </h1>

            <h2 className="mb-2 mt-8 text-xl font-bold">
                1. Description du service
            </h2>
            <p className="text-justify">
                Un site internet ainsi que des communications via les réseaux
                sociaux (ci-après le « Site et les réseaux sociaux POPSICLE »)
                sont mis en place par l’Institut Français de Recherche pour
                l’Exploitation de la MER (ci-après l’« Ifremer ») afin de
                permettre à toute personne physique de signaler tous les
                collectes d'échantillons biologiques du projet par ces personnes
                physiques (ci-après les « Utilisateurs »).
                <br />
                Le Site est disponible au lien suivant:{' '}
                <Link
                    href={'https://popsicle.ifremer.re'}
                    className="animate-pulse font-bold text-primary_orange"
                >
                    https://popsicle.ifremer.re
                </Link>
                <br />
                Le Site et les réseaux sociaux POPSICLE sont accessibles
                librement et à titre gratuit sur internet à tout Utilisateur qui
                devra renseigner des données concernant les prélèvements
                (notamment date, lieu, données de localisation, ...) (ci-après
                les « Informations »), il pourra partager une photographie de
                l'individu collecté (ci-après les « Photographies ») au travers
                d’un des réseaux sociaux.
                <br />
                L’utilisation du Site et de ses réseaux sociaux POPSICLE
                implique l’acceptation pleine et entière des présentes
                conditions générales d’utilisation (ci-après les « Conditions
                Générales d’Utilisation »). Ces Conditions Générales
                d’Utilisation sont susceptibles d’être modifiées ou complétées à
                tout moment, de façon substantielle ou non, et sans préavis,
                afin de prendre en compte, notamment, toute évolution légale,
                réglementaire, éditoriale et/ou technique. Les Utilisateurs sont
                donc invités à les consulter de manière régulière.
                <br />
                Toute modification des Conditions Générales d’Utilisation
                prendra effet au jour de sa publication.
            </p>

            <h2 className="mb-2 mt-8 text-xl font-bold">2. Objet</h2>
            <p className="text-justify">
                Les Conditions Générales d’Utilisation ont pour objet de définir
                pour les Utilisateurs, les modalités d’accès et d’utilisation du
                Site et les réseaux sociaux POPSICLE.
            </p>

            <h2 className="mb-2 mt-8 text-xl font-bold">
                3. Mises en garde spécifiques
            </h2>
            <p className="text-justify">
                Le Site et les réseaux sociaux POPSICLE sont normalement
                accessibles à tout moment aux Utilisateurs. Une interruption
                pour raison de maintenance technique peut être toutefois décidée
                par l’Ifremer, qui s’efforcera alors de communiquer
                préalablement aux Utilisateurs les dates et heures de
                l’intervention.
            </p>

            <h2 className="mb-2 mt-8 text-xl font-bold">
                4. Modalités de dépôt des Photographies
            </h2>
            <p className="text-justify">
                Les Utilisateurs déposent les Photographies et les Informations
                volontairement à titre gracieux sur le Site et les réseaux
                sociaux POPSICLE.
                <br />
                Les Utilisateurs rempliront le Formulaire en langue française.
                <br />
                Seuls les personnels de l’Ifremer et des partenaires du projet
                POPSICLE ont accès aux Informations et aux Photographies qui
                seront stockées sur les serveurs de l’Ifremer.
                <br />
                Les données à caractère personnel communiquées dans le
                Formulaire feront l’objet d’un traitement conforme à la
                règlementation en vigueur (pour plus d’informations, se référer
                à l’article 9).
            </p>

            <h2 className="mb-2 mt-8 text-xl font-bold">5. Droits d’auteur</h2>
            <h2 className="mb-2 mt-8 text-lg font-semibold">
                5.1 Respect du droit d’auteur
            </h2>
            <p className="text-justify">
                Les Utilisateurs peuvent déposer les Photographies à condition
                qu’ils en soient l’auteur et sous réserve du respect et de
                l’acceptation des Conditions Générales d’Utilisation et de
                remplir le Formulaire.
                <br />
                Lorsqu’ils ont la qualité d’auteurs des Photographies, les
                Utilisateurs conservent tous les droits moraux afférents aux
                Photographies notamment le droit au nom.
                <br />
                L’Utilisateur reconnait et accepte, en soumettant toute
                proposition de Photographie que les droits patrimoniaux d’auteur
                sont concédés à titre gratuit et selon les dispositions de
                l’article 5.2 et ne donneront donc aucunement lieu à
                dédommagement ou à rémunération de quelque nature que ce soit.
                L’Ifremer s’engage à faire apparaître le nom de l’Utilisateur
                tel que ce dernier apparait dans le Formulaire.
                <br />
                Dans le cas où les Utilisateurs ne seraient pas auteurs des
                Photographies alors ils garantissent avoir obtenu les droits,
                licences et toutes les autorisations nécessaires de l’auteur ou
                des ayants droit des Photographies afin de procéder au dépôt des
                Photographies sur le Site et les réseaux sociaux POPSICLE.
            </p>
            <h2 className="mb-2 mt-8 text-lg font-semibold">
                5.2 Cession des droits patrimoniaux des Utilisateurs à l’Ifremer
            </h2>
            <p className="text-justify">
                Par le dépôt des Photographies au travers de l’action de
                téléversement de la Photographie sur les réseaux sociaux
                POPSICLE, l’Utilisateur accepte de céder à l’Ifremer, à titre
                non-exclusif, pour le monde entier, l’ensemble des droits
                patrimoniaux de propriété intellectuelle (reproduction,
                représentation et adaptation) pour la durée telle que définie
                par le code de la propriété intellectuelle.
            </p>
            <p className="mb-2 mt-8 text-justify">
                Il est précisé que les droits de reproduction, de représentation
                et d’adaptation comprennent :
                <ul className="pl-4">
                    <li>
                        Pour le droit de représentation : le droit de diffuser
                        ou de communiquer tout ou partie des Photographies au
                        public par tous procédés, papier ou numérique,
                        incorporant ou non de la bande sonore, connus ou
                        inconnus à ce jour, en tous lieux, sur tous supports
                        tangibles ou intangibles et notamment, lors
                        d’expositions, par voie d’affichage papier, vidéo
                        comprenant ou non de la bande sonore, y compris par le
                        biais de supports numériques tels que multimédia,
                        internet, intranet, réseaux sociaux, logiciels,
                        applications mobiles.
                    </li>
                    <li>
                        Pour le droit de reproduction : le droit de reproduire,
                        de fixer et/ou graver sur tous supports connus et
                        inconnus à ce jour, et d’incorporer les Photographies,
                        en tout ou partie, à des fins d’archivage dans des bases
                        de données ouvertes au public, sur tous supports
                        tangibles ou intangibles, par voie d’affichage papier,
                        vidéo comprenant ou non de la bande sonore, y compris
                        par le biais de supports numériques tels que multimédia,
                        internet, intranet, réseaux sociaux, applications
                        mobiles.
                    </li>
                    <li>
                        Pour le droit d’adaptation : le droit de procéder à
                        toute adaptation des Photographies quel que soit le
                        format et le procédé technique utilisé, de modifier la
                        taille des Photographies, de rogner les Photographies
                        et/ou d’extraire une partie des Photographies dans le
                        respect du droit moral de l’Utilisateur. Le droit de
                        traduire en plusieurs langues les titres et/ou légende
                        des Photographies.
                    </li>
                </ul>
                <br />
                <br />
                Il est précisé que ces droits sont transférables à tous tiers au
                choix de l’Ifremer.
            </p>
            <h2 className="mb-2 mt-8 text-lg font-semibold">
                5.3 Autres garanties
            </h2>
            <p className="text-justify">
                Il est interdit d’utiliser ou de faire figurer des signes
                distinctifs (notamment toute dénomination sociale, nom
                commercial, enseigne, nom de domaine, appellation d’origine
                et/ou indications de provenance) ou des marques dans les noms
                des Utilisateurs ou informations de contact afin de ne pas
                contrevenir aux droits des propriétaires de ces éléments et
                œuvres protégées. Tout « username squatting » ou pratique du
                même type ou de but similaire est strictement interdit.
                <br />
                Le non-respect de tout ou partie des Conditions Générales
                d’Utilisation est susceptible d’entraîner une suspension
                temporaire ou définitive de l’Utilisateur, sans délai ni préavis
                et sans possibilité aucune de tout recours en dommages-intérêts
                ou indemnité quelle qu’en soit la nature.
            </p>

            <h2 className="mb-2 mt-8 text-xl font-bold">
                6. Refus de Photographies
            </h2>
            <p className="text-justify">
                Les Utilisateurs reconnaissent et acceptent que, de façon non
                limitative, toute Photographie entrant dans l’une des catégories
                listées ci-dessous sera supprimée et ne sera pas utilisée dans
                le cadre du Projet dès lors que le contenu de cette Photographie
                (quel qu’en soit la forme ou le support) serait jugé, en tout ou
                partie, par l’Ifremer ou ses partenaires, comme :
                <ul className="pl-4">
                    <li>
                        ne se rapportant pas au Projet et ne représentant pas un
                        individu décrit dans le <strong>Protocole</strong> ;
                    </li>
                    <li>
                        ordurier, outrancier, outrageux, dénigrant,
                        diffamatoire, de mauvais goût, pornographique, sexiste,
                        violent ou incitant à la haine, raciste, révisionniste,
                        antisémite, xénophobe, homophobe, faisant l’apologie de
                        la guerre, du terrorisme ou des crimes contre l’humanité
                        et/ou, plus généralement, comme contenant tout propos ou
                        contenu portant atteinte à la réputation, à l’image, à
                        la dignité, au respect et/ou à l’intégrité de l’être
                        humain et/ou de toute personne physique ou morale ;
                    </li>
                    <li>
                        de nature ou à caractère publicitaire ou promotionnelle
                        et/ou ayant pour objet ou pour finalité l’enrichissement
                        personnel, en ce compris toute forme de commerce
                        (notamment, par l’intermédiaire de liens hypertextes) ;
                    </li>
                    <li>
                        contraire à l’ordre public, aux bonnes mœurs ou pouvant
                        heurter la sensibilité des mineurs ;
                    </li>
                    <li>
                        faisant ouvertement apparaître dans son contenu, toute
                        information personnelle d’un tiers (par exemple, les
                        adresses personnelles, numéros de téléphone et/ou
                        adresses de courrier électronique non publiques) sans
                        l’autorisation préalable des personnes concernées.
                        L’Ifremer invite par ailleurs les Utilisateurs à se
                        montrer prudents dans la diffusion de leurs propres
                        informations personnelles ;
                    </li>
                    <li>
                        contraire aux droits de propriété intellectuelle de
                        toute personne quel que soit la forme ou le support de
                        la Photographie ;
                    </li>
                    <li>
                        enfreignant, plus généralement, toute autre disposition
                        législative ou réglementaire en vigueur ou incitant à la
                        commission de tout crime, délit ou infraction.
                    </li>
                </ul>
            </p>
            <h2 className="mb-2 mt-8 text-xl font-bold">
                7. Propriété intellectuelle
            </h2>
            <h2 className="mb-2 mt-8 text-lg font-semibold">
                7.1 Liens hypertextes profonds vers des sites internet de tiers
            </h2>
            <p className="text-justify">
                Tout lien hypertexte profond pointant du Site POPSICLE vers des
                sites internet édités par des tiers et des références à d’autres
                sites internet ne constituent ni une approbation ni une
                validation des contenus desdits sites et contenus tiers et
                l’Ifremer ne pourra en aucun cas être tenu responsable de la
                teneur desdits sites, et ne sera tenu responsable d’aucun
                dommage ou préjudice en découlant. Les liens profonds
                éventuellement proposés sur le Site POPSICLE le sont par simple
                commodité et n’engendrent à ce titre aucune obligation de
                quelque nature que ce soit à la charge de l’Ifremer qui ne
                dispose d’aucun moyen de contrôle et de surveillance des sites
                et contenus référencés ainsi que de leurs évolutions et mises à
                jour et n’accepte aucune responsabilité à cet égard.
            </p>
            <h2 className="mb-2 mt-8 text-lg font-semibold">
                7.2 Liens hypertextes profonds vers le Site
            </h2>
            <p className="text-justify">
                La création de liens hypertextes et de liens hypertextes
                profonds en direction du Site POPSICLE est libre à la condition
                qu’elle ne porte pas atteinte aux intérêts matériels ou moraux
                de l’Ifremer et de ses partenaires.
            </p>
            <h2 className="mb-2 mt-8 text-lg font-semibold">
                7.3 Marques et logos de l’Ifremer
            </h2>
            <p className="text-justify">
                L’Ifremer est propriétaire de sa dénomination sociale ainsi que
                des logos présents sur le Site POPSICLE. Ces derniers ne peuvent
                pas être utilisés sans l’autorisation écrite et préalable de
                l’Ifremer.
            </p>
            <h2 className="mb-2 mt-8 text-xl font-bold">8. Responsabilité</h2>
            <h2 className="mb-2 mt-8 text-lg font-semibold">
                8.1 Responsabilité technique
            </h2>
            <p className="text-justify">
                L’Ifremer ne pourra être tenu responsable de dommages matériels
                liés à l’utilisation du Site POPSICLE. De plus, les Utilisateurs
                s’engagent à accéder au Site POPSICLE en utilisant un matériel
                récent, ne contenant pas de virus et avec un navigateur de
                dernière génération mis-à-jour.
                <br />
                L’Ifremer ne saurait être tenu responsable de tout dommage
                direct ou indirect sur les Photographies pouvant intervenir du
                fait de l’utilisation ou de l’impossibilité d’utilisation du
                Site POPSICLE et plus généralement de toute perturbation ou
                interruption du service.
            </p>
            <h2 className="mb-2 mt-8 text-lg font-semibold">
                8.2 Responsabilité du contenu
            </h2>
            <p className="text-justify">
                Les Utilisateurs accèdent au Site POPSICLE sous réserve de
                respecter strictement les Conditions Générales d’Utilisation.
                Les Utilisateurs sont pleinement et seuls responsables de la
                mise en ligne sur le Site et les réseaux sociaux POPSICLE des
                Photographies et des Informations.
                <br />
                Les Utilisateurs ont toute liberté pour le dépôt des
                Photographies et des Informations dans le respect des Conditions
                Générales d’Utilisation.
                <br />
                L’Ifremer ne peut être en aucun cas tenu responsable de la
                non-conformité des Informations saisies par les Utilisateurs.
                Les Utilisateurs seront tenus d'obtenir toutes les autorisations
                légales, réglementaires ou administratives le cas échéant lors
                de la collecte d’Informations ou de la prise de Photographies.
                <br />
                L’Ifremer ne saurait garantir l’exactitude, la véracité, la
                pertinence, l’exhaustivité et/ou l’actualité des Photographies
                ainsi que des Informations qui sont déposées par les
                Utilisateurs au travers du Formulaire.
                <br />
                L’Ifremer demande aux Utilisateurs de veiller à ce que les
                Photographies ne violent aucun droit de tiers. Toutefois,
                l’Ifremer ne pourra en aucun cas être tenu responsable en cas
                d’action en contrefaçon de tiers pour toute utilisation,
                publication ou exploitation des Photographies. L’Ifremer
                n’assume aucune garantie, expresse ou tacite, concernant tout ou
                partie du Site POPSICLE et décline toute responsabilité
                concernant l’accès et le contenu du Site POPSICLE. En
                conséquence, les Utilisateurs renoncent à tout recours contre
                l’Ifremer.
                <br />
                L’Ifremer ne pourra être tenu pour responsable d’un quelconque
                dommage, direct ou indirect, découlant de la consultation, de
                l’utilisation du Site POPSICLE, quelle qu’en soit la cause,
                l’origine, la nature ou la conséquence.
            </p>

            <h2 className="mb-2 mt-8 text-xl font-bold">
                9. Gestion des données à caractère personnel
            </h2>
            <p className="text-justify">
                L’Ifremer peut être amené à collecter et traiter les nom,
                prénom, âge, adresse de messagerie, numéro de téléphone fixe
                et/ou portable, données de géolocalisation, adresse postale,
                données de pratique de pêche et taille de T-shirt.
                <br />
                Dans Formulaire, les champs pour lesquels l’information a un
                caractère obligatoire sont signalés par un astérisque, ces
                informations sont nécessaires à l’Ifremer pour créditer les
                Photographies, avoir les éléments nécessaires pour contacter
                l’Utilisateur dans la cadre du Projet. Si ces informations
                obligatoires ne sont pas communiquées à l’Ifremer, l’Ifremer ne
                sera pas en mesure de prendre en considération les Informations.
                <br />
                Aucunes informations, notamment techniques ou concernant la
                consultation du Site POPSICLE, ainsi que de leurs
                fonctionnalités, ne sont collectées automatiquement du fait des
                actions de l’Utilisateur sur le Site POPSICLE, par des cookies.
            </p>
            <h2 className="mb-2 mt-8 text-lg font-semibold">
                9.1 Qui sont les destinataires des données personnelles à
                caractère personnel ?
            </h2>
            <p className="text-justify">
                <ul className="pl-5">
                    <li>l'Ifremer;</li>
                    <li>les partenaires du projet;</li>
                    <li>
                        les sous-traitants avec lesquels l’Ifremer travaille
                        pour la création et la mise à jour du Site POPSICLE
                        ainsi que pour l’exécution de certains services
                        uniquement dans la limite nécessaire à l’accomplissement
                        des tâches qui leur sont confiées.
                    </li>
                </ul>
                <br />
                L’Ifremer exige de ses sous-traitants qu’ils utilisent les
                données personnelles uniquement pour gérer les services que
                l’Ifremer leur demande de fournir. Par ailleurs, l’Ifremer
                demande également à ses sous-traitants de toujours se maintenir
                en conformité avec les lois applicables en matière de protection
                de données personnelles et d’accorder une attention particulière
                à la confidentialité et à la sécurité de ces données.
                <br />
                Les données personnelles des Utilisateurs pourront également
                être communiquées en application d’une loi, d’un règlement,
                d’une décision d’une autorité de contrôle ou judiciaire, si
                nécessaire pour l’Ifremer, afin de préserver ses droits et
                intérêts.
            </p>
            <h2 className="mb-2 mt-8 text-lg font-semibold">
                9.2 Où sont stockées les données personnelles et sont-elles en
                sécurité ?
            </h2>
            <p className="text-justify">
                Les données personnelles des Utilisateurs sont conservées soit
                sur les serveurs internes de l’Ifremer lesquels sont situés au
                sein de l’Union Européenne.
                <br />
                Dans le cadre de la politique de l’Ifremer sur la sécurité des
                données personnelles des Utilisateurs, l’Ifremer met en œuvre
                toutes les mesures appropriées pour empêcher toute altération ou
                perte des données ou tout accès non autorisé à celles-ci.
            </p>
            <h2 className="mb-2 mt-8 text-lg font-semibold">
                9.3 Quelle est la durée de conservation des données personnelles
                des Utilisateurs ?
            </h2>
            <p className="text-justify">
                De manière générale, l’Ifremer conserve vos données personnelles
                pendant une durée qui n’excède pas la durée nécessaire aux
                finalités des traitements pour lesquelles elles ont été
                collectées.
            </p>
            <h2 className="mb-2 mt-8 text-lg font-semibold">
                9.4 Droits des Utilisateurs
            </h2>
            <p className="text-justify">
                Les Utilisateurs disposent à tout moment d’un droit d’accès, de
                rectification, de limitation, de portabilité, de suppression,
                d’opposition de leurs données personnelles (ainsi que du droit
                de définir les directives applicables à la conservation,
                l’effacement et la communication de celles-ci après son décès)
                en contactant le Délégué à la Protection des Données par e-mail
                (dpo@ifremer.fr) ou par courrier à l’adresse suivante :
                <br />
                <br />
                Institut Français de Recherche pour l’Exploitation de la MER
                (Ifremer) – délégué à la protection des données – 1625 route de
                Sainte Anne – Zone industrielle de la pointe du diable – CS
                10070 – 29280 Plouzané.
                <br />
                <br />
                Important : toute demande par courrier postal ou courriel devra
                être accompagnée d’un justificatif d’identité du demandeur et
                préciser l’adresse à laquelle devra parvenir la réponse. Une
                réponse sera alors adressée dans un délai d’un à trois mois
                suivant la réception de la demande et en fonction de la
                complexité du sujet.
                <br />
                <br />
                Les Utilisateurs disposent également du droit d’introduire une
                réclamation auprès d’une autorité de contrôle (CNIL).
            </p>
            <h2 className="mb-2 mt-8 text-xl font-bold">
                Article 10. Gestion des cookies
            </h2>
            <p className="text-justify">
                Aucunes informations, notamment techniques ou concernant la
                consultation du Site POPSICLE, ainsi que de leurs
                fonctionnalités, ne sont collectées automatiquement du fait des
                actions de l’Utilisateur sur le Site POPSICLE, par des cookies.
            </p>
            <h2 className="mb-2 mt-8 text-xl font-bold">Article 11. Nullité</h2>
            <p className="text-justify">
                Dans l'hypothèse où une ou plusieurs des stipulations des
                Conditions Générales d’Utilisation s’avèrerai(en)t contraire(s)
                à une loi ou à un texte légalement applicable, les modifications
                nécessaires pour se conformer à cette loi ou à ce texte seraient
                effectuées. Toutes les autres stipulations des Conditions
                Générales d’Utilisation resteraient en vigueur.
            </p>
            <h2 className="mb-2 mt-8 text-xl font-bold">
                Article 12. Droit applicable et litiges
            </h2>
            <p className="text-justify">
                Les Conditions Générales d’Utilisation dans leur interprétation
                et leur exécution sont soumises au droit français. Pour toutes
                contestations qui pourraient survenir dans le cadre des
                Conditions Générales d’Utilisation, une résolution amiable sera
                recherchée en priorité. L’attribution de juridiction est faite
                aux tribunaux compétents.
            </p>
        </div>
    );
}
