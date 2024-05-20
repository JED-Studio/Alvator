<template>
  <div class=" flex justify-center">
  <div class="slider">
  <div class="slides">
    <input type="radio" name="radio-btn" id="radio1">
    <input type="radio" name="radio-btn" id="radio2">
    <input type="radio" name="radio-btn" id="radio3">
    <input type="radio" name="radio-btn" id="radio4">
    <input type="radio" name="radio-btn" id="radio5">
<div class="slide first">
  <img src="/public/9706f7bca45ed8ceb0d97e4801bb0124.jpg" alt="">

</div>
<div class="slide">
  <img src="/public/2024-05-04_17-03-06.png" alt="">

</div>
<div class="slide">
  <img src="/public/1693929953-64f751e1ac23f_27.jpg" alt="">

</div>
<div class="slide">
  <img src="/public/1691240850_en-idei-club-p-game-room-playstation-club-dizain-vkontakt-18.jpg" alt="">

</div>
<div class="slide">
  <img src="/public/4731523bf7b75c5503d5176d9753bbb5.jpg" alt="">

</div>

<div class="navigation-auto">
  <div class="auto-btn1"></div>
  <div class="auto-btn2"></div>
  <div class="auto-btn3"></div>
  <div class="auto-btn4"></div>
  <div class="auto-btn5"></div>
</div>

<div class="navigation-manual">
  <label for="radio1" class="manual-btn"></label>
  <label for="radio2" class="manual-btn"></label>
  <label for="radio3" class="manual-btn"></label>
  <label for="radio4" class="manual-btn"></label>
  <label for="radio5" class="manual-btn"></label>
</div>

  </div>
</div>
</div>
</template>

<style>
.slider{
  width: 800px;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
}

.slides{
  width: 500%;
  height: 500px;
  display: flex;
  
}

.slides input{
  display: none;
}

.slide{
  width: 20%;
  transition: 2s;
}

.slide img{
  width: 800px;
  height: 500px;
}

.navigation-manual{
  position: absolute;
  width: 800px;
  margin-top: -40px;
  display: flex;
  justify-content: center;
}

.manual-btn{
  border: 2px solid #000000;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s;
}

.manual-btn:not(:last-child){
  margin-right: 40px;
}

.manual-btn:hover{
  background: #000000;
}

#radio1:checked ~ .first{
  margin-left: 0;
}
#radio2:checked ~ .first{
  margin-left: -20%;
}
#radio3:checked ~ .first{
  margin-left: -40%;
}
#radio4:checked ~ .first{
  margin-left: -60%;
}
#radio5:checked ~ .first{
  margin-left: -80%;
}

.navigation-auto{
  position: absolute;
  display: flex;
  width: 800px;
  justify-content: center;
  margin-top: 460px
}

.navigation-auto div{
  border: 2px solid #000000;
  padding: 5px;
  border-radius:10px;
  transition: 1s;
}

.navigation-auto div:not(:last-child){
  margin-right: 40px;
}

#radio1:checked ~ .navigation-auto .auto-btn1{
  background: #000000;
}
#radio2:checked ~ .navigation-auto .auto-btn2{
  background: #000000;
}
#radio3:checked ~ .navigation-auto .auto-btn3{
  background: #000000;
}
#radio4:checked ~ .navigation-auto .auto-btn4{
  background: #000000;
}
#radio5:checked ~ .navigation-auto .auto-btn5{
  background: #000000;
}
</style>