import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Product from './views/Product.vue'
import Cart from './views/Cart.vue'
// import ProductDetail from './views/ProductDetail.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products',
      name: 'product',
      component: Product
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/product_detail/:productId',
      name: 'product_detail',
      component: () => import('./views/ProductDetail.vue')
    }
  ]
})
