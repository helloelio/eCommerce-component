import { createStore } from 'vuex';
import fries from '../assets/plate__fish-sticks-fries.png';
import bacon from '../assets/plate__bacon-eggs.png';
import chicken from '../assets/plate__fish-sticks-fries.png';
import fish from '../assets/plate__fish.png';
import ravioli from '../assets/plate__ravioli.png';
import tortellini from '../assets/plate__tortellini.png';

export default createStore({
  state: {
    menu: [
      {
        id: 1,
        img: fries,
        name: 'French Fries with Ketchup',
        price: 2.23,
        count: 1,
      },
      {
        id: 2,
        img: bacon,
        name: 'Salmon and Vegetables',
        price: 5.12,
        count: 1,
      },
      {
        id: 3,
        img: chicken,
        name: 'Spaghetti with Meat Sauce',
        price: 7.82,
        count: 1,
      },
      {
        id: 4,
        img: fish,
        name: 'French Fries with Ketchup',
        price: 2.23,
        count: 1,
      },
      { id: 5, img: ravioli, name: 'MMMM fisha ma GOD', price: 4.5, count: 1 },
      {
        id: 6,
        img: tortellini,
        name: 'pelmyashi SLABODA',
        price: 4.53,
        count: 1,
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
      if (state.cart.length <= 0) {
        state.cart.push(payload);
      } else {
        state.cart.forEach((item) => {
          if (item.id === payload.id) {
            item.cost = item.count * item.price;
            item.count++;
          } else {
            return;
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
