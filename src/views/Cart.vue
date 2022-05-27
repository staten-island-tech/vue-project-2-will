<template>
    <div>
    <CartCard
     v-for="switches in cart.prepCart"
     :key="switches"
     :title="switches.name"
     :type="switches.type"
     :image="switches.img"
     :price="switches.price"
     :index="switches.index"
     />
    </div>
</template>

<script>
import { useCartStore } from "../stores/cart-store";
import CartCard from "../components/CartCard.vue";

export default {
    setup() {
        const cart = useCartStore();
        return {cart}
    },
    components: {
        CartCard
    }
}
</script>
<style scoped>

</style>