class GetAddsaleByUserService {
    constructor(addsaleRepository) {
      this.addsaleRepository = addsaleRepository
    }
  
    async execute({ id, user_id }) {
      const addsale = await this.addsaleRepository.getAddsaleById(id, user_id)
  
      return addsale
    }
  }
  
  module.exports = GetAddsaleByUserService