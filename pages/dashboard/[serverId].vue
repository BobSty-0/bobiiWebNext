<template>
    <navbar/>
    <p>Test: {{ serverId }}</p>
    <fusszeile/>
</template>

<script setup>
const route = useRoute()
</script>

<script>
export default {
    data() {
        return {
            serverId: this.$route.params.serverId
        }
    }
}
</script>