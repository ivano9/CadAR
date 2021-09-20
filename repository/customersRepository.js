'use strict'

const { Validator } = require('jsonschema')
const { customersModel } = require(__basedir + '/models')

const Type = {
  individual: 'individual',
  constructor: 'constructor'
}

const list = async (type) => {
  const customers = readCustomers()
  switch (type) {
    case undefined:
      return await customersModel.find()
      break
    case 'individual':
      return customers.filter(customer => customer.type === Type.individual)
      break
    case 'constructor':
      return customers.filter(customer => customer.type === Type.constructor)
      break
    default:
      return 'Unimplemented type'
  }

}

const create = (data) => {
    const customer = customersModel(data)
    return customer.save()
}


const fetch = (id) => {
  const customers = readCustomers()
  return customers.find(customer => customer._id === +id)
}

const update = (id, data, res) => {
  try {
    validator(data)
    let customer = fetch(id)
    for (const dataElement in data) {
      for(const customerElement in customer)
        if (dataElement === customerElement)
          customer[customerElement] = data[dataElement]
    }

    let customersUpdated = remove(id)
    customersUpdated.push(customer)
    fs.writeFileSync(__basedir + '/data/customers.json', JSON.stringify(customersUpdated))
    return list()

  } catch (err) {
   res.status(400).send({
     "message": "Ivalid data",
     "error": err
   })
  }
}

const remove = (id) => {
  const customers = readCustomers()
  let newCustomers = customers.reduce((acc, curr) => {
    if (curr._id !== +id) acc.push(curr)
    return acc
  }, [])

  fs.writeFileSync(__basedir + '/data/customers.json', JSON.stringify(newCustomers))
  return list()
}

// Private
const readCustomers = () => {
  return JSON.parse(fs.readFileSync(__basedir + '/data/customers.json', 'utf-8'))
}

const validator = (data) => {
  const v = new Validator()

  const customerTypeSchema = {
    "id": "/CustomerType",
    "type": "string",
    "pattern": "individual|constructor"
  }

  const customerSchema = {
    "id": "/Customer",
    "type": "object",
    "properties": {
      "first_name": {"type": "string"},
      "last_name": {"type": "string"},
      "email": {
        "type": "string",
        "pattern": "^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$"
      },
      "phone": {"type": "string"},
      "address": {"type": "string"},
      "city": {"type": "string"},
      "state": {"type": "string"},
      "country": {"type": "string"},
      "company_name": {"type": "string"},
      "type": { "$ref": "/CustomerType"}
    }
  }

  v.addSchema(customerTypeSchema, '/CustomerType')
  v.validate(data, customerSchema, { "throwError": true })
}

module.exports = {
  list,
  create,
  fetch,
  update,
  remove
}
