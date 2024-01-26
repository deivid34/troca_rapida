const AppError = require('../../../shared/AppError')

class UpdateAddsaleService {
  constructor(addsaleRepository) {
    this.addsaleRepository = addsaleRepository
  }

  async execute({ id, price, title, description, address, user_id, image }) {
    const addsale = await this.addsaleRepository.getAddsaleById(id, user_id)
    if (!addsale) {
      throw new AppError( 'addsale not found')
    }

    const addsaleUpdated = await this.addsaleRepository.updateAddsale({
           id,
       
        price,
        title,
        description,
        address,
        user_id,
        image
    })

    return addsaleUpdated
  }
}

module.exports = UpdateAddsaleService