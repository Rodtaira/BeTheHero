const express       =   require('express')
const ongController =   require('./controllers/OngController')
const incidentController = require('./controllers/IncidentController')
const routes = express.Router()

routes.get('/ongs', ongController.listOngs)
routes.post('/ongs', ongController.createOng)

routes.post('/incidents', incidentController.createIncident)
routes.get('/incidents', incidentController.listIncidents)


module.exports = routes