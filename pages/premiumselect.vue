<template>
    <navbar/>
    <ueberschrift :ueberschrift="caption" :untertitel="untertitel"/>
    <premiums/>
    <fusszeile/>
</template>

<script>
import premiums from '/components/pages/premiumselect/premiums.vue'

export default {
  components: {
    premiums
  },
  data() {
    return {
      caption: 'Free yourself from annoying ads',
      untertitel: 'And support Bobii on his great journey!'
    };
  }
};
</script>