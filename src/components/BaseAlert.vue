<template lang="pt-BR">
    <div :class="baseClass">
        
    <slot/>
        
    <button @click="onClick()">X</button>

    </div>
</template>


<script>
export default {
    props:{
        variant:{
            type:String,
            default:''

        },
         
    },
    computed:{
        baseClass(){
            return [
                'alert',
                 this.variant ? `alert-${this.variant}` :'', 
                
                

            ]
        }
    },
    methods:{
        onClick(){
            this.$emit('close'),
            console.log('closou')
        }
    }
}
</script>



<style scoped>
    .alert{
        display: flex;
        justify-content: space-between;
        padding: 6px;
        font-size: larger;
        border-radius: 5px;
    }
    .alert-success{
    background-color: green;
    color: rgb(255, 255, 255);
    }
        .alert-danger{
    background-color: red;
    color: rgb(255, 255, 255);
    }

</style>