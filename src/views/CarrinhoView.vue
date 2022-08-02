<template >
    
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Nome</th>
      <th scope="col">Quantidade</th>
      <th scope="col">Valor Unitário</th>
    </tr>
  </thead>
  <tbody>
    <tr :key="itens.id" v-for="itens in $store.state.cart" >
    <th scope="row">{{itens.name}}</th>
      <td >{{itens.qtd}}</td>
      <td >R$ {{itens.price}}</td>


    </tr>
      
  </tbody>
</table>
</template>
<script>
export default {
    computed: {

    },
}
</script>
<style>
    
</style>