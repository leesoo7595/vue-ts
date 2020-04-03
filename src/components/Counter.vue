<template>
    <div>
        {{$store.getters.count}}
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

export default class Counter extends Vue {
}
</script>