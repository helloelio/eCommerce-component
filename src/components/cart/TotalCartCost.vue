<template>
  <div>
    <div class="total">
      <div class="prices">
        <span class="total-title">Subtotal:</span>
        <span class="total-price">20.12</span>
      </div>
      <div class="prices">
        <span class="total-title">Tax:</span>
        <span class="total-price">{{ this.tax.toFixed(2) }}</span>
      </div>
      <div class="prices">
        <span class="total-title">Total:</span>
        <span class="total-price purple">30.22</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'TotalCartCost',
  props: {
    cart: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapGetters(['tax']),
  },
};
</script>

<style lang="scss">
.total {
  display: flex;
  flex-direction: column;
  text-align: right;
  margin: 0 37px;
  .prices {
    display: grid;
    grid-template-columns: 1fr 100px;
    margin: 5px;
  }
  &-title {
    font-weight: bold;
    font-size: 16px;
    line-height: 32px;
  }
  &-price {
    font-weight: bold;
    font-size: 32px;
    line-height: 32px;
  }
  &-price.purple {
    color: #6b00f5;
  }
}
</style>
