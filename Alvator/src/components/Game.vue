<script setup>

import Card_game from './Card_game.vue';


defineProps({
  items: Array
})





const items = [
    {
        "id": 1,
        "title":"Dota 2",
        "title1": " Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
        
        "imageUrl": "public/dota-2.jpg",
       
    },
    {
        "id": 2,
        "title":"Counter Strike 2",
        "title1": "СS 2 компьютерная игра в жанре многопользовательского тактического шутера от первого лица, разработанная компанией Valve.",
        
        "imageUrl": "public/card/Cs.png",
       
    },
    {
        "id": 3,
        "title":"APEX",
        "title1": " Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
        
        "imageUrl": "public/card/Apex.png",
       
    },
    {
        "id": 4,
        "title":"PUBG",
        "title1": " Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
        
        "imageUrl": "public/card/Pubg.png",
       
    },
    {
        "id": 5,
        "title":"World of Tanks",
        "title1": " Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
        
        "imageUrl": "public/card/WOT.png",
       
    },
    {
        "id": 6,
        "title":"RUST",
        "title1": " Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
        
        "imageUrl": "public/card/Rust.jpg",
       
    },
    {
        "id": 7,
        "title":"GTA 5",
        "title1": " Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
        
        "imageUrl": "public/dota-2.jpg",
       
    },
    {
        "id": 8,
        "title":"Minecraft",
        "title1": " Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
        
        "imageUrl": "public/dota-2.jpg",
       
    },
    {
        "id": 9,
        "title":"Dota 2",
        "title1": " Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
        
        "imageUrl": "public/dota-2.jpg",
       
    },
    {
        "id": 10,
        "title":"Dota 2",
        "title1": " Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
        
        "imageUrl": "public/dota-2.jpg",
       
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





