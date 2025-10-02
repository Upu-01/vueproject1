import type { Artycle } from "../api/article";
import { testBannerCarusel } from "./bannercarusel";

export interface IBannerCaruselRepository {
  getAll(): Promise<Artycle[]>;
  getById(id: number): Promise<Artycle | undefined>;
  create(article: Artycle): Promise<Artycle>;
  update(article: Artycle): Promise<Artycle>;
  delete(id: number): Promise<void>;
} 





export class TestBannerCaruelRepo implements IBannerCaruselRepository {
  private articles: Artycle[] = [...testBannerCarusel];

  async getAll() {
    return [...this.articles];
  }

  async getById(id: number) {
    return this.articles.find(a => a.id === id);
  }

  async create(article: Artycle) {
    const newId = Math.max(0, ...this.articles.map(a => a.id)) + 1;
    const newArticle = { ...article, id: newId };
    this.articles.push(newArticle);
    return newArticle;
  }

  async update(article: Artycle) {
    const index = this.articles.findIndex(a => a.id === article.id);
    if (index === -1) throw new Error('Article not found');
    this.articles[index] = { ...article };
    return this.articles[index];
  }

  async delete(id: number) {
    this.articles = this.articles.filter(a => a.id !== id);
  }
}

export class ApiBannerCarusselRepo implements IBannerCaruselRepository {
  private baseUrl = 'https://api.example.com/whyme';

  async getAll() {
    const response = await fetch(this.baseUrl);
    return response.json() as Promise<Artycle[]>;
  }

  async getById(id: number) {
    const response = await fetch(`${this.baseUrl}/${id}`);
    return response.json() as Promise<Artycle>;
  }

  async create(article: Artycle) {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(article),
    });
    return response.json() as Promise<Artycle>;
  }

  async update(article: Artycle) {
    const response = await fetch(`${this.baseUrl}/${article.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(article),
    });
    return response.json() as Promise<Artycle>;
  }

  async delete(id: number) {
    await fetch(`${this.baseUrl}/${id}`, { method: 'DELETE' });
  }
}

export function createBannerCaruelRepository(useApi: boolean): IBannerCaruselRepository {
  return useApi ? new ApiBannerCarusselRepo() : new TestBannerCaruelRepo();
}