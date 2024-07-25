import React from "react";
import { useLocation } from "react-router-dom";

const BookingDetails = () => {
  const location = useLocation();
  const { passengerInfo, flight, totalPrice } = location.state || {};

  if (!passengerInfo || !flight) {
    return <p>No booking details available.</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Booking Details
        </h1>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Passenger Information</h2>
          <p><strong>Name:</strong> {passengerInfo.name}</p>
          <p><strong>Phone Number:</strong> {passengerInfo.phoneNum}</p>
          <p><strong>Age:</strong> {passengerInfo.age}</p>
          <p><strong>CCCD:</strong> {passengerInfo.CCCD}</p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Flight Information</h2>
          <p><strong>Flight Code:</strong> {flight}</p>
          <p><strong>Total Price:</strong> {totalPrice} VND</p>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
