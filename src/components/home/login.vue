<template>
  <div v-if="!isAuthenticated">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <h1 class="mt-5 text-center">LOGIN</h1>
          <form @submit.prevent="login">
            <div class="form-group">
              <label for="username">Username</label>
              <input
                type="text"
                id="username"
                v-model="username"
                class="form-control"
                placeholder="Enter username"
                required
              />
            </div>
            <div class="form-group mt-3">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                v-model="password"
                class="form-control"
                placeholder="Enter password"
                required
              />
            </div>
            <div class="text-center mt-4">
              <button type="submit" class="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const router = useRouter();
const isAuthenticated = ref(false);

const checkAuthentication = () => {
  const token = sessionStorage.getItem('token');
  if (token) {
    isAuthenticated.value = true;
    router.push('/'); // Redireciona para a home se o usuário já estiver autenticado
  }
};

const login = async () => {
  try {
    const response = await axios.post('https://vercel-expres-teste.vercel.app/api/usuarios/login', {
      username: username.value,
      password: password.value
    });

    const token = response.data.token;
    console.log('Token:', token);

    // Salva o token no sessionStorage
    sessionStorage.setItem('token', token);

    // Redireciona para a home
    router.push('/');
  } catch (error) {
    console.error('Erro ao fazer login:', error);
  }
};

// Verifica a autenticação ao montar o componente
onMounted(() => {
  checkAuthentication();
});
</script>

<style scoped>
.container {
  margin-top: 50px;
}

.form-group {
  margin-bottom: 15px;
}
</style>
