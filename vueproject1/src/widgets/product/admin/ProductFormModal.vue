<template>
  <BModal :title="title" v-model="show" @ok="save">
    <BForm @submit.stop.prevent="save">
      <BFormGroup label="Название" label-for="product-name">
        <BFormInput
          id="product-name"
          v-model="productData.name"
          required
        />
      </BFormGroup>
      <BFormGroup label="Описание" label-for="product-description">
        <BFormTextarea
          id="product-description"
          v-model="productData.description"
          required
        />
      </BFormGroup>
      <BFormGroup label="Цена" label-for="product-price">
        <BFormInput
          id="product-price"
          v-model.number="productData.price"
          type="number"
          required
        />
      </BFormGroup>
    </BForm>
  </BModal>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { BModal, BFormGroup, BFormTextarea,  BFormInput, BForm} from 'bootstrap-vue-next';
import type { Product } from '@/shared/api/types/product';

export default defineComponent({
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    product: {
      type: Object as () => Product | null,
      default: null,
    },
    title: {
      type: String,
      default: 'Форма',
    },
  },
  emits: ['update:modelValue', 'save', 'cancel'],
  setup(props, { emit }) {
    const show = ref(props.modelValue);
    const productData = ref<Omit<Product, 'id'>>({
      name: '',
      description: '',
      price: 0,
    });

    watch(() => props.modelValue, (newVal) => {
      show.value = newVal;
      if (props.product) {
        // редактирование
        productData.value = {
          name: props.product.name,
          description: props.product.description,
          price: props.product.price,
        };
      } else {
        // добавление
        productData.value = { name: '', description: '', price: 0 };
      }
    });

    const save = () => {
      emit('save', productData.value);
      emit('update:modelValue', false);
    };

    return {
      show,
      productData,
      save,
    };
  },
});
</script>