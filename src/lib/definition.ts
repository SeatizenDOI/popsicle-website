import { IconType } from 'react-icons';

export interface LinkItem {
    name: string;
    href: string;
    icon?: IconType;
}

export interface LogoItem {
    path: string;
    alt: string;
}

export type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export interface FishItem {
    site: string;
    projet: string;
    noPoisson: string;
    bateau: string;
    noImmatriculation: string;
    dateCapture: string;
    mouthCapture: string;
    datePrelev: string;
    positionCapture: string;
    latitudeCapture: number;
    longitudeCapture: number;
    espece: string;
    codeFAO: string;
    codeBarrePoisson: string;
    refPhoto: string;
    typeDePoids: string;
    poidsEntier: number;
    poidsEstimer: number;
    typeTaille: string;
    taille: number;
    sexe: string;
    maturiteAD: string;
    maturity: string;
    poidsGonades: number;
    typeTissu: string;
    etiquetteTissusProjetOrigine: string;
    noEchantillonFinclip: string;
    extractionADN: string;
    etiquetteGenetiqueADN: string;
    adnConcentration: number;
    contaminantsChair: string;
    contaminantsFoie: string;
    otolithe: string;
    poidsOtolithesGauche: number;
    poidsOtolithesDroit: number;
    noReferenceOtolithes: string;
    noEchantillonStomacal: string;
    noEchantillonMuscle: string;
    commentaires: string;
    prelevPar: string;
    stockage: string;
}
