<template>
    <BTabs pills card vertical>
        <BTab title="Tab 1">
            <div class="container my-4">
                <h2>Управление продуктами</h2>
                <BButton variant="primary" class="mb-3" @click="showAddModal = true">
                    Добавить продукт
                </BButton>
        
                <ProductTable :products="products" @edit="handleEdit" @delete="deleteProduct" />

        <!---- Модальное окно для добавления-->
                <ProductFormModal v-model="showAddModal" title="Добавить продукт" @save="saveNewProduct" /> 

        <!-- Модальное окно для редактирования -->
                <ProductFormModal v-model="showEditModal" title="Редактировать продукт" :product="selectedProduct"
                @save="saveEditedProduct" /> 
            </div>
        </BTab>
        <BTab title="Why Me">
            <WhyMeAdmin />
        </BTab>
        <BTab title="Banner Carusel">
            <div class="container my-4">
                <h2>Управление</h2>
                <BButton variant="primary" class="mb-3" @click="showAddModalBannerCarusel = true">
                    Добавить
                </BButton>
        
                <ArtycleTable :articles="articlesBanner" @edit="handleEditBannerCarusel" @delete="deleteBannerCarusel" />

        <!---- Модальное окно для добавления-->
                <ArtycleFormModal v-model="showAddModalBannerCarusel" title="Добавить" @save="saveBannerCarusel" /> 

        <!-- Модальное окно для редактирования -->
                <ArtycleFormModal v-model="showEditModalBannerCarusel" title="Редактировать" :article="selectedArtycle"
                @save="saveEditedBannerCarusel" /> 
            </div>
        </BTab>
        <BTab title="About Us">
            <div class="container my-4">
                <h2>Управление</h2>
                <BButton variant="primary" class="mb-3" @click="showAddModalAboutUs = true">
                    Добавить
                </BButton>
        
                <ArtycleTable :articles="articlesAboutUs" @edit="handleEditAboutUs" @delete="deleteAboutUs" />

        <!---- Модальное окно для добавления-->
                <ArtycleFormModal v-model="showAddModalAboutUs" title="Добавить" @save="saveAboutUs" /> 

        <!-- Модальное окно для редактирования -->
                <ArtycleFormModal v-model="showEditModalAboutUs" title="Редактировать" :article="selectedArtycle"
                @save="saveEditedAboutUs" /> 
            </div>
        </BTab>
        <BTab title="Services">
            <div class="container my-4">
                <h2>Управление</h2>
                <BButton variant="primary" class="mb-3" @click="showAddModalServices = true">
                    Добавить
                </BButton>
        
                <ArtycleTable :articles="articlesServices" @edit="handleEditServices" @delete="deleteServices" />

        <!---- Модальное окно для добавления-->
                <ArtycleFormModal v-model="showAddModalServices" title="Добавить" @save="saveServices" /> 

        <!-- Модальное окно для редактирования -->
                <ArtycleFormModal v-model="showEditModalServices" title="Редактировать" :article="selectedArtycle"
                @save="saveServices" /> 
            </div>
        </BTab>
        <BTab title="Paiment Info">
            <div class="container my-4">
                <h2>Управление</h2>
                <BButton variant="primary" class="mb-3" @click="showAddModalPaimentInfo = true">
                    Добавить
                </BButton>
        
                <ArtycleTable :articles="articlesPaimentInfo" @edit="handleEditPaimentInfo" @delete="deletePaimentInfo" />

        <!---- Модальное окно для добавления-->
                <ArtycleFormModal v-model="showAddModalPaimentInfo" title="Добавить" @save="savePaimentInfo" /> 

        <!-- Модальное окно для редактирования -->
                <ArtycleFormModal v-model="showEditModalPaimentInfo" title="Редактировать" :article="selectedArtycle"
                @save="savePaimentInfo" /> 
            </div>
        </BTab>
        <BTab title="Contacts">
            <div class="container my-4">
                <h2>Управление</h2>
                <BButton variant="primary" class="mb-3" @click="showAddModalContacts = true">
                    Добавить
                </BButton>
        
                <ArtycleTable :articles="articlesContacts" @edit="handleEditContacts" @delete="deleteContacts" />

        <!---- Модальное окно для добавления-->
                <ArtycleFormModal v-model="showAddModalContacts" title="Добавить" @save="saveContacts" /> 

        <!-- Модальное окно для редактирования -->
                <ArtycleFormModal v-model="showEditModalContacts" title="Редактировать" :article="selectedArtycle"
                @save="saveContacts" /> 
            </div>
        </BTab>
        <BTab title="Review">
            <div class="container my-4">
                <h2>Управление</h2>
                <BButton variant="primary" class="mb-3" @click="showAddModalReviews = true">
                    Добавить
                </BButton>
        
                <ArtycleTable :articles="articlesReviews" @edit="handleEditReviews" @delete="deleteReview" />

        <!---- Модальное окно для добавления-->
                <ArtycleFormModal v-model="showAddModalReviews" title="Добавить" @save="saveReviews" /> 

        <!-- Модальное окно для редактирования -->
                <ArtycleFormModal v-model="showEditModalReviews" title="Редактировать" :article="selectedArtycle"
                @save="saveReviews" /> 
            </div>
        </BTab>
        <BTab title="Картинки">
            <ImgAdmin />
        </BTab>
    </BTabs>
