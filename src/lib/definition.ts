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
    sujet: string;
    message: string;
};
