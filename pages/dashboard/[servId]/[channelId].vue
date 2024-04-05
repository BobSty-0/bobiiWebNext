<template>
    <navbar/>
    <channeledit channelName="Channel1" :channelId="channelId" :serverId="serverId" />
    <fusszeile/>
</template>

<script>
import channeledit from '/components/pages/dashboard/channeledit.vue'
export default {
    data() {
        return {
            serverId: this.$route.params.servId,
            channelId: this.$route.params.channelId
        }
    },
    components: {
        channeledit,
    }
}
</script>