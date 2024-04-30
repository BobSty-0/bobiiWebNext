<template>
    <navbar/>
    <errordisplay :code="error.statusCode" :message="error.message"/>
    <fusszeile/>
</template>

<script setup>
    defineProps(['error'])
</script>

<script>
import errordisplay from '/components/errordisplay.vue'

export default {
  components: {
    errordisplay,
  }
};
</script>