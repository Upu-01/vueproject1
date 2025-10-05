<template>
  <b-modal
    :title="title"
    v-model="show"
    @ok="save"
    @hide="onHide"
  >
    <b-form @submit.stop.prevent="save">
      <b-form-group label="Название" label-for="article-title">
        <b-form-input id="article-title" v-model="formData.title" required />
      </b-form-group>
      
      <b-form-group label="Описание" label-for="article-text">
        <b-form-textarea id="article-text" v-model="formData.text" required />
      </b-form-group>
      
      <b-form-group label="Рейтинг" label-for="article-rating">
        <b-form-input
          id="article-rating"
          v-model.number="formData.rating"
          type="number"
          required
        />
      </b-form-group>
      
      <!-- Выбор изображения -->
      <b-form-group label="Изображение" label-for="article-image">
        <input type="file" @change="onImageChange" accept="image/*" />
        <div v-if="imagePreview" class="mt-2">
          <img :src="imagePreview" alt="Preview" style="max-width:200px; max-height:200px" />
        </div>
      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { BModal, BForm, BFormGroup, BFormInput, BFormTextarea } from 'bootstrap-vue-next'

export default defineComponent({
  props: {
    modelValue: { type: Boolean, required: true },
    title: { type: String, default: 'Форма' },
    article: { type: Object, default: null }
  },
  emits: ['update:modelValue', 'save'],
  setup(props, { emit }) {
    const show = ref(props.modelValue)

    const formData = ref({
      title: '',
      text: '',
      rating: 0
    })

    const selectedFile = ref<File | null>(null)
    const imagePreview = ref<string | null>(null)

    watch(
      () => props.modelValue,
      (val) => {
        show.value = val
        if (props.article) {
          formData.value = {
            title: props.article.title,
            text: props.article.text,
            rating: props.article.rating
          }
        } else {
          formData.value = { title: '', text: '', rating: 0 }
        }
        selectedFile.value = null
        imagePreview.value = null
      },
      { immediate: true }
    )

    const onImageChange = (e: Event) => {
      const input = e.target as HTMLInputElement
      if (input.files && input.files[0]) {
        selectedFile.value = input.files[0]
        const reader = new FileReader()
        reader.onload = (e) => {
          imagePreview.value = e.target?.result as string
        }
        reader.readAsDataURL(selectedFile.value)
      } else {
        selectedFile.value = null
        imagePreview.value = null
      }
    }

    const save = async () => {
      // Передаем данные, включая выбранный файл
      emit('save', {
        ...formData.value,
        imageFile: selectedFile.value
      })
      emit('update:modelValue', false)
    }

    const onHide = () => {
      emit('update:modelValue', false)
    }

    return {
      show,
      formData,
      onImageChange,
      save,
      onHide,
      imagePreview
    }
  }
})
</script>