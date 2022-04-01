<template>
  <nav>
    <div class="Header">
      <div class="Peanuts">
      <router-link to="/">The Peanuts</router-link>
      </div>
    </div>
    <!-- for all users -->
    <div>
      <div class="Headers">
        <router-link to="/">Home</router-link>
        <!-- for logged in users -->
        <router-link to="/signup">Signup</router-link>
        <router-link to="/login">Login</router-link>
        <span>Logged in as...</span>
        <button>Logout</button>
        
        
       <!-- for logged out users -->
        
        
      </div>
    </div>
  </nav>
</template>

<script>
</script>
<style scoped>
.Peanuts{
  font-size:35px;
  text-align: center;
  margin: auto;
}
.Headers{
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}
button{
  align-content: center;
}
</style>