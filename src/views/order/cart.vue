<template>
  <div class="index">
    <OrderHeader></OrderHeader>
    cart
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
