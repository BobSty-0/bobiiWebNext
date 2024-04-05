<template>
    <navbar/>
    <ueberschrift ueberschrift="Server Name TODO"/>
    <channels :serverId="serverId"/>
    <fusszeile/>
</template>

<script>
import channels from '/components/pages/dashboard/channels.vue'

export default {
    data() {
        return {
            serverId: this.$route.params.serverId
        }
    },
    components: {
        channels,
    }
}
</script>