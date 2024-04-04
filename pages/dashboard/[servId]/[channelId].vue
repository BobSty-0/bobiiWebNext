<template>
    <navbar/>
    <p>sevrerId: {{ serverId }}</p>
    <p>channelId: {{ channelId }}</p>
    <fusszeile/>
</template>

<script setup>
const route = useRoute()
</script>

<script>
export default {
    data() {
        return {
            serverId: this.$route.params.servId,
            channelId: this.$route.params.channelId
        }
    }
}
</script>