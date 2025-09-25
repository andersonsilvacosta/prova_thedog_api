import api from "./api.jsx";

export const getcharacters = async () => { // 'c' minúsculo
  try {
    const response = await api.get('/breeds');

    if (response.status !== 200) {
      return [];
    }

    console.log('response do AXIOS', response);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar personagens:', error);
    return [];
  }
};