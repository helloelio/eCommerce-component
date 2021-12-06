<template>
  <div
    class="card cart"
    :class="[{ 'not-active': this.shopStatus }, { active: !this.shopStatus }]"
  >
    <button @click="handleClick" class="button-to-back">
      <img src="../../assets/chevron-back.svg" />
    </button>
    <div class="card__title">Your Cart</div>
    <cart-items :cart="this.cart" />
    <div v-if="cart.length > 0" class="cart__total">
      <total-cart-cost :cart="this.cart" />
    </div>
  </div>
</template>

<script>
import CartItems from './CartItems.vue';
import TotalCartCost from '@/components/cart/TotalCartCost.vue';

export default {
  name: 'TheCart',

  components: {
    CartItems,
    TotalCartCost,
  },

  props: {
    shopStatus: {
      type: Boolean,
      default: true,
    },
    cart: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      back: false,
    };
  },

  methods: {
    handleClick() {
      this.$emit('getShopStatus', true);
    },
  },
};
</script>

<style lang="scss">
.cart {
  &__item {
    .bottom-block {
      margin-left: 64px;
      .count-interactive {
        display: flex;
        align-items: center;
        span {
          margin: 0 10px;
          font-weight: bold;
          font-size: 16px;
          line-height: 24px;
        }
      }
    }
  }
  &__items {
    padding-right: 37px;
  }
  &__item {
    display: flex;
    flex-wrap: wrap;
    .left-block {
      position: relative;
    }
    .bottom-block {
      display: flex;
      justify-content: space-between;
      width: 100%;
      .cost {
        font-size: 32px;
        font-weight: bold;
      }
    }
    &-img {
      width: 64px;
      height: 64px;
    }
    &-counter {
      position: absolute;
      background-color: #000;
      color: white;
      border-radius: 50%;
      width: 27px;
      height: 27px;
      text-align: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &-name {
      font-weight: normal;
      font-size: 18px;
      line-height: 20px;
    }
    &-price {
      font-weight: bold;
      font-size: 16px;
      line-height: 32px;
    }
  }
}

.empty-cart {
  font-size: 16px;
  line-height: 24px;
  font-weight: normal;
}
.arrow-button {
  background: #6b00f5;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: 0.3s ease;
}
.arrow-button:hover {
  background-color: red;
}
.arrow-button-right:hover {
  background-color: green;
}
.button-to-back {
  background: none;
  border: none;
}
</style>
