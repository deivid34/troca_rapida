const { Router } = require('express')
const multer = require('multer')

const {
 
  createAddsale,
  deleteAddsale,
  getAddsaleByUser,
  updateAddsale,
  getAddsalesByUser,
  updateImage,
 
} = require('../controllers/products.controller')

const {
  verifyPayloadForCreation,
  verifyAddsaleIdInParams,
  
} = require('../../middlewares/addsale.middleware')

const ensureAuthenticated = require('../../../../shared/middlewares/ensure-autenticated')
const uploadConfig = require('../../../../config/upload')

const productRouters = Router()

const upload = multer(uploadConfig)


productRouters.post('/', verifyPayloadForCreation(), createAddsale)

productRouters.get('/:addsaleId', getAddsaleByUser)

productRouters.get('/', getAddsalesByUser)

productRouters.delete('/:addsaleId', verifyAddsaleIdInParams(), deleteAddsale)

productRouters.put('/:addsaleId', verifyAddsaleIdInParams(), updateAddsale)


productRouters.patch(
  '/image',
  ensureAuthenticated,
  upload.single('image'),
  updateImage,
)



module.exports = productRouters