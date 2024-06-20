import {ref,onMounted} from 'vue'

export const scroll = ref(0)

//callback
export function useScroll(start, end, options = null) {
  
  const normalized = ref(0)

  function _update_pos(){
    scroll.value = window.scrollY
  }
  
  function get_value(debug = false){
    if (debug){
      console.log(scroll)
    }
    let final = 0
    let arrive = scroll.value > start
    
    if (arrive){
      let start_pos = scroll.value - start
      final = start_pos/end
      if (final>=1){
        if(options!=null){
          options.callback.call()
        }
        return 1
      }
      
      return final
    }else{
      return 0
    }
  }
  
  onMounted(()=>{
    window.addEventListener('scroll',_update_pos)
  })
  return {scroll, get_value}
  
}