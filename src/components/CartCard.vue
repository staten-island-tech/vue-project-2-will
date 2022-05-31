<template>
    <div class="card">
        <img :src="image" alt=""/>
        <h2>{{ title }}</h2>
        <p>{{type}}</p>
         <p>{{price}}</p>
        <button @click="cart.removeFromCart(index)"> Remove </button>
    </div>
</template>

<script>
import { useCartStore } from '../stores/cart-store';

export default {
    name:"Cart",
    setup() {
        const cart = useCartStore();
        return{
            cart,
        };
    },
    props:{
        title: String,
        type: String,
        image: String,
        price: Number,
        index:Number,
    },
};
</script>
<style scoped>
.card{
  display: inline-flex;
  flex-flow:wrap;
  justify-content: center;
  width: 25rem;
  padding: 20px;
  margin: 2rem;
  align-items: center;
  font-size: 1.5 rem;
  border-radius: 16px;
  background-color: #15263f;
  flex-direction: column;
  color: white;
}
img{
    width: 100%;
    vertical-align: middle;
    height: 20rem;
    object-fit: cover;
    border-radius: 16px;
    
}
button{
    border: 0;
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 3px;
    color: black;
    background-color: gray;
    display: flex;
    justify-content: space-around;
    position: relative;
    padding:.7rem;
    margin: auto;
}
</style>