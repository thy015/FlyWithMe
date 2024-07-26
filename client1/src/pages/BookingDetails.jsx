import React from "react";
import { Link } from "react-router-dom";

const BookingDetails = () => {
  const passengerInfo = JSON.parse(localStorage.getItem('passengerInfo'));
  const flight = JSON.parse(localStorage.getItem('flight'));
  const totalPrice = localStorage.getItem('totalPrice');

  if (!passengerInfo || !flight) {
    return <p>No booking details available.</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Booked Ticket
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
          <p><strong>Ticket ID:</strong> {flight.MaChuyenBay}</p>
          <p><strong>Airline:</strong> {flight.TenHang}</p>
          <p><strong>Aircraft:</strong> {flight.TenMayBay}</p>
          <p><strong>From - To:</strong> {flight.ThanhPhoDi} - {flight.ThanhPhoDen}</p>
          <p><strong>Departure Date:</strong> {new Date(flight.NgayKhoiHanh).toLocaleString()}</p>
          <p><strong>Arrival Date:</strong> {new Date(flight.NgayDen).toLocaleString()}</p>
          <p><strong>Price:</strong> {flight.GiaVe} VND</p>
          <p><strong>Ticket Class:</strong> {flight.LoaiVe}</p>
          <p><strong>Total Price:</strong> {totalPrice} VND</p>
        </div>
        <Link to='/'>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 float-right"
        >
          Go to Homepage
        </button>
        </Link>
      </div>
    </div>
  );
};

export default BookingDetails;
