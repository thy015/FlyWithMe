import React from "react";
import "../index.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import {DownOutlined} from '@ant-design/icons'

const Home = () => {
  const [airports, setAirports] = useState([]);
  const [selectedOrigin, setSelectedOrigin] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:4000/AirPort")
      .then((response) => {
        setAirports(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the airport data!", error);
      });
  }, []);
  const handleOriginChange = (event) => {
    const newOrigin = event.target.value;
    setSelectedOrigin(newOrigin);
    // Clear destination if it matches the new origin
    if (selectedDestination === newOrigin) {
      setSelectedDestination("");
    }
  };

  const handleDestinationChange = (event) => {
    setSelectedDestination(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();


    axios
      .post("http://localhost:4000/BookFlight")
      .then((response) => {
        console.log("Flight data sent successfully:", response.data);
        navigate(`/BookFlight`, { state: {
          origin: selectedOrigin,
          destination: selectedDestination,
        } });
      })
      .catch((error) => {
        console.error("There was an error sending the flight data!", error);
      });
  };


  // Filter out the selected origin airport for destination options
  const filteredAirports = airports.filter(
    (airport) => airport.MaSB !== selectedOrigin
  );

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const increase = (setter, value = 1, maxValue = 10) => {
    if (maxValue === undefined || value < maxValue) {
      setter(value + 1);
    }
  };

  const decrease = (setter, value) => {
    if (value > 0) {
      setter(value - 1);
    }
  };
  const totalPassengers = adults + children + infants;
  return (
    <div>
      <div>
        <img
          className="h-96 w-full object-cover"
          src="https://www.familyvacationcritic.com/wp-content/uploads/sites/19/2017/07/6d0843c31c1cfa00c9b5b3ed28b041c9.jpg"
          alt="beach"
        ></img>
      </div>
      <div className="container mx-auto bg-white shadow-lg p-6 mt-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2>Đặt chỗ chuyến bay</h2>
        <p>
          Tìm kiếm các chuyến bay Emirates và đặt vé trực tuyến. Xem các tuyến
          đường và lịch trình của chúng tôi, đồng thời khám phá thêm về trải
          nghiệm bạn có thể mong đợi trên chuyến bay.
        </p>
        <form id="booking-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="origin">Sân bay khởi hành:</label>
              <select
                id="origin"
                value={selectedOrigin}
                onChange={handleOriginChange}
              >
                <option value="" disabled>
                  Select origin airport
                </option>
                {airports.map((a) => (
                  <option key={a.MaSB} value={a.MaSB}>
                    {`${a.TenSB} - ${a.ThanhPho}`}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="destination">Sân bay đến:</label>
              <select
                id="destination"
                value={selectedDestination}
                onChange={handleDestinationChange}
              >
                <option value="" disabled>
                  Select destination airport
                </option>
                {filteredAirports.map((a) => (
                  <option key={a.MaSB} value={a.MaSB}>
                    {`${a.TenSB} - ${a.ThanhPho}`}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="departure">Khởi hành:</label>
              <input type="date" id="departure" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="return">Khứ hồi:</label>
              <input type="date" id="return" />
            </div>

            <div className="form-group">
              <label htmlFor="passengers">Hành khách:</label>
              <div className="flex items-center" onClick={toggleDropdown}>
                    <input
                      type="text"
                      name="roundtrip_passenger"
                      readOnly
                      value={totalPassengers}
                      id="total_passengers"
                      className="cursor-pointer"
                    />
                    <div className="right-[2%] absolute">
                    <DownOutlined />
                    </div>
                  </div>
                  {showDropdown && (
                    <ul
                      className="passenger-selector bg-slate-200 text-center"
                      id="roundtrip-passenger-selector"
                    >
                      <li>
                        <div className="psg-type">
                          <p className="font-bold text-[13px]">Adults</p>
                          <span className="font-bold text-[13px] text-[#003278]">
                            Adults (from 12 years)
                          </span>
                        </div>
                        <div
                          className="psg-selector"
                          id="selector_for_passenger_adult"
                        >
                          <button
                            className="psg-btn psg-decrease"
                            onClick={() => {
                              decrease(setAdults, adults);
                              if (adults - 1 < infants) {
                                setInfants(adults - 1); // Điều chỉnh số lượng trẻ sơ sinh nếu nhiều hơn số lượng người lớn
                              }
                            }}
                            disabled={adults <= 1}
                          >
                            -
                          </button>
                          <span
                            className="current-psg"
                            id="current_passenger_adult"
                          >
                            {adults}
                          </span>
                          <button
                            className="psg-btn psg-increase"
                            onClick={() => increase(setAdults, adults)}
                          >
                            +
                          </button>
                        </div>
                      </li>
                      <li>
                        <div className="psg-type">
                          <p className="font-bold text-[13px]">Children</p>
                          <span className="font-bold text-[13px] text-[#003278] hover:underline">
                            <a href="#0" className="vna-ajax-modal">
                              Children (2-12 years)
                            </a>
                          </span>
                        </div>
                        <div
                          className="psg-selector"
                          id="selector_for_passenger_child"
                        >
                          <button
                            className="psg-btn psg-decrease"
                            onClick={() => decrease(setChildren, children)}
                            disabled={children <= 0}
                          >
                            -
                          </button>
                          <span
                            className="current-psg"
                            id="current_passenger_child"
                          >
                            {children}
                          </span>
                          <button
                            className="psg-btn psg-increase"
                            onClick={() => increase(setChildren, children)}
                          >
                            +
                          </button>
                        </div>
                      </li>
                      <li>
                        <div className="psg-type">
                          <p className="font-bold text-[13px]">Infant</p>
                          <span className="font-bold text-[13px] text-[#003278] hover:underline">
                            <a href="#0" className="vna-ajax-modal">
                              Infant (under 2 years)
                            </a>
                          </span>
                        </div>
                        <div
                          className="psg-selector"
                          id="selector_for_passenger_infant"
                        >
                          <button
                            className="psg-btn psg-decrease"
                            onClick={() => decrease(setInfants, infants)}
                            disabled={infants <= 0}
                          >
                            -
                          </button>
                          <span
                            className="current-psg"
                            id="current_passenger_infant"
                          >
                            {infants}
                          </span>
                          <button
                            className="psg-btn psg-increase"
                            onClick={() =>
                              increase(setInfants, infants, adults)
                            }
                          >
                            +
                          </button>
                        </div>
                      </li>
                    </ul>
                  )}
  
            </div>

            <div className="form-group">
              <label htmlFor="class">Hạng:</label>
              <select id="class">
                <option value="economy">Hạng Phổ thông</option>
                <option value="business">Hạng Thương gia</option>
                <option value="first-class">Hạng Nhất</option>
              </select>
            </div>
          </div>
          <div className="float-right">
            <Link to='/BookFlight'>
            <button type="submit">Tìm kiếm chuyến bay</button>
            </Link>
          </div>
        </form>
        <p>Đăng nhập để tích lũy và sử dụng Dặm thưởng Skywards</p>
        <p>
          Tìm kiếm nâng cao: nhiều thành phố, mã khuyến mãi, hãng hàng không đối
          tác{" "}
        </p>
      </div>
      <div className=" h-[650px]"></div>

      <div className="container bg-white shadow-lg absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-[90%]">
        <h3>Cách đặt vé máy bay với Emirates</h3>
        <h4 className="justify-center text-center">
          Đặt vé máy bay trực tuyến
        </h4>
        <p>
          Để tìm vé máy bay phù hợp cho chuyến đi của bạn, chỉ cần nhập địa điểm
          mà bạn khởi hành và điểm đến của chuyến bay. Nhập ngày tháng, hạng bay
          và số lượng hành khách. Chọn 'Tìm kiếm chuyến bay' để tiếp tục quy
          trình đặt vé máy bay trực tuyến và đặt vé máy bay phù hợp với kế hoạch
          du lịch của bạn.
        </p>
        <h4 className="justify-center text-center">So sánh giá vé máy bay</h4>
        <p>
          Hãy chú ý nhãn Đảm bảo giá tốt nhất của chúng tôi để đảm bảo bạn sẽ
          nhận được giá vé máy bay tốt nhất khi đặt chuyến bay với Emirates.
        </p>
      </div>
      <div>
        <div className="w-[60%] mx-auto flex flex-wrap justify-center p-4">
          <div className="card w-72 m-2 border border-gray-300 rounded-lg p-4 text-center transition-shadow duration-300 hover:shadow-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsPWem2wxv-S9SvbwOIEGu0o08xqWWOn6OEg&s"
              alt="Dubai"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl mt-2">Dubai</h2>
            <p className="text-lg">Từ VNĐ 19,460,000*</p>
            <p className="text-lg">Các tiểu vương quốc ả rập thống nhất</p>
          </div>
          <div className="card w-72 m-2 border border-gray-300 rounded-lg p-4 text-center transition-shadow duration-300 hover:shadow-md">
            <img
              src="https://dulichsaigonstar.com/wp-content/uploads/2023/10/frankfurt1.jpg"
              alt="Frankfurt"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl mt-2">Frankfurt</h2>
            <p className="text-lg">Từ VNĐ 22,620,000*</p>
            <p className="text-lg">Đức</p>
          </div>
          <div className="card w-72 m-2 border border-gray-300 rounded-lg p-4 text-center transition-shadow duration-300 hover:shadow-md">
            <img
              src="https://www.barcelo.com/guia-turismo/wp-content/uploads/2020/04/ciudad-vieja-praga.jpg"
              alt="Pragute"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl mt-2">Pragute</h2>
            <p className="text-lg">Từ VNĐ 23,560,000*</p>
            <p className="text-lg">Cộng hòa Séc</p>
          </div>
          <div className="card w-72 m-2 border border-gray-300 rounded-lg p-4 text-center transition-shadow duration-300 hover:shadow-md">
            <img
              src="https://cdn.britannica.com/45/196945-050-CCF8BD72/Temple-of-Saturn-Arch-Septimius-Severus-Forum.jpg"
              alt="Rome"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl mt-2">Rome</h2>
            <p className="text-lg">Từ VNĐ 24,380,000*</p>
            <p className="text-lg">Ý</p>
          </div>
          <div className="card w-72 m-2 border border-gray-300 rounded-lg p-4 text-center transition-shadow duration-300 hover:shadow-md">
            <img
              src="https://res.klook.com/image/upload/Mobile/City/swox6wjsl5ndvkv5jvum.jpg"
              alt="Paris"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl mt-2">Paris</h2>
            <p className="text-lg">Từ VNĐ 18,380,000*</p>
            <p className="text-lg">Pháp</p>
          </div>
          <div className="card w-72 m-2 border border-gray-300 rounded-lg p-4 text-center transition-shadow duration-300 hover:shadow-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8Nbi3bakSMjLeNzT4ibxscN-yYdbicYiBg&s"
              alt="Japan"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl mt-2">Japan</h2>
            <p className="text-lg">Từ VNĐ 12,500,000*</p>
            <p className="text-lg">Nhật bản</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
