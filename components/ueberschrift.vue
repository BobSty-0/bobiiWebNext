<style lang="css" scoped>
@import "../css/components/ueberschrift.css";
</style>

<template>
      <section class="ueberschrift">
        <h2>{{ueberschrift}}</h2>
        <p>{{ untertitel }}</p>
      </section>
</template>

<script>
export default {
  props: {
    ueberschrift: String,
    untertitel: String
  }
};
</script>