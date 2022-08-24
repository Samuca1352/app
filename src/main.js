import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')

  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdocTpBn53hy040otDo4jCnB5EGS_EK6g",
  authDomain: "vue-firebase-auth-f3900.firebaseapp.com",
  projectId: "vue-firebase-auth-f3900",
  storageBucket: "vue-firebase-auth-f3900.appspot.com",
  messagingSenderId: "541817638715",
  appId: "1:541817638715:web:763623b864bcdfb32b711e"
};

// Initialize Firebase
 initializeApp(firebaseConfig);