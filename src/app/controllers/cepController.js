const CepRepository = require('../repositories/cepRepository');

class cepController {
  static async getAddressByCep(req, res) {
    const { cep } = req.params;
    try {

      const address = await CepRepository.getAddressByCep(cep);
      return res.json(address);
    } catch (error) {

      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = cepController;

