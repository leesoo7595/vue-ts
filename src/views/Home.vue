<template>
    <div class="home">
        <img src="../assets/logo.png" alt="Vue logo">
        <Children @counter="counter"></Children>
        <p>
            부모에서 숫자를 보여준다. : {{count}}
        </p>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Children from '@/components/Children.vue';

    @Component({
        components: {
            Children,
        },
    })
    export default class Home extends Vue {
        count: number = 0;

        counter() {
            this.count++;
        }
    }
</script>