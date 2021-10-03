'use strict'

const { customersModel } = require('../models')

const list = async (res, type) => {
  if (!type) {
    return res.status(200).json({
      data: await customersModel.find(),
      error: false,
    })
  }

  const customers = await customersModel.find({ type: type }).exec()
  return res.status(200).json({
    data: !customers ? 'Customers not found' : customers,
    error: false,
  })
}

const create = async (res, data) => {
  const customer = customersModel(data)
  try {
    return res.status(200).json({
      data: await customer.save(),
      error: false,
    })
  } catch (err) {
    console.error(err)
    return res.status(400).json({
      message: `Invalid data. Error: ${err}`,
      error: true,
    })
  }
}

const fetch = async (res, id) => {
  const result = await customersModel.findById(id).exec()
  return !result
    ? res.status(404).json({
        data: 'Customer not found',
        error: true,
      })
    : res.status(201).json({
        data: result,
        error: false,
      })
}

const update = (res, id, data) => {
  customersModel
    .findOneAndUpdate({ _id: id }, data, { runValidators: true, new: true })
    .then((result) =>
      res.status(200).json({
        data: result,
        error: false,
      })
    )
    .catch((err) =>
      res.status(422).json({
        data: err.errors,
        error: true,
      })
    )
}

const remove = async (res, id) => {
  const result = await customersModel.findByIdAndRemove(id)
  return !result
    ? res.status(404).json({
        data: 'Customer not found',
        error: true,
      })
    : res.status(204).json({
        data: {},
        error: false,
      })
}

module.exports = {
  list,
  create,
  fetch,
  update,
  remove,
}
