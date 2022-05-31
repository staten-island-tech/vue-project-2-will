<template>
  <nav>
    <h1>Switches!</h1>
    <div class="navi">
      <div>
        <RouterLink to="/">Home</RouterLink>
      </div>
      <!-- for logged in users -->
      <div v-if="store.user">
        <span>Logged in as {{ store.user.email }}</span>
        <RouterLink to="/cart">Cart</RouterLink>
        <button @click="store.logout()">Logout</button>
      </div>
      <!-- for logged out users -->
      <div v-if="!store.user">
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/signup">Signup</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script>
import { useFirebaseStore } from "../stores/firebase-store";
import { RouterLink } from 'vue-router'

export default {
  setup() {
    const store = useFirebaseStore();
    return {store}
  },
  components: {
    RouterLink
  }
}
</script>

<style scoped>
.navi{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
@media (max-width: 640px) {
  .navi{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  }

}
</style>