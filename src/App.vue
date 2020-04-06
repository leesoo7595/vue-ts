<template>
  <div id="app">
    <Headers />
    <ItemInput />
    <Item />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Headers from '@/components/Headers.vue';
import ItemInput from '@/components/ItemInput.vue';
import Item from '@/components/Item.vue';

@Component({
  components: {
    Headers,
    ItemInput,
    Item,
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