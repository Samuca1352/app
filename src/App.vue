<template>

  <v-app>

    <NavigationDrawer v-if="isLoggedIn"></NavigationDrawer>

    <v-app-bar v-if="isLoggedIn" app>
      <AppBar ></AppBar>
    </v-app-bar>

    <v-main absolute transition="scroll-y-transition">
      
      <routerView></routerView>

    </v-main>

  </v-app>

</template>


<script setup>
import NavigationDrawer from "./components/NavigationDrawer.vue";
import AppBar from "./components/AppBar.vue";
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const isLoggedIn = ref(false);


  let auth;

onMounted(() => {
  auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {

      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  })
}

)



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
