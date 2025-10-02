import type { Product } from "./api/types/product";
import type { Artycle } from "./article";



export interface Viewmodel {
    product: Product[];
    whyme: Artycle[];
    banner_carusel: Artycle[];
    about_us: Artycle[];
    services: Artycle[];
    paiment_info: Artycle[];
    contacts: Artycle[];
    review: Artycle[];
}
