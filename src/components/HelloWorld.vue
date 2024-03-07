<script setup>
import { reactive, ref, watch, watchEffect } from 'vue';
const beet=ref(33);
//immediate=>api(third argu)
// watch([beet,beet1],(newVal,oldVal)=>{}
watch(beet,(newVal,oldVal)=>{
console.log(newVal,oldVal)
if( newVal>oldVal && newVal>100){
  alert("not wlak")
}
if( newVal<oldVal && newVal<20){
  alert("wlak")
}
})

// watchEffect(()=>console.log(beet.value,"dgdg"))
// reactive state
// const heartBeet=reactive({beet:50})
// watch(()=>{return {...heartBeet}},(newVal,oldVal)=>{
//   console.log(newVal,oldVal)
// })

//directive custom
const vFontSize={
  mounted:(el,binding)=> {
    console.log(binding.value);
    el.style.fontSize="40px",
    el.style.color="red"
  },
}
</script>

<template>
<h1 v-font-size="80">custom dir</h1>
<!-- <h1 v-font-size:default>custom dir</h1>=>pass argument  binding.arg -->
<!-- <h1 v-font-size.default>custom dir</h1>=>pass modifatir  binding.modifiers -->
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
