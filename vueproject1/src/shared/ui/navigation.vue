<template>
    <BNav class="navigation p-3" >
        <BLink to="/Admin" class="link">Админка</BLink>
    </BNav>
</template>

<script setup lang="ts">
import { BLink } from 'bootstrap-vue-next'
</script>
<style scoped>
.navigation{
    background-color: rgb(203, 255, 238);
}

.link{
    text-decoration: none;
    color: black;
}
</style>