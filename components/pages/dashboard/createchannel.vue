<style lang="css" scoped>
@import "/css/components/pages/dashboard/createchannel.css";
</style>

<template>
    <div class="channel">
        <div class="channel-name">
            <h2>{{ channelName }}</h2>
        </div>
        <div class="edit-button">
            <NuxtLink :to="link" ><button>Setup</button></NuxtLink>
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
    serverId: String
  }
};
</script>

