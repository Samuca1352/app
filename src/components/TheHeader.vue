<template>
  <div>
    <div>
        <button @click.stop.prevent="onclick">
            Enviar
        </button>
</div>
<div @mouseover="onMouseover" @mouseout="onMouseout">
    Mouse over
</div>

    <form action="google.com"
     @submit.prevent="onSubmit">
     <input @keyup="keyUp" type="text">
     <button type="submit">Submit</button>
     </form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Samuel',
      
    }
  },

  methods:{
    onclick(){
        console.log('click');
    },
    onMouseover(){
        console.log('mouse over')
    },
    onMouseout(){
        console.log('mouse out')
    },
    onSubmit(){
        console.log('submit')
    },
    keyUp($evt){
        console.log('onKeyUp',$evt)
    }
  }

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
  margin: 60px;
}
</style>