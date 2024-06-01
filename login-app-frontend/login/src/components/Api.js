import axios from 'axios';

const API_URL = 'http://localhost:8080/auth/';

const configurarAPI = () => {

  const loginRequest = async () => {
    try {
      const response = await axios.get(`${API_URL}/login`);
      console.log('loginRequest response', response);

      console.log('loginRequest data', response.data);
      return response.data;

    } catch (error) {
      console.error('Erro na requisição GET:', error);
      throw error;
    }
  };

  const registerRequest = async (dados) => {
    console.log('registerRequest - dados:', dados);
    let obj = {
      nome: dados.nome,
      login: dados.login,
      password: dados.password,
      confirmPassword: dados.confirmPassword,
    };
    
    console.log('registerRequest - obj:', obj);

    try {
      const response = await axios.post(`${API_URL}/register`, obj, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('registerRequest - response:', response);
      console.log('registerRequest - response.data:', response.data);

      return response.data;
    } catch (error) {
      console.error('Erro na requisição POST:', error);
      throw error;
    }
  };

  return {
    loginRequest,
    registerRequest,
  };
};

export default configurarAPI;