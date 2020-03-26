const express       =   require('express')
const ongController =   require('./controllers/OngController')

const routes = express.Router()

routes.get('/ongs', ongController.listOngs)
routes.post('/ongs', ongController.createOng)

module.exports = routes