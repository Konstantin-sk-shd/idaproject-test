import Vue from 'vue'
import Router from 'vue-router'
import Payment from '../components/Payment'
import Success from '../components/Success'
import History from '../components/History'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: './payment',
      name: 'Payment',
      component: Payment,
      props:true
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment,
      props:true
    },
    {
      path: '/success',
      name: 'Success',
      component: Success,
      props:true
    },
    {
      path: '/history',
      name: 'Success',
      component: History,
      props:true
    },
  ],
  mode:'hash'
})
