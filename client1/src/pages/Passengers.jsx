import React from 'react'

const Passengers = () => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Passenger Information</h1>
        <div className="flex justify-between mb-6">
          <div className="pb-2">1 Flight</div>
          <div className="border-b-2 border-blue-500 pb-2">2 Passenger</div>
          <div className="pb-2">3 Option</div>
          <div className="pb-2">4 Payment</div>
          <div className="pb-2">5 Confirm</div>
        </div>
          <div className="border p-4 rounded mb-4 flex gap-5">
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Passport Number</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Age</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4"
        >
          Add Passenger
        </button>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Next
        </button>
      </div>
    </div>
    
    </div>
  )
}

export default Passengers
