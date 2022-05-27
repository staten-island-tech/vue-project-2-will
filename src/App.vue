<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import { useFirebaseStore } from './stores/firebase-store';
useFirebaseStore().fetchUser()

</script>

<template>
<Navbar/>
<RouterView />
</template>

<style>
@import '@/assets/base.css';

#app {
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
  background-color:rgb(132, 228, 235)
  
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  padding: 30px;
  display: flex;
  margin: auto;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex-direction: row;
  font-size: 1.9rem;
  background-color: #dcf5f2;
}

main{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
    
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

card {
  color: white;
}
@media (min-width: 2560px) {
  body {
    display: flex;
    place-items: center;
    background-color: #dcf5f2;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    /* text-align: left;
    margin-left: -1rem; */
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
    
  }
}
</style>
