<template>

  <div class="container-fluid">
    <Nav></Nav>
    <Intro></Intro>
    <Body0></Body0>
  </div>
  
</template>

<script setup>
  import {
    ref
  } from 'vue'
  import {useScroll} from './composable/scroll.js'
  import Nav from './components/Nav.vue'
  import Intro from './components/Intro.vue'
  import Bubble from './components/Bubble.vue'
    import Body0 from './components/Body0.vue'


</script>

<style>

  .test {
    position: relative;
    aspect-ratio: 1/1;
    width: 7em;
    border: 1px solid black;
    background-color: yellow;
  }
:root {
    /*FONTS*/
    --f-prim: black;
    --f-mute: #909090;

    /*COLORS*/
    --prim: #FD2929;
    --back: #F2F2F2;
    --shade: #E5E5E5;
  }

  .d {
    border: 1px solid blue;
  }
  .al-cen {
    align-items: center;
  }
  .just-cen {
    justify-content: center;
  }
  .rows {
    display: flex;
    flex-direction: row;
  }

  .cols {
    display: flex;
    flex-direction: column;
  }
  #app {
    min-height:3000px;
    padding: 10px;
    overflow: hidden;
    background-color: var(--back);
    font-family: 'Playfair Display', Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: black;

  }

  @media (min-width:768px) {
    .al-md-start {
      align-items: start;
    }
    .flex-md-cols{
      flex-direction: column;
    }
    .md-gap{
      gap:2em
    }
  }
</style>