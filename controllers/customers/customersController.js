'user strict'

const { customersRepository } = require( __basedir + '/repository')

const getCustomers = (req, res) => {
  const type = req.query.type
  switch (type) {
    case undefined:
      list(res, customersRepository.list())
      break
    case "individual":
      list(res, customersRepository.list(type))
      break
    case "constructor":
      list(res, customersRepository.list(type))
      break
    default:
      res.status(400).send({
        message: 'Unimplemented operation',
        error: 'not_found'
      })
  }
}

const getCustomerById = (_req, res) => {
  res.status(200).send({ message: 'Clientes Particulares' })
}

// Private
const list = (res, fun) => {
  try {
    res.status(200).send({ "customers": fun })
  } catch (error) {
    res.status(500).send({
      message: 'Something was wrong when list the custommers',
      error: error
    })
  }
}

module.exports = {
  getCustomers,
  getCustomerById
}
