global.__basedir = __dirname

const express = require('express')
const router = require('./routes')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

// Routes
app.use('/api', router)

app.get('/', (_req, res) => {
  res.send('Hello CaldAR')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () =>
  console.log(`app running on http://localhost:${PORT}`)
)
