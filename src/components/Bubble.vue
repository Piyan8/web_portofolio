<template>

  <div v-for='(i, index) in obj' :style="
    {backgroundColor : color,
    left:i[0]+'%', top:i[1] +'%',
    width:i[2]*0.045+'em',
    opacity:Math.random()*0.9,
    animationDelay:Math.random()*2+'s'}"
    class="bubble rounded-circle fs-1">
    <p v-if='debug' class='position-absolute fs-6 mb-0' style='top:-1.5em;font-size:0.4em!important'>
      {{index}}
    </p>
  </div>

</template>

<script setup>
  //the parent need to set(relative)

  let obj = [[0, 0, 4],
    [-13, 50, 4],
    [0, 100, 4],

    [100, 0, 4],
    [113, 50, 4],
    [100, 100, 4],

    [50, -13, 4],
    [50, 113, 4]]

  const props = defineProps([
    'color',
    //array of array = [pos.x, pos.y, size]
    'debug'
  ])


</script>

<style>
  .bubble {
    position: absolute;
    top: 0;
    aspect-ratio: 1/1;
    width: 0.2em;
    background-color: black;
    animation: idle 500ms infinite;
  }
  @keyframes idle {
    50% {
      transform: scale(1.5,1.5);
    }
  }
</style>