const mysql = require('mysql');
const mysqlPromise = require('mysql2/promise'); 
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'flywithme'
});
const db1 = mysqlPromise.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'flywithme'
});
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to the database');
});

module.exports = { db,db1 };
