<template>
  <div class="max-w-7xl mx-auto pl-4 pr-4">
    <div id="map" style="width: 100%; height: 400px;"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=975884e0-f07a-4b38-b436-8d1c8c06b9a0&lang=ru_RU';
    script.onload = () => {
      ymaps.ready(() => {
        const myMap = new ymaps.Map('map', {
          center: [42.905611917688695,47.60829275463103],
          zoom:18
        });
      });
    };
    document.body.appendChild(script);
  }
};
</script>

<style>
#map {
 
  height: 400px;
}
</style>