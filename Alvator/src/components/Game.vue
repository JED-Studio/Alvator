<script>
import { ref } from 'vue';

export default {
  setup() {
    const isActive = ref(false);
    

    const toggleActive = () => {
      isActive.value = !isActive.value;
    };

    return { isActive, toggleActive };
  }
};
</script>




<template>
    <section class="game-section">
  <div class="max-w-7xl mx-auto pl-4 pr-4">
    <div class="grid grid-cols-4 gap-5 ">
    <div class=" item bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl" style="background-image: url(https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg);"
    @click="toggleActive" >
      <div class="item-desc text-fuchsia-50" :class="{ 'is-visible': isActive }">
        
        <h3 class="text-2xl">Dota 2</h3>
        <p>Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the
          Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
      </div>
    </div>
    <div class="item bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl" style="background-image: url(https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg);">
      <div class="item-desc">
        <h3>Dota 2</h3>
        <p>Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the
          Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
      </div>
    </div>
    <div class="item bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl" style="background-image: url(https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg);">
      <div class="item-desc">
        <h3>Dota 2</h3>
        <p>Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the
          Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
      </div>
    </div>
    <div class="item bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl" style="background-image: url(https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg);">
      <div class="item-desc">
        <h3>Dota 2</h3>
        <p>Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the
          Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
      </div>
    </div>
    <div class="item bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl" style="background-image: url(https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg);">
      <div class="item-desc">
        <h3>Dota 2</h3>
        <p>Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the
          Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
      </div>
    </div>
    <div class="item bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl" style="background-image: url(https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg);">
      <div class="item-desc">
        <h3>Dota 2</h3>
        <p>Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the
          Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
      </div>
    </div>
    <div class="item bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl" style="background-image: url(https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg);">
      <div class="item-desc">
        <h3>Dota 2</h3>
        <p>Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the
          Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
      </div>
    </div>
    <div class="item bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer transition hover:-translate-y-2 transition hover:shadow-xl" style="background-image: url(public/загруженное.jpeg);">
      <div class="item-desc">
        <h3>Dota 2</h3>
        <p>Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the
          Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
      </div>
    </div>
  </div>
</div>
    

</section>
</template>

<style scoped>
.item{
  background: #00000000 no-repeat center center/cover;
  overflow: hidden; 
  color: white;
  position: relative;
}

.item::before{
  content: "";
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
}



.item-desc p{
  transform: translateY(243px);
    transition: all 0.4s ease-in-out 0.2s;
    opacity: 0;

}

.item-desc h3{
  transform: translateY(243px);
    transition: all 0.4s ease-in-out 0.2s;
    opacity: 1;
}

.is-visible h3{
  transform: translateY(0px);
    transition: all 0.4s ease-in-out 0.2s;
    opacity: 1;
}

.is-visible p{
  transform: translateY(0px);
    transition: all 0.4s ease-in-out 0.2s;
    opacity: 1;
}


</style>





