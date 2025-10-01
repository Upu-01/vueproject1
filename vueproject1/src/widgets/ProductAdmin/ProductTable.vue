<template>
  <BTable :items="products" :fields="fields" striped hover>
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
import type { Product } from '@/shared/api/types/product';
import {BTable, BButton} from 'bootstrap-vue-next';

export default defineComponent({
  props: {
    products: {
      type: Array as () => Product[],
      required: true,
    },
  },
  emits: ['edit', 'delete'],
  data() {
    return {
      fields: [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Название' },
        { key: 'description', label: 'Описание' },
        { key: 'price', label: 'Цена' },
        { key: 'actions', label: 'Действия' },
      ],
    };
  },
});

</script>