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
import { mapState } from 'vuex';

@Component({
  computed: mapState([
    'todoList',
  ])
})
export default class ItemInput extends Vue {
  title: string = '';

  addItem() {
    this.$store.commit('addItem', {
      id: this.todoList.length + 1,
      title: this.title,
      status: 'active',
    });
  }
}
</script>