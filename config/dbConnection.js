'use strict'

const mongoose = require('mongoose')

if (require('dotenv').config().error)
  throw new Error('Error while setting the environments variables')

const { MONGO_STR_CON } = process.env

const connect = async () => {
  try {
    await mongoose.connect(MONGO_STR_CON)
    console.log('Mongodb connected')
  } catch (err) {
    console.error(`Error was ocurred when tried to connect to mongodb... error: ${err}`)
  }
}

process.on('uncaughtException', err => {
  console.error('There was an uncaught error', err)
  process.exit(1)
})

module.exports = connect()
