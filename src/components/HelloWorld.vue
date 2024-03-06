<script setup>
import { reactive, ref, watch } from 'vue';
const beet=ref(33);
watch(beet,(newVal,oldVal)=>{
console.log(newVal,oldVal)
if( newVal>oldVal && newVal>100){
  alert("not wlak")
}
if( newVal<oldVal && newVal<20){
  alert("wlak")
}
})

// reactive state
// const heartBeet=reactive({beet:50})
// watch(()=>{return {...heartBeet}},(newVal,oldVal)=>{
//   console.log(newVal,oldVal)
// })
</script>

<template>

<h1>Heart Beet {{  beet}}</h1>
<h1 v-if="beet>40">Alive</h1>
<h1 v-if="beet<39">Dead....</h1>
<button @click="beet+=5">Add by 5</button>
<button @click="beet-=5"> Sub by 5</button>

<!-- <h1 v-if="heartBeet.beet>40">Alive</h1>
<h1 v-if="heartBeet.beet<39">Dead....</h1>
<button @click="heartBeet.beet+=5">Add by 5</button>
<button @click="heartBeet.beet-=5"> Sub by 5</button> -->

</template>

<style scoped>

</style>























<!-- <script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style> -->
