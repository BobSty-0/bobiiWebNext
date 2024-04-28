<style lang="css" scoped>
@import "/css/components/pages/dashboard/channeledit.css";
</style>

<template>
    <ueberschrift :ueberschrift="channelName" :untertitel="serverId"/>
    <div :class="channeleditclass">
        <Channelinterfaceedit/>
        <channelproperiesedit/>
    </div>
    <interfacebuttonedit :commandImg="commandImg" :commandName="commandName" :commandColor="commandColor" :class="buttoneditclass"/>
</template>

<script>
import Channelinterfaceedit from '/components/pages/dashboard/channelinterfaceedit.vue'
import channelproperiesedit from '/components/pages/dashboard/channelproperiesedit.vue'
import interfacebuttonedit from '/components/pages/dashboard/interfacebuttonedit.vue'
import eventBus from '/eventBus'

export default {
    data() {
        return {
            buttoneditclass: 'interface-button-edit',
            channeleditclass: 'edit-elements',
            commandColor: '',
            commandName: '',
            commandImg: ''
        }
    },
    props: {
        channelName: String,
        channelId: String,
        serverId: String
    },
    components: {
        channelproperiesedit,
        Channelinterfaceedit,
        interfacebuttonedit
    },
    created() {
        eventBus.$on('openButtonEditor', (args) => {
            this.buttoneditclass = 'interface-button-edit-visible'
            this.channeleditclass = 'edit-elements-deaktiviert'


            var buttonPictureLink= args.buttonPictureLink
            var name = args.name
            var color = args.color
            var enabled = args.enabled
            var originalName = args.originalName
            eventBus.$emit('setButtonEditorProps', {buttonPictureLink, name, color, enabled, originalName})
        })

        eventBus.$on('closeButtonEdit', () => {
            this.buttoneditclass = 'interface-button-edit'
            this.channeleditclass = 'edit-elements'
        })

        eventBus.$on('commandButtonSave', () => {
            this.buttoneditclass = 'interface-button-edit'
            this.channeleditclass = 'edit-elements'
        })
    },
    destroyed() {
        eventBus.$off('openButtonEditor')
        eventBus.$off('closeButtonEdit')
        eventBus.$off('commandButtonSave')
  }
}
</script>