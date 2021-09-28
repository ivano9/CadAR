'use strict'

const express = require('express')
const router = express.Router()
const {
  createCustomer
  , getCustomers
  , getCustomerById
  , updateCustomer
  , removeCustomer
} = require('../controllers/customers')

router.route('/').get(getCustomers)

router.route('/').post(createCustomer)

router.route('/:id').get(getCustomerById)

router.route('/:id').patch(updateCustomer)

router.route('/:id').delete(removeCustomer)

module.exports = router
