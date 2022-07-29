<template>
  <div>
    
    
    <BaseAlert :variant="variant" >Olá Mundo</BaseAlert> 
  </div>
</template>

<script>

import BaseAlert from '@/components/BaseAlert';


export default {
  name: 'App',
  components: {
    BaseAlert
    
  },

  data(){
    return{
      variant:'success'
    }
  }


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
  margin: 60px;
}
</style>
