import React, { useState } from "react";
import axios from "axios";

const PlaceToCome = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get("http://localhost:4000/BookFlight", {
        params: { query: searchQuery }
      });
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="m-0 p-0 w-full h-full font-sans bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative h-96 flex justify-center items-center text-center text-white"
        style={{
          background: "url('https://www.vietnamairlinesgiare.vn/wp-content/uploads/2017/04/ve-may-bay-emirates-airlines-18-04-2017-2.jpg') no-repeat center center/cover"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h2 className="text-2xl mb-2 text-[#bed9ff]">CÁC ĐIỂM ĐẾN CỦA CHÚNG TÔI</h2>
          <h1 className="text-4xl mb-2">Bản đồ tuyến bay của Emirates</h1>
          <p className="text-xl mb-4 text-white">
            Khám phá tất cả các tuyến bay của Emirates và tìm nguồn cảm hứng cho chuyến đi tiếp theo của bạn
          </p>
          <button className="px-4 py-2 text-xl text-gray-800 bg-white rounded hover:bg-gray-200 transition-colors">
            Đi tới bản đồ tuyến đường
          </button>
        </div>
      </div>

      {/* Search Tabs */}
      <div className="max-w-7xl mx-auto p-4 bg-white shadow-md rounded mt-10 text-center">
        <h1 className="text-2xl mb-4">Khám phá các điểm đến</h1>
        <div className="flex border-b-2 border-gray-300 mb-4">
          <div className="flex-1 pb-2 text-center relative">
            <input
              type="radio"
              id="search-by-location"
              name="tab"
              className="hidden"
              checked
            />
            <label
              htmlFor="search-by-location"
              className="block font-bold cursor-pointer text-red-500 border-b-2 border-red-500"
            >
              Tìm kiếm theo vị trí
            </label>
          </div>
          <div className="flex-1 pb-2 text-center relative">
            <input
              type="radio"
              id="destination-inspiration"
              name="tab"
              className="hidden"
            />
            <label
              htmlFor="destination-inspiration"
              className="block font-bold cursor-pointer"
            >
              Cảm hứng về điểm đến
            </label>
          </div>
        </div>
        <div className="relative w-full mb-4">
          <input
            type="text"
            placeholder="Tìm kiếm địa điểm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
       
      </div>

      {/* Destination Cards */}
      <div className="max-w-7xl mx-auto p-4 flex flex-wrap justify-center gap-4">
        {results.map((destination, index) => (
          <div key={index} className="w-80 bg-white border border-gray-300 rounded shadow-md p-4 text-center transition-shadow hover:shadow-lg">
            <img
              src={destination.imageUrl}
              alt={destination.name}
              className="w-full h-52 object-cover rounded mb-4"
            />
            <h2 className="text-xl mb-1">{destination.name}</h2>
            <p className="text-lg mb-2">Từ {destination.price}</p>
            <p className="text-md">{destination.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaceToCome;
