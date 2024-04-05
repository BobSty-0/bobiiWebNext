<style lang="css" scoped>
@import "/css/components/pages/dashboard/channel.css";
</style>

<template>
    <div class="channel">
        <div class="channel-name">
            <h2>{{ channelName }}</h2>
            <p>{{ channelId }}</p>
        </div>
        <div class="edit-button">
            <NuxtLink :to="link" ><button>Edit</button></NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            link: "/dashboard/" + this.serverId + "/" + this.channelId
        }
    },
    props: {
        channelName: String,
        channelId: String,
        serverId: String
    }
};
</script>
