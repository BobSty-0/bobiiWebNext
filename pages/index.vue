<template>
    <div>
      <navbar/>
      <herosection/>
      <tempchannelsection/>
      <textutilitysection/>
      <fusszeile/>
    </div>
  </template>

<script>
  import herosection from '/components/pages/index/herosection.vue'
  import tempchannelsection from '/components/pages/index/tempchannelsection.vue'
  import textutilitysection from '/components/pages/index/textutilitysection.vue'
  export default {
  components: {
    herosection,
    tempchannelsection,
    textutilitysection
  }
};
</script>