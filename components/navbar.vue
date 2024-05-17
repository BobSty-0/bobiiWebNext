<style lang="css" scoped>
@import "../css/components/navbar.css";
@import "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0";
</style>

<template>
  <header :class="navbarOrderClass">
    <nav class="navbar">
      <a class="logo" href="/">Bobii</a>
      <ul class="menu-links">
        <span id="close-menu-btn" class="material-symbols-outlined" @click="toggleClass">close</span>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/dashboard">Dashboard</NuxtLink></li>
        <li><a href="/documentation">Documentation</a></li>
        <li><NuxtLink to="/premium">Premium</NuxtLink></li>
        <li id="loginContainer"><a :href="useRuntimeConfig().public.discordAuth2Link">Login</a></li>
        <li id="avatarContainer" class="avatarContainer"><img id="avatar" style="display: hidden" @click=""></li>
      </ul>
      <span id="hamburger-btn" class="material-symbols-outlined" @click="toggleClass">menu</span>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navbarOrderClass: '',
    };
  },
  mounted() {
    this.checkUserLoggedIn();
  },
  methods: {
    toggleClass() {
        this.navbarOrderClass = (this.navbarOrderClass === '') ? 'show-mobile-menu' : '';
    },

    showLogOut() {

    },
    
    async checkUserLoggedIn() {
      try {
        const response = await fetch('/api/identify')
          if (response.status === 200) {
            response.json().then(r => {
              document.getElementById("avatar").src = `https://cdn.discordapp.com/avatars/${r.id}/${r.avatar}.png`
              document.getElementById("avatarContainer").style.display = 'default'
              document.getElementById("loginContainer").style.display = 'none'
            })
          } else {
            document.getElementById("avatar").src = ''
            document.getElementById("avatarContainer").style.display = 'none'
            document.getElementById("loginContainer").style.display = 'default'
          }
      } catch (error) {
          console.error('Fehler beim Überprüfen der Benutzeranmeldung:', error);
      }
    }
  }
}
</script>