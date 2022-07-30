import { createStore } from 'vuex'

export default createStore({
  state: {//como se fosse um BD, acessa usando this.$store
    user: {
      first_name: 'Samuel',
      last_name:'Damasceno',
      email:'samuel@s.com'
    },
    products:[]
  },
  mutations: {
    storeUser(state, data){
      state.user=data
    }
  },
  getters: {
  },
  actions: {
  },
  modules: {
  }
})
