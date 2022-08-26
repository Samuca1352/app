
<template>
  <div class="register">
    <div class="form">
      <v-container class="grey lighten-5">
        <v-row no-gutters>
          <v-row class="pa-1">
            <v-row class="pa-2">
              <img src="http://congressointereduca.web249.uni5.net/certificados/img/tsuru-origami.png" />
              <div class="space">
                <h1>Sistema</h1>
              </div>
            </v-row>
          </v-row>
        </v-row>
      </v-container>

      <h5>Cadastre-se para ver fotos e vídeos dos seus amigos.</h5>
      <v-btn class="btn-firt" @click="signInWithGoogle">Entrar com o Google</v-btn>
      <br />
      <v-divider>ou</v-divider>
      <div class="input-form">
        <input type="email" v-model="email" placeholder="Insira seu email" />
        <input type="password" v-model="password" placeholder="Senha" />
      </div>
      <div>
        <div class="text-register">
          Ao se cadastrar, você concorda com nossos
          <b>Termos, Politicas de Privacidade e Politica de Cookies</b>
        </div>
      </div>
      <v-btn class="btn-register mb-3" @click="register">Cadastre-se</v-btn>
    </div>
  </div>
</template>


<script setup>
import {ref} from "vue";
import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import router from "@/router";
const email = ref("");
const password = ref("");

const register = ()=>{
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)

  .then((data) => {
    console.log(data);
    router.push('/')

  })
  .cath((error)=>{
    console.log(error.code);
    alert(error.message)
  })

};

const signInWithGoogle = ()=>{
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
  .then((result)=>{
    console.log(result.user);
    router.push("/index")
  }).catch(()=>{

  })
};
</script>

<style scoped>
.space {
  padding-left: 1rem;
  display: flex;
  align-content: center;
}

.register {
  align-items: center;
}

h1 {
  color: black;
  margin-bottom: 1rem;
}

h5 {
  color: rgb(163, 163, 163);
  margin-right: 30px;
  margin-left: 30px;
}

.form {
  text-align: center;
  margin-top: 2rem;
}

.text-register,
b {
  color: rgb(163, 163, 163);
  font-size: 10px;
  margin-right: 25px;
  margin-left: 25px;
  display: inline-table;
}

.v-btn {
  display: flex;
  /* background-color: rgba(1,149,247,255); */
  background-color: rgb(205, 40, 40);
  color: aliceblue;
  height: 1.5rem;
  margin-left: 10px;
  font-size: 10px;
  width: 14rem;
  margin-top: 1rem;
}

.btn-register {
  background-color: rgba(179, 223, 250, 255);
  color: aliceblue;
  transition: 0.5s;
}

.btn-register:hover {
  background-color: rgba(1, 149, 247, 255);
  color: aliceblue;
}

.v-divider {
  margin-left: 10px;
  margin-right: 10px;
}

.v-text-field {
  display: flex;
}

input {
  border: solid rgba(216, 216, 216, 255) 1.3px;
  border-radius: 0.3rem;
  margin: 2px;
  background-color: rgba(250, 250, 250, 255);
  width: 14rem;
  height: 2rem;
  font-size: 12px;
  padding-left: 0.7rem;
  color: rgb(33, 33, 33);
}

.input-form {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

img {
  width: 3rem;
}
</style>