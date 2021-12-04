<template>
  <div class="card shop">
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
    menu: {
      type: Array,
      default: () => [],
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
</style>
