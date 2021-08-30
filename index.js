import express from 'express'
const app = express()

app.get('/', (_req, res) => {
  res.send('Hello CaldAR')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () =>
  console.log(`app corriendo en el puerto ${PORT}`)
)
