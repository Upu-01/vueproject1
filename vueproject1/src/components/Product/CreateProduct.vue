<template>
  <div>
    <h2>Create Product</h2>
    <!-- Поля формы для продукта -->
    <form @submit.prevent="handleCreate">
      <input v-model="product.name" placeholder="Name" required />
      <input v-model="product.description" placeholder="Description" />
      <!-- Добавьте остальные поля по необходимости -->
      <button type="submit">Создать</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  props: {
    createProduct: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const product = reactive({
      name: '',
      description: '',
      // остальные поля
    });

    const handleCreate = () => {
      props.createProduct({ ...product });
    };

    return { product, handleCreate };
  },
});
</script>
