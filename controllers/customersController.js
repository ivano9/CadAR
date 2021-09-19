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
      res.status(400).send({
        message: 'Unimplemented operation',
        error: 'not_found'
      })
  }
}

const getCustomerById = (req, res) => {
  const { id } = req.params
  callFun(res, customersRepository.fetch(id))
}

const updateCustomer = (req, res) => {
  const { id } = req.params
  const data = req.body
  callFun(res, customersRepository.update(id, data, res))
}

const removeCustomer = (req, res) => {
  const { id } = req.params
  callFun(res, customersRepository.remove(id))
}

// Private
const callFun = (res, fun) => {
  try {
    res.status(200).send(fun)
  } catch (error) {
    res.status(500).send({
      message: 'Something was wrong when making the operating.',
      error: error
    })
  }
}

module.exports = {
  getCustomers,
  getCustomerById,
  updateCustomer,
  removeCustomer
}
