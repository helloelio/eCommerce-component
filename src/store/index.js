import { createStore } from 'vuex';
import fries from '../assets/plate__fish-sticks-fries.webp';
import bacon from '../assets/plate__bacon-eggs.webp';
import chicken from '../assets/plate__fish-sticks-fries.webp';
import fish from '../assets/plate__fish.webp';
import ravioli from '../assets/plate__ravioli.webp';
import tortellini from '../assets/plate__tortellini.webp';
import inCart from '../assets/check.svg';

export default createStore({
  state: {
    menu: [
      {
        id: 0,
        img: fries,
        inCart: inCart,
        name: 'French Fries with Ketchup',
        price: 2.23,
        count: 1,
        added: false,
        cost: 0,
      },
      {
        id: 1,
        img: bacon,
        inCart: inCart,
        name: 'Salmon and Vegetables',
        price: 5.12,
        count: 1,
        added: false,
        cost: 0,
      },
      {
        id: 2,
        img: chicken,
        inCart: inCart,
        name: 'Spaghetti with Meat Sauce',
        price: 7.82,
        count: 1,
        added: false,
        cost: 0,
      },
      {
        id: 3,
        img: fish,
        inCart: inCart,
        name: 'French Fries with Ketchup',
        price: 2.23,
        count: 1,
        added: false,
        cost: 0,
      },
      {
        id: 4,
        img: ravioli,
        inCart: inCart,
        name: 'MMMM fisha ma GOD',
        price: 4.5,
        count: 1,
        added: false,
        cost: 0,
      },
      {
        id: 5,
        img: tortellini,
        inCart: inCart,
        name: 'pelmyashi SLABODA',
        price: 4.53,
        count: 1,
        added: false,
        cost: 0,
      },
    ],
    cart: [],
    totalPrice: 0,
    tax: 0.0975,
  },
  getters: {
    cart: (state) => state.cart,
    menu: (state) => state.menu,
    filteredCart: (state) => state.cart.filter((item) => item.count !== 0),
    tax: (state) => state.tax,
    totalPrice: (state) => state.totalPrice,
  },
  methods: {},
  mutations: {
    addToCart(state, payload) {
      state.cart.push({
        ...payload,
        cost: (payload.cost = payload.price),
        added: (payload.added = true),
        count: (payload.count = 1),
      });
      this.commit('getTotalPrice');
    },
    incCountItem(state, payload) {
      payload.count++;
      payload.cost = payload.count * payload.price;
      this.commit('getTotalPrice');
    },
    decCountItem(state, payload) {
      payload.count--;
      payload.cost = payload.cost - payload.price;
      if (payload.count === 0) {
        state.menu.forEach((menuItem) => {
          if (payload.id === menuItem.id) {
            menuItem.added = false;
            payload.added = false;
          }
        });
      }
      this.commit('getTotalPrice');
    },
    getTotalPrice(state) {
      state.totalPrice = 0;
      this.getters.filteredCart.forEach((item) => {
        state.totalPrice += item.cost;
      });
    },
  },
  actions: {},
  modules: {},
});
