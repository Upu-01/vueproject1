import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import { useProductStore } from './entities/productStore'

const app = createApp(App)

app.use(createPinia())
app.use(router)
function initializeStores() {
  const productStore = useProductStore();
  productStore.init(false); // или false, по необходимости

  // Аналогично для других стора:
  // const anotherStore = useAnotherStore();
  // anotherStore.init();
}

initializeStores();
app.mount('#app')
