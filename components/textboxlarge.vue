<style lang="css" scoped>
@import "../css/components/textbox.css";
</style>


<template>
    <div class="textbox-container">
        <h2>{{ beschreibung }} <tooltip :tooltipText="tooltipText"/></h2>
        <textarea type="text" class="text-area" :id="name" :name="name" :placeholder="platzhalter" :maxlength="maxlengh"></textarea>
    </div>
    
</template>

<script>
export default {
  props: {
    name: String,
    platzhalter: String,
    maxlengh: String,
    required: Boolean,
    beschreibung: String,
    height: String,
    tooltipText: String
  }
};
</script>