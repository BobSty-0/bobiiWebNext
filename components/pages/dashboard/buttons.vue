<style lang="css" scoped>
@import "/css/components/pages/dashboard/buttons.css";
</style>

<template>
    <div class="buttons">
        <h2>Interface Buttons <tooltip tooltipText="Click on a button to edit it"/></h2>
        <div v-for="(button) in dummyButtons">
            <interfacebutton :buttonPicture="button.buttonPicture" :enabled="button.enabled" :name="button.name"/>
        </div>
    </div>
</template>

<script>
import interfacebutton from '/components/pages/dashboard/interfacebutton.vue'

export default {
    data(){
        return{
            dummyButtons: [
                { buttonPicture: "https://cdn.discordapp.com/emojis/1138160331122802818.webp?size=96&quality=lossless", enabled: 'aktiv', name: "name" },
                { buttonPicture: "https://cdn.discordapp.com/emojis/1138160331122802818.webp?size=96&quality=lossless", enabled: 'aktiv', name: "size" },
                { buttonPicture: "https://cdn.discordapp.com/emojis/1138160331122802818.webp?size=96&quality=lossless", enabled: 'aktiv', name: "claimowner" },
                { buttonPicture: "https://cdn.discordapp.com/emojis/1138160331122802818.webp?size=96&quality=lossless", enabled: 'inaktiv', name: "giveowner" },
                { buttonPicture: "https://cdn.discordapp.com/emojis/1138160331122802818.webp?size=96&quality=lossless", enabled: 'inaktiv', name: "privacy" },
                { buttonPicture: "https://cdn.discordapp.com/emojis/1138160331122802818.webp?size=96&quality=lossless", enabled: 'aktiv', name: "block" },
                { buttonPicture: "https://cdn.discordapp.com/emojis/1138160331122802818.webp?size=96&quality=lossless", enabled: 'aktiv', name: "unblock" },
                { buttonPicture: "https://cdn.discordapp.com/emojis/1138160331122802818.webp?size=96&quality=lossless", enabled: 'aktiv', name: "kick" },
                { buttonPicture: "https://cdn.discordapp.com/emojis/1138160331122802818.webp?size=96&quality=lossless", enabled: 'aktiv', name: "mute" },
                { buttonPicture: "https://cdn.discordapp.com/emojis/1138160331122802818.webp?size=96&quality=lossless", enabled: 'aktiv', name: "chat" },
                { buttonPicture: "https://cdn.discordapp.com/emojis/1138160331122802818.webp?size=96&quality=lossless", enabled: 'inaktiv', name: "moderator" },
                { buttonPicture: "https://cdn.discordapp.com/emojis/1138160331122802818.webp?size=96&quality=lossless", enabled: 'inaktiv', name: "whitelist" },
                { buttonPicture: "https://cdn.discordapp.com/emojis/1138160331122802818.webp?size=96&quality=lossless", enabled: 'inaktiv', name: "settings" },
                { buttonPicture: "https://cdn.discordapp.com/emojis/1138160331122802818.webp?size=96&quality=lossless", enabled: 'inaktiv', name: "info" }
            ]
        }
    },
    props: {
        serverId: String,
    },
    components: {
        interfacebutton,
    }
};
</script>