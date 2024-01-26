const AppError = require('../../../shared/AppError')
const connection = require('../../../shared/database/connection')

module.exports = {

  async getAddsaleById(id, user_id) {
    try {
      return connection('addsale').where({ id }).andWhere({ user_id }).first()
    } catch (err) {
      throw new AppError(err.message)
    }
  },

 
  async createAddsale(payload) {
    try {
      const addsale = await connection('addsale')
        .insert(payload)
        .returning('*')

      return addsale[0]
    } catch (err) {
      throw new AppError(err.message)
    }
  },

  
  async deleteAddsale(id) {
    try {
      return connection('addsale').where({ id }).del()
    } catch (err) {
      throw new AppError(err.message)
    }
  },

  
  async updateAddsale(payload) {
    try {
      const addsale = await connection('addsale')
        .update(payload)
        .where({ id: payload.id })
        .returning('*')

      return addsale[0]
    } catch (err) {
      throw new AppError(err.message)
    }
  },

  async getAddsalesByUserId(user_id) {
    try {
      return connection('addsales').where({ user_id })
    } catch (err) {
      throw new AppError(err.message)
    }
  },

  

  async findById(id) {
    try {
      return connection('addsale').where('id', id).first()
    } catch (error) {
      throw new AppError(error.message)
    }
  },
  async update(payload) {
    try {
      const query = connection('addsale')
        .where('id', payload.id)
        .update({
          image: payload.image,
          // Adicione outras propriedades aqui, se necessário
        })
        .returning('*');
  
      console.log(query.toString());  // Adicione esta linha
  
      return query;
    } catch (error) {
      throw new AppError(error.message);
    }
  }
}  