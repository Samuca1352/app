<template>
  <div>
    <div>
      Two way data bidding v-model -> formularios <br> <br><br>
      <label for="">Nome</label> <br>
      <input v-model="name" type="text" name="" id="" /><br>
      {{name}}
    </div>
 <br><br> <br><br><br>
    <div class="">
        <label for="">Sports</label> <br>
        <select v-model="sports" name="" id="">
        <option value="Teste">Teste</option>
        <option value="Futebol">Futebol</option>
        <option value="Tenis">Tenis</option>
        <option value="Volei">Volei</option>
        </select> <br>
        {{sports}} <br>
        </div>

<div>
    <label for="">Newsletter</label> <br>
    <input v-model="news" type="radio" value="sim" id="">Sim <br>
    <input v-model="news" type="radio" value="nao" id="">Nop <br>
    {{news}}
</div> <br><br><br>
<div class="">
    <div class="form-check">
      <input v-model="sportes" class="form-check-input" type="checkbox" value="Futebol" id="">
      <label class="form-check-label" for="">
        Futebol
      </label>
    </div>
    <div class="form-check">
      <input v-model="sportes" class="form-check-input" type="checkbox" value="Tenis" id="" >
      <label class="form-check-label" for="">
        Tenis
      </label>
    </div>
        <div class="form-check">
      <input v-model="sportes" class="form-check-input" type="checkbox" value="Volei" id="" >
      <label class="form-check-label" for="">
        Volei
      </label>
      <br>
    {{sportes}}
    </div>
</div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      var: "",
      name: 'Samuel',
      sports: '',
      news: 'sim',
      sportes: [],
    };
  },
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