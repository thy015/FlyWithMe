const express = require('express');
const { FlightData } = require('./Flight.controller');
const {db1}=require('../models/connect')
const FlightRoute = express.Router();

FlightRoute.post('/', FlightData);
FlightRoute.get('/', async (req, res) => {
    try {
      const [results] = await db1.query('SELECT * FROM chuyenbay');
      res.json(results);
    } catch (error) {
      console.error('Error fetching flights:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
module.exports = FlightRoute;
