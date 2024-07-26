const express = require('express');
const router = express.Router();
const { addFlight, deleteFlight, updateFlight } = require('./Admin.controller');
const { db1 } = require("../models/connect");

router.post('/addFlight', addFlight);
router.delete('/deleteFlight/:MaChuyenBay', deleteFlight);
router.put('/updateFlight/:MaChuyenBay', updateFlight);

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
module.exports=router