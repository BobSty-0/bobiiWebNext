<style lang="css" scoped>
@import "../css/components/tooltip.css";
</style>

<template>
    <div class="tooltip">
        <img src="/resources/Info.png" />
        <span>{{ tooltipText }}</span>
    </div>
</template>

<script>
export default {
  props: {
    tooltipText: String,
  }
};
</script>
