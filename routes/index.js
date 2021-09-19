'use strict'

const express = require('express')
const { customersController } = require(__basedir + '/controllers')

const router = express.Router()

router.route('/customers').get(customersController.getCustomers)

router.route('/customers/:id').get(customersController.getCustomerById)

router.route('/customers/:id').patch(customersController.updateCustomer)

router.route('/customers/:id').delete(customersController.removeCustomer)

module.exports = router
