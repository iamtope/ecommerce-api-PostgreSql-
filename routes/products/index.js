const express = require('express');
const Router = express.Router();
const createItem = require('../../controllers/products/create.item.controller');
const getAllItem = require('../../controllers/products/get.all.items.controller')
const paySuccess = require('../../controllers/products/pay.success.controller')
const charge = require('../../controllers/products/charge.controller')

Router.post('/create', createItem);
Router.get('/', getAllItem);
Router.get('/paysuccess', paySuccess);
Router.post('/charge', charge)

module.exports = Router;

