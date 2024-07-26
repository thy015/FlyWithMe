const express=require('express');
const bodyParser=require('body-parser')
const HomeRoute = require('./routes/Home.route');
const cors=require('cors');
const AirportRoute = require('./routes/Airport.route');
const FlightRoute = require('./routes/Flight.route');
const signUpRouter = require('./routes/signUp.route');
const Adminrouter = require('./routes/Admin.route');

const app=express();

app.use(bodyParser.json());

app.use(cors({
    origin:'http://localhost:3000'
}))


app.use('/',HomeRoute)
app.use('/searchFlight',FlightRoute)
app.use('/api', signUpRouter);
app.use('/Airport',AirportRoute)
app.use('/admin',Adminrouter)
module.exports=app