<template>
    <div class="home">
        <img src="../assets/logo.png" alt="Vue logo">
        <Children></Children>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Provide } from 'vue-property-decorator';
    import Children from '@/components/Children.vue';

    @Component({
        components: {
            Children,
        },
    })
    export default class Home extends Vue {
        
        @Provide('message') msg: string = 'provide/inject example';
        
    }
</script>