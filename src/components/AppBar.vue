<template>
    <v-app-bar-nav-icon @click="this.$store.state.user = !this.$store.state.user"></v-app-bar-nav-icon>

    <v-toolbar-title>Sistema Gestão Seringueiras</v-toolbar-title>


    <v-menu transition="slide-y-transition">
        <template v-slot:activator="{ props }">
            <v-list-item v-bind="props"
                prepend-avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4dF33jefjDX7UPxDslVeoh0cdAdZDivH9GU9yXjQSUCj0rBl5itvzlyRHF7xS8PCTkQE&usqp=CAU">
            </v-list-item>
        </template>
        <v-list>
            <v-list-item v-for="(item, i) in items" :key="i" link>

                <v-list-item-title> {{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>

</template>

<script>
export default {
    data: () => ({
        items: [

            {
                title: 'Perfil',
                
            },

            { title: 'Sair',
                },
        ],
    }),
}
</script>