<template>
  <div
    class="card shop"
    :class="[{ 'not-active': !this.shopStatus }, { active: this.shopStatus }]"
  >
    <button @click="handleClick" class="button-to-cart">
      <img src="../../assets/cart.svg" alt="" />
      <div class="button-to-cart-count">{{ this.cart.length }}</div>
    </button>
    <div class="card__title">To Go Menu</div>
    <shop-items :menu="this.menu" />
  </div>
</template>

<script>
import ShopItems from './ShopItems.vue';

export default {
  name: 'TheShop',
  components: {
    ShopItems,
  },
  props: {
    shopStatus: {
      type: Boolean,
      default: true,
    },
    menu: {
      type: Array,
      default: () => [],
    },
    cart: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick() {
      this.$emit('getShopStatus', false);
    },
  },
};
</script>

<style lang="scss">
.shop {
  &__item {
    display: flex;
    background: rgba(122, 179, 243, 0.2);
    border-radius: 20px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin-bottom: 30px;
    &-img {
      margin-top: -20px;
      margin-left: -20px;
      width: 100px;
      height: 100px;
    }
    &-name {
      padding: 25px 0 0 20px;
      font-weight: normal;
      font-size: 18px;
      line-height: 20px;
    }
    &-price {
      padding: 20px 0 0 20px;
      margin-bottom: 13px;
      font-weight: bold;
      font-size: 32px;
      line-height: 32px;
    }
    &-button {
      display: block;
      margin-bottom: -9px;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      margin-left: 20px;
      background: #6b00f5;
      border-radius: 20px;
      padding: 4px 18px;
      border: none;
      transition: 0.3s ease;
    }
    &-button:hover {
      background-color: green;
    }
    &-button.active {
      transition: 0.3s ease;
      display: flex;
      align-items: center;
      background-color: #000;
      cursor: url('../../assets/check-cursor.svg'), pointer;
      img {
        margin-right: 10px;
      }
    }
  }
}
.button-to-cart {
  position: relative;
  background: none;
  border: none;
  margin: 10px 0 0 37px;
}
.button-to-cart-count {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -10px;
  right: -10px;
  background-color: orangered;
  border-radius: 50%;
  font-size: 28px;
  width: 30px;
  height: 30px;
}
</style>
