const PredictionController = require('./controllers/PredictionController')

module.exports = (app) => {
  // Creates new prediction
  app.post('/predictions', PredictionController.post)

  // Retrieves the full prediction list
  app.get('/predictions', PredictionController.index)

  // Retrieves NFL predictions
  app.get('/predictions/NFL', PredictionController.indexNFL)

  // Retrieves college football predictions
  app.get('/predictions/NCAAF', PredictionController.indexNCAAF)

  // Retrieves NBA predictions
  app.get('/predictions/NBA', PredictionController.indexNBA)
}
