<template>
  <div class="shop__item" :style="{ background: backgroundColor }">
    <div>
      <img class="shop__item-img" :src="item.img" alt="" />
    </div>
    <div>
      <div class="shop__item-name">{{ item.name }}</div>
      <div class="shop__item-price">${{ item.price }}</div>
      <button
        class="shop__item-button"
        :class="{ active: item.added }"
        @click="addToCart(item)"
        :disabled="item.added"
      >
        <img v-if="item.added" src="../../assets/check.svg" alt="" />
        {{ item.added ? `In Cart` : 'Add to cart' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopItem',

  props: {
    menu: {
      type: Array,
      default: () => [],
    },
    item: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    backgroundColor() {
      return '#' + Math.floor(Math.random() * 16777215).toString(16) + 31;
    },
  },

  methods: {
    addToCart(item) {
      this.$store.commit('addToCart', item);
    },
  },
};
</script>

<style></style>
