<script setup>
  import { ref } from 'vue'

  defineProps({
    msg: String,
  })

  const count = ref(0)
</script>

<template>
  <div class="container">
      <div class="container-box">
      
          <div class="container-inputs">
            <input type="text" v-model="inputLogin" placeholder="Login">
            <input type="text" v-model="inputPassword" placeholder="Password">
          </div>
    
          <div class="container-btns">
            <button @click="login"> Login </button>
            <button @click="password"> Esqueci a senha </button>
          </div>

      </div>
  </div>
</template>

<style scoped>

  .container {
    display: flex;
    justify-content: center;
    align-items: center;  
    height: 100vh; 
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
    flex-direction: column;
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
    padding: 10px 20px;
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
