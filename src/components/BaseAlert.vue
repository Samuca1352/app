<template lang="pt-BR">
    <div :class="baseClass">
        
    <slot/>
        


    </div>
</template>


<script>
export default {
    props:{
        variant:{
            type:String,
            default:''

        },
         text:{
            type: String,
            default:'test'
        }
    },
    computed:{
        baseClass(){
            return [
                'alert',
                 this.variant ? `alert-${this.variant}` :'', 
                
                

            ]
        }
    }
}
</script>



<style scoped>
    .alert{
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