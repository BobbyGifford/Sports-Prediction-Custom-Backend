const {Prediction} = require('../models')

module.exports = {
  async post (req, res) {
    try {
      const prediction = await Prediction.create(req.body)
      res.send(prediction)
    } catch (error) {
      res.status(500).send({error: 'Could not create prediction'})
    }
  },
  async index (req, res) {
    try {
      const prediction = await Prediction.findAll()
      res.send(prediction)
    } catch (error) {
      res.status(500).send({error: 'Could not find predictions'})
    }
  }
}
