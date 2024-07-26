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
        const access_token = await generalAccessTokens({
            id: customer.MaTK,
            QuyenSuDung: customer.QuyenSuDung
        });
        return {
            status: 'OK',
            message: 'Sign-in successful',
            QuyenSuDung:customer.QuyenSuDung,
            access_token: access_token
        };
    } catch (e) {
        console.error('Error during sign-in:', e);
        return { status: 'ERROR', message: 'Internal server error' };
    }
};
const signInAdmin = async (credentials) => {
    try {
        const { email, passWord } = credentials;

        // Fetch admin data
        const getAdminQuery = 'SELECT * FROM taikhoan WHERE Email = ? AND QuyenSuDung = "Admin"';
        const [results] = await db1.query(getAdminQuery, [email]);

        if (results.length === 0) {
            return { status: 'ERROR', message: 'Admin not found' };
        }

        const admin = results[0];
        console.log('Fetched admin:', admin);
        console.log('Password from DB:', admin.MatKhau);

        if (passWord !== admin.MatKhau) {  
            return { status: 'ERROR', message: 'Invalid password' };
        }
        const access_token = await generalAccessTokens({
            id: admin.MaTK,
        });
        return {
            status: 'OK',
            message: 'Sign-in successful',
            QuyenSuDung: admin.QuyenSuDung,
            access_token:access_token
        };
    } catch (e) {
        console.error('Error during sign-in:', e);
        return { status: 'ERROR', message: 'Internal server error' };
    }
};

module.exports = {
    signUpCustomer,
    signInCustomer,
    signInAdmin
};
