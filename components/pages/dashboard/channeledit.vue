<style lang="css" scoped>
@import "/css/components/pages/dashboard/channeledit.css";
</style>

<template>
    <ueberschrift :ueberschrift="channelName" :untertitel="serverId"/>
    <div class="edit-elements">
        <Channelinterfaceedit/>
        <channelproperiesedit/>
    </div>
</template>

<script>
import Channelinterfaceedit from '/components/pages/dashboard/channelinterfaceedit.vue';
import channelproperiesedit from '/components/pages/dashboard/channelproperiesedit.vue'

export default {
    props: {
        channelName: String,
        channelId: String,
        serverId: String
    },
    components: {
        channelproperiesedit,
        Channelinterfaceedit
    }
}
</script>