<template>
  
  <h1 @click = 'callback' >{{props.text}}</h1>

  
</template>


<script setup>
 const props = defineProps([
  'text',
  'callback'
  ])
</script>