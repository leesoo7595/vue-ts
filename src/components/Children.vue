<template>
    <div>
        <button @click="counter">자식에서 숫자를 증가시킨다.</button>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch, Emit} from 'vue-property-decorator';

    @Component
    export default class Children extends Vue {
        
        @Emit()
        counter() {
             console.log('counter');
        }
    }
</script>