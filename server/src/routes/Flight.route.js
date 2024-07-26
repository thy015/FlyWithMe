const express = require('express');
const { FlightData, flightChose, passengerData, queryTickets } = require('./Flight.controller');
const FlightRoute = express.Router();
const {authenToken}=require('../services/jwt')
FlightRoute.post('/', FlightData);
FlightRoute.get('/',FlightData);
FlightRoute.post('/flightChose',flightChose)
FlightRoute.post('/queryTickets',queryTickets)
FlightRoute.post('/passengerChose',authenToken,passengerData)
module.exports = FlightRoute;
