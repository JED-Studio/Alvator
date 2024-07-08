<script setup>
import Time from './Time.vue';

</script>



<template>
    <header class="mt-4 mb-16">
  <div class="max-w-7xl mx-auto pl-4 pr-4">
    <div class="flex justify-between justify-items-center items-center">
  <div class=" text-gray-50 ">
    <p>SALVATOR<br>cyber club
    </p>
  </div>
  <nav class="text-white">
    <ul class="flex bg-neutral-1000 rounded-2xl py-18">
    <li class=""><a class="px-3 py-5  rounded-2xl transition hover:bg-violet-1000 " href="#">Преимущества</a></li>
    <li class=""><a class="px-3 py-5  rounded-2xl transition hover:bg-violet-1000 " href="#">Цены</a></li>
    <li class=""><a class="px-3 py-5  rounded-2xl transition hover:bg-violet-1000 " href="#">Игры</a></li>
    <li class=""><a class="px-3 py-5  rounded-2xl transition hover:bg-violet-1000 " href="#">Системы</a></li>
    </ul>
  </nav>
  <Time/>
  
  </div>
</div>
</header>
</template>

<style scoped>
a{
  color: var(--text-color);
}

ul{
  background-color: var(--background-color-ul);
}
</style>