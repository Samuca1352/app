<template>
  <div>
<header>
   <h1 v-if="$slots.title">
  <slot name="title" >
    
  </slot>
  </h1>
<slot name="dsc"></slot>
</header>

  </div>
 
</template>

<script>
export default {
  data() {
    return {
      mname:'Samuel',
      todos: [
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false,
        },
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false,
        },
        {
          userId: 1,
          id: 3,
          title: "fugiat veniam minus",
          completed: false,
        },
        {
          userId: 1,
          id: 4,
          title: "et porro tempora",
          completed: true,
        },
        {
          userId: 1,
          id: 5,
          title:
            "laboriosam mollitia et enim quasi adipisci quia provident illum",
          completed: false,
        },
        {
          userId: 1,
          id: 6,
          title: "qui ullam ratione quibusdam voluptatem quia omnis",
          completed: false,
        },
      ],
    };
  },


// Criação
  // Preparar o componente 
  // Ajax, inicializar algumas variáveis
  // Não tem acesso ao template (DOM) 
// Montagem
  // Inicializar um lib externa (new Lib()) 
  // Precisa de acesso ao template (DOM)
  // Tem acesso ao template (DOM) 
// Atualização
  // Debug
  // Update 
// Desmontagem
  // Remover tudo o que for ncessário (lib->destroy() 
  // para liberar memória

//HOOKS



  methods: {//funçoes para serem usadas
 
  },
  computed: {//funçoes que gastam menos processamento e atualizam sempre

  },
  watch: {//observadores
   

  }
  };
</script>

<style>

</style>