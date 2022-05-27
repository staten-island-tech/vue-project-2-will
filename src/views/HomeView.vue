<script>
import Card from '../components/Card.vue';
import {switches} from "@/assets/items.json"

export default {
  setup() {
    return {switches}
  },
  components: {
    Card
  }
}
</script>

<template>
  <main>
    <Card
    v-for="switche in switches"
    :key="switche"
    :title="switche.name"
     :type="switche.type"
     :image="switche.img"
     :price="switche.price"
     :index="switche.index"
    />
  </main>
</template>
