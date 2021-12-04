<template>
  <main class="main">
    <div class="container">
      <div class="content">
        <div class="card shop">
          <div class="card__title">To Go Menu</div>
          <div class="card__items shop__items">
            <div class="shop__item" v-for="(item, index) in menu" :key="index">
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
                  <img v-if="item.added" src="./assets/check.svg" alt="" />
                  {{ item.added ? `In Cart` : 'Add to cart' }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="card cart">
          <div class="card__title">Your Cart</div>
          <div class="card__items cart__items">
            <span class="empty-cart" v-if="this.cart.length === 0">
              Your cart is empty.
            </span>
            <div
              class="cart__item"
              v-else
              v-for="(item, index) in filteredCart"
              :key="index"
            >
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
                    <img src="./assets/chevron.svg" alt="" />
                  </button>
                  <span>{{ item.count }}</span>
                  <button
                    class="arrow-button arrow-button-right"
                    @click="incCountItem(item)"
                  >
                    <img src="./assets/chevron-right.svg" alt="" />
                  </button>
                </div>
                <div class="cost">
                  ${{ item.cost === 0 ? item.price : item.cost.toFixed(2) }}
                </div>
              </div>
              <hr />
            </div>
          </div>
          <div v-if="cart.length > 0" class="cart__total">123</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters(['cart', 'menu', 'filteredCart']),
  },
  methods: {
    addToCart(item) {
      this.$store.commit('addToCart', item);
    },
    incCountItem(item) {
      this.$store.commit('incCountItem', item);
    },
    decCountItem(item) {
      this.$store.commit('decCountItem', item);
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Poppins', sans-serif;
}
button {
  cursor: pointer;
}
hr {
  width: 100%;
  background: #e5e5e5;
  margin: 42px 0;
}
.main {
  background-image: url('./assets/background.png');
  background-size: 100%;
  background-color: #eff0f6;
  min-height: 100vh;
  .container {
    max-width: 1340px;
    margin: 0 auto;
  }
  .content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
  }
}
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
      cursor: url('./assets/check-cursor.svg'), pointer;
      img {
        margin-right: 10px;
      }
    }
  }
}
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
.card {
  background-color: #fff;
  width: 375px;
  min-height: 812px;
  max-height: 812px;
  overflow: auto;
  box-shadow: 0px 0px 70px #c7cbe3;
  border-radius: 25px;
  &__title {
    font-weight: bold;
    font-size: 32px;
    line-height: 48px;
    padding: 50px 0 0 37px;
    margin-bottom: 30px;
  }
  &__items {
    padding-left: 37px;
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
</style>
