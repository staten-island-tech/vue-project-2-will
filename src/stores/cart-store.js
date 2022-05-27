import { defineStore } from "pinia";
import { switches } from "@/assets/items.json";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    cart: [],
  }),
  getters: {
    length() {
      return this.cart.length;
    },
    prepCart() {
      return this.cart.map((element, index) => ({
        ...element,
        index: index,
      }));
    },
    totalPrice() {
      let price = 0;
      this.cart.forEach((switche) => {
        price += switche.price;
      });
      return price;
    },
  },
  actions: {
    addToCart(index) {
      this.cart.push(switches[index]);
      console.log(this.prepCart);
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
  },
});
