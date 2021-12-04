<template>
  <main class="main">
    <div class="container">
      <div class="content">
        <the-shop :menu="menu" />
        <the-cart :cart="filteredCart" />
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import TheShop from './components/shop/TheShop.vue';
import TheCart from './components/cart/TheCart.vue';

export default {
  name: 'App',
  components: {
    TheShop,
    TheCart,
  },
  computed: {
    ...mapGetters(['cart', 'menu', 'filteredCart']),
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
</style>
