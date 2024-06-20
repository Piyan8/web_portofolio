<template>
  <div class="row my-3">
    <div class="col-3 gx-0">
      <h4 class='mb-0 ms-2'>Piyan.
        <span style='color:var(--prim)'>id</span></h4>
    </div>
    <div ref='link' class="links col rows justify-content-end gap-4 position-relative">
      <p class='mb-0' @click="set_x(get_middle($event))" ref='link_1'>
        About
      </p>
      <p class='mb-0'  @click="set_x(get_middle($event))"ref='link_2'>
        What
      </p>
      <p class='mb-0' @click="set_x(get_middle($event))" ref='link_3'>
        Contact
      </p>
      <p ref='x' class='indicator rounded fs-6 position-absolute'>
      </p>



    </div>
  </div>

</template>

<script setup>
  import {
  onMounted,
  ref,
  watch
  } from 'vue'


  const x= ref(null)
  var link = ref(null)

  var link_1 = ref(null)
  var link_2 = ref(null)
  var link_3 = ref(null)

  var active = ref(100)

  var prev = null
  var timer = null

  function get_middle(el){
  if (prev != null) {
    prev.style.color = 'var(--f-mute)'
  }
  prev = el.target
  el.target.style.color = 'var(--f-prim)'
  return (el.target.getBoundingClientRect().x + el.target.offsetWidth*0.5) - link.value.getBoundingClientRect().x
  }


  function set_indi_pos(pos) {
  x.value.style.opacity = '1'
  x.value.style.left = pos +'px'
  x.value.style.transform = 'translateX(-50%) translateY(0)'
  setTimeout(()=> {
    x.value.style.opacity = '0'
  },600)

  }

  function set_x(n){
  active.value = n
  }

  watch(active,()=>{
  set_indi_pos(active.value)
  })

</script>

<style>

  .indicator {
  opacity: 0;
  background-color: var(--prim);
  width: 0.5em;
  bottom: 0;
  left: 0;
  height: 0.3em;
  transition: all 500ms ease;

  }

  .row {
  user-select: none;
  }

  .links p {
  transition: all 500ms ease;
  user-select: none;
  color: var(--f-mute);
  margin-bottom: 0;
  }
</style>