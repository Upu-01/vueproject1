import { defineStore } from "pinia";
import type { Article } from "@/shared/api/article";
import { type IContactsRepository, createContactsRepository } from "@/shared/api/contacts/contactsRepo";

export const useContactsStore = defineStore('Contacts', {
  state: () => ({
    articles: [] as Article[],
    repository: null as IContactsRepository | null,
  }),
  actions: {
    init(useApi: boolean) {
      this.repository = createContactsRepository(useApi);
      this.fetchArticles();
    },

    async fetchArticles() {
      if (!this.repository) return;
      this.articles = await this.repository.getAll();
    },

    async getArticleById(id: number): Promise<Article | undefined> {
      if (!this.repository) return undefined;
      return await this.repository.getById(id);
    },

    async addArticle(article: Article) {
      if (!this.repository) return;
      const newArticle = await this.repository.create(article);
      this.articles.push(newArticle);
    },

    async updateArticle(article: Article) {
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