<template>
    <div class="container my-4">
        <h2>Управление продуктами</h2>
        <BButton variant="primary" class="mb-3" @click="showAddModal = true">
            Добавить продукт
        </BButton>

        <ProductTable :products="products" @edit="handleEdit" @delete="deleteProduct" />

        <!-- Модальное окно для добавления -->
        <ProductFormModal v-model="showAddModal" title="Добавить продукт" @save="saveNewProduct" />

        <!-- Модальное окно для редактирования -->
        <ProductFormModal v-model="showEditModal" title="Редактировать продукт" :product="selectedProduct"
            @save="saveEditedProduct" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import { useProductStore } from '../entities/productStore';
import ProductTable from '../widgets/ProductAdmin/ProductTable.vue';
import ProductFormModal from '../widgets/ProductAdmin/ProductFormModal.vue';
import type { Product } from '@/shared/api/types/product';
import { BButton } from 'bootstrap-vue-next';

export default defineComponent({
    components: { ProductTable, ProductFormModal },
    setup() {
        const productStore = useProductStore();
        const products = computed(() => productStore.products);
        console.log(products);
        const showAddModal = ref(false);
        const showEditModal = ref(false);
        const selectedProduct = ref<Product | null>(null);


        const handleEdit = (product: Product) => {
            selectedProduct.value = product;
            showEditModal.value = true;
        };

        const saveNewProduct = async (productData: Omit<Product, 'id'>) => {

            await productStore.addProduct({ id: 0, ...productData });
            showAddModal.value = false;
        };

        const saveEditedProduct = async (productData: Omit<Product, 'id'>) => {
            if (selectedProduct.value) {
                const updatedProduct = { ...selectedProduct.value, ...productData };
                await productStore.updateProduct(updatedProduct);
                showEditModal.value = false;
                selectedProduct.value = null;
            }
        };

        const deleteProduct = async (id: number) => {
            await productStore.deleteProduct(id);
        };

        return {
            products,
            showAddModal,
            showEditModal,
            selectedProduct,
            handleEdit,
            saveNewProduct,
            saveEditedProduct,
            deleteProduct,
        };
    },
});
</script>