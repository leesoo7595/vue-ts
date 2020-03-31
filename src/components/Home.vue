<template>
    <div class="home">
        <img src="../assets/logo.png" alt="Vue logo">
        <Message></Message>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Message from '@components/Message.vue';

    @Component({
        components: {
            Message,
        },
    })
    export default class Home extends Vue {}
</script>