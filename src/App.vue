<template>
  <div id="app">
    <Headers />
    <ItemInput />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Headers from '@/components/Headers.vue';
import ItemInput from '@/components/ItemInput.vue';

@Component({
  components: {
    Headers,
    ItemInput,
  },
})
export default class App extends Vue {
  
}
</script>

<style>
#app {
  padding: 100px;
}
</style>