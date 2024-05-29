<script setup>
import Header from './components/Header.vue';
import SectionText from './components/SectionText.vue';
import Slider from './components/Slider.vue';
import Tarif from './components/Tarif.vue';
import Price from './components/Price.vue';
</script>

<template>
<div class="">
  <Header/>
  <SectionText/>
  <Slider/>
  <Tarif/>
  <Price

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


div{
  background-color: var(--background-color-primary);
}
</style>
