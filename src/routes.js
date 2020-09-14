const express = require('express');

const MillController = require('./app/controller/MillController');
const HarvestController = require('./app/controller/HarvestController');
const FarmController = require('./app/controller/FarmController');
const FieldController = require('./app/controller/FieldController');

const routes = express.Router();

//Creation and search mill routes.
routes.post('/mill', MillController.store);
routes.get('/mill/:name', MillController.filter);

//Creation and search harvest routes.
routes.post('/harvest', HarvestController.store);
routes.get('/harvest/:code', HarvestController.filterCod);
routes.get('/harvest/:start_date/:end_date', HarvestController.filterDate);

//Creation and search farm routes.
routes.post('/farm', FarmController.store);
routes.get('/farm/:name/:code', FarmController.filter);

//Creation and search field routes.
routes.post('/field', FieldController.store);
routes.get('/field/:code', FieldController.filter);

module.exports = routes;