const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  verifyPayloadForCreation() {
    return celebrate({
      [Segments.BODY]: {
        price: Joi.string().allow(null, ''),
        title: Joi.string().allow(null, ''),
        description: Joi.string().allow(''),
        address: Joi.string().allow(null, ''),
        image: Joi.string().allow(null, ''), // Adicione esta linha para validar o campo image
      },
    });
  },

  verifyAddsaleIdInParams() {
    return celebrate({
      [Segments.PARAMS]: {
        addsaleId: Joi.string().required(),
      },
    });
  },
};
