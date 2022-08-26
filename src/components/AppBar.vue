<template>
    <v-app-bar-nav-icon @click="this.$store.state.drawer = !this.$store.state.drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>Sistema Gestão Seringueiras</v-toolbar-title>


    <v-menu transition="slide-y-transition">
        <template v-slot:activator="{ props }">
            <v-list-item v-bind="props"
                :prepend-avatar="photoURL">
            </v-list-item>
        </template>
        <v-list>
            <v-list-item >

                <v-list-item-title> Perfil</v-list-item-title>
            </v-list-item>
                        <v-list-item @click="handleSignOut">

                <v-list-item-title> Sair</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>

</template>

<script setup>
import { getAuth,signOut } from "@firebase/auth";
import router from "@/router";

import { onMounted, ref } from "vue";
  const displayName = ref();
  const photoURL = ref();

onMounted(()=>{

  const auth = getAuth();
  const user = auth.currentUser;
  displayName.value = user.displayName; 
   photoURL.value = user.photoURL;
  //const emailVerified = user.emailVerified; 
})


let auth;
  auth= getAuth();

const handleSignOut =()=>{
    signOut(auth).then(()=>{
        router.push("/");
       
            
        
    }
    
    )
};

</script>