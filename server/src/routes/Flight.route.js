const express = require('express');
const { FlightData, flightChose, passengerData } = require('./Flight.controller');
const FlightRoute = express.Router();
const {authenToken}=require('../services/jwt')
FlightRoute.post('/', FlightData);
FlightRoute.get('/',FlightData);
FlightRoute.post('/flightChose',flightChose)
FlightRoute.post('/passengerChose',authenToken,passengerData)
module.exports = FlightRoute;
