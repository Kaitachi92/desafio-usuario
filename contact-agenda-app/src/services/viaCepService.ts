import axios from 'axios';

const VIA_CEP_API_URL = 'https://viacep.com.br/ws/';

export const fetchAddressByCep = async (cep: string) => {
    try {
        const response = await axios.get(`${VIA_CEP_API_URL}${cep}/json/`);
        if (response.data && !response.data.erro) {
            return response.data;
        } else {
            throw new Error('CEP não encontrado');
        }
    } catch (error) {
        throw new Error('Erro ao buscar o endereço: ' + error.message);
    }
};