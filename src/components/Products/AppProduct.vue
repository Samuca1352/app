<template>
    <div class="card me-2" style="width: 18rem;">
        <img src="https://via.placeholder.com/150" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">{{product.name}}</h5>
            <p class="card-text">R$ {{product.price}}</p>
            <button href="#" @click="addProduct()" class="btn btn-primary">Adicionar ao Carrinho</button>
            <button v-if="exists()" @click="removeProduct()" class="btn btn-danger">Remover</button>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        product:Object
    },
    methods: {
        addProduct(){
            this.$store.commit('addProduct',this.product)
        },
        removeProduct(){
            

            this.$store.commit('removeProduct',this.product)
            /* console.log(index) */
            
        },
        exists(){
            let index = this.$store.state.cart.indexOf(this.product);
            if(index>=0){
                return true
            }
            else{
                return false
            }
        }
    },
}
</script>
<style >
    
</style>