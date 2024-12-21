<template>
  <div class="container">
    <h1>📝 Cadastro de Usuários</h1>
    <UserForm @refresh="fetchUsers" />
    <UserTable ref="userTable" />
  </div>
</template>

<script>
import UserForm from './components/UserForm.vue';
import UserTable from './components/UserTable.vue';

export default {
  components: { UserForm, UserTable },
  methods: {
    fetchUsers() {
      this.$refs.userTable.fetchUsers();
    },
  },
};
</script>

<style>
h1 {
  text-align: center;
  color: #000000;
}

.container {
  margin: 440px auto;
  max-width: 1000px;
  padding: 20px;
  background-color: #F1F0E8;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
