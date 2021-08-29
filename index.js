const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello CaldAR')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => 
  console.log(`app corriendo en el puerto ${PORT}`)
)
