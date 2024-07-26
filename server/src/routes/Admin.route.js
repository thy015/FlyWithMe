const express = require('express');
const router = express.Router();
const { addFlight, deleteFlight, updateFlight,addCustomer,updateCustomer,deleteCustomer,addRoute,updateRoute,deleteRoute, addSanBay,deleteSanBay,updateSanBay,addTicket,deleteTicket,updateTicket} = require('./Admin.controller');
const { db1 } = require("../models/connect");

router.post('/addFlight', addFlight);
router.delete('/deleteFlight/:MaChuyenBay', deleteFlight);
router.put('/updateFlight/:MaChuyenBay', updateFlight);

router.post('/addCustomer', addCustomer);
router.put('/updateCustomer/:MaTK', updateCustomer);
router.delete('/deleteCustomer/:MaTK', deleteCustomer);

router.post('/addRoute', addRoute);
router.put('/updateRoute/:MaTuyen', updateRoute);
router.delete('/deleteRoute/:MaTuyen', deleteRoute);

router.post('/addAirport', addSanBay);
router.delete('/deleteAirport/:MaSB', deleteSanBay);
router.put('/updateAirport/:MaSB', updateSanBay);

router.post('/addTicket', addTicket);
router.delete('/deleteTicket/:MaVe', deleteTicket);
router.put('/updateTicket/:MaVe', updateTicket);

router.get('/existedTicket',async(req,res)=>{
    try {
        const query = 'SELECT * FROM ve';
        const [rows] = await db1.query(query);
        res.status(200).json(rows);
    } catch (e) {
        console.error(e);
        res.status(500).json({ status: 'ERROR', message: 'Internal server error' });
    }
})
router.get('/existedFlight', async (req, res) => {
    try {
        const query = 'SELECT * FROM chuyenbay';
        const [rows] = await db1.query(query);
        res.status(200).json(rows);
    } catch (e) {
        console.error(e);
        res.status(500).json({ status: 'ERROR', message: 'Internal server error' });
    }
});

router.get('/existedRoute',async(req,res)=>{
    try{
        const query = 'SELECT * FROM tuyenbay';
        const [rows] = await db1.query(query);
        res.status(200).json(rows);
    }catch(e){
        console.error(e);
        console.error(e);
        res.status(500).json({ status: 'ERROR', message: 'Internal server error' });
    }})

    router.get('/existedAirport',async(req,res)=>{
        try{
            const query = 'SELECT * FROM sanbay';
            const [rows] = await db1.query(query);
            res.status(200).json(rows);
        }catch(e){
            console.error(e);
            console.error(e);
            res.status(500).json({ status: 'ERROR', message: 'Internal server error' });
        }})
module.exports=router