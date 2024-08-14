<template>
    <div class="container mt-5">
      <h2 class="text-center mb-4">Lista de Usuários</h2>
      <button @click="fetchUsers" class="btn btn-primary mb-3">Carregar Usuários</button>
      <table v-if="users.length" class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Data de Criação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td>{{ user.created_at }}</td>
          </tr>
        </tbody>
      </table>
      <p v-else>Nenhum usuário encontrado.</p>
    </div>
  </template>
  
<script setup lang="ts">
  import { ref } from 'vue';
  import axios from 'axios';
  import type { Usuario } from '../../interface/usuario'; // Ajuste o caminho conforme necessário
  
  const users = ref<Usuario[]>([]);
  
  const fetchUsers = async () => {
    try {
      const token = sessionStorage.getItem('token');
      if (!token) {
        console.error('Token não encontrado!');
        return;
      }
  
      const response = await axios.get('https://vercel-expres-teste.vercel.app/api/usuarios', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      users.value = response.data;
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  };
</script>
  
<style scoped>
  .container {
    margin-top: 50px;
  }
  
  .table {
    margin-top: 20px;
  }
  
  .btn-primary {
    margin-bottom: 20px;
  }
</style>