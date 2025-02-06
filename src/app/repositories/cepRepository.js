const axios = require('axios');

class cepRepository {

  async getAddressByCep(cep) {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);


      if (response.data.erro) {
        throw new Error('CEP não encontrado');
      }


      return response.data;
    // eslint-disable-next-line no-unused-vars
    } catch (error) {

      throw new Error('Erro ao consultar o CEP');
    }
  }
}

module.exports = new cepRepository();
