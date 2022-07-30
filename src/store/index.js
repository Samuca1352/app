import { createStore } from 'vuex'

export default createStore({
  state: {//como se fosse um BD, acessa usando this.$store
    user: {
      first_name: 'Samuel',
      last_name:'Damasceno',
      email:'samuel@s.com'
    },
    products:[
      {
        id:1,
        name:'bola',
        price:100
      },
      {
        id:2,
        name:'camisa',
        price:50
      },
      {
        id:3,
        name:'rede',
        price:20
      }
    ]
    ,
      cart: [
        ''
      ]
  },
  mutations: {
    storeUser(state, data){
      state.user=data
    },
    addProduct(state,data){
      state.cart.push(data)
    }
  },
  getters: {
  },
  actions: {
  },
  modules: {
  }
})
