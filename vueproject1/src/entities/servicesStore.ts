import { defineStore } from "pinia";
import type { Artycle } from "@/shared/api/article";
import { type IServicesRepository, createServicesRepository } from "@/shared/api/services/servicesRepo";

export const useServicesStore = defineStore('Services', {
  state: () => ({
    articles: [] as Artycle[],
    repository: null as IServicesRepository | null,
  }),
  actions: {
    init(useApi: boolean) {
      this.repository = createServicesRepository(useApi);
      this.fetchArticles();
    },

    async fetchArticles() {
      if (!this.repository) return;
      this.articles = await this.repository.getAll();
    },

    async getArticleById(id: number): Promise<Artycle | undefined> {
      if (!this.repository) return undefined;
      return await this.repository.getById(id);
    },

    async addArticle(article: Artycle) {
      if (!this.repository) return;
      const newArticle = await this.repository.create(article);
      this.articles.push(newArticle);
    },

    async updateArticle(article: Artycle) {
      if (!this.repository) return;
      const updated = await this.repository.update(article);
      const index = this.articles.findIndex(a => a.id === article.id);
      if (index !== -1) {
        this.articles[index] = updated;
      }
    },

    async deleteArticle(id: number) {
      if (!this.repository) return;
      await this.repository.delete(id);
      this.articles = this.articles.filter(a => a.id !== id);
    },
  },
});