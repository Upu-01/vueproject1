import type { Article } from "../article";
import { testContacts } from "./contacts";

export interface IContactsRepository {
  getAll(): Promise<Article[]>;
  getById(id: number): Promise<Article | undefined>;
  create(article: Article): Promise<Article>;
  update(article: Article): Promise<Article>;
  delete(id: number): Promise<void>;
}





export class TestContactsRepo implements IContactsRepository {
  private articles: Article[] = [...testContacts];

  async getAll() {
    return [...this.articles];
  }

  async getById(id: number) {
    return this.articles.find(a => a.id === id);
  }

  async create(article: Article) {
    const newId = Math.max(0, ...this.articles.map(a => a.id)) + 1;
    const newArticle = { ...article, id: newId };
    this.articles.push(newArticle);
    return newArticle;
  }

  async update(article: Article) {
    const index = this.articles.findIndex(a => a.id === article.id);
    if (index === -1) throw new Error('Article not found');
    this.articles[index] = { ...article };
    return this.articles[index];
  }

  async delete(id: number) {
    this.articles = this.articles.filter(a => a.id !== id);
  }
}

export class ApiContactsRepo implements IContactsRepository {
  private baseUrl = 'api/Contacts';

  async getAll() {
    const response = await fetch(this.baseUrl);
    return response.json() as Promise<Article[]>;
  }

  async getById(id: number) {
    const response = await fetch(`${this.baseUrl}/${id}`);
    return response.json() as Promise<Article>;
  }

  async create(article: Article) {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(article),
    });
    return response.json() as Promise<Article>;
  }

  async update(article: Article) {
    const response = await fetch(`${this.baseUrl}/${article.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(article),
    });
    return response.json() as Promise<Article>;
  }

  async delete(id: number) {
    await fetch(`${this.baseUrl}/${id}`, { method: 'DELETE' });
  }
}

export function createContactsRepository(useApi: boolean): IContactsRepository {
  return useApi ? new ApiContactsRepo() : new TestContactsRepo();
}