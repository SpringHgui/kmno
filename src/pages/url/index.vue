<template>
    <div>{{type}}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {

    },
    data() {
        return {
            type: "urlEncode"
        }
    }
})
</script>
