<style lang="css" scoped>
@import "/css/components/pages/dashboard/servers.css";
</style>

<template>
    <section class="confirmation-section">
        <div class="server-auswahl" id="server-auswahl">
            <div v-for="(server) in dummyServer">
                <server :serverName="server.serverName" :imgUrl="server.imgUrl" :owner="server.owner"
                    :buttonText="server.buttonText"  :serverId="server.serverId"/>
            </div>
        </div>
    </section>
</template>

<script>
import server from '/components/pages/dashboard/server.vue'

export default {
    components: {
        server
    },
    data() {
        return {
            dummyServer: [
                { serverName: "Server1", imgUrl: 'https://cdn.discordapp.com/attachments/910868343030960129/1223413002586292285/DiscordLogo_V2.png?ex=6619c325&is=66074e25&hm=9767e52d539676ef37fd006d31fb82d4339cab80a349588f6e6f97429410ce34&', owner: 'Owner', buttonText: "Setup", serverId: "324141341234134"},
                { serverName: "Server2", imgUrl: 'https://cdn.discordapp.com/attachments/910868343030960129/1223413002586292285/DiscordLogo_V2.png?ex=6619c325&is=66074e25&hm=9767e52d539676ef37fd006d31fb82d4339cab80a349588f6e6f97429410ce34&', owner: 'Moderator', buttonText: "Setup", serverId: "324141341234134" },
                { serverName: "Server3", imgUrl: 'https://cdn.discordapp.com/attachments/910868343030960129/1223413002586292285/DiscordLogo_V2.png?ex=6619c325&is=66074e25&hm=9767e52d539676ef37fd006d31fb82d4339cab80a349588f6e6f97429410ce34&', owner: 'Owner', buttonText: "Setup", serverId: "324141341234134" }
            ]
        }
    }
}
</script>