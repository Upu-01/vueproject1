import type { BaseEntity } from './types.ts';
import type { Image } from './images'
import type { Badge } from './bage'
import type {ProductGroup } from './productGroup'


export interface Product extends BaseEntity {
  name: string;
  subName: string;
  description: string;
  images?: Image[];
  price: number;
  quantity: number;
  badges?: Badge[];
  groups?: ProductGroup[];
}
