import api from "./api"


export const getcharacters = async () => {
    const response = await api.get('/characters')

    if(response.status !==200){
        return []
    }

    console.log('response do AXIOS', response)

    return response.data.results
}