import React from "react";

const PlaceToCome = () => {
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
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
    </div>

    {/* Destination Cards */}
    <div className="max-w-7xl mx-auto p-4 flex flex-wrap justify-center gap-4">
      <div className="w-80 bg-white border border-gray-300 rounded shadow-md p-4 text-center transition-shadow hover:shadow-lg">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsPWem2wxv-S9SvbwOIEGu0o08xqWWOn6OEg&s"
          alt="Dubai"
          className="w-full h-52 object-cover rounded mb-4"
        />
        <h2 className="text-xl mb-1">Dubai</h2>
        <p className="text-lg mb-2">Từ VNĐ 19,460,000*</p>
        <p className="text-md">Các tiểu vương quốc ả rập thống nhất</p>
      </div>
      <div className="w-80 bg-white border border-gray-300 rounded shadow-md p-4 text-center transition-shadow hover:shadow-lg">
        <img
          src="https://dulichsaigonstar.com/wp-content/uploads/2023/10/frankfurt1.jpg"
          alt="Frankfurt"
          className="w-full h-52 object-cover rounded mb-4"
        />
        <h2 className="text-xl mb-1">Frankfurt</h2>
        <p className="text-lg mb-2">Từ VNĐ 22,620,000*</p>
        <p className="text-md">Đức</p>
      </div>
      <div className="w-80 bg-white border border-gray-300 rounded shadow-md p-4 text-center transition-shadow hover:shadow-lg">
        <img
          src="https://www.barcelo.com/guia-turismo/wp-content/uploads/2020/04/ciudad-vieja-praga.jpg"
          alt="Pragute"
          className="w-full h-52 object-cover rounded mb-4"
        />
        <h2 className="text-xl mb-1">Pragute</h2>
        <p className="text-lg mb-2">Từ VNĐ 23,560,000*</p>
        <p className="text-md">Cộng hòa Séc</p>
      </div>
      <div className="w-80 bg-white border border-gray-300 rounded shadow-md p-4 text-center transition-shadow hover:shadow-lg">
        <img
          src="https://cdn.britannica.com/45/196945-050-CCF8BD72/Temple-of-Saturn-Arch-Septimius-Severus-Forum.jpg"
          alt="Rome"
          className="w-full h-52 object-cover rounded mb-4"
        />
        <h2 className="text-xl mb-1">Rome</h2>
        <p className="text-lg mb-2">Từ VNĐ 24,380,000*</p>
        <p className="text-md">Ý</p>
      </div>
      <div className="w-80 bg-white border border-gray-300 rounded shadow-md p-4 text-center transition-shadow hover:shadow-lg">
        <img
          src="https://res.klook.com/image/upload/Mobile/City/swox6wjsl5ndvkv5jvum.jpg"
          alt="Paris"
          className="w-full h-52 object-cover rounded mb-4"
        />
        <h2 className="text-xl mb-1">Paris</h2>
        <p className="text-lg mb-2">Từ VNĐ 18,380,000*</p>
        <p className="text-md">Pháp</p>
      </div>
      <div className="w-80 bg-white border border-gray-300 rounded shadow-md p-4 text-center transition-shadow hover:shadow-lg">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8Nbi3bakSMjLeNzT4ibxscN-yYdbicYiBg&s"
          alt="Japan"
          className="w-full h-52 object-cover rounded mb-4"
        />
        <h2 className="text-xl mb-1">Japan</h2>
        <p className="text-lg mb-2">Từ VNĐ 12,500,000*</p>
        <p className="text-md">Nhật bản</p>
      </div>
    </div>
</div>
  );
};

export default PlaceToCome;
