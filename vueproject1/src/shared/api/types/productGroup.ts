import type { BaseEntity } from './types.ts';
import type {Product } from './product'


export interface ProductGroup extends BaseEntity {
  name: string;
  products?: Product[];
}
