<template>
  <div>
    <h2>Управление картинками</h2>

    <!-- Кнопка для открытия модалки -->
    <b-button variant="primary" @click="showModal = true">Добавить картинку</b-button>

    <!-- Модальное окно для добавления картинки -->
    <b-modal v-model="showModal" title="Добавить картинку" @ok="addImage">
      <b-form @submit.stop.prevent>
        <b-form-file v-model="newImageFile" accept="image/*" required></b-form-file>
      </b-form>
    </b-modal>

    <BRow cols="4" class="mt-3">
      <div v-for="img in imgs" :key="img" class="col">
        <img :src="fileStore.getImg(img)" alt="Image" style="width: 100%; height: auto;" />
      </div>
    </BRow>
  </div>
</template>

<script setup lang="ts">
import { useFileStore } from '@/entities/fileStore';
import { ref, computed } from 'vue';

const fileStore = useFileStore();
const imgs = computed(() => fileStore.imageIds);

// Управление состоянием модалки
const showModal = ref(false);

// Для хранения выбранного файла
const newImageFile = ref<File | null>(null);

// Функция для добавления картинки
const addImage = () => {
  if (newImageFile.value) {
    // Ваша логика для загрузки файла в стор или сервер
    // Например, вызываете метод файластора:
    fileStore.addImage(newImageFile.value);

    // Очистка и закрытие модалки
    newImageFile.value = null;
    showModal.value = false;
  }
};
</script>