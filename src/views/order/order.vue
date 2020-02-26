<template>
  <div>
    <OrderHeader></OrderHeader>
    <router-view></router-view>
    <NavFooter></NavFooter>
  </div>
</template>
<script>
import OrderHeader from '../../components/OrderHeader.vue'
import NavFooter from '../../components/NavFooter.vue'
export default {
  name: 'order',
  components: {
    OrderHeader,
    NavFooter
  }
}
</script>
