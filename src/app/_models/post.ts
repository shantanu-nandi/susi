import { ICategory } from './category';

export interface IPost {
    postId?: string;
    title?: string;
    category?: ICategory;
    description?: string;
    imageUrl?: string;
    thumbnailUrl?: string;
    createdBy?: string;
    createdDate?: string;
    tags?: string[];
    views?: number;
}