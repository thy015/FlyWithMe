import React from "react";
import { useState } from "react";
import  axios  from "axios";
import { Link } from "react-router-dom";
const BookFlight = () => {
  const flights = [
    {
      airline: "Vietnam Airlines",
      flightNumber: "VN-1510",
      logo: "https://th.bing.com/th/id/OIP.eb4x1EV0dkCa2DdTvpm9_AHaE8?rs=1&pid=ImgDetMain",
      departureTime: "07:00",
      arrivalTime: "09:30",
      departureCode: "SGN",
      arrivalCode: "HAN",
      price: "2.708.000 VND",
      additionalInfo: {
        seatClass: "Economy class",
        handLuggage: "1p x 12kg",
        checkedBaggage: "1p x 20kg",
      },
    },
    {
      airline: "Bamboo Airways",
      flightNumber: "BB-1610",
      logo: "https://th.bing.com/th/id/OIP.hc7136Wtw2qTBsPuOsSuVwHaHa?rs=1&pid=ImgDetMain",
      departureTime: "04:00",
      arrivalTime: "06:30",
      departureCode: "SGN",
      arrivalCode: "HAN",
      price: "3.555.000 VND",
      additionalInfo: {
        seatClass: "Economy class",
        handLuggage: "1p x 12kg",
        checkedBaggage: "1p x 20kg",
      },
    },
    {
      airline: "Vietjet Air",
      flightNumber: "VJ-5210",
      logo: "https://i.pinimg.com/originals/c5/03/8b/c5038b9a542d2220189b64ba05846e9e.png",
      departureTime: "14:00",
      arrivalTime: "16:30",
      departureCode: "SGN",
      arrivalCode: "HAN",
      price: "4.708.000 VND",
      additionalInfo: null,
    },
  ];

  const [showInfo, setShowInfo] = useState(Array(flights.length).fill(false));

  const toggleInfo = (index) => {
    const newShowInfo = [...showInfo];
    newShowInfo[index] = !newShowInfo[index];
    setShowInfo(newShowInfo);
  };

  const handleChoose = async (flight) => {
    try {
      await axios.get("http://localhost:4000/searchFlight", flight);
      console.log("Flight details sent successfully");
    } catch (error) {
      console.error("Error sending flight details:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Book Flight
        </h1>
        <div className="flex mb-6">
          <div className="border-b-2 border-blue-500 pb-2 mr-10"> Flight</div>
          <div className="pb-2"> Confirm</div>
        </div>
       
          <div
            className="flex justify-between items-center border p-4 rounded mb-4"
          >
            <div className="flex items-center">
            {flights.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Flight Number</th>
              <th>Airline</th>
              <th>Aircraft</th>
              <th>Route</th>
              <th>Departure Date</th>
              <th>Arrival Date</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight) => (
              <tr key={flight.MaChuyenBay}>
                <td>{flight.MaChuyenBay}</td>
                <td>{flight.MaHang}</td>
                <td>{flight.MaMayBay}</td>
                <td>{flight.MaTuyen}</td>
                <td>{new Date(flight.NgayKhoiHanh).toLocaleString()}</td>
                <td>{new Date(flight.NgayDen).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No flights available for the selected route and dates.</p>
      )}
    </div>
            <button
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 float-right"
        >
          Choose
        </button>
          </div>
          
     
 <h1 className="text-2xl font-bold text-center text-gray-800 mb-6 mt-8">Passenger Information</h1>
        
          <div className="border p-4 rounded mb-4 flex gap-5">
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number</label>
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
            <div className="mb-4">
              <label className="block text-gray-700">CCCD</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-4 mt-8">
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
       
      </div>
    </div>
  );
};

export default BookFlight;