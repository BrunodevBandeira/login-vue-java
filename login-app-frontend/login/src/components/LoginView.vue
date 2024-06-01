<script setup>
import { ref } from 'vue'
import configurarAPI from './Api'; 

defineProps({
  msg: String,
})

const api = configurarAPI();   

const inputName = ref('')
const inputLogin = ref('')
const inputPassword = ref('')
const inputConfirm = ref('')
const isRegistering = ref(false)
const errorMessage = ref('')

const login = async () => {
  if (isRegistering.value) {

    if (inputPassword.value !== inputConfirm.value) {
      errorMessage.value = 'Senhas diferentes'
      return

    } else {

      console.log('Register:', inputName.value, inputLogin.value, inputPassword.value)

      try {
        const dados = {
          nome: inputName.value,
          login: inputLogin.value,
          password: inputPassword.value,
          confirmPassword: inputConfirm.value,
        };
        const response = await api.registerRequest(dados);
        console.log('Registration SUCESSO:', response);

         inputName.value = ''
        inputLogin.value = ''
        inputPassword.value = ''
        inputConfirm.value = ''
        errorMessage.value = ''
        isRegistering.value = false
      } catch (error) {
        console.error('Erro no registro:', error);
        errorMessage.value = 'Erro no registro';
      }
    }
  } else {
    console.log('Login:', inputLogin.value, inputPassword.value)
  }
}

const password = () => {
  console.log('Recuperar senha para:', inputLogin.value)
}

const register = () => {
  isRegistering.value = true
}
</script>
 

<template>
  <div class="container">
    <div class="container-box">
      <div class="container-inputs">
        <input v-if="isRegistering" type="text" v-model="inputName" placeholder="Name">
        <input type="text" v-model="inputLogin" placeholder="Login">
        <input type="password" v-model="inputPassword" placeholder="Password">
        <input v-if="isRegistering" type="password" v-model="inputConfirm" placeholder="Confirm Password">
      </div>
      
      
      <div class="container-btns">
        <button @click="login" v-if="!isRegistering">Login</button>
        <button @click="password" v-if="!isRegistering">Esqueci a senha</button>
        <button @click="register" v-if="!isRegistering">Cadastre-se</button>
        <button @click="login" v-if="isRegistering">Registrar</button>
      </div>
        <div class="container-error" v-if="errorMessage">{{ errorMessage }}</div>
    </div>
  </div>
</template>



<style scoped>

  .container {
    display: flex;
    justify-content: center;
    align-items: center;  
    flex-direction: column;
    height: 100vh; 
   }

   .container-error {
    color: red;
    margin-top: 10px;
    font-weight: 600;
    padding: 1.5rem 0rem 2rem 0rem;
 
  }

  .container-box {
    width: 20rem;
    height: 12rem;
  }

  .container-inputs {
    flex-wrap: wrap;
    width: 20rem;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-wrap: wrap; 
   }

  .container-inputs {
    display: flex;
     align-items: center;
  }

  .container-inputs input {
    padding: 10px;
    margin-bottom: 10px;
    width: 225px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 16px;
  }

  .container-inputs input:focus {
    outline: none;
    border-color: rgb(20, 146, 16);
  }

  .container-btns {
    display: flex;
    justify-content: space-evenly;
  }

  .container-btns button {
    padding: 10px 15px;
    margin-top: 5rem;
    background-color: rgb(30, 255, 116);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .container-btns button:hover {
    background-color: rgb(11, 155, 11);
  }
 
</style>
