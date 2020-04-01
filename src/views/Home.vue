<template>
    <div class="home">
        <img src="../assets/logo.png" alt="Vue logo">
        <Children :parentMessage="message"></Children>
        <button @click="changeMessage">
            메세지를 바꿔줄게요.
        </button>
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
        message: string = 'hello world';

        changeMessage() {
            this.message = 'change';
        }
    }
</script>