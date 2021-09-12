'use strict'

const fs = require('fs')

const list = () => {
  const customers = fs.readFileSync('/home/iroot/Downloads/UAI/MCGA/CaldAR/data/customers.json', 'utf-8')
  return JSON.parse(customers)
}
module.exports = {
  list
}
