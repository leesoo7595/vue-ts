<template>
    <div class="home">
        <img src="../assets/logo.png" alt="Vue logo">
        <Message></Message>
        <Children :parentMessage="message"></Children>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Message from '@/components/Message.vue';
    import Children from '@/components/Children.vue';

    @Component({
        components: {
            Message,
            Children,
        },
    })
    export default class Home extends Vue {
        message: string = 'hello world';
    }
</script>