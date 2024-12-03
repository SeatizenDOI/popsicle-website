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

export interface FisherRank {
    rank: number;
    nbPoint: number;
    pseudo: string;
}

export interface FishItem {
    site: string;
    projet: string;
    noPoisson: string;
    noPecheur: string;
    dateCapture: string;
    monthCapture: string;
    datePrelev: string;
    positionCapture: string;
    espece: string;
    codeFAO: string;
    codeBarrePoisson: string;
    refPhoto: string;
    typeDePoids: string;
    poidsEntierKg: number;
    typeTaille: string;
    tailleMesureCm: number;
    sexe: string;
    maturity: string;
    maturiteAD: string;
    poidsGonadesG: number;
    noOtolithes: string;
    noReferenceOtolithes: string;
    profondeurCapture: number;
    commentaires: string;
    prelevPar: string;
    stockage: string;
}
