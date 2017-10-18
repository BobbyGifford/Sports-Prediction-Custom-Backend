module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'sportspredictions',
    user: process.env.DB_USER || 'sportspredictions',
    password: process.env.DB_PASS || 'sportspredictions',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './sportspredictions.sqlite',
      operatorsAliases: false
    }
  }
}
