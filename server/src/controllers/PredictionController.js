const {Prediction} = require('../models')

module.exports = {
  // Creates new prediction
  async post (req, res) {
    try {
      const prediction = await Prediction.create(req.body)
      res.send(prediction)
    } catch (error) {
      res.status(500).send({error: 'Could not create prediction'})
    }
  },
  // Retrieves the full prediction list
  async index (req, res) {
    try {
      const prediction = await Prediction.findAll()
      res.send(prediction)
    } catch (error) {
      res.status(500).send({error: 'Could not find predictions'})
    }
  },
  // Retrieves NFL predictions
  async indexNFL (req, res) {
    try {
      const predictions = await Prediction.findAll({
        where: {
          category: 'NFL'
        }
      })
      res.send(predictions)
    } catch (error) {
      res.status(500).send({error: 'Could not find list'})
    }
  },
  // Retrieves college football predictions
  async indexNCAAF (req, res) {
    try {
      const predictions = await Prediction.findAll({
        where: {
          category: 'NCAAF'
        }
      })
      res.send(predictions)
    } catch (error) {
      res.status(500).send({error: 'Could not find list'})
    }
  },
  // Retrieves NBA predictions
  async indexNBA (req, res) {
    try {
      const predictions = await Prediction.findAll({
        where: {
          category: 'NBA'
        }
      })
      res.send(predictions)
    } catch (error) {
      res.status(500).send({error: 'Could not find list'})
    }
  }
}
