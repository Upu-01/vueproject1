import { defineStore } from 'pinia';
import type { Product } from '../shared/api/types/product';
import {type IProductRepository, createProductRepository } from '../shared/api/productRepo';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as Product[],
    repository: null as IProductRepository | null,
  }),
  actions: {
    init(useApi: boolean) {
      this.repository = createProductRepository(useApi);
      this.fetchProducts();
    },
    async fetchProducts() {
      if (!this.repository) return;
      this.products = await this.repository.getAll();
    },
    async getProductById(id: number): Promise<Product | undefined> {
      if (!this.repository) return undefined;
      return await this.repository.getById(id);
    },
    async addProduct(product: Product) {
      if (!this.repository) return;
      const newProduct = await this.repository.create(product);
      this.products.push(newProduct);
    },
    async updateProduct(product: Product) {
      if (!this.repository) return;
      const updated = await this.repository.update(product);
      const index = this.products.findIndex(p => p.id === product.id);
      if (index !== -1) {
        this.products[index] = updated;
      }
    },
    async deleteProduct(id: number) {
      if (!this.repository) return;
      await this.repository.delete(id);
      this.products = this.products.filter(p => p.id !== id);
    },
  },
});
