<template>
  <div>
     <input type="text"
            class="form-control"
            @keyup.enter="addItem"
            placeholder="할 일을 입력해주세요.">
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class ItemInput extends Vue {
  addItem() {
    
  }
}
</script>