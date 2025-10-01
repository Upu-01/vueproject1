<template>
  <BApp teleport-to="body">
    <BContainer>
      <Navigation></Navigation>
    <router-view></router-view>
    </BContainer>
  </BApp>
</template>

<style scoped></style>
<script setup lang="ts">
import {BApp, BCard, BButton, BContainer} from 'bootstrap-vue-next'
import Navigation from './shared/ui/navigation.vue';
</script>
