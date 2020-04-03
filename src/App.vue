<template>
  <div id="app">
    <Counter />
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Counter from '@/components/Counter.vue';

@Component({
  components: {
    Counter
  },
})
export default class App extends Vue {
  increase() {
    this.$store.dispatch("increase");
  }

  decrease() {
    this.$store.dispatch("decrease");
  }
}
</script>

<style>
</style>