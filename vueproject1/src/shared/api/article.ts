import type { Image } from "./types/images";
import type { Badge } from "./types/badge";
import type { BaseEntity } from "./types/types";




export interface Article extends BaseEntity{
    image: Image;
    icon: Image | null;
    name: string;
    HtmlText: string;
    rating: number;
}