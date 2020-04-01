<template>
    <div>
        {{message}}
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Inject} from 'vue-property-decorator';

    @Component
    export default class Children extends Vue {
        
        // 프로퍼티 데코레이터는 초기화를 안하면 오류를 뱉는다.
        // 1. optional(?)하게 주면 해당 오류를 넘어갈 수 있다.
        // 2. essential(!)하게 주면 의도되었다고 인식하여 오류를 넘어갈 수 있다.
        @Inject() readonly message!: string;
    }
</script>