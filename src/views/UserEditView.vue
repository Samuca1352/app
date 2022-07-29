<template lang="">
    <div>
        Usuários
    <br>
        {{$route.params.id}}
    <br>

    <button @click="login()">
        Login
    </button>

    </div>


</template>
<script>
export default {
    created() {
        //console.log(this.$router)
    },
    methods: {
        login(){
            this.$router.push('/about') //$route (obj rota atual) $router(funçoes do esquema de roteamento)
            console.log('chegou')
        }
    },
}
</script>
<style lang="">
    
</style>