</template>

<script lang="ts">
import { BButton } from 'bootstrap-vue-next';
import { defineComponent, ref, computed } from 'vue';
import { useProductStore } from '../entities/productStore';
import ProductTable from '../widgets/product/admin/ProductTable.vue';
import ProductFormModal from '../widgets/product/admin//ProductFormModal.vue';
import type { Product } from '@/shared/api/types/product';
import ArtycleTable from '@/widgets/ArticleAdmin/ArtycleTable.vue';
import ArtycleFormModal from '@/widgets/ArticleAdmin/ArtycleFormModal.vue';
import type { Article } from '@/shared/api/article';
import { useWhyMeStore } from '@/entities/whymeStore';
import { useBannerCaruselStore } from '@/entities/bannercaruselStore';
import { useAboutUsStore } from '@/entities/aboutUsStore';
import { useServicesStore } from '@/entities/servicesStore';
import { usePaimentInfoStore } from '@/entities/paimentInfoStore';
import { useContactsStore } from '@/entities/contactsStore';
import { useReviewStore } from '@/entities/reviewStore';
import ImgAdmin from '@/widgets/img/admin/ImgAdmin.vue';
import WhyMeAdmin from '@/widgets/whyMe/admin/WhyMeAdmin.vue';

export default defineComponent({
    components: { ProductTable, ProductFormModal, BButton, ArtycleFormModal, ArtycleTable, ImgAdmin, WhyMeAdmin },
    setup() {
        const productStore = useProductStore();
        const products = computed(() => productStore.products);
        console.log(products);
        const showAddModal = ref(false);
        const showEditModal = ref(false);
        const selectedProduct = ref<Product | null>(null);

        const showAddModalWhyMe = ref(false);
        const showEditModalWhyMe = ref(false);
        const whyMeStore = useWhyMeStore();
        const articlesWhyMe = computed(() => whyMeStore.articles);
        console.log(articlesWhyMe);

        const showAddModalBannerCarusel = ref(false);
        const showEditModalBannerCarusel = ref(false);
        const bannerCaruselStore = useBannerCaruselStore();
        const articlesBanner = computed(() => bannerCaruselStore.articles);
        console.log(articlesBanner);

        const showAddModalAboutUs = ref(false);
        const showEditModalAboutUs = ref(false);
        const aboutUsStore = useAboutUsStore();
        const articlesAboutUs = computed(() => aboutUsStore.articles);
        console.log(articlesAboutUs);

        const showAddModalServices = ref(false);
        const showEditModalServices = ref(false);
        const servicesStore = useServicesStore();
        const articlesServices = computed(() => servicesStore.articles);
        console.log(articlesServices);

        const showAddModalPaimentInfo = ref(false);
        const showEditModalPaimentInfo = ref(false);
        const paimentInfoStore = usePaimentInfoStore();
        const articlesPaimentInfo = computed(() => paimentInfoStore.articles);
        console.log(articlesPaimentInfo);

        const showAddModalContacts = ref(false);
        const showEditModalContacts = ref(false);
        const contactsStore = useContactsStore();
        const articlesContacts = computed(() => contactsStore.articles);
        console.log(articlesContacts);

        const showAddModalReviews = ref(false);
        const showEditModalReviews = ref(false);
        const reviewStore = useReviewStore();
        const articlesReviews = computed(() => reviewStore.articles);
        console.log(articlesReviews);

        const selectedArtycle = ref<Article | null>(null);


        const handleEdit = (product: Product) => {
            selectedProduct.value = product;
            showEditModal.value = true;
        };
        


        // const handleEditArtycle = (article: Artycle) => {
        //     selectedArtycle.value = article;
        //     showEditModal.value = true;
        // };

        const handleEditWhyMe = (article: Article) => {
            selectedArtycle.value = article;
            showEditModalWhyMe.value = true;
        };

        const handleEditBannerCarusel = (article: Article) => {
            selectedArtycle.value = article;
            showEditModalBannerCarusel.value = true;
        };

        const handleEditAboutUs = (article: Article) => {
            selectedArtycle.value = article;
            showEditModalAboutUs.value = true;
        };

        const handleEditServices = (article: Article) => {
            selectedArtycle.value = article;
            showEditModalServices.value = true;
        };

        const handleEditPaimentInfo = (article: Article) => {
            selectedArtycle.value = article;
            showEditModalPaimentInfo.value = true;
        };

        const handleEditContacts = (article: Article) => {
            selectedArtycle.value = article;
            showEditModalContacts.value = true;
        };

        const handleEditReviews = (article: Article) => {
            selectedArtycle.value = article;
            showEditModalReviews.value = true;
        };


        // клонировать
        const saveNewProduct = async (productData: Omit<Product, 'id'>) => {

            await productStore.addProduct({ id: 0, ...productData });
            showAddModal.value = false;
        };

        const saveNewWhyMe = async (artycleData: Omit<Article, 'id'>) => {

            await whyMeStore.addArticle({ id: 0, ...artycleData });
            showAddModalWhyMe.value = false;
        };

        const saveBannerCarusel = async (artycleData: Omit<Article, 'id'>) => {

            await bannerCaruselStore.addArticle({ id: 0, ...artycleData });
            showAddModalBannerCarusel.value = false;
        };

        const saveAboutUs = async (artycleData: Omit<Article, 'id'>) => {

            await aboutUsStore.addArticle({ id: 0, ...artycleData });
            showAddModalAboutUs.value = false;
        };

        const saveServices = async (artycleData: Omit<Article, 'id'>) => {

            await servicesStore.addArticle({ id: 0, ...artycleData });
            showAddModalServices.value = false;
        };

        const savePaimentInfo = async (artycleData: Omit<Article, 'id'>) => {

            await paimentInfoStore.addArticle({ id: 0, ...artycleData });
            showAddModalPaimentInfo.value = false;
        };

        const saveContacts = async (artycleData: Omit<Article, 'id'>) => {

            await contactsStore.addArticle({ id: 0, ...artycleData });
            showAddModalContacts.value = false;
        };

        const saveReviews = async (artycleData: Omit<Article, 'id'>) => {

            await reviewStore.addArticle({ id: 0, ...artycleData });
            showAddModalReviews.value = false;
        };




         // клонировать
        const saveEditedProduct = async (productData: Omit<Product, 'id'>) => {
            if (selectedProduct.value) {
                const updatedProduct = { ...selectedProduct.value, ...productData };
                await productStore.updateProduct(updatedProduct);
                showEditModal.value = false;
                selectedProduct.value = null;
            }
        };

        const saveEditedWhyMe = async (artycleData: Omit<Article, 'id'>) => {
            if (selectedArtycle.value) {
                const updatedArtycle = { ...selectedArtycle.value, ...artycleData };
                await whyMeStore.updateArticle(updatedArtycle);
                showEditModalWhyMe.value = false;
                selectedArtycle.value = null;
            }
        };

        const saveEditedBannerCarusel = async (artycleData: Omit<Article, 'id'>) => {
            if (selectedArtycle.value) {
                const updatedArtycle = { ...selectedArtycle.value, ...artycleData };
                await bannerCaruselStore.updateArticle(updatedArtycle);
                showEditModalBannerCarusel.value = false;
                selectedArtycle.value = null;
            }
        };
        const saveEditedAboutUs = async (artycleData: Omit<Article, 'id'>) => {
            if (selectedArtycle.value) {
                const updatedArtycle = { ...selectedArtycle.value, ...artycleData };
                await aboutUsStore.updateArticle(updatedArtycle);
                showEditModalAboutUs.value = false;
                selectedArtycle.value = null;
            }
        };

        const saveEditedServices = async (artycleData: Omit<Article, 'id'>) => {
            if (selectedArtycle.value) {
                const updatedArtycle = { ...selectedArtycle.value, ...artycleData };
                await servicesStore.updateArticle(updatedArtycle);
                showEditModalServices.value = false;
                selectedArtycle.value = null;
            }
        };

        const saveEditedPaimentInfo = async (artycleData: Omit<Article, 'id'>) => {
            if (selectedArtycle.value) {
                const updatedArtycle = { ...selectedArtycle.value, ...artycleData };
                await paimentInfoStore.updateArticle(updatedArtycle);
                showEditModalPaimentInfo.value = false;
                selectedArtycle.value = null;
            }
        };

        const saveEditedContacts = async (artycleData: Omit<Article, 'id'>) => {
            if (selectedArtycle.value) {
                const updatedArtycle = { ...selectedArtycle.value, ...artycleData };
                await contactsStore.updateArticle(updatedArtycle);
                showEditModalContacts.value = false;
                selectedArtycle.value = null;
            }
        };

        const saveEditedReview = async (artycleData: Omit<Article, 'id'>) => {
            if (selectedArtycle.value) {
                const updatedArtycle = { ...selectedArtycle.value, ...artycleData };
                await reviewStore.updateArticle(updatedArtycle);
                showEditModalReviews.value = false;
                selectedArtycle.value = null;
            }
        };



        // клонировать
        const deleteProduct = async (id: number) => {
            await productStore.deleteProduct(id);
        };

        const deleteWhyMe = async (id: number) => {
            await whyMeStore.deleteArticle(id);
        };

        const deleteBannerCarusel = async (id: number) => {
            await bannerCaruselStore.deleteArticle(id);
        };

        const deleteAboutUs = async (id: number) => {
            await aboutUsStore.deleteArticle(id);
        };
        
        const deleteServices = async (id: number) => {
            await servicesStore.deleteArticle(id);
        };

        const deletePaimentInfo = async (id: number) => {
            await servicesStore.deleteArticle(id);
        };

        const deleteContacts = async (id: number) => {
            await contactsStore.deleteArticle(id);
        };

        const deleteReview = async (id: number) => {
            await reviewStore.deleteArticle(id);
        };

        return {
            showEditModalReviews,
            showAddModalReviews,
            showEditModalContacts,
            showAddModalContacts,
            showEditModalPaimentInfo,
            showAddModalPaimentInfo,
            showEditModalServices,
            showAddModalServices,
            showEditModalAboutUs,
            showAddModalAboutUs,
            showEditModalBannerCarusel,
            showAddModalBannerCarusel,
            showAddModalWhyMe,
            showEditModalWhyMe,
            articlesReviews,
            reviewStore,
            articlesContacts,
            contactsStore,
            articlesPaimentInfo,
            paimentInfoStore,
            articlesServices,
            servicesStore,
            aboutUsStore,
            articlesAboutUs,
            selectedArtycle,
            articlesWhyMe,
            products,
            showAddModal,
            showEditModal,
            selectedProduct,
            bannerCaruselStore,
            articlesBanner,
            handleEdit,
            saveNewProduct,
            saveEditedProduct,
            deleteProduct,
            saveNewWhyMe,
            saveEditedWhyMe,
            deleteWhyMe,
            saveBannerCarusel,
            saveEditedBannerCarusel,
            deleteBannerCarusel,
            saveAboutUs,
            saveEditedAboutUs,
            deleteAboutUs,
            saveServices,
            saveEditedServices,
            deleteServices,
            savePaimentInfo,
            saveEditedPaimentInfo,
            deletePaimentInfo,
            saveContacts,
            saveEditedContacts,
            deleteContacts,
            saveReviews,
            saveEditedReview,
            deleteReview,
            handleEditWhyMe,
            handleEditBannerCarusel,
            handleEditAboutUs,
            handleEditServices,
            handleEditPaimentInfo,
            handleEditContacts,
            handleEditReviews
        };
    },

});
</script>