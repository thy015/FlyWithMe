const express =require('express')
const { db } = require('../models/connect')
const FLightRoute=express.Router()

FLightRoute.get('/',(req,res)=>{
    const sql='select * from sanbay'
    db.query(sql,(err,data)=>{
        if(err) return res.json(err)
            return res.json(data)
    })
})
module.exports=FLightRoute