<script setup>
import {RouterLink} from "vue-router"
const arr=[{name:"first page"},{name:"sec page"},{name:"third page"},{name:"fourth page"}]
</script>


<template>
    <h1>Dynamic 2</h1>
    <div v-for="(data,index) in arr" :key="index">
        <RouterLink :to="`/dy2/${index+1}`"><h1>{{ data.name }}</h1></RouterLink>
       <!-- <RouterLink :to="`/dy2/${index+1}`"><h1>{{ data.name }}</h1></RouterLink> -->
        </div>

</template>