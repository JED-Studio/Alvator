
<script setup>
defineProps({
  title: String,
  imageUrl: String
 
})

let imageUrl = `{{item.imageUrl}}`




</script>

<template>
    <div class=" item bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"  :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
      <div class="item-desc text-fuchsia-50">
        
        <h3 class="text-2xl">Dota 2</h3>
        <p>{{title}}</p>
      </div>
    </div>
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