<style lang="css" scoped>
@import "/css/components/pages/dashboard/channelinterfaceedit.css";
</style>

<template>
    <div class="interface-edit">
        <textbox beschreibung="Interface Caption" name="tempchannelname" maxlengh="50" tooltipText="This will be the caption of the interface" />
        <textboxlarge beschreibung="Interface Content" name="tempchannelname" maxlengh="400" tooltipText="This will be the content of the interface"/>
        <buttons/>
    </div>
</template>

<script>
import buttons from '/components/pages/dashboard/buttons.vue';

export default {
    components: {
        buttons
    }
}</script>