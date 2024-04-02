<template>
    <navbar/>
    <ueberschrift :ueberschrift="caption" :untertitel="untertitel"/>
    <premiums/>
    <fusszeile/>
</template>

<script>
export default {
  data() {
    return {
      caption: 'Free yourself from annoying ads',
      untertitel: 'And support Bobii on his great journey!'
    };
  }
};
</script>