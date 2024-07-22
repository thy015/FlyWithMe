import React from "react";
import { useState } from "react";
import { Button, Dropdown, Flex } from "antd";
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

  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Book Flight
          </h1>
          <div className="flex justify-between mb-6">
            <div className="border-b-2 border-blue-500 pb-2">1 Flight</div>
            <div className="pb-2">2 Passenger</div>
            <div className="pb-2">3 Option</div>
            <div className="pb-2">4 Payment</div>
            <div className="pb-2">5 Confirm</div>
          </div>
          {flights.map((flight, index) => (
            <div
              key={flight.flightNumber}
              className="flex justify-between items-center border p-4 rounded mb-4"
              onClick={() => toggleInfo(index)}
            >
              <div className="flex items-center">
                <img
                  src={flight.logo}
                  alt={`${flight.airline} Logo`}
                  className="w-12 h-12 mr-4"
                />
                <div>
                  <span className="font-bold text-lg">
                    {flight.flightNumber}
                  </span>
                  <br />
                  <span>{flight.airline}</span>
                  {showInfo[index] && flight.additionalInfo && (
                    <div className="mt-2 border-t pt-2">
                      <p>Seat class: {flight.additionalInfo.seatClass}</p>
                      <p>Hand-luggage: {flight.additionalInfo.handLuggage}</p>
                      <p>
                        Checked baggage: {flight.additionalInfo.checkedBaggage}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <span className="text-lg">{flight.departureTime}</span>
                <br />
                <span>{flight.departureCode}</span>
              </div>
              <div>
                <span className="text-lg">{flight.arrivalTime}</span>
                <br />
                <span>{flight.arrivalCode}</span>
              </div>
              <div>
                <span className="text-lg text-green-600">{flight.price}</span>
              </div>
              <Link to='/BookFlight/Passengers'>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Choose
              </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookFlight;