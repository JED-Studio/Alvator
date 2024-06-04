<script setup>
defineProps({
  title: String,
  title_2: String,
  title_3: String,
  titlesection: Object
})
</script>



<template>
    <section :style="titlesection">
    <div class="max-w-7xl mx-auto pl-4 pr-4">
      <div class="font-medium text-center line">
    <h1 class="h1 font-medium text-6xl">{{title}}</h1>
    <h1 class="h1 font-medium text-6xl">{{title_2}}</h1>
    <h1 class="h2 font-medium text-1xl mt-6">{{title_3}}</h1>
    </div>
    </div>
  </section>
</template>

<style scoped>

.h1{
  color: var(--text-color-h1);
}

.h2{
  color: var(--text-color-h2);
}


</style>