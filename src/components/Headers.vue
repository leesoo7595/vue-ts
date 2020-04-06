<template>
  <div>
    <h1>TODO LIST</h1>
    <ol class="breadcrumb">
      <li><a href="#">All</a>/ </li>
      <li><a href="#">Active</a>/ </li> 
      <li><a a href="#">Clear</a></li>
    </ol>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class Headers extends Vue {
    
  }
</script>