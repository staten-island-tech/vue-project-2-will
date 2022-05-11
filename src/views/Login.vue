<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required>

    <label for="email">Password:</label>
    <input type="password" name="password" v-model="password" required>

    <button class="button">Login</button>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const email = ref('')
    const password = ref('')

    const handleSubmit = () => {
      console.log(email.value, password.value)
    }

    return { handleSubmit, email, password }
  }
}
</script>
<style scoped>
template{
  justify-content: center;
}
form{
  align-content: center;
  text-align: center;
  margin:0;
  
}
.button {
  margin-left: auto;
  margin-right: auto;
}
</style>