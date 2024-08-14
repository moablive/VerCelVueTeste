<template>
  <div class="d-flex flex-column min-vh-100">
    <Navbar />
    <router-view class="flex-grow-1" />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/nav/Navbar.vue';
import Footer from './components/nav/Footer.vue';
</script>

<style scoped>
.flex-grow-1 {
  flex-grow: 1;
}
</style>
