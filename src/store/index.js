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
        price:100,
        qtd: 1
      },
      {
        id:2,
        name:'camisa',
        price:50,
        qtd: 1
      },
      {
        id:3,
        name:'rede',
        price:20,
        qtd: 1
      }
    ]
    ,
      cart: [
        
      ]
  },
  mutations: {
    storeUser(state, data){
      state.user=data
    },
    addProduct(state,data){
      let index = state.cart.indexOf(data);
      if(index<0){
        state.cart.push(data)
      }
      else{
        state.cart[index].qtd++;
        /* console.log(state.cart[index].qtd) */
      }
      
    },
    removeProduct(state,data){
      let index = state.cart.indexOf(data);
      /* console.log(index) */
      if(state.cart[index].qtd<=1){
        state.cart.splice(index,1);
       /*  console.log('removido') */
      }
      else{
        state.cart[index].qtd--;
       /*  console.log(state.cart[index].qtd) */
      }
    },
  },
  getters: {
  },
  actions: {
  },
  modules: {
  }
})
