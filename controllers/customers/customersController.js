'user strict'

const { customersRepository } = require('../../repository')

const getCustomers = async (_req, res) => {
  try {
    res.status(200).send({ customers: customersRepository.list() })
  } catch (error) {
    res.status(500).send({
      message: `Something was wrong when list the custommers`,
      error: error
    })
  }
}

const getIndividualsCustomers = (_req, res) => {
  res.status(200).send({ message: 'Clientes Particulares' })
}

const getConstructorsCustomers = (_req, res) => {
  res.status(200).send('Clientes Constructoras')
}

module.exports = {
  getCustomers,
  getIndividualsCustomers,
  getConstructorsCustomers
}
