<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" permanent >
      
      <!--  -->
      <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
        <v-list-item link to="/">
          <v-list-item-title >Inicio</v-list-item-title>
        </v-list-item>

        <v-list-item to="/servicos" link>
          <v-list-item-title>Serviços</v-list-item-title>
        </v-list-item>

        <v-list-item to="/carrinho" link>
          <v-list-item-title>Carrinho</v-list-item-title>
        </v-list-item>

        <v-list-item to="/usuarios" link>
          <v-list-item-title>Usuarios</v-list-item-title>
        </v-list-item>

        <v-list-item @click="barra2 = !barra2" link >
          <v-list-item-title>Teste Gaveta</v-list-item-title>
        </v-list-item>

      </v-list-item-group>
    </v-navigation-drawer>
    <v-navigation-drawer v-model="barra2" temporary>
      <!-- Barra 2 -->
      <v-list-item>
        Um
      </v-list-item>
            <v-list-item>
        Dois
      </v-list-item>
            <v-list-item>
        Três
      </v-list-item>
            <v-list-item>
        Quatro
      </v-list-item>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="this.drawer = !this.drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
<routerView></routerView>
    </v-main>
  </v-app>
</template>


<script>


export default {
  created() { },
  data: () => ({
    drawer: false,
    barra2: false
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
  components: {  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
