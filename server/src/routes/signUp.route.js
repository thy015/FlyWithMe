const express = require('express');
const signUpRouter = express.Router();
const { signUpCustomer, signInCustomer, signInAdmin } = require('./signUp.controller'); 
const {db1}=require('../models/connect')

// Sign-up route
signUpRouter.post('/signup', signUpCustomer);
signUpRouter.get('/signedUpCus', async (req, res) => {
    try {
        const query = 'SELECT * FROM taikhoan';
        const [rows] = await db1.query(query);
        res.status(200).json(rows);
    } catch (e) {
        console.error(e);
        res.status(500).json({ status: 'ERROR', message: 'Internal server error' });
    }
});
// Sign-in route
signUpRouter.post('/signin', signInCustomer);
signUpRouter.post('/signInAdmin',signInAdmin)
module.exports = signUpRouter;
