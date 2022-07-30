<template>
 <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/usuarios/10">Usuário</router-link> |
    <router-link :to="{ name: 'products'}">Produtos</router-link> |
    <router-link :to="{ name: 'servicos' }">Serviços</router-link>
  </nav>
  <router-view />

  <i class="bi bi-cart"></i>

</template>


<script>

export default {
    created() { },
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
