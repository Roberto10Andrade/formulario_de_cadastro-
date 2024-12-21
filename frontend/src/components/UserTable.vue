<template>
  <div class="container table-container">
    <h1>👥 Usuários Cadastrados</h1>
    <table class="user-table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Endereço</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.address }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return { users: [] };
  },
  methods: {
    async fetchUsers() {
      const response = await fetch('http://localhost:3000/users');
      this.users = await response.json();
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>




<style scoped>
.table-container {
  max-width: 900px;
  margin: 50px auto;
  padding: 20px;
  background: #D9EAFD;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  font-size: 24px;
  color: #000000;
  margin-bottom: 20px;
  font-weight: 600;
}

.user-table {
  width: 100%;
  border-collapse: collapse;
}

.user-table th, .user-table td {
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
  font-size: 14px;
}

.user-table th {
  background-color: #118B50;
  color: white;
}

.user-table tr:hover {
  background-color: #f1f1f1;
}

.user-table td {
  color: #000000;
}

@media (max-width: 768px) {
  .user-table th, .user-table td {
    padding: 10px;
  }

  h1 {
    font-size: 20px;
  }
}
</style>
