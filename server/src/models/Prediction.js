module.exports = (sequelize, DataTypes) => {
  const Prediction = sequelize.define('Prediction', {
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    description: DataTypes.STRING
  })
  return Prediction
}
