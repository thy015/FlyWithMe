import React from "react";
import {Link} from'react-router-dom'
const Payment = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Book Flight
        </h1>
        <div className="flex justify-between mb-6">
          <div className="pb-2">1 Flight</div>
          <div className="pb-2">2 Passenger</div>
          <div className="pb-2">3 Option</div>
          <div className="border-b-2 border-blue-500 pb-2">4 Payment</div>
          <div className="pb-2">5 Confirm</div>
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Payment Information
        </h2>
        <div className="border p-4 rounded mb-4">
          <label className="block text-gray-700 mb-2">Cardholder Name</label>
          <input type="text" className="w-full p-2 border rounded mb-4" />
          <label className="block text-gray-700 mb-2">Card Number</label>
          <input type="text" className="w-full p-2 border rounded mb-4" />
          <div className="flex justify-between gap-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2">
                Expiration Date
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2">CVV</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
          </div>
        </div>
        <div className="text-right text-green-500 font-bold text-xl mb-6">
          2.708.000 VND
        </div>
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 float-right">
          Pay and continue
        </button>
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center mt-24 align-middle">
          Or
        </h2>
        <div className="border p-4 rounded mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://vinadesign.vn/uploads/images/2023/05/vnpay-logo-vinadesign-25-12-57-55.jpg"
              alt="Vietnam Airlines"
              className="w-16 h-16 object-cover rounded mr-4"
            />
            <div>
              <p className="text-gray-700">
                Through VNPay
              </p>
              <p className="text-gray-500">Pay through VNPay</p>
            </div>
          </div>
         
          <Link to="/BookFlight/Passengers/Options/Payment/Done">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Choose
            </button>
          </Link>
        </div>
        <div className="border p-4 rounded mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://th.bing.com/th/id/OIP.kNP3u5802GVOtX27jzwXJAHaHa?rs=1&pid=ImgDetMain"
              alt="Vietnam Airlines"
              className="w-16 h-16 object-cover rounded mr-4"
            />
            <div>
              <p className="text-gray-700">
              Through Momo
              </p>
              <p className="text-gray-500">Pay by Momo</p>
            </div>
          </div>
        
          <Link to="/BookFlight/Passengers/Options/Payment/Done">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Choose
            </button>
          </Link>
          
        </div>
        <div className="text-right text-green-500 font-bold text-xl mb-6">
          2.708.000 VND
        </div>
      </div>
    </div>
  );
};

export default Payment;
