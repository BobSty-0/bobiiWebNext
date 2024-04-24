<style lang="css" scoped>
@import "../css/components/textbox.css";
</style>


<template>
    <div class="textbox-container">
        <h2>{{ beschreibung }} <tooltip :tooltipText="tooltipText"/></h2>
        <input type="text" class="textbox" :id="name" :value="value" :placeholder="platzhalter" :maxlength="maxlengh">
    </div>

</template>

<script>
import eventBus from '/eventBus'
export default {
    props: {
        name: String,
        platzhalter: String,
        maxlengh: String,
        beschreibung: String,
        height: String,
        tooltipText: String,
        value: String
    },
    created() {
        eventBus.$on('insertKeywords', (keyword) => {
            if (this.name != 'tempchannelname'){
                return;
            }
            let textbox = document.getElementById('tempchannelname');
            if (keyword.length + textbox.value.length > 49){
                return;
            }
            
            let cursorPosition = textbox.selectionStart;
            let textBeforeCursor = textbox.value.substring(0, cursorPosition);
            let textAfterCursor = textbox.value.substring(cursorPosition);
            textbox.value = textBeforeCursor + keyword + textAfterCursor;
            let newCursorPosition = cursorPosition + keyword.length; 
            textbox.setSelectionRange(newCursorPosition, newCursorPosition);
            textbox.focus()
        })
    },
    destroyed() {
        eventBus.$off('insertKeywords')
  }
};
</script>