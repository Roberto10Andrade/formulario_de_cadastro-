<template>
  <div class="container">
    <form @submit.prevent="submitForm" class="form-container">
      <div class="form-group">
        <label for="name">Nome:</label>
        <input v-model="form.name" id="name" placeholder="Digite seu nome" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input v-model="form.email" id="email" placeholder="Digite seu email" type="email" required />
      </div>
      <div class="form-group">
        <label for="phone">Telefone:</label>
        <input v-model="form.phone" id="phone" placeholder="Digite seu telefone" />
      </div>
      <div class="form-group">
        <label for="address">Endereço:</label>
        <input v-model="form.address" id="address" placeholder="Digite seu endereço" />
      </div>
      <button type="submit" class="submit-btn">Cadastrar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: { name: '', email: '', phone: '', address: '' },
    };
  },
  methods: {
    async submitForm() {
      await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.form),
      });
      this.$emit('refresh');
    },
  },
};
</script>




<style scoped>
.form-container {
  max-width: 500px;
  margin: 30px auto;
  padding: 55px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background: #074799;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 6px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ffffff;
  border-radius: 8px;
  font-size: 16px;
}

.submit-btn {
  background: #118B50;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  text-align: center;
  display: block;
  margin: 20px 0;
  width:  104%;
}

.submit-btn:hover {
  background: #FF6600;
}
</style>
