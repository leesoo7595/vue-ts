<template>
    <div>
      <div class="input-group">
        <span class="input-group-addon">
          <input type="checkbox" @change="changeStatus">
        </span>
        <input type="text" class="form-control">
        <span class="input-group-btn">
          <button class="btn btn-default" type="button" @click="removeItem">X</button>
        </span>
      </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Item extends Vue{
  changeStatus() {

  }

  removeItem() {

  }
}
</script>