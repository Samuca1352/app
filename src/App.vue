<template>
  <div>
    <BaseAlert v-if="showAlert" :variant="variant" @close="onClose()"
      >Olá Mundo</BaseAlert
    >
  </div>
</template>

<script>
import BaseAlert from "@/components/BaseAlert";

export default {
  name: "App",
  components: {
    BaseAlert,
  },

//pai->filho     filho->pai
// props          emit


  data() {
    return {
      showAlert: true,
      variant: "success",
    };
  },
  methods: {
    onClose() {
      this.showAlert = false;
      console.log(this.showAlert);
    },
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
