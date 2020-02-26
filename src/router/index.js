import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index',
      name: 'home',
      component: () => import('../views/home/home.vue'),
      children: [
        {
          path: '/index',
          name: 'index',
          component: () => import('../views/home/index.vue')
        },
        {
          path: '/product/:id',
          name: 'index',
          component: () => import('../views/home/product.vue')
        },
        {
          path: '/detail/:id',
          name: 'detail',
          component: () => import('../views/home/detail.vue')
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/order/cart.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/order/order.vue'),
      children: [
        {
          path: '/list',
          name: 'order-list',
          component: () => import('../views/order/orderList.vue')
        },
        {
          path: '/confirm',
          name: 'order-confirm',
          component: () => import('../views/order/orderConfirm.vue')
        },
        {
          path: '/pay',
          name: 'order-pay',
          component: () => import('../views/order/orderPay.vue')
        }
      ]
    }
  ]
})
