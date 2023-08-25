const cuentasRouter = require('./cuentasRouter');
const delaysRouter = require('./delaysRouter');
const lendersRouter = require('./lendersRouter');
const clientsRouter = require('./clientsRouter');
const express = require('express');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1',router);
  router.use('/cuentas',cuentasRouter);
  router.use('/delays',delaysRouter);
  router.use('/lenders',lendersRouter);
  router.use('/clients',clientsRouter);
}

module.exports = routerApi;
