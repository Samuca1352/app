<template>
  <v-navigation-drawer v-model="this.$store.state.drawer" disable-resize-watcher clipped style="z-index:2" stateless permanent rail
    :rail-width="rw">

    <!--  -->
    <v-list active-color="blue">
      <v-list>
        <v-list-item
          prepend-avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4dF33jefjDX7UPxDslVeoh0cdAdZDivH9GU9yXjQSUCj0rBl5itvzlyRHF7xS8PCTkQE&usqp=CAU"
          title="Samuel Damasceno" nav>
          <!-- <template v-slot:append>
              <v-btn size="small" variant="text" icon="mdi-menu-down"></v-btn>
            </template> -->
        </v-list-item>
      </v-list>
      <v-list-item v-for="[icon, text, link] in links" @click="cleanSelect()" :key="icon" link :to="link"
        :prepend-icon="icon" :title="text">




      </v-list-item>
    </v-list>

    <v-list-item @click="gaveta()" key="gaveta" prepend-icon="mdi-cards" title="Teste Gaveta" link
      :color="active ? 'blue' : ''">

    </v-list-item>


  </v-navigation-drawer>


  <v-navigation-drawer v-model="barra2" style="z-index:1" permanent >
    <!-- Barra 2 -->
    <v-list-item @click="barra2=false" to="/about">
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
</template>

<script>

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
      this.barra2=false;
    }

  },
  watch:{
    barra2(b){
      if (b) {
        this.rw = "133"
      }
      else {
        this.rw = "220"
      }
    }
    
  }
}
</script>
