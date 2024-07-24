const express = require('express');
const { FlightData } = require('./Flight.controller');
const FlightRoute = express.Router();

FlightRoute.post('/createFlight', FlightData);
FlightRoute.get('/',FlightData)
module.exports = FlightRoute;
