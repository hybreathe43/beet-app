<script setup>
import { ref, defineAsyncComponent, Transition } from "vue";
import User from "./components/User.vue";
import Dynamic1 from "./components/Dynamic1.vue";
import Dynamic2 from "./components/Dynamic2.vue";
import imgSrc from "./assets/logo.svg";
import { RouterView,RouterLink } from "vue-router";
import {getSingleUser,postUser,updateUser} from "./components/composable/fetchApi";
const url=ref("https://reqres.in/api/users/");
const uid=ref(1);
const {userData,error} =getSingleUser(url,uid);
const sh = ref(false);
const name = ref("");
const job = ref("");
function submitForm(){
  const {userData,error} =updateUser(url,uid,name,job)
}
// function submitForm(){
//   const {userData,error} =postUser(url,name,job)
// }


const ASF = defineAsyncComponent({
  loader: () => import("./components/HelloWorld.vue"),
});

const currTab=ref("User")
const tabs ={
  User:User,
  Dynamic1:Dynamic1,
  Dynamic2:Dynamic2,
}
const img =ref("./assets/logo.svg");
// const url=ref("https://google.com");
</script>

<template>
  <div>
<RouterLink :to="{name:'da1'}">1</RouterLink>
<!-- <RouterLink to="/dy1">1</RouterLink> -->
<RouterLink :to="{name:'da2'}">2</RouterLink>
<!-- <RouterLink to="/dy2">2</RouterLink> -->

  </div>
  <RouterView/>
  <!-- <h1>{{ userData.id }}</h1>
  <h1>{{ userData.email }}</h1>
  <a :href="userData.avatar">sasas</a>
  <User />
  <button @click="sh=!sh">show</button>
  <Transition>
<h1 v-if="sh">sdsdsdsssss</h1></Transition>
  
    <ASF v-if="sh" key="hello-world" /> -->



  <!-- dynamic components -->
<!-- <button v-for="(_,tab) in tabs" :key="tab" @click="currTab=tab">{{ tab }}</button>
<KeepAlive>
  <component :is="tabs[currTab]"/>
</KeepAlive>
<img :src="userData.avatar"  alt="ssdsd" width="300" height="200" /> -->

<!-- post data -->

<!-- <form method="post" @submit.prevent="submitForm">
<input type="text" v-model="name" >
<input type="text" v-model="job" >
<button type="submit">Save</button>
</form> -->
<!-- <form method="post" @submit.prevent="submitForm">
  <input type="text" v-model="uid">
<input type="text" v-model="name" >
<input type="text" v-model="job" >
<button type="submit">Save</button>
</form> -->

</template>

<style>
.v-enter-active, .v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>