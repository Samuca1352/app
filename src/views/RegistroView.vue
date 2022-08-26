<template>
  <v-app>
    <v-main class="body">
      <v-sheet class="box-container"
  height="auto"
  width="270"
>
<v-sheet
  color="white"
  height="auto"
  width="250"
>
<CamposComp></CamposComp>
</v-sheet>
<v-sheet class="box-bottom"
  color="white"
  height="60"
  width="250"
>
<p>Tem uma conta? <v-btn variant="plain" size="small" to="/"> Conecte-se</v-btn></p>
</v-sheet>
</v-sheet>
    </v-main>
  </v-app>
</template>

<script >
import CamposComp from '@/components/camposComp.vue';

export default {
  name: 'App',

  components: {
    CamposComp
},
  data: () => ({
    //
  })
}
</script>
<style scoped>
.v-sheet{
  margin-left: 3.4%;
  margin-top: 3%;
  padding-top: 1%;
   border:solid rgba(216,216,216,255) 1.3px;
    border-radius: 0.1rem;
}
.box-bottom{
  margin-top: 1rem;
  margin-bottom: 2rem;
}
a{
  /* color: rgb(106, 193, 244); */
  color: rgb(253, 127, 127);
}
p{
  text-align: center;
  font-size: small;
  padding-top: 1.3rem;
}
.box-container{
  background-color:rgba(250,250,250,255);
  margin-left: 40%;
}
.body{
  background-color: rgba(245,245,245,255);
}
</style>