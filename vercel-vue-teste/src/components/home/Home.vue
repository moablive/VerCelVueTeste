<template>
  <div>
    <h1>Teste da API</h1>
    <ul>
      <li v-for="atendimento in atendimentos" :key="atendimento.id">
        {{ atendimento.cliente }} - {{ atendimento.servico }} - {{ atendimento.STATUS }} - {{ formatarData(atendimento.DATA) }}
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
    axios.get('https://vercel-expres-teste.vercel.app/api/atendimentos')
      .then(response => {
        console.log("Dados recebidos:", response.data); // Log para verificar os dados
        this.atendimentos = response.data;
      })
      .catch(error => {
        console.error('Erro ao acessar a API:', error.response ? error.response.data : error.message);
      });
  },
  methods: {
    formatarData(data) {
      // Aqui você pode formatar a data da maneira que desejar
      const dataObj = new Date(data);
      return dataObj.toLocaleDateString(); // Exemplo de formatação
    }
  }
};
</script>
