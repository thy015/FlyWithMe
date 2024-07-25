const express = require('express');
const { FlightData, flightChose, passengerData } = require('./Flight.controller');
const FlightRoute = express.Router();

FlightRoute.post('/', FlightData);
FlightRoute.get('/',FlightData);
FlightRoute.post('/flightChose',flightChose)
FlightRoute.post('/passengerChose',passengerData)
module.exports = FlightRoute;
