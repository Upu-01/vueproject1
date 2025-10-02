import type { Product } from './types/product';
import { testProducts } from './products';

export interface IProductRepository {
  getAll(): Promise<Product[]>;
  getById(id: number): Promise<Product | undefined>;
  create(product: Product): Promise<Product>;
  update(product: Product): Promise<Product>;
  delete(id: number): Promise<void>;
}


export class TestProductRepo implements IProductRepository {
  private products: Product[] = [...testProducts];

  async getAll() {
    return [...this.products];
  }

  async getById(id: number) {
    return this.products.find(p => p.id === id);
  }

  async create(product: Product) {
    const newId = Math.max(...this.products.map(p => p.id)) + 1;
    const newProduct = { ...product, id: newId, createdDate: new Date(), updatedDate: new Date() };
    this.products.push(newProduct);
    return newProduct;
  }

  async update(product: Product) {
    const index = this.products.findIndex(p => p.id === product.id);
    if (index === -1) throw new Error('Product not found');
    this.products[index] = { ...product, updatedDate: new Date() };
    return this.products[index];
  }

  async delete(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}

// Реализация для API
export class ApiProductRepo implements IProductRepository {
  private baseUrl = 'https://api.example.com/products';

  async getAll() {
    const response = await fetch(this.baseUrl);
    return response.json();
  }

  async getById(id: number) {
    const response = await fetch(`${this.baseUrl}/${id}`);
    return response.json();
  }

  async create(product: Product) {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    return response.json();
  }

  async update(product: Product) {
    const response = await fetch(`${this.baseUrl}/${product.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    return response.json();
  }

  async delete(id: number) {
    await fetch(`${this.baseUrl}/${id}`, { method: 'DELETE' });
  }
}

// Фабрика для переключения между репозиториями
export function createProductRepository(useApi: boolean): IProductRepository {
  return useApi ? new ApiProductRepo() : new TestProductRepo();
}
