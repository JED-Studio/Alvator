<script setup>
import Header from './components/Header.vue';
import SectionText from './components/SectionText.vue';
import Slider from './components/Slider.vue';
import Tarif from './components/Tarif.vue';
import Price from './components/Price.vue';
import Game from './components/Game.vue';
import YandexMap from './components/YandexMap.vue';
</script>

<template>
<div class="alva">
  <Header/>
  <SectionText 
  :class="titlesection"
  title="Компьютерный клуб" 
  title_2="ALVATOR" 
  title_3="Всё для эффективной игры и развития кибер-арен, компьютерных клубов и центров киберспорта в одном ПО" />
  <Slider/>
  <SectionText/>
  <Tarif/>
  
  <SectionText 
  :titlesection="{margin: '100px'}"
  title="Игры клуба" 
  title_2="ALVATOR" 
  title_3="Всё для эффективной игры и развития кибер-арен, компьютерных клубов и центров киберспорта в одном ПО" />
  

  <Game/>

  <SectionText 
  :titlesection="{margin: '100px'}"
  title="Тарифы" 
  
  title_3="Всё для эффективной игры и развития кибер-арен, компьютерных клубов и центров киберспорта в одном ПО" />

  <Price/>

  <SectionText 
  :titlesection="{margin: '100px'}"
  title="Комплектующие" 
  
  title_3="Всё для эффективной игры и развития кибер-арен, компьютерных клубов и центров киберспорта в одном ПО" />


<YandexMap/>
</div>
</template>


<style>

html,
body{
  padding: 0;
  margin: 0;
  background-color: var(--background-color-primary);
}

:root {
  --light: #d8dbe0;
  --dark: #28292c;
  --link: rgb(27, 129, 112);
  --link-hover: rgb(24, 94, 82);
}
:root {
  --background-color-primary: #090b16;
  --background-color-secondary:#090b16;
  --background-color-luna:#ffffff ;
  --background-color-ul:rgba(255, 255, 255, .05);
  --accent-color: #cacaca;
  --text-primary-color:  white;
  --text-color:white;
  --text-color-h1:rgb(255, 255, 255);
  --text-color-h2:rgba(255, 255, 255, .5);
  --element-size: 4rem;
  transition: 0.5s;
  
}

/* Define styles for the root window with dark - mode preference */
:root.dark-theme {
  --background-color-primary: #ffffff;
  --background-color-secondary: #2d2d30;
  --background-color-luna:#000000 ;
  --background-color-ul:rgb(0, 0, 0);
  --accent-color: #3f3f3f;
  --text-primary-color: #ddd;
  --text-color:rgb(255, 255, 255);
  --text-color-h1:rgb(0, 0, 0);
  --text-color-h2:rgba(0, 0, 0, 0.5);

}


.alva{
  background-color: var(--background-color-primary);
  transition: 0.5s;
}
</style>
