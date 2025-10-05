import type { Product } from "./types/product";
import type { Article } from "./article";



export interface Viewmodel {
    product: Product[];
    whyme: Article[];
    banner_carusel: Article[];
    about_us: Article[];
    services: Article[];
    paiment_info: Article[];
    contacts: Article[];
    review: Article[];
}
