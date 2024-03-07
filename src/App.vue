<!-- <script setup>
</script>

<template>


</template>

<style scoped>

</style> -->
<script setup>
import {ref,defineAsyncComponent} from "vue";
// import HelloWorld from './components/HelloWorld.vue';
const sh=ref(false);
// const ASF=defineAsyncComponent(()=>import("./components/HelloWorld.vue"))
const ASF=defineAsyncComponent({
loader:()=>import("./components/HelloWorld.vue"),
// loadingComponent:Comp
// errorComponent:Comp
})
</script>

<template>

<ASF v-if="sh" />
<button @click="sh=!sh">show</button>
</template>

<style scoped>

</style>
