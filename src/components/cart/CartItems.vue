<template>
  <div class="card__items cart__items">
    <span class="empty-cart" v-if="this.cart.length === 0">
      Your cart is empty.
    </span>
    <cart-item
      v-else
      v-for="(item, index) in this.cart"
      :item="item"
      :key="index"
    />
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

<style></style>
