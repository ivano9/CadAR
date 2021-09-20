'user strict'

const { customersRepository } = require( __basedir + '/repository')

const getCustomers = (req, res) => {
  const type = req.query.type
  switch (type) {
    case undefined:
      callFun(res, customersRepository.list())
      break
    case "individual":
      callFun(res, customersRepository.list(type))
      break
    case "constructor":
      callFun(res, customersRepository.list(type))
      break
    default:
      res.status(400).json({
        message: 'Unimplemented operation',
        error: false
      })
  }
}

const createCustomer = (req, res) => {
  const data = req.body
  return callFun(res, customersRepository.create(data))
}

const getCustomerById = (req, res) => {
  const { id } = req.params
  return callFun(res, customersRepository.fetch(id))
}

const updateCustomer = (req, res) => {
  const { id } = req.params
  const data = req.body
  return callFun(res, customersRepository.update(id, data, res))
}

const removeCustomer = (req, res) => {
  const { id } = req.params
  return callFun(res, customersRepository.remove(id))
}

// Private
const callFun = async (res, fun) => {
  try {
    return res.status(201).json({
      data: await fun,
      error: false
    })
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      error: true
    })
  }
}

module.exports = {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
  removeCustomer
}
