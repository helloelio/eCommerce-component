<template>
  <div class="card__items cart__items">
    <span class="empty-cart" v-if="this.cart.length === 0">
      Your cart is empty.
    </span>
    <transition-group name="list">
      <cart-item v-for="item in this.cart" :item="item" :key="item.id" />
    </transition-group>
  </div>
</template>

<script>
import CartItem from './CartItem.vue';

export default {
  name: 'CartItems',
  components: {
    CartItem,
  },
  props: {
    cart: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}
</style>
