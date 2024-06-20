<template>
  <div class="row" style='margin-top:5em'>
    <div class="col-12">
      <div class="row px-md-3">
        <div class="col-12 me-md-3 mb-5 mb-sm-0  5 col-md-4 fs-2 rows al-cen">
          <div class='position-relative mx-auto'>
            <div class='photo shadow-sm rounded-circle'>
              <img src="test_avatar.png" alt="">
            </div>
            <Bubble color='black'></Bubble>
          </div>

        </div>
        <div class="col cols just-cen al-cen al-md-start">
          <VueWriter class='fs-1 mb-3 fw-bold' :array="name" :caret="cursor" />
          <p style='color:var(--f-mute)' class=' mb-0'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quidem impedit eos ad odit accusantium, nisi tenetur at unde eaque perferendis magnam expedita porro est reiciendis illo dolore quis libero?
          </p>
        </div>
        <div class="p-2 my-5 my-sm-1 fs-4 rows justify-content-around logo-hobby col-12 col-md-1 al-cen flex-md-cols md-gap">
          <div :class = "{active : active ==0 }"class="svg-wrapper just-cen bg-md-none cols al-cen">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-vector-pen" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z" />
              <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z" />
            </svg>
            <p class = 'd-md-none'>
              Art
            </p>
          </div>
          <div :class = "{active : active == 1}" class=" svg-wrapper just-cen bg-md-none cols al-cen">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-controller" viewBox="0 0 16 16">
              <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1z" />
              <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729q.211.136.373.297c.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466s.34 1.78.364 2.606c.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527s-2.496.723-3.224 1.527c-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.3 2.3 0 0 1 .433-.335l-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a14 14 0 0 0-.748 2.295 12.4 12.4 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.4 12.4 0 0 0-.339-2.406 14 14 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27s-2.063.091-2.913.27" />
            </svg>
            <p class = 'd-md-none'>
              Gaming
            </p>

          </div>
          <div :class = "{active : active ==2}" class="color-md-red svg-wrapper just-cen bg-md-none cols al-cen">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
            </svg>
            <p class = 'd-md-none'>
              Web
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 my-5 just-cen rows">
      <svg :style="{opacity :1-get_value()}"xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
      </svg>
    </div>
  </div>

</template>


<style scoped>
.active{
  background-color: var(--f-prim);
  transition: all 500ms;
}
.active p{
  
  color:white;
  transition: all 500ms;
}

.active{
  
}
.active svg{
  transform: translateY(50%);
  position: relative;
  color : white!important;
  transition: all 500ms ease;
}
  .svg-wrapper {
    
    margin-block: 1em;
    min-height: 50px;
    min-width: 80px;
    border-radius: 0.2em;
    transition: all 500ms;
    
    
  }
  .svg-wrapper svg {
    color: var(--f-prim);
    transition: all 500ms;
    
  }

  .svg-wrapper p {
    margin-bottom: 0;
    margin-top: 0.2em;
    color: var(--f-prim);
    font-size: 0.6em;

  }
  .photo img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .photo {
    overflow: hidden;
    position: relative;
    width: 8em;
    opacity: 1;
    aspect-ratio: 1/1;
    border: 8px solid lightgray;
    background-color: gray;
  }
  
    @media (min-width:768px) {
    .bg-md-none{
      background-color: transparent;
    }
    
    .active svg{
      color: var(--f-prim)!important;
      transform: scale(1.2,1.2);
    }
    
  }
  
</style>

<script setup>
import {onMounted,ref} from 'vue'
  import {
    useScroll
  } from '../composable/scroll.js'
  import {
    VueWriter
  } from 'vue-writer'
  import Bubble from './Bubble.vue'



  const {
    get_value
  } = useScroll(600, 100)

  var name = ['Hi, I\'am Piyan', 'Game Dev', 'Web Dev']

var svg_logo_cond = ref({
  art:false,
  gaming:false,
  web:false
})

let active = ref(0)

function update_active(){
  active.value++
  if (active.value>2){
    active.value = 0
  }
  
}

onMounted(()=>{
  setInterval(()=>{
  update_active()
},1500)
})
</script>