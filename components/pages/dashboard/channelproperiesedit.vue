<style lang="css" scoped>
@import "/css/components/pages/dashboard/channelproperiesedit.css";
</style>

<template>
    <div class="properties-edit">
        <textbox beschreibung="Temp Channel Name" name="tempchannelname" maxlengh="50" tooltipText="Following words will be replaced: {username}, {nickname} and {count}" />
        <div class="temp-channel-name-buttons">
            <button id="username-button">Username</button>
            <button id="nickname-button">Nickname</button>
            <button id="count-button">Count</button>
        </div>
        <slider min="0" max="99" value="0" name="tempchannelsize" beschreibung="Size" einheit=" user" tooltipText="This will be the size of the temp channels"/>
        <slider min="0" max="250" value="0" name="tempchanneldelay" beschreibung="Delay" einheit=" min." tooltipText="This will be the delay of the temp channels after which they will be deleted"/>
        <slider min="0" max="120" value="0" name="tempchannelautodelete" beschreibung="Auto Delete Messages" einheit=" min." tooltipText="This will be the time after which messages are deleted in the temp channels"/>
        <div class="save-preview-buttons">
            <button class="preview-button">Preview</button>
            <button class="save-button">Save</button>
        </div>
    </div>
</template>