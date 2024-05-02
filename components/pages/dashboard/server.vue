<style lang="css" scoped>
@import "/css/components/pages/dashboard/server.css";
</style>

<template>
    <div class="auswahl-element">
        <div class="server-bild">
            <img :src="imgUrl"/>
        </div>
        <div class="server-infos">
          <h2>{{ serverName }}</h2>
          <p>{{ ownerString }}</p>
        </div>
        <NuxtLink :to="link" ><button>{{ buttonText }}</button></NuxtLink>
    </div>
</template>

<script>
export default {
  data() {
    return {
      link: "/dashboard/" + this.serverId,
      ownerString: '',
      iconLink: ''
    }
  },

  props: {
    serverName: String,
    serverId: String,
    imgUrl: String,
    owner: Boolean,
    buttonText: String
  },

  mounted() {
    this.getOwnerString()
  },

  methods: {
    getOwnerString() {
      if(this.owner) {
        this.ownerString = 'Owner'
      }
      else{
        this.ownerString = 'Moderator'
      }
    },
  }
};
</script>