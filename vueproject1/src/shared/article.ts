import { Image } from "./api/types/images";
import { Badge } from "./api/types/badge";




export class Artycle {
    image: Image[];
    icon: Badge[];
    title: string;
    text: string;
    rating: number;
}