<style lang="css" scoped>
@import "/css/components/pages/dashboard/interfacebuttonedit.css";
</style>

<template>
    <div class="button-edit">
        <img src="/resources/SchließenIcon.png" class="close-button" @click="closeClick"/>
        <div class="img-checkbox">
            <h2>Icon <tooltip tooltipText="This will be the Icon of the command"/></h2>
            <div @click="$refs.file.click()" class="img-upload" :style="{ backgroundImage: `url(${cmdImg})` }">
                <input type="file" ref="file" style="display: none;" accept=".png" @change="handleFileUpload">
            </div>            
        </div>

        
        <div class="properties">
            <textbox :value="cmdName" beschreibung="Command Description" name="commanddescription" maxlengh="30" tooltipText="This will be the description of the command in the interface picture" @change="handleCheckBoxChanged"/>
            <div class="color-picker-div">
                <input type="color" class="color-picker" name="colorPicker" :value="cmdColor" @change="handleColorChanged">
                <h2>Background Color <tooltip tooltipText="This will be the background color of the command in the interface picture"/></h2>
            </div>
            <div class="enabled-checkbox-div">
                <input class="enabled-checkbox" type="checkbox" :checked="cmdEnabled" @change="handleCheckBoxChanged"> 
                <h2>Enabled <tooltip tooltipText="This will enable or disable the command"/></h2>
            </div>
            <button class="save-button" @click="saveButtonClick(this.cmdColor, this.cmdName, this.cmdEnabled, this.cmdImg, this.cmdOriginalName)">Save</button>
        </div>        
    </div>
</template>

<script>
import eventBus from '/eventBus'

export default {
    data() {
        return {
            cmdColor: '',
            cmdName: '',
            cmdImg: '',
            cmdOriginalName: '',
            cmdEnabled: '' === ''
        }
    },

    methods: {
        handleFileUpload(event) {
            // TODO File muss auf den Sevrer gelegt werden und dann anschließend auf die URL zugegriffen werden
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                    this.cmdImg = reader.result;
                };
                reader.readAsDataURL(file);
            }
        },

        handleCheckBoxChanged(event) {
            this.cmdEnabled = event.target.checked
        },

        handleColorChanged(event) {
            this.cmdColor = event.target.value
        },

        closeClick() {
            eventBus.$emit('closeButtonEdit');
        },

        saveButtonClick(color, name, enabled, cmdImg, originalName) {
            var enabledClass = (enabled) ? 'aktiv' : 'inaktiv'
            eventBus.$emit('commandButtonSave', {color, name, enabledClass, cmdImg, originalName});
        }
    },

    created() {
        eventBus.$on('setButtonEditorProps', (args) => {
            this.cmdColor = args.color,
            this.cmdName = args.name,
            this.cmdImg = args.buttonPictureLink,
            this.cmdEnabled = args.enabled === 'aktiv',
            this.cmdOriginalName = args.originalName
        }),

        eventBus.$on('textboxValueChanged', (args) => {
            if (args.textBoxName != "tempchannelname"){
                return;
            }

            this.cmdName = args.newValue
        })
    },

    destroyed() {
        eventBus.$off('setButtonEditorProps')
        eventBus.$off('textboxValueChanged')
  }
}
</script>