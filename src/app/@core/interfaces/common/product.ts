import {SafeResourceUrl} from '@angular/platform-browser';

export interface Product{
    id : string;
    productName: string;
    productPrice: number;
    productRate : number;
    productMedia: Array<ProductMedia>;
}

export interface ProductMedia{
    id: string;
    path: string;
    title: string;
    position: number;
    productId: string;
    type: string;
    safePath: SafeResourceUrl;
}