<template>
  <div>
    <h1>Teste da API</h1>
    <ul>
      <li v-for="atendimento in atendimentos" :key="atendimento.id">
        {{ atendimento.cliente }} - {{ atendimento.servico }} - {{ atendimento.STATUS }} - {{ atendimento.DATA }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      atendimentos: []
    };
  },
  mounted() {
    axios.get('https://vercel-expres-teste-out4n0ohe-teammoab.vercel.app/atendimentos', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        this.atendimentos = response.data;
      })
      .catch(error => {
        console.error('Erro ao acessar a API:', error.response ? error.response.data : error.message);
      });
  }
};
</script>