'user strict'

const getIndividualsCustomers = (_req, res) => {
  res.status(200).send({ message: 'Clientes Particulares' })
}

const getConstructorsCustomers = (_req, res) => {
  res.status(200).send('Clientes Constructoras')
}

module.exports = {
  getIndividualsCustomers,
  getConstructorsCustomers
}
