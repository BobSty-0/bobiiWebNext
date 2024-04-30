<style lang="css" scoped>
@import "../css/components/errordisplay.css";
</style>

<template>
    <div class="error-container">
        <div class="error-container-text">
            <h2>Ooops something went wrong!</h2>
            <h1>{{ code }}</h1>
            <h3>{{ message }}</h3>

            <NuxtLink to="/" ><button>Go back Home</button></NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        code: String,
        message: String
    },
}
</script>