<style lang="css" scoped>
@import "../css/components/navbar.css";
@import "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0";
</style>

<template>
  <header>
    <nav class="navbar">
      <a class="logo" href="#">Bobii</a>
      <ul class="menu-links">
        <span id="close-menu-btn" class="material-symbols-outlined" @click="closeMobileMenu">close</span>
        <li><a href="/">Home</a></li>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Documentation</a></li>
        <li><a href="premiumselect">Premium</a></li>
        <li id="loginContainer"><a :href="discordAuth2Link">Login</a></li>
        <li id="avatarContainer"><img id="avatar" style="display: hidden"></li>
      </ul>
      <span id="hamburger-btn" class="material-symbols-outlined" @click="toggleMobileMenu">menu</span>
    </nav>
  </header>
</template>

<script>
import { discordAuth2Link } from '~/globals';

export default {
  methods: {
    toggleMobileMenu() {
      // Referenz auf das header-Element
      const header = this.$refs.header;
      const hamburgerBtn = this.$refs.hamburgerBtn;
      // Toggle mobile menu on hamburger button click
      header.classList.toggle("show-mobile-menu");
    },
    closeMobileMenu() {
      // Referenz auf das header-Element
      const header = this.$refs.header;
      // Referenz auf das hamburgerBtn-Element
      const hamburgerBtn = this.$refs.hamburgerBtn;
      // Referenz auf das closeMenuBtn-Element
      const closeMenuBtn = this.$refs.closeMenuBtn;

      // Close mobile menu on close button click
      hamburgerBtn.click();
    }
  },

  data() {
    return {
      discordAuth2Link: discordAuth2Link
    };
  }
}
</script>