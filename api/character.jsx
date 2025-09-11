import api from './api';

export const getcharacters = async () => {
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
