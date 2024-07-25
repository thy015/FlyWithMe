import React from "react";
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
const BookFlight = () => {
  const location = useLocation();
  const flights = location.state?.flights || []; // Retrieve flights from location state

  const [showInfo, setShowInfo] = useState(Array(flights.length).fill(false));
  const [chosenFlight, setChosenFlight] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const toggleInfo = (index) => {
    const newShowInfo = [...showInfo];
    newShowInfo[index] = !newShowInfo[index];
    setShowInfo(newShowInfo);
  };

  const handleChoose = async (flight) => {
    try {
      await axios.post(
        "http://localhost:4000/searchFlight/flightChose",
        flight
      );
      console.log("Sent MaChuyenBay successfully");
      setChosenFlight(flight.MaChuyenBay);
      setSuccessMessage("Chọn vé thành công!");
      setTotalPrice(flight.GiaVe);
    } catch (error) {
      console.error("Error sending flight details:", error);
    }
  };

  const disabledDate = (current) => {
    return current && current < dayjs().endOf("day");
  };
  const [passengerInfo, setPassengerInfo] = useState({
    name: "",
    phoneNum: "",
    age: "",
    CCCD: "",
    nameCardHolder: "",
    cardNum: "",
    expirationDay: "",
    CVV: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPassengerInfo({ ...passengerInfo, [name]: value });
  };
  const handleDateChange = (date, dateString) => {
    setPassengerInfo({ ...passengerInfo, expirationDay: dateString });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('access_token');
    
    if (!token) {
        alert("You need to be logged in to complete the payment.");
        return;
    }
    try {
      const response = await axios.post(
        "http://localhost:4000/searchFlight/passengerChose",
        { ...passengerInfo }, 
        {
          headers: {
              Authorization: `Bearer ${token}`
          }
      }
      );
      if (response.status === 201) {
        alert("Passenger and payment data inserted successfully");
        navigate("/Done",{ state: { passengerInfo, chosenFlight, totalPrice } });
      }
    } catch (error) {
      alert("Error inserting data: " + error.response.data.message);
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

        <div className="flex justify-between items-center border p-4 rounded mb-4">
          <div className="flex items-center text-center">
            {flights.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Mã chuyến bay</th>
                    <th>Hãng bay</th>
                    <th>Máy bay</th>
                    <th>Từ - Đến</th>
                    <th>Ngày khởi hành</th>
                    <th>Ngày đến</th>
                    <th>Giá</th>
                    <th>Loại vé</th>
                  </tr>
                </thead>
                <tbody>
                  {flights.map((flight, index) => (
                    <tr key={flight.MaChuyenBay} className="">
                      <td>{flight.MaChuyenBay}</td>
                      <td>{flight.TenHang}</td>
                      <td>{flight.TenMayBay}</td>
                      <td>
                        {flight.ThanhPhoDi} - {flight.ThanhPhoDen}
                      </td>
                      <td>{new Date(flight.NgayKhoiHanh).toLocaleString()}</td>
                      <td>{new Date(flight.NgayDen).toLocaleString()}</td>
                      <td>{flight.GiaVe} vnd</td>
                      <td>{flight.LoaiVe}</td>
                      <td>
                        <button
                          onClick={() => handleChoose(flight)}
                          className={`py-2 px-4 rounded ${
                            chosenFlight === flight.MaChuyenBay
                              ? "bg-gray-500 cursor-not-allowed"
                              : "bg-green-500 text-white hover:bg-green-600"
                          }`}
                          disabled={chosenFlight === flight.MaChuyenBay}
                        >
                          {chosenFlight === flight.MaChuyenBay
                            ? "Chosen"
                            : "Choose"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No flights available for the selected route and dates.</p>
            )}
          </div>
        </div>
        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleFormSubmit}>
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6 mt-8">
            Passenger Information
          </h1>

          <div className="border p-4 rounded mb-4 flex gap-5">
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={passengerInfo.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                name="phoneNum"
                value={passengerInfo.phoneNum}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Age</label>
              <input
                type="text"
                name="age"
                value={passengerInfo.age}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">CCCD</label>
              <input
                type="text"
                name="CCCD"
                value={passengerInfo.CCCD}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-4 mt-8">
            Payment Information
          </h2>
          <div className="border p-4 rounded mb-4">
            <label className="block text-gray-700 mb-2">Cardholder Name</label>
            <input
              type="text"
              name="nameCardHolder"
              value={passengerInfo.nameCardHolder}
              onChange={handleInputChange}
              className="w-full p-2 border rounded mb-4"
            />
            <label className="block text-gray-700 mb-2">Card Number</label>
            <input
              type="text"
              name="cardNum"
              value={passengerInfo.cardNum}
              onChange={handleInputChange}
              className="w-full p-2 border rounded mb-4"
            />
            <div className="flex justify-between gap-4 mb-4">
              <div className="w-1/2">
                <label className="block text-gray-700 mb-2">
                  Expiration Date
                </label>
                <DatePicker
                  picker="day"
                  disabledDate={disabledDate}
                  className="expirationDay h-[46px] w-[391px]"
                  onChange={handleDateChange}
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 mb-2">CVV</label>
                <input
                  type="text"
                  name="CVV"
                  value={passengerInfo.CVV}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </div>
          {chosenFlight && (
            <div className="text-right text-green-500 font-bold text-xl mb-6">
              Total Price: {totalPrice} VND
            </div>
          )}
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 float-right"
          >
            Pay and continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookFlight;
