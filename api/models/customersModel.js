'use strict'

const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, 'Customer first name is required']
  },
  last_name: {
    type: String,
    required: [true, 'Customer last name is required']
  },
  street: {
    type: String,
    required: [true, 'Customer street is required']
  },
  city: String,
  email: {
    type: String,
    validate: {
      validator: (v) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v),
      message: props => `${props.value} is not a valid email!`
    },
    required: [true, 'Customeer email is required'],
    unique: true
  },
  phone: {
    type: String,
    validate: {
      validator: (v) => /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(v),
      message: props => `${props.value} is not a valid phone number!`
    },
    required: [true, 'Customer phone number is required'],
    unique: true
  },
  company_name: {
    type: String,
    required: [true, 'Customer company name is required']
  },
  state: String,
  country: String,
  is_active: Boolean,
  type: {
    type: String,
    enum: {
      values: ['constructor', 'individual'],
      message: '{VALUE} is not supported'
    },
    required: [true, 'Customer type is required']
  }
}, {
  timestamps: true,
  versionKey: false
})

module.exports = mongoose.model('Customers', customerSchema)
