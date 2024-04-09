<style lang="css" scoped>
@import "../css/components/textbox.css";
</style>


<template>
    <div class="textbox-container">
        <h2>{{ beschreibung }} <tooltip :tooltipText="tooltipText"/></h2>
        <input type="text" class="textbox" :id="name" :value="value" :name="name" :placeholder="platzhalter" :maxlength="maxlengh">
    </div>

</template>

<script>
export default {
    props: {
        name: String,
        platzhalter: String,
        maxlengh: String,
        beschreibung: String,
        height: String,
        tooltipText: String,
        value: String
    }
};
</script>