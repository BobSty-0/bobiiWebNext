<style lang="css" scoped>
@import "../css/components/slider.css";
</style>


<template>
    <div class="slider-container">
        <h2>{{ beschreibung }}</h2>
        <div class="slider-value-container">
            <h2>{{ sliderValue }}{{ einheitValue }}</h2>
            <input type="range" :min="min" :max="max" @input="updateValue" class="slider" :id="name" :name="name">
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
    return {
      sliderValue: this.value,
      einheitValue: this.einheit
    };
  },
  props: {
    min: String,
    max: String,
    value: String,
    name: String,
    beschreibung: String,
    einheit: String
  },
  methods: {
    updateValue(event) {
        if (event.target.value === '0') {
            this.sliderValue = "-"
            this.einheitValue = ""
        } else{
            this.sliderValue = event.target.value;
            this.einheitValue = this.einheit
        }
      
    }
  }
};
</script>