'use strict'

const express = require('express')
const { customersController } = require('../controllers/customers')

const router = express.Router()

router.route('/customers').get(customersController.getCustomers)

router.route('/customers/individuals').get(customersController.getIndividualsCustomers)

router.route('/customers/construction-companies').get(customersController.getConstructorsCustomers)

module.exports = router
