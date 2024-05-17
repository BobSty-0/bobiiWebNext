<style lang="css" scoped>
@import "/css/components/pages/dashboard/channels.css";
</style>

<template>
    <div class="channels">
        <div v-for="(channel) in dummyChannels">
            <channel :channelName="channel.channelName" :channelId="channel.channelId" :serverId="serverId"/>
        </div>
        <createchannel channelName="New Creator Channel" :serverId="serverId" channelId="TODO"/>
    </div>
</template>

<script>
import channel from '/components/pages/dashboard/channel.vue'
import createchannel from '/components/pages/dashboard/createchannel.vue'

export default {
    data(){
        return{
            channels: [],
            dummyChannels: [
                { channelName: "Channel1", channelId: '2312341351234' },
                { channelName: "Channel2", channelId: '3412341223531' },
                { channelName: "Channel3", channelId: '3154134233455' },
                { channelName: "Channel4", channelId: '2312341351234' },
                { channelName: "Channel5", channelId: '3412341223531' },
                { channelName: "Channel6", channelId: '3154134233455' }
            ]
        }
    },

    props: {
        serverId: String,
    },

    components: {
        channel,
        createchannel
    },

    mounted() {

    },

    methods: {
        async getChannels() {
            const response = await fetch('/api/guilds')
            if (response.status != 200){
                window.open(useRuntimeConfig().public.discordAuth2Link, "_self");
                this.channels = []
            }
            else{
                
            }

        }
    }
};
</script>
