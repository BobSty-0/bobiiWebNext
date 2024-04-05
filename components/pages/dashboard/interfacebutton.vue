<style lang="css" scoped>
@import "/css/components/pages/dashboard/interfacebutton.css";
</style>

<template>
    <div :class="className" @click="toggleClass">
        <img :src="buttonPicture" width="40px";/>
    </div>
</template>

<script>
export default {
    props: {
        buttonPicture: String,
        name: String,
        enabled: String
    },
    data() {
        return {
            className: this.enabled
        }
    },
    methods: {
        toggleClass: function() {
        this.className = (this.className === 'aktiv') ? 'inaktiv' : 'aktiv';
        }
    }
};
</script>