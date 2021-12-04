import { createStore } from 'vuex';
var _ = require('lodash');
import fries from '../assets/plate__fish-sticks-fries.png';
import bacon from '../assets/plate__bacon-eggs.png';
import chicken from '../assets/plate__fish-sticks-fries.png';
import fish from '../assets/plate__fish.png';
import ravioli from '../assets/plate__ravioli.png';
import tortellini from '../assets/plate__tortellini.png';
import inCart from '../assets/check.svg';

export default createStore({
  state: {
    menu: [
      {
        id: 1,
        img: fries,
        inCart: inCart,
        name: 'French Fries with Ketchup',
        price: 2.23,
        count: 1,
        added: false,
      },
      {
        id: 2,
        img: bacon,
        inCart: inCart,

        name: 'Salmon and Vegetables',
        price: 5.12,
        count: 1,
        added: false,
      },
      {
        id: 3,
        img: chicken,
        inCart: inCart,

        name: 'Spaghetti with Meat Sauce',
        price: 7.82,
        count: 1,
        added: false,
      },
      {
        id: 4,
        img: fish,
        inCart: inCart,
        name: 'French Fries with Ketchup',
        price: 2.23,
        count: 1,
        added: false,
      },
      {
        id: 5,
        img: ravioli,
        inCart: inCart,
        name: 'MMMM fisha ma GOD',
        price: 4.5,
        count: 1,
        added: false,
      },
      {
        id: 6,
        img: tortellini,
        inCart: inCart,
        name: 'pelmyashi SLABODA',
        price: 4.53,
        count: 1,
        added: false,
      },
    ],
    cart: [],
  },
  getters: {
    cart: (state) => state.cart,
    menu: (state) => state.menu,
  },
  methods: {},
  mutations: {
    addToCart(state, payload) {
      if (_.isEmpty(state.cart)) {
        payload.added = true;
        state.cart.push(payload);
      } else {
        state.menu.find((item) => {
          if (_.isEqual(payload, item)) {
            payload.added = true;
            state.cart.push(payload);
          }
        });
      }
    },
  },
  actions: {
    addItemToCart(item) {
      console.log(item);
    },
  },
  modules: {},
});
