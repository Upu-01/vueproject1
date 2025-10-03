import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import { useProductStore } from './entities/productStore'
import { useWhyMeStore } from './entities/whymeStore'
import { useBannerCaruselStore } from './entities/bannercaruselStore'
import { useAboutUsStore } from './entities/aboutUsStore'
import { useServicesStore } from './entities/servicesStore'
import { usePaimentInfoStore } from './entities/paimentInfoStore'
import { useContactsStore } from './entities/contactsStore'
import { useReviewStore } from './entities/reviewStore'

const app = createApp(App)

app.use(createPinia())
app.use(router)
function initializeStores() {
  const productStore = useProductStore();
  productStore.init(false); // или false, по необходимости

  const whyMeStore = useWhyMeStore();
  whyMeStore.init(false);

  const bannerCaruselStore = useBannerCaruselStore();
  bannerCaruselStore.init(false);

  const aboutUsStore = useAboutUsStore();
  aboutUsStore.init(false);

  const servicesStore = useServicesStore();
  servicesStore.init(false);
  
  const paimentInfoStore = usePaimentInfoStore();
  paimentInfoStore.init(false);

  const contactsStore = useContactsStore();
  contactsStore.init(false);

  const reviewStore = useReviewStore();
  reviewStore.init(false);
  // Аналогично для других стора:
  // const anotherStore = useAnotherStore();
  // anotherStore.init();
}

initializeStores();
app.mount('#app')
