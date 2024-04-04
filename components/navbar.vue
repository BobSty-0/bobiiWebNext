<style lang="css" scoped>
@import "../css/components/navbar.css";
@import "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0";
</style>

<template>
  <header>
    <nav class="navbar">
      <a class="logo" href="/">Bobii</a>
      <ul class="menu-links">
        <span id="close-menu-btn" class="material-symbols-outlined" @click="closeMobileMenu">close</span>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/dashboard">Dashboard</NuxtLink></li>
        <li><a href="#">Documentation</a></li>
        <li><NuxtLink to="/premium">Premium</NuxtLink></li>
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
    async loginWithDiscord() {
      await this.$auth.loginWith('discord');
    },
    toggleMobileMenu() {
      const header = this.$refs.header;
      const hamburgerBtn = this.$refs.hamburgerBtn;
      header.classList.toggle("show-mobile-menu");
    },
    closeMobileMenu() {
      const header = this.$refs.header;
      const hamburgerBtn = this.$refs.hamburgerBtn;
      const closeMenuBtn = this.$refs.closeMenuBtn;
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