import type { Image } from "./api/types/images";
import type { Badge } from "./api/types/badge";
import type { BaseEntity } from "./api/types/types";




export interface Artycle extends BaseEntity{
    image: Image[];
    icon: Badge[];
    title: string;
    text: string;
    rating: number;
}