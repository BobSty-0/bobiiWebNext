<style lang="css" scoped>
@import "/css/components/pages/dashboard/buttons.css";
</style>

<template>
    <div class="buttons">
        <h2>Interface Buttons <tooltip tooltipText="Click on a button to edit it"/></h2>
        <div v-for="(button) in dummyButtons">
            <interfacebutton :buttonPicture="button.buttonPicture" :enabled="button.enabled" :name="button.name" :color="button.color" :originalName="button.originalName"/>
        </div>
    </div>
</template>

<script>
import interfacebutton from '/components/pages/dashboard/interfacebutton.vue'

export default {
    data(){
        return{
            dummyButtons: [
                { buttonPicture: "https://cdn.discordapp.com/emojis/1138160331122802818.webp?size=96&quality=lossless", enabled: 'aktiv', originalName: "name", name: "name", color: "#877877" },
                { buttonPicture: "https://cdn.discordapp.com/emojis/1138160331122802818.webp?size=96&quality=lossless", enabled: 'aktiv', originalName: "size", name: "size", color: "#872923" },
                { buttonPicture: "https://cdn.discordapp.com/emojis/1138160331122802818.webp?size=96&quality=lossless", enabled: 'aktiv', originalName: "claimowner", name: "claimowner", color: "#f77a72" },
                { buttonPicture: "https://cdn.discordapp.com/emojis/1138160331122802818.webp?size=96&quality=lossless", enabled: 'inaktiv', originalName: "giveowner", name: "giveowner", color: "#877877" },
                { buttonPicture: "https://cdn.discordapp.com/emojis/1138160331122802818.webp?size=96&quality=lossless", enabled: 'inaktiv', originalName: "privacy", name: "privacy", color: "#877877" },
                { buttonPicture: "https://cdn.discordapp.com/emojis/1138160331122802818.webp?size=96&quality=lossless", enabled: 'aktiv', originalName: "name", name: "block", color: "#877877" },
                { buttonPicture: "https://cdn.discordapp.com/emojis/1138160331122802818.webp?size=96&quality=lossless", enabled: 'aktiv', originalName: "name", name: "unblock", color: "#877877" },
                { buttonPicture: "https://cdn.discordapp.com/emojis/1138160331122802818.webp?size=96&quality=lossless", enabled: 'aktiv', originalName: "name", name: "kick", color: "#877877" },
                { buttonPicture: "https://cdn.discordapp.com/emojis/1138160331122802818.webp?size=96&quality=lossless", enabled: 'aktiv', originalName: "name", name: "mute", color: "#877877" },
                { buttonPicture: "https://cdn.discordapp.com/emojis/1138160331122802818.webp?size=96&quality=lossless", enabled: 'aktiv', originalName: "name", name: "chat", color: "#877877" },
                { buttonPicture: "https://cdn.discordapp.com/emojis/1138160331122802818.webp?size=96&quality=lossless", enabled: 'inaktiv', originalName: "name", name: "moderator", color: "#877877" },
                { buttonPicture: "https://cdn.discordapp.com/emojis/1138160331122802818.webp?size=96&quality=lossless", enabled: 'inaktiv', originalName: "name", name: "whitelist", color: "#877877" },
                { buttonPicture: "https://cdn.discordapp.com/emojis/1138160331122802818.webp?size=96&quality=lossless", enabled: 'inaktiv', originalName: "name", name: "settings", color: "#877877" },
                { buttonPicture: "https://cdn.discordapp.com/emojis/1138160331122802818.webp?size=96&quality=lossless", enabled: 'inaktiv', originalName: "name", name: "info", color: "#877877" }
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