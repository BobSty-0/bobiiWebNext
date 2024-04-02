<style lang="css" scoped>
@import "../css/components/server.css";
</style>

<template>
    <div class="auswahl-element">
        <div class="server-bild">
            <img :src="imgUrl"/>
        </div>
        <h2>{{ serverName }}</h2>
        <p>{{ owner }}</p>
        <button>{{ buttonText }}</button>
    </div>
</template>

<script>
export default {
  props: {
    serverName: String,
    imgUrl: String,
    owner: String,
    buttonText: String
  }
};
</script>