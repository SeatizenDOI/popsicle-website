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
