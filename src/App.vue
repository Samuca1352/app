<template>
  <div class="">
    <TheHeader>
      <template v-slot:title >
      Home
      </template>
      <template v-slot:dsc>
      <p>Teste</p>
      </template>
  </TheHeader>
  



  
  </div>
</template>

<script>

import TheHeader from './components/TheHeader.vue';

export default {
  name: 'App',
  components: {

    TheHeader //tem que importar e declarar em components
  },


}
</script>

<style>

</style>
