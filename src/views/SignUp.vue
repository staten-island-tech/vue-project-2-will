<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required>

    <label for="email">Password:</label>
    <input type="password" name="password" v-model="password" required>

    <button>Sign up</button>
    <div v-if="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from "vue";
import { useFirebaseStore } from "@/stores/firebase-store";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useFirebaseStore();
    const email = ref("");
    const password = ref("");
    const error = ref(null);
    const router = useRouter();
    const handleSubmit = async () => {
      try {
        await store.signup(email, password);
        router.push("/");
      } catch (err) {
        error.value = err.message;
      }
    };
    return {
      handleSubmit,
      email,
      password,
      error,
    };
  },
};
</script>
<style scoped>
input[type=text], input[type=email] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}
h3{
text-align: center;
}
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
}
</style>