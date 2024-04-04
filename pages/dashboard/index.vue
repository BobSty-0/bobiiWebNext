<template>
    <div>
        <navbar/>
        <ueberschrift :ueberschrift="caption"/>
        <servers/>
        <fusszeile/>
    </div>
 </template>

<script>
import servers from '/components/pages/dashboard/servers.vue'

export default {
  data() {
    return {
      caption: 'Select Server'
    };
  },
  components: {
    servers,
  }
};
</script>
