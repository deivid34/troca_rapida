const AppError = require('../../../shared/AppError')

const fs = require('fs')
const path = require('path')
const { directory } = require('../../../config/upload')

class UpdateImageService {
  constructor(addsaleRepository) {
    this.addsaleRepository = addsaleRepository
  }

  async execute(payload) {
    const { file, user } = payload

    const existsUser = await this.addsaleRepository.findById(user.id)
    if (!existsUser) {
      throw new AppError('User not found', 404)
    }

    // Verifica se o campo avatar está preenchido
    if (existsUser.image) {
      const fileCompletePath = path.join(directory, existsUser.image)

      // verifica se o arquivo existe
      const fileExists = fs.existsSync(fileCompletePath)
      if (fileExists) {
        // exclui o arquivo
        fs.unlinkSync(fileCompletePath)
      }
    }

    const updatedUser = await this.addsaleRepository.update({
      id: user.id,
      image: file.filename || '',
    })

    delete updatedUser[0].password

    return updatedUser[0]
  }
}

module.exports = UpdateImageService