'user strict'

const {customersRepository} = require(__basedir + '/repository')

const getCustomers = (req, res) => {
  const type = req.query.type
  try {
    return customersRepository.list(res, type)
  } catch (err) {
    return res.status(500).json({
      data: `Something wrong while listing the customers. Error: ${err}`,
      error: true
    })
  }
}

const createCustomer = (req, res) => {
  const data = req.body
  try {
    return customersRepository.create(res, data)
  } catch (err) {
    return res.status(500).json({
      data: `Something wrong while listing the customers. Error: ${err}`,
      error: true
    })
  }
}

const getCustomerById = (req, res) => {
  const {id} = req.params
  try {
    return customersRepository.fetch(res, id)
  } catch (err) {
    return res.status(500).json({
      message: err,
      error: true
    })
  }
}

const updateCustomer = (req, res) => {
  const {id} = req.params
  const data = req.body
  try {
    return customersRepository.update(res, id, data)
  } catch (err) {
    return res.status(500).json({
      message: err,
      error: true
    })
  }
}

const removeCustomer = (req, res) => {
  const {id} = req.params
  try {
    return customersRepository.remove(res, id)
  } catch (err) {
    return res.status(500).json({
      message: err,
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
