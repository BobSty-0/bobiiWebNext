<style lang="css" scoped>
@import "/css/components/pages/premium/premium.css";
</style>

<template>
    <div class="buy-container" :id="id">
        <div class="caption">
            <h2>{{ caption }}</h2>
        </div>
        <div class="price">
            <h2>{{ price }}</h2>
            <p>{{ priceSubtitle }}</p>
        </div>
        <div class="benefits">
            <p>{{ benefit1 }}</p>
            <p>{{ benefit2 }}</p>
        </div>

        <a :href="buttonLink">
            <button>
            {{ buttonText }}
            </button>
        </a>
    </div>
</template>

<script>
export default {
  props: {
    id: String,
    caption: String, 
    price: String,
    priceSubtitle: String,
    benefit1: String,
    benefit2: String,
    buttonLink: String,
    buttonText: String
  }
};
</script>

