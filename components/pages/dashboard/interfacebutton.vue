<style lang="css" scoped>
@import "/css/components/pages/dashboard/interfacebutton.css";
</style>

<template>
    <div :class="className" @click="openButtonEditor(this.cmdButtonPicture, this.cmdName, this.className, this.cmdColor, this.cmdOriginalName)">
        <img :src="cmdButtonPicture" width="40px"/>
    </div>
</template>

<script>
import eventBus from '/eventBus'

export default {
    props: {
        buttonPicture: String,
        name: String,
        enabled: String,
        color: String,
        originalName: String
    },

    data() {
        return {
            className: this.enabled,
            cmdButtonPicture: this.buttonPicture,
            cmdName: this.name,
            cmdColor: this.color,
            cmdOriginalName: this.originalName
        }
    },

    methods: {
        openButtonEditor(buttonPictureLink, name, enabled, color, originalName) {
            eventBus.$emit('openButtonEditor', {buttonPictureLink, name, enabled, color, originalName} );
        },
        
        toggleClass: function() {
            this.className = (this.className === 'aktiv') ? 'inaktiv' : 'aktiv';
        }
    },

    created() {
        eventBus.$on('commandButtonSave', (args) => {
            if (this.originalName != args.originalName) {
                return
            }
            this.cmdColor = args.color,
            this.cmdName = args.name,
            this.className = args.enabledClass
            this.cmdButtonPicture = args.cmdImg
        })
    },
    destroyed() {
        eventBus.$off('commandButtonSave')
    }
};
</script>