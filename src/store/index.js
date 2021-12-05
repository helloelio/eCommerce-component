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
        cost: 0,
      },
      {
        id: 2,
        img: bacon,
        inCart: inCart,
        name: 'Salmon and Vegetables',
        price: 5.12,
        count: 1,
        added: false,
        cost: 0,
      },
      {
        id: 3,
        img: chicken,
        inCart: inCart,
        name: 'Spaghetti with Meat Sauce',
        price: 7.82,
        count: 1,
        added: false,
        cost: 0,
      },
      {
        id: 4,
        img: fish,
        inCart: inCart,
        name: 'French Fries with Ketchup',
        price: 2.23,
        count: 1,
        added: false,
        cost: 0,
      },
      {
        id: 5,
        img: ravioli,
        inCart: inCart,
        name: 'MMMM fisha ma GOD',
        price: 4.5,
        count: 1,
        added: false,
        cost: 0,
      },
      {
        id: 6,
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
    filteredCart: (state) => state.cart.filter((item) => item.count + 1 !== 0),
    tax: (state) => state.tax,
  },
  methods: {},
  mutations: {
    addToCart(state, payload) {
      // if (_.isEmpty(state.cart)) {
      state.cart.push({
        ...payload,
        added: (payload.added = true),
        count: (payload.count = 1),
      });
      // } else {
      //   state.menu.forEach((item) => {
      //     if (_.isEqual(payload, item)) {
      //       state.cart.push({
      //         ...payload,
      //         added: (payload.added = true),
      //         count: (payload.count = 1),
      //       });
      //     }
      //   });
      // }
    },
    incCountItem(state, payload) {
      state.cart.forEach((cartItem) => {
        if (_.isEqual(cartItem, payload)) {
          cartItem.count++;
          cartItem.cost = cartItem.count * cartItem.price;
        }
      });
    },
    decCountItem(state, payload) {
      state.cart.forEach((cartItem) => {
        if (_.isEqual(cartItem, payload)) {
          cartItem.count--;
          if (cartItem.count === 0) {
            state.menu.forEach((menuItem) => {
              if (cartItem.id === menuItem.id) {
                menuItem.added = false;
              }
            });
            payload.added = false;
            state.cart.splice(cartItem.id - 1, 1);
          }
          cartItem.cost = cartItem.count * cartItem.price;
        }
      });
    },
  },
  actions: {
    addItemToCart(item) {
      console.log(item);
    },
  },
  modules: {},
});
