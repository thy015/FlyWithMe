import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from'antd'
const Done = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Book Flight</h1>
        <div className="flex justify-between mb-6">
          <div className="pb-2">1 Flight</div>
          <div className="pb-2">2 Passenger</div>
          <div className="pb-2">3 Option</div>
          <div className="pb-2">4 Payment</div>
          <div className="border-b-2 border-blue-500 pb-2">5 Confirm</div>
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Thank you for booking your flight with FlyWithMe! We are delighted to have you on board and appreciate your trust in us for your travel needs
        !</h2>
        <h5 className="text-gray-700 mb-4">We hope you have a wonderful journey and experience our excellent service firsthand. If you have any questions or need further assistance, please do not hesitate to contact us.</h5>
        <h6 className='text-red-500'>Contact for help: +8482361930</h6>
      <h6 className='text-red-500 mb-4'>  Email: thymai.1510@gfdaka.com</h6>
      <Link to='/'>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Go to Homepage
        </button>
        </Link>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-blue-600 ml-7"
        >
          Watch your booked ticket
        </button>
      </div>
    </div>
  );
};

export default Done;
