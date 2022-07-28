<template>
  <div class="">
    <TheHeader
    v-show="showHeader">

    </TheHeader>
  <div v-if="level === 'admin'">
    Admin
  </div>
  <div v-else-if="level === 'marketing'">
  Marketing
  </div>
<div v-else>
  Normal
</div>


  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheHeader //tem que importar e declarar em components
  },
  data() {
    return{
      showHeader: true,
      name: 'Samuel',
      level: 'normal'

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
