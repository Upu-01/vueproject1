<template>
  <div>
    <h2>Update Product</h2>
    <form @submit.prevent="handleUpdate">
      <input v-model="product.name" placeholder="Name" required />
      <input v-model="product.description" placeholder="Description" />
      <!-- остальные поля -->
      <button type="submit">Обновить</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from 'vue';

export default defineComponent({
  props: {
    productData: {
      type: Object,
      required: true,
    },
    updateProduct: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const product = reactive({ ...props.productData });

    watch(() => props.productData, (newData) => {
      Object.assign(product, newData);
    });

    const handleUpdate = () => {
      props.updateProduct({ ...product });
    };

    return { product, handleUpdate };
  },
});
</script>
