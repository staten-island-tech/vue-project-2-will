import { defineStore } from "pinia";
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "vue-router";

export const useFirebaseStore = defineStore({
  id: "firebase",
  state: () => ({
    user: null,
    authIsReady: false,
  }),
  actions: {
    async signup(email, password) {
      const res = await createUserWithEmailAndPassword(auth, email.value, password.value);
      if (res) {
        this.user = res.user;
        this.authIsReady = true;
      } else {
        throw new Error("Could not complete signup");
      }
    },
    async login(email, password) {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        this.user = res.user;
        this.authIsReady = true;
      } else {
        throw new Error("Could not complete login");
      }
    },
    async logout() {
      await signOut(auth);
      this.user = null;
    },
    fetchUser() {
      const router = useRouter();
      auth.onAuthStateChanged(async (user) => {
        if (user === null) {
          this.user = null;
          this.authIsReady = true;
        } else {
          this.user = user;
          if (
            router.isReady() &&
            (router.currentRoute.value.path === "/login" ||
              router.currentRoute.value.path === "/signup")
          ) {
            router.push("/");
          }
          this.authIsReady = true;
        }
      });
    },
  },
});
