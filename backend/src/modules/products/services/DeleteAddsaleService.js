const AppError = require('../../../shared/AppError')

class DeleteAddsaleService {
  constructor(addsaleRepository) {
    this.addsaleRepository = addsaleRepository
  }

  async execute({ id, user_id }) {
    const addsale = await this.addsaleRepository.getAddsaleById(id, user_id)
    if (!addsale) {
      throw new AppError('Addsale not found')
    }

    const addsaleDeleted = await this.addsaleRepository.deleteAddsale(id)

    return addsaleDeleted
  }
}

module.exports = DeleteAddsaleService