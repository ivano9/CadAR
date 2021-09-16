'user strict'

const { customersRepository } = require( __basedir + '/repository')
const {fetch} = require("../../repository/customersRepository");

const getCustomers = (req, res) => {
  const type = req.query.type
  switch (type) {
    case undefined:
      callMessage(res, customersRepository.list())
      break
    case "individual":
      callMessage(res, customersRepository.list(type))
      break
    case "constructor":
      callMessage(res, customersRepository.list(type))
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
  callMessage(res, fetch(id))
}

// Private
const callMessage = (res, fun) => {
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
