<template>
  <button @click="handleDelete">Удалить</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
    deleteProduct: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const handleDelete = () => {
      if (confirm('Вы уверены, что хотите удалить?')) {
        props.deleteProduct(props.id);
      }
    };
    return { handleDelete };
  },
});
</script>
