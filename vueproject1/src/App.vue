<script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue'
  import TheWelcome from './components/TheWelcome.vue'
  import Router from './Router.vue'
  import CreateProduct from './components/Product/CreateProduct.vue'
  import UpdateProduct from './components/Product/UpdateProduct.vue'
  import DeleteProduct from './components/Product/DeleteProduct.vue'
  import { BApp, BCard, BCardText, BButton } from 'bootstrap-vue-next'
</script>

<template>
  <BApp>
    <header>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="You did it!" msg2="test" />
        
      </div>
    </header>
    <main>
      <TheWelcome/>
      <CreateProduct/>
      <UpdateProduct/>
      <DeleteProduct/>
    </main>
  </BApp>
</template>


<style scoped>
  header {
    line-height: 1.5;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }
</style>
