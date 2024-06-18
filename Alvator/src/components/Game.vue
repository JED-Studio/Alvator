<script setup>
import Card_game from './Card_game.vue';


defineProps({
  items: Array
})





const items = [
    {
        "id": 1,
        "title": " Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
        
        "imageUrl": "/sneakers/sneakers-1.jpg"
    },
    {
        "id": 2,
        "title": "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
        
        "imageUrl": "/sneakers/sneakers-2.jpg"
    },
    {
        "id": 3,
        "title": "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
        
        "imageUrl": "/sneakers/sneakers-3.jpg"
    },
    {
        "id": 4,
        "title": "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
      
        "imageUrl": "/sneakers/sneakers-4.jpg"
    },
    {
        "id": 5,
        "title": "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
      
        "imageUrl": "/sneakers/sneakers-5.jpg"
    },
    {
        "id": 6,
        "title": "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
      
        "imageUrl": "/sneakers/sneakers-6.jpg"
    },
    {
        "id": 7,
        "title": "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
      
        "imageUrl": "/sneakers/sneakers-7.jpg"
    },
    {
        "id": 8,
        "title": "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
      
        "imageUrl": "/sneakers/sneakers-8.jpg"
    },
    {
        "id": 9,
        "title": "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
        
        "imageUrl": "/sneakers/sneakers-9.jpg"
    },
    {
        "id": 10,
        "title": "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
        
        "imageUrl": "/sneakers/sneakers-10.jpg"
    },
    {
        "id": 11,
        "title": "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
      
        "imageUrl": "/sneakers/sneakers-11.jpg"
    },
    {
        "id": 12,
        "title": "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
      
        "imageUrl": "/sneakers/sneakers-12.jpg"
    }
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
   :imageUrl="item.imageUrl"
   />
  </div>
</div>
    

</section>
</template>

<style scoped>



</style>





