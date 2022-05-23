import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { defineStore } from "pinia";

export const useStore = defineStore({
  state: () => ({
    user: null,
  }),
  actions: {
    setUser(state, payload) {
      this.user = payload;
      console.log("user state changed");
    },
    async signup(email, password, username) {
      console.log("signup action");
      const res = await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      if (res) {
        this.setUser(res.user);
        updateProfile(this.user, { displayName: username.value });
      } else {
        throw new Error("could not complete signup");
      }
    },
  },
});
