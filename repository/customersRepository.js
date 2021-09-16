'use strict'

const fs = require('fs')

const list = (type) => {
  const customers = listCustomers()
  switch (type){
    case undefined:
      return customers
      break
    case 'individual':
      return customersJson.filter(customer => customer.type === 'individual')
      break
    case 'constructor':
      return customersJson.filter(customer => customer.type === 'constructor')
      break
    default:
      return 'Unimplemented type'
  }

}

const fetch = (id) => {
  const customers = listCustomers()
  return customers.find(customer => customer._id === +id)
}

// Private
const listCustomers = () => {
  return JSON.parse(fs.readFileSync(__basedir + '/data/customers.json', 'utf-8'))
}

module.exports = {
  list,
  fetch
}
