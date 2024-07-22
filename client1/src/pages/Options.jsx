import React from 'react'
import {Link} from'react-router-dom'
const Options = () => {
  return (
    <div>
     
       <div className="bg-gray-100 min-h-screen flex items-center justify-center ">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Book Flight</h1>
        <div className="flex justify-between mb-6">
          <div className="pb-2">1 Flight</div>
          <div className="pb-2">2 Passenger</div>
          <div className="border-b-2 border-blue-500 pb-2">3 Option</div>
          <div className="pb-2">4 Payment</div>
          <div className="pb-2">5 Confirm</div>
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Current insurances that match your flight:</h2>
        <div className="border p-4 rounded mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://www.vietnamairlinesgiare.vn/wp-content/uploads/2017/04/ve-may-bay-emirates-airlines-18-04-2017-2.jpg"
              alt="Vietnam Airlines"
              className="w-16 h-16 object-cover rounded mr-4"
            />
            <div>
              <p className="text-gray-700">Refund 50% of the ticket price when the flight delay 3 hours</p>
              <p className="text-gray-500">Vietnam Airlines</p>
            </div>
          </div>
          <div className="text-green-500 font-bold">95.000 VND</div>'
          <Link to='/BookFlight/Passengers/Options/Payment'>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Choose
          </button>
          </Link>
        </div>
        <div className="border p-4 rounded mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://www.vietnamairlinesgiare.vn/wp-content/uploads/2017/04/ve-may-bay-emirates-airlines-18-04-2017-2.jpg"
              alt="Vietnam Airlines"
              className="w-16 h-16 object-cover rounded mr-4"
            />
            <div>
              <p className="text-gray-700">Refund 80% of the ticket price when lost checked baggage</p>
              <p className="text-gray-500">Vietnam Airlines</p>
            </div>
          </div>
          <div className="text-green-500 font-bold">115.000 VND</div>
          <Link to='/BookFlight/Passengers/Options/Payment'>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Choose
          </button>
          </Link>
        </div>
        <div className="text-right text-green-500 font-bold text-xl mb-6">2.708.000 VND</div>
   
      </div>
    </div>
    </div>
  )
}

export default Options
