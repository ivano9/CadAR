import express from 'express'
const app = express()

const indexRouter = require('./routes/index')


const routes = require('./routes')(router, {})

app.use('/api', routes)

app.get('/', (_req, res) => {
  res.send('Hello CaldAR')
})

app.get('/customers', (req, res) => {

})

const PORT = process.env.PORT || 3000
app.listen(PORT, () =>
  console.log(`app corriendo en el puerto ${PORT}`)
)
