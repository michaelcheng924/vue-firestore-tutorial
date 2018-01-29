import Vue from 'vue'
import Router from 'vue-router'
import Products from '@/components/Products/Products'
import ProductPage from '@/components/ProductPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Products',
      component: Products
    },
    {
      path: '/shop/:product_id',
      name: 'ProductPage',
      component: ProductPage
    }
  ]
})
