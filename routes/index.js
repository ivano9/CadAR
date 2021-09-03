'use strict'

import express from "express"
import path from 'path'
import { Router } from "express"
import {
  customersController
} from path.join(__dirname, 'controllers')


Router.get('/customers', customersController.getAllBuildings)
