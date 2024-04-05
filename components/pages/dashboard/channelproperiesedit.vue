<style lang="css" scoped>
@import "/css/components/pages/dashboard/channelproperiesedit.css";
</style>

<template>
    <div class="properties-edit">
        <textbox beschreibung="Temp Channel Name" name="tempchannelname" maxlengh="50" required="true" />
        <slider min="0" max="99" value="0" name="tempchannelsize" beschreibung="Size" einheit=" user"/>
        <slider min="0" max="250" value="0" name="tempchanneldelay" beschreibung="Delay" einheit=" min."/>
        <slider min="0" max="120" value="0" name="tempchannelautodelete" beschreibung="Auto Delete Messages" einheit=" min."/>
        <div class="save-preview-buttons">
            <button class="preview-button">Preview</button>
            <button class="save-button">Save</button>
        </div>
    </div>
</template>
