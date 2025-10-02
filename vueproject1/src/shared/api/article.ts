import type { Image } from "./types/images";
import type { Badge } from "./types/badge";
import type { BaseEntity } from "./types/types";




export interface Artycle extends BaseEntity{
    image: Image[];
    icon: Badge[];
    title: string;
    text: string;
    rating: number;
}