<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container-fluid">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link" exact-active-class="active">📌 HOME</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/user" class="nav-link" exact-active-class="active">😊 User</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link to="/login" class="nav-link" exact-active-class="active">👨‍💻 Login</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'Navbar',
};
</script>
