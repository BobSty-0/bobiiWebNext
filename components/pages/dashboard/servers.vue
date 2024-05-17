<style lang="css" scoped>
@import "/css/components/pages/dashboard/servers.css";
</style>

<template>
    <section class="confirmation-section">
        <div class="server-auswahl" id="server-auswahl">
            <div v-for="(server) in servers">
                <server v-if="server.owner || (server.permissions & 0x20)" :serverName="server.name" :imgUrl="`https://cdn.discordapp.com/icons/${server.id}/${server.icon}.png`" :owner="server.owner"
                    buttonText="Setup"  :serverId="server.id"/>
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
            servers: [],
        }
    },

    mounted() {
        this.getServers()
    },

    methods: {
        async getServers() {
            const response = await fetch('/api/guilds')
            if (response.status != 200){
                window.open(useRuntimeConfig().public.discordAuth2Link, "_self");
                this.servers= []
            }
            else{
                response.json()
                .then(data => {
                    this.servers = data;
                })
            }
        }
    }
}
</script>