const mysql=require('mysql');

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'flywithme'
})

module.exports={db}