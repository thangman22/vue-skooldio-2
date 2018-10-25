import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productOncart: [],
    totalPrice: 0
  },
  mutations: {
    addProduct (state, newItem){
      state.productOncart.push(newItem)
    },
    reCalculateTotalPrice (state) {
      let total = 0
      for(let product of state.productOncart) {
        total = total + product.Price
      }
      state.totalPrice = total
    }
  },
  actions: {
    addToCart (context, product) {
      context.commit('addProduct',product)
      context.commit('reCalculateTotalPrice')
    }
  },
  getters: {
    totalPrice (state) {
      return `${state.totalPrice} USD`
    },
    totalProduct (state) {
      return `${state.productOncart.length}`
    }
  }
})
