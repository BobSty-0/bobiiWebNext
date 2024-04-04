<style lang="css" scoped>
@import "/css/components/pages/dashboard/server.css";
</style>

<template>
    <div class="auswahl-element">
        <div class="server-bild">
            <img :src="imgUrl"/>
        </div>
        <h2>{{ serverName }}</h2>
        <p>{{ owner }}</p>
        <NuxtLink :to="link" ><button>{{ buttonText }}</button></NuxtLink>
    </div>
</template>

<script>
export default {
  data() {
    return {
      link: "/dashboard/" + this.serverId
    }
  },
  props: {
    serverName: String,
    serverId: String,
    imgUrl: String,
    owner: String,
    buttonText: String
  }
};
</script>