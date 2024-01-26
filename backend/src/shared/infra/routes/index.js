const { Router } = require('express')

const userRouters = require('../../../modules/users/infra/routes/user.routes')
const loginRouter = require('../../../modules/users/infra/routes/login.routes')
const productRouters = require('../../../modules/products/infra/routes/product.routes')

const ensureAuthenticated = require('../../middlewares/ensure-autenticated')


const routes = Router()

routes.use('/users', userRouters)

routes.use('/login', loginRouter)

// Tudo que estiver abaixo do ensureAuthenticated vai precisar de autenticação
routes.use(ensureAuthenticated)

routes.use('/products', productRouters)

module.exports = routes