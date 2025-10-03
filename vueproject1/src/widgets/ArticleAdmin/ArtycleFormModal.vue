<template>
  <BModal :title="title" v-model="show" @ok="save">
    <BForm @submit.stop.prevent="save">
      <BFormGroup label="Название" label-for="artycle-title">
        <BFormInput
          id="product-name"
          v-model="artycleData.title"
          required
        />
      </BFormGroup>
      <BFormGroup label="Описание" label-for="artycle-text">
        <BFormTextarea
          id="artycle-text"
          v-model="artycleData.text"
          required
        />
      </BFormGroup>
      <BFormGroup label="Рейтинг" label-for="artycle-rating">
        <BFormInput
          id="artycle-rating"
          v-model.number="artycleData.rating"
          type="number"
          required
        />
      </BFormGroup>
      <BFormGroup label="Изображение" label-for="artycle-image">
       <BFormInput
            id="artycle-image"
            @change="artycleData.image"
            accept="image/*"
        />
      </BFormGroup>
        <BFormGroup label="Иконка" label-for="artycle-icon">
        <BFormInput
            id="artycle-icon"

            @change="artycleData.icon"
            accept="icon/*"
        />
      </BFormGroup>
    </BForm>
  </BModal>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { BModal, BFormGroup, BFormTextarea,  BFormInput, BForm} from 'bootstrap-vue-next';
import type { Artycle } from '@/shared/api/article';

export default defineComponent({
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    artycle: {
      type: Object as () => Artycle | null,
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
    const artycleData = ref<Omit<Artycle, 'id'>>({
        image: [],
        icon: [],
        title: "",
        text: "",
        rating: 0,
    });

    watch(() => props.modelValue, (newVal) => {
      show.value = newVal;
      if (props.artycle) {
        // редактирование
        artycleData.value = {
          title: props.artycle.title,
          text: props.artycle.text,
          rating: props.artycle.rating,
          image: props.artycle.image,
          icon: props.artycle.icon
        };
      } else {
        // добавление
        artycleData.value = {image: [], icon: [], title: "", text: "", rating: 0};
      }
    });

    const save = () => {
      emit('save', artycleData.value);
      emit('update:modelValue', false);
    };

    return {
      show,
      artycleData,
      save,
    };
  },
});
</script>