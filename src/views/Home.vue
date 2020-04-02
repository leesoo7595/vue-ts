<template>
    <div class="home">
        <img src="../assets/logo.png" alt="Vue logo">
        <Checkbox v-model="checked"></Checkbox>
        {{text}}
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Provide } from 'vue-property-decorator';
    import Checkbox from '@/components/Checkbox.vue';

    @Component({
        components: {
            Checkbox
        },
    })
    export default class Home extends Vue {
        checked: boolean = false;
        text: string = '동의하지 않습니다.';

        change(checked: boolean) {
            this.checked = checked;
            this.text = checked ? '동의합니다.' : '동의하지 않습니다.'
        }
    }
</script>