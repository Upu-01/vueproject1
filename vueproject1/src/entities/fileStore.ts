import { defineStore } from 'pinia';
import type { Image } from '../shared/api/types/images';
import { fileRepo } from '../shared/api/files/fileRepo';
export const useFileStore = defineStore('file', {
    state: () => ({
        images: [] as Image[],
        imageIds: [] as number[],
        repository: new fileRepo(),
    }),
/*************  ✨ Windsurf Command ⭐  *************/
        /**
         * Initializes the store by fetching all images from the server.
         * This is only for testing purposes.
         */
/*******  7e461492-7724-4a32-b134-3a906600e2b1  *******/    actions: {

        init() {
            //TODO only for test
            this.getAll();
        },
        /*************  ✨ Windsurf Command ⭐  *************/
        /**
         * Get all images stored on the server.
         * @returns {Promise<Image[]>} List of images.
         */
        /*******  f033f304-3719-4625-80d1-89ebed8ab434  *******/
        async getAll() {
            this.imageIds = await this.repository.getAll();
        },
        getImg(id: number) {
            return `api/file?id=${id}`;
        },
        async addImage(file: File) {
            try {
                // Вызов метода repository.create
                const result = await this.repository.create(file);
                // Предположим, что сервер возвращает id изображения
                if (result) {
                    this.imageIds.push(result);
                    return result;
                }
            } catch (error) {
                console.error('Ошибка при загрузке изображения:', error);
            }
        },
    }
});