const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./swagger')

const mentorsRouter = require('./routes/mentors')

const app = express()
app.use(express.json())

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// API routes
app.use('/mentors', mentorsRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
  console.log(`Swagger UI available at http://localhost:${PORT}/api-docs`)
})

module.exports = app
