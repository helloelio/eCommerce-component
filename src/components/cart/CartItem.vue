<template>
  <div class="cart__item">
    <div class="left-block">
      <img class="cart__item-img" :src="item.img" alt="" />
      <div class="cart__item-counter">
        {{ item.count }}
      </div>
    </div>
    <div class="right-block">
      <div class="cart__item-name">{{ item.name }}</div>
      <div class="cart__item-price">${{ item.price }}</div>
    </div>
    <div class="bottom-block">
      <div class="count-interactive">
        <button class="arrow-button" @click="decCountItem(item)">
          <img src="../../assets/chevron.svg" alt="" />
        </button>
        <span>{{ item.count }}</span>
        <button
          class="arrow-button arrow-button-right"
          @click="incCountItem(item)"
        >
          <img src="../../assets/chevron-right.svg" alt="" />
        </button>
      </div>
      <div class="cost">${{ item.cost.toFixed(2) }}</div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'CartItem',

  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    itemCost() {
      return (this.item.count * this.item.cost).toFixed(2);
    },
  },

  methods: {
    incCountItem(item) {
      this.$store.commit('incCountItem', item);
    },
    decCountItem(item) {
      this.$store.commit('decCountItem', item);
    },
  },
};
</script>

<style></style>
