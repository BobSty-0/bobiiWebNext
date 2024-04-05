<style lang="css" scoped>
@import "../css/components/textbox.css";
</style>


<template>
    <div class="textbox-container">
        <h2>{{ beschreibung }}</h2>
        <input type="text" class="textbox" :id="name" :name="name" :placeholder="platzhalter" :maxlength="maxlengh" :required="required">
    </div>
    
</template>

<script>
export default {
  props: {
    name: String,
    platzhalter: String,
    maxlengh: String,
    required: Boolean,
    beschreibung: String
  }
};
</script>