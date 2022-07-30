<template lang="">
    <div class="d-flex justify-content-center">
        <AppProduct v-for="product in $store.state.products" 
        :key="product.id"
        :product="product">
        



        </AppProduct>
        
        
    </div>
    
</template>
<script>
import AppProduct from "./AppProduct.vue";
export default {
  components: {
    AppProduct,
  },

};
</script>
<style lang="">
</style>