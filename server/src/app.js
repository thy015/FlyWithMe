const express=require('express');
const bodyParser=require('body-parser')
const HomeRoute = require('./routes/Home.route');
const cors=require('cors');
const AirportRoute = require('./routes/Airport.route');
const FlightRoute = require('./routes/Flight.route');

const app=express();

app.use(bodyParser.json());

app.use(cors({
    origin:'http://localhost:3000'
}))


app.use('/',HomeRoute)
// app.use('/BookFlight',FlightRoute)
app.use('/Airport',AirportRoute)

module.exports=app