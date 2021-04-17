import { Url } from 'url';

export interface ICard {
    imageUrl: string;
    cardTitle: string;
    cardText: string;
    features: string[];
    siteUrl: Url;
}