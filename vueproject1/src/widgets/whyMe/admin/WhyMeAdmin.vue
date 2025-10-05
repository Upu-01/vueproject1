<template>
  <div>
    <h2>Управление WhyMe</h2>
    <BButton variant="primary" class="mb-3" @click="openAddModal">
      Добавить
    </BButton>

    <ArtycleTable :articles="articles" @edit="handleEdit" @delete="deleteArticle" />

    <!-- Модальное окно для добавления -->
    <ArtycleFormModal
      v-model="showAddModal"
      title="Добавить"
      @save="saveNew"
    />

    <!-- Модальное окно для редактирования -->
    <ArtycleFormModal
      v-model="showEditModal"
      title="Редактировать"
      :article="selectedArticle"
      @save="saveEdited"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ArtycleFormModal from '@/widgets/ArticleAdmin/ArtycleFormModal.vue'
import ArtycleTable from '@/widgets/ArticleAdmin/ArtycleTable.vue'
import { useWhyMeStore } from '@/entities/whymeStore'
import { useFileStore } from '@/entities/fileStore'
import type { Article } from '@/shared/api/article'

const store = useWhyMeStore()
const fileStore = useFileStore()

const articles = computed(() => store.articles)

const showAddModal = ref(false)
const showEditModal = ref(false)
const selectedArticle = ref<Article | null>(null)

function openAddModal() {
  selectedArticle.value = null
  showAddModal.value = true
}

function handleEdit(article: Article) {
  selectedArticle.value = { ...article }
  showEditModal.value = true
}

async function deleteArticle(id: number) {
  await store.deleteArticle(id)
}

// Обработка сохранения нового Article
async function saveNew(data: any) {
  // data содержит поля: title, text, rating, imageFile
  let imageId = null
  if (data.imageFile) {
    // Загружаем изображение
    imageId = await fileStore.addImage(data.imageFile)
  }

  const newArticle: Omit<Article, 'id'> = {
    name: data.title,
    HtmlText: data.text,
    rating: data.rating,
    image: { id: imageId} ,
    icon: null
  }

  await store.addArticle(newArticle)
  showAddModal.value = false
}

// Обработка редактирования
async function saveEdited(article: Article) {
  await store.updateArticle(article)
  showEditModal.value = false
}
</script>