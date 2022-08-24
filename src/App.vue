<template>

  <v-app >

    <NavigationDrawer ></NavigationDrawer>
    
    <v-app-bar app>
      <AppBar></AppBar>
    </v-app-bar>

    <v-main absolute transition="scroll-y-transition">
      
      <routerView  ></routerView>
     
    </v-main>
    
  </v-app>
  
</template>


<script>
import NavigationDrawer from "./components/NavigationDrawer.vue";
import AppBar from "./components/AppBar.vue";


export default {
  created() { },
  data: () => ({
  }),
  methods: {
    updateUser() {
      const newUser = {
        first_name: "Samuel",
        last_name: "cardoso",
        email: "samuel@samucaaa.com",
      };
      this.$store.commit("storeUser", newUser);
    },


  },
  watch:{

  },
  components: { NavigationDrawer, AppBar },

};
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
