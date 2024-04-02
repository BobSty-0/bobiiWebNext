<template>
    <div>
        <navbar/>
        <ueberschrift :ueberschrift="caption"/>
        <servers/>
        <fusszeile/>
    </div>
 </template>

<script>
export default {
  data() {
    return {
      caption: 'Select Server'
    };
  }
};
</script>
