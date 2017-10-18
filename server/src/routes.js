const PredictionController = require('./controllers/PredictionController')

module.exports = (app) => {
  app.post('/predictions', PredictionController.post)

  app.get('/predictions', PredictionController.index)
}
