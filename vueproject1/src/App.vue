<template>
  <BApp teleport-to="body">
    <Navigation></Navigation>
    <BContainer fluid class="p-0">

    <router-view></router-view>
    </BContainer>
  </BApp>
</template>

<style scoped></style>
<script setup lang="ts">
import {BApp, BCard, BButton, BContainer} from 'bootstrap-vue-next'
import Navigation from './shared/ui/navigation.vue';
</script>
