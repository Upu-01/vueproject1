<template>
  <BTable :items="articles" :fields="fields" striped hover>
    <template #cell(actions)="row">
      <BButton size="sm" variant="info" class="me-2" @click="$emit('edit', row.item)">
        Редактировать
      </BButton>
      <BButton size="sm" variant="danger" @click="$emit('delete', row.item.id)">
        Удалить
      </BButton>
    </template>
  </BTable>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { BTable, BButton } from 'bootstrap-vue-next';
import type { Artycle } from '@/shared/api/article';

export default defineComponent({
  props: {
    articles: {
      type: Array as () => Artycle[],
      required: true
    }
  },
  components:{ BButton },
  emits: ['edit', 'delete'],
  data() {
    return {
      fields: [
        { key: 'id', label: 'ID' },
        { key: 'title', label: 'Название' },
        { key: 'text', label: 'Описание' },
        { key: 'rating', label: 'Рейтинг' },
        { key: 'image', label: 'Изображение' },
        { key: 'icon', label: 'Иконки' },
        { key: 'actions', label: 'Действия' },
      ],
    };
  },
});
</script>