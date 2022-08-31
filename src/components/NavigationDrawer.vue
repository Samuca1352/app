<template>
  <v-navigation-drawer v-model="this.$store.state.drawer" @click="this.$store.state.drawer = !this.$store.state.drawer"
    clipped permanent>

    <!--  -->
    <v-list active-color="blue" class="responsiveMenu">
      <v-list>
        <v-list-item :prepend-avatar="photoURL" :subtitle="email" :title="displayName" nav></v-list-item>
      </v-list>
      <v-list-item v-for="[icon, text, link] in links" @click="cleanSelect()" :key="icon" link :to="link"
        :prepend-icon="icon" :title="text">
      </v-list-item>


    </v-list>

    <v-list-item @click.stop="gaveta()" key="gaveta" prepend-icon="mdi-cards" title="Teste Gaveta" link
      :color="active ? 'blue' : ''">

    </v-list-item>



  </v-navigation-drawer>

  <div v-if="barra2">
    <v-navigation-drawer @click="barra2 = !barra2" v-model="barra2" style="z-index:1" permanent>
      <!-- Barra 2 -->

      <v-list-item @click="this.$store.state.drawer = !this.$store.state.drawer" to="/about">
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

  </div>




</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAuth } from "firebase/auth";
const displayName = ref();
const photoURL = ref("http://cdn.onlinewebfonts.com/svg/img_568656.png");
const email = ref()




onMounted(() => {

  const auth = getAuth();
  const user = auth.currentUser;
  displayName.value = (user.displayName) ? user.displayName : user.email;
  photoURL.value = (user.photoURL) ? user.photoURL : "http://cdn.onlinewebfonts.com/svg/img_568656.png";
  email.value = (!user.displayName) ? '' : user.email;

  /*   console.log(user.displayName); */
})
</script>
<script >


var altura = window.screen.height;
var largura = window.screen.width;
console.log(altura);
console.log(largura);
export default {
  data: () => ({
    rw: "220",
    drawer: true,
    active: false,
    barra2: false,
    links: [
      ['mdi-home', 'Inicio', '/'],
      ['mdi-note', 'Propriedades', '/propriedades'],
      ['mdi-sprout', 'Plantações', '/servicos'],
      ['mdi-check', 'Lotes', '/lotes'],
      ['mdi-table-edit', 'Sangrias', '/sangrias'],
      ['mdi-handshake', 'Parceiro', '/parceiro'],
    ],
  }),
  methods: {
    gaveta() {
      this.barra2 = !this.barra2;
      if (this.barra2) {
        this.active = true;

      }
      else {
        this.active = false;

      }

    },
    cleanSelect() {
      this.active = false;
      this.barra2 = false;
    }

  },
  watch: {
    barra2(b) {
      if (b) {
        this.rw = "130";

      }
      else {
        this.rw = "220";


      }
    }

  }
}
</script>

<style>
.barra2 {
  display: none;
  width: 0;
}
</style>