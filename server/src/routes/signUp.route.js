const express = require('express');
const signUpRouter = express.Router();
const { signUpCustomer, signInCustomer } = require('./signUp.controller'); 
const db1=require('../models/connect')

// Sign-up route
signUpRouter.post('/signup', signUpCustomer);
signUpRouter.get('/signup', async (req, res) => {
    try {
        const query = 'SELECT * FROM taikhoan';
        const [rows] = await db1.db1.query(query);
        res.status(200).json(rows);
    } catch (e) {
        console.error(e);
        res.status(500).json({ status: 'ERROR', message: 'Internal server error' });
    }
});
// Sign-in route
signUpRouter.post('/signin', signInCustomer);

module.exports = signUpRouter;
