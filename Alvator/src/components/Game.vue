<script setup>

import Card_game from './Card_game.vue';


defineProps({
  items: Array
})





const items = [
    {
        "id": 1,
        "title":"DLOX",
        "title1": " Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
        
        "imageUrl": "public/dota-2.jpg",
        "isVisible": false
    },
    {
        "id": 2,
        "title": "Sneakers",
        "title1": "Grud zalup msititeli",
        
        "imageUrl": "/sneakers/sneakers-2.jpg",
        "isVisible": false
    },
]

</script>




<template>
    <section class="game-section">
  <div class="max-w-7xl mx-auto pl-4 pr-4">
    <div class="grid grid-cols-4 gap-5 ">
   <Card_game
   v-for="item in items"
   :key="item.id"
   :title="item.title"
   :title1="item.title1"
   :imageUrl="item.imageUrl"

   />
  </div>
</div>
    

</section>
</template>

<style scoped>



</style>





