'use strict'

const fs = require('fs')

const list = (type) => {
  const customers = fs.readFileSync(__basedir + '/data/customers.json', 'utf-8')
  const customersJson = JSON.parse(customers)
  switch (type){
    case undefined:
      return customersJson
      break
    case 'individual':
      return customersJson.filter(customer => customer.type.includes("individual"))
      break
    case 'constructor':
      return customersJson.filter(customer => customer.type.includes("constructor"))
      break
    default:
      return 'Unimplemented type'
  }

}
module.exports = {
  list
}
