<template>
    <div>常用在线工具</div>
    <router-link :to="{ name: 'base64', params: {} }">Base64编码/解码</router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {

    },
})
</script>
