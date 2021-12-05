<template>
  <div>
    <div class="total">
      <div class="prices">
        <span class="total-title">Subtotal:</span>
        <span class="total-price">{{ this.total.toFixed(2) }}</span>
      </div>
      <div class="prices">
        <span class="total-title">Tax:</span>
        <span class="total-price">{{ getTaxes }}</span>
      </div>
      <div class="prices">
        <span class="total-title">Total:</span>
        <span class="total-price purple">{{ getTotalPrice }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'TotalCartCost',
  data() {
    return {
      total: 0,
    };
  },
  props: {
    cart: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    getSubTotal() {
      return this.cart.map((item) => {
        return (this.total += item.cost).toFixed(2);
      });
    },

    getTaxes() {
      return this.tax.toFixed(2);
    },
    getTotalPrice() {
      return (+this.total + +this.getTaxes).toFixed(2);
    },
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
