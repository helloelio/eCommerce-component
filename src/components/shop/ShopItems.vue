<template>
  <div class="card__items shop__items">
    <shop-item :item="item" v-for="(item, index) in this.menu" :key="index" />
  </div>
</template>

<script>
import ShopItem from './ShopItem.vue';

export default {
  name: 'ShopItems',
  components: {
    ShopItem,
  },
  props: {
    menu: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
