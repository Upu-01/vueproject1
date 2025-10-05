export class fileRepo {
    private baseUrl = `/api/file`
    /*************  ✨ Windsurf Command ⭐  *************/
    /**
     * Returns all files (ids) stored on the server.
     * @returns {Promise<object[]>} List of files.
     */
    /*******  228afeea-d5b7-4490-a8b1-ecb3d7029634  *******/
    public async getAll() {
        const response = await fetch(`${this.baseUrl}/index`);
        return response.json();
    }
    async create(file: File) {
        const formData = new FormData();
        formData.append('file', file);
        const response = await fetch(`${this.baseUrl}`, {
            method: 'POST',
            body: formData,
        });
        return response.json();
    }
}