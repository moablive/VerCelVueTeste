<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/nav/Navbar.vue'
import Footer from './components/nav/footer.vue'
</script>
