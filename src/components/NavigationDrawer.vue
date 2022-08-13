<template>
<v-navigation-drawer v-model="this.$store.state.user" app permanent absolute>

      <!--  -->
      <v-list active-color="blue">
        <v-list>
          <v-list-item
            prepend-avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4dF33jefjDX7UPxDslVeoh0cdAdZDivH9GU9yXjQSUCj0rBl5itvzlyRHF7xS8PCTkQE&usqp=CAU"
            title="Samuel Damasceno" >
            <!-- <template v-slot:append>
              <v-btn size="small" variant="text" icon="mdi-menu-down"></v-btn>
            </template> -->
          </v-list-item>
        </v-list>
        <v-list-item v-for="[icon, text, link] in links" @click="cleanSelect()" :key="icon" link :to="link">

          <template v-slot:prepend>
            <v-icon :icon="icon"></v-icon>
          </template>

          <v-list-item-title v-text="text"></v-list-item-title>
        </v-list-item>
      </v-list>

      <v-list-item @click="gaveta()" key="gaveta" link :color="active ? 'blue' : ''">
        <template v-slot:prepend>
          <v-icon icon="mdi-cards"></v-icon>
        </template>
        <v-list-item-title>Teste Gaveta</v-list-item-title>
      </v-list-item>
      

    </v-navigation-drawer>

      <v-navigation-drawer v-model="barra2" temporary>
      <!-- Barra 2 -->
      <v-list-item to="/about">
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

export default{
  data: () => ({
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

    gaveta(){
      this.barra2 = !this.barra2;
      if(this.barra2){
        this.active= true
      }
      else{
        this.active= false
      }
      
    },
    cleanSelect(){
      this.active= false
    }

  },
      }
</script>
