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