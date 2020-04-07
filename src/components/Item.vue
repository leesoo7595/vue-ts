<template>
    <div>
      <div class="input-group">
        <span class="input-group-addon">
          <input type="checkbox" @change="changeStatus" :checked="status === 'clear'">
        </span>
        <input type="text" class="form-control" :value="title">
        <span class="input-group-btn">
          <button class="btn btn-default" type="button" @click="removeItem">X</button>
        </span>
      </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component
export default class Item extends Vue{
  @Prop() readonly id!: string;
  @Prop() readonly title!: string;
  @Prop() readonly status!: 'active' | 'clear';
  changeStatus() {

  }

  removeItem() {

  }
}
</script>