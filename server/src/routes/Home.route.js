const express =require('express')
const HomeRoute=express.Router()

HomeRoute.get('/',(req,res)=>{
    res.send('<h1>Hi there</h1>')
})
module.exports=HomeRoute