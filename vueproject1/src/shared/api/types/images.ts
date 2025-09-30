import type { BaseEntity } from './types.ts';

export interface Image extends BaseEntity {
  imageData: Uint8Array; // байты изображения
  contentType: string;   // mime тип
}
