<template>
  <div id="app">
     <Counter />
     <button @click="increase">+</button>
     <button @click="decrease">-</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {Action, Mutation} from 'vuex-class';
import Counter from '@/components/Counter.vue';

@Component({
  components: {
    Counter,
  },
})
export default class App extends Vue {
  
  @Action readonly increase;

  @Action readonly decrease;

  @Mutation readonly setCount;
}
</script>

<style>
</style>