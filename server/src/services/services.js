const { db1 } = require('../models/connect');
const { generalAccessTokens } = require('./jwt');

const signUpCustomer = async (newCus) => {
    try {
        const { name, phoneNum, passWord, email } = newCus;

        // Check if the email already exists
        const checkEmailQuery = 'SELECT * FROM taikhoan WHERE Email = ?';
        const [existingCustomer] = await db1.query(checkEmailQuery, [email]);

        if (existingCustomer.length > 0) {
            return { status: 'ERROR', message: 'Email already exists' };
        }

        // Insert new customer into the database
        const insertCustomerQuery = 'INSERT INTO taikhoan (Ten, SDT, MatKhau, Email) VALUES (?, ?, ?, ?)';
        const [result] = await db1.query(insertCustomerQuery, [name, phoneNum, passWord, email]);

        return { status: 'OK', message: 'Customer created successfully', result };
    } catch (e) {
        console.error('Error during sign-up:', e);
        return { status: 'ERROR', message: 'Internal server error' };
    }
};
const signInCustomer = async (credentials) => {
    try {
        const { email, passWord } = credentials;

        // Fetch customer data
        const getCustomerQuery = 'SELECT * FROM taikhoan WHERE Email = ?';
        const [results] = await db1.query(getCustomerQuery, [email]);

        if (results.length === 0) {
            return { status: 'ERROR', message: 'Customer not found' };
        }

        const customer = results[0];
        console.log('Fetched customer:', customer);
        console.log('Password from DB:', customer.MatKhau);

        
        if (passWord !== customer.MatKhau) {
            return { status: 'ERROR', message: 'Invalid password' };
        }


        return {
            status: 'OK',
            message: 'Sign-in successful',
        };
    } catch (e) {
        console.error('Error during sign-in:', e);
        return { status: 'ERROR', message: 'Internal server error' };
    }
};
const createTicket=async(ticketInfo)=>{
    return new Promise((resolve,reject)=>{
        const { selectedOrigin, selectedDestination } = ticketInfo
        try{
            resolve({
                
            })
        }catch(e){
            reject(e)
        }
    })
}
module.exports = {
    signUpCustomer,
    signInCustomer
};
