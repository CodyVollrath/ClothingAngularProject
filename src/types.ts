import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export interface Params {
    //Represents a key value object where the keys (param)
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
}

export interface Options {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    context?: HttpContext;
    params?: HttpParams | Params;
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    transferCache?: {
        includeHeaders?: string[];
    } | boolean;
}

export interface Product {
    id: number,
    image: string,
    name: string,
    price: number,
    rating: number,
}

export interface Products {
    items: Product[];
    total: number;
    page: number;
    perPage: number;
    totalPages: number;
}


export interface PaginationParams extends Params {
    page: number;
    perPage: number;
}
