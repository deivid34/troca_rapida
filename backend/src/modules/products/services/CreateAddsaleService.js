

class CreateAddsaleService {
    constructor(addsaleRepository) {
      this.addsaleRepository = addsaleRepository
    }
  
    async execute({  price, title, description, address, user_id, image }) {
      try{
      const addsale = await this.addsaleRepository.createAddsale ({
        
        price,
        title,
        description,
        address,
        user_id,
        image
      })
  
      return addsale
    } catch (error) {
      // Lide com o erro, por exemplo, registrando ou relançando
      console.error('Erro ao criar addsale:', error);
      throw new Error('Erro ao criar addsale');
    }
    }
  }
  
  module.exports = CreateAddsaleService