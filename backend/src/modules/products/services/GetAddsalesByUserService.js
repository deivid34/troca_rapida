class GetAddsalesByUserService {
    constructor(addsaleRepository) {
      this.addsaleRepository = addsaleRepository
    }
  
    async execute({ user_id }) {
      const addsales = await this.addsaleRepository.getAddsalesByUserId(
        user_id,
      )
  
      return addsales
    }
  }
  
  module.exports = GetAddsalesByUserService