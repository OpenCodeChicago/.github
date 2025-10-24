const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./swagger')

const mentorsRouter = require('./routes/mentors')

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000
app.listen(PORT)

module.exports = app